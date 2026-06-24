import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// CORS (inlined, no extra module)
const allowedOrigins = [
  "https://www.hiparks.com",
  "https://hiparks.com",
  "https://admin.hiparks.com",
];

if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost:3000");
}

function getCorsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-rsc, rsc",
    "Access-Control-Max-Age": "86400",
  };

  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Credentials"] = "true";
  }

  return headers;
}

function corsPreflight(request) {
  const origin = request.headers.get("origin") ?? "";
  return NextResponse.json({}, { headers: getCorsHeaders(origin) });
}

function applyCors(request, response) {
  const origin = request.headers.get("origin") ?? "";
  const headers = getCorsHeaders(origin);

  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

const normalizeText = (text = "") =>
  text
    .replace(/<[^>]*>/g, " ")
    .replace(/\{|\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const TITLE_OVERRIDES = {
  "reverse-logistics-in-india":
    "Reverse Logistics in India Turning Returns into Strategic Advantage",
};

const extractTitleFromPageContent = (content, folder) => {
  if (TITLE_OVERRIDES[folder]) return TITLE_OVERRIDES[folder];

  // 1) Prefer composed H1 props used by header-style components.
  const h1Line1 = content.match(/h1Line1\s*=\s*["']([^"']+)["']/)?.[1] || "";
  const h1Line2 = content.match(/h1Line2\s*=\s*["']([^"']+)["']/)?.[1] || "";
  const composedH1 = `${h1Line1} ${h1Line2}`.trim();
  if (composedH1) return composedH1;

  // 2) Common whitepaper spotlight text props.
  const line1Text =
    content.match(/line1Text\s*=\s*["']([^"']+)["']/)?.[1] || "";
  const line2Text =
    content.match(/line2Text\s*=\s*["']([^"']+)["']/)?.[1] || "";
  const composedLineText = `${line1Text} ${line2Text}`.trim();
  if (composedLineText) return composedLineText;

  // 3) Then direct h1 prop usage.
  const h1Prop =
    content.match(/h1\s*=\s*["']([^"']+)["']/)?.[1] ||
    content.match(/h1Title\s*=\s*["']([^"']+)["']/)?.[1] ||
    content.match(/heading\s*=\s*["']([^"']+)["']/)?.[1];
  if (h1Prop) return normalizeText(h1Prop);

  // 4) Then parse a literal <h1>...</h1> if present.
  const firstH1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  if (firstH1) {
    const cleaned = normalizeText(firstH1);
    const invalidTokenRegex =
      /\b(line1Text|line2Text|h1Line1|h1Line2|patternTopAlt|patternBottomAlt)\b/i;
    if (cleaned && !invalidTokenRegex.test(cleaned)) return cleaned;
  }

  // Fallback to slug text when no h1 is discoverable in page.jsx.
  return folder.replace(/-/g, " ");
};

export function OPTIONS(request) {
  return corsPreflight(request);
}

export async function GET(request) {
  const guidebooksDir = path.join(process.cwd(), "src/app/(routes)/guidebook");

  try {
    if (!fs.existsSync(guidebooksDir)) {
      return applyCors(request, NextResponse.json([]));
    }

    const folders = fs.readdirSync(guidebooksDir);

    const guidebooks = folders
      .filter((folder) => {
        const folderPath = path.join(guidebooksDir, folder);
        if (!fs.statSync(folderPath).isDirectory()) return false;

        // Check for page.jsx or page.tsx etc.
        // For now sticking to the user's pattern: page.jsx
        return fs.existsSync(path.join(folderPath, "page.jsx"));
      })
      .map((folder) => {
        const folderPath = path.join(guidebooksDir, folder);
        const pagePath = path.join(folderPath, "page.jsx");
        const content = fs.readFileSync(pagePath, "utf-8");

        // Get folder modification time for sorting
        const folderStats = fs.statSync(folderPath);
        const modifiedTime = folderStats.mtime.getTime();

        // Use h1/heading used by the page, not metadata title.
        const title = extractTitleFromPageContent(content, folder);

        // Extract image from metadata or page header prop.
        // Supported patterns:
        // metadata image: image: "/path/to/image.jpg"
        // header prop: headerImg="/path/to/image.jpg"
        const imageMatch =
          content.match(/image\s*:\s*["']([^"']+)["']/) ||
          content.match(/headerImg\s*=\s*["']([^"']+)["']/);
        const image = imageMatch
          ? imageMatch[1]
          : "/white_paper/white_paper_sec2bg.jpg"; // Default fallback

        const dateMatch = content.match(
          /guidebook_date\s*:\s*["']([^"']+)["']/,
        );
        const date = dateMatch ? dateMatch[1] : null;

        return {
          slug: folder,
          title: {
            rendered: title,
          },
          acf: {
            blog_image: image,
            blog_publish_date: date,
          },
          modifiedTime, // For sorting
        };
      })
      .sort((a, b) => {
        const aDate = Date.parse(a.acf?.blog_publish_date || "");
        const bDate = Date.parse(b.acf?.blog_publish_date || "");

        const aSortTime = Number.isNaN(aDate) ? a.modifiedTime : aDate;
        const bSortTime = Number.isNaN(bDate) ? b.modifiedTime : bDate;

        return bSortTime - aSortTime;
      }) // Latest first, falling back to modified time when publish date is missing
      .map((item, index) => ({
        ...item,
        id: index + 100, // Assign ID after sorting
        modifiedTime: undefined, // Remove modifiedTime from final output
      }));

    return applyCors(
      request,
      NextResponse.json(guidebooks, {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }),
    );
  } catch (error) {
    // console.error("Error reading guidebooks:", error);
    return applyCors(
      request,
      NextResponse.json(
        { error: "Failed to load guidebooks" },
        { status: 500 },
      ),
    );
  }
}
