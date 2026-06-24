import { NextResponse } from "next/server";
// VAPT Fix: Secure upload route
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import os from "os";

// Strict allowlist of permitted file extensions for CVs
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];

// Maximum file size limit (e.g., 5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

// Magic byte validation (Signatures for PDF, DOC, DOCX)
const MAGIC_BYTES = {
  pdf: [0x25, 0x50, 0x44, 0x46], // %PDF
  doc: [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1], // OLE2 (Legacy DOC)
  docx: [0x50, 0x4b, 0x03, 0x04], // ZIP (includes DOCX)
};

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

/**
 * Validates the file using its underlying magic bytes to ensure
 * the MIME type is somewhat accurate and not just spoofed in the HTTP header.
 */
function checkMagicBytes(buffer) {
  // We only need to check the first 8 bytes for these signatures
  const isPdf = MAGIC_BYTES.pdf.every((b, i) => buffer[i] === b);
  const isDoc = MAGIC_BYTES.doc.every((b, i) => buffer[i] === b);
  const isDocx = MAGIC_BYTES.docx.every((b, i) => buffer[i] === b);

  return isPdf || isDoc || isDocx;
}

export function OPTIONS(request) {
  return corsPreflight(request);
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("cv");

    if (!file || typeof file === "string") {
      // 5. Return a generic error message on rejection
      // Do not leak internal allowed types or server paths
      return applyCors(
        request,
        NextResponse.json(
          { error: "Invalid upload request" },
          { status: 400 },
        ),
      );
    }

    // 6. Add a maximum file size limit
    if (file.size > MAX_FILE_SIZE) {
      return applyCors(
        request,
        NextResponse.json(
          { error: "Invalid upload request" },
          { status: 400 },
        ),
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 1. Implement a strict allowlist of permitted file extensions
    const originalExt = path.extname(file.name).toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(originalExt)) {
      return applyCors(
        request,
        NextResponse.json(
          { error: "Invalid upload request" },
          { status: 400 },
        ),
      );
    }

    // 2. Validate the MIME type server-side using file magic bytes
    //    (DO NOT trust the Content-Type header from the client)
    if (!checkMagicBytes(buffer)) {
      return applyCors(
        request,
        NextResponse.json(
          { error: "Invalid upload request" },
          { status: 400 },
        ),
      );
    }

    // 3. Rename every uploaded file to a randomly generated name (UUID) with a safe extension before saving
    const uuid = crypto.randomUUID();
    const safeFilename = `${uuid}${originalExt}`;

    // 4. Store uploaded files outside the web root so they cannot be directly executed via URL
    // os.tmpdir() stores it securely outside the /public or /.next static folders
    const uploadDir = path.join(os.tmpdir(), "secure_cv_uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, safeFilename);

    await fs.writeFile(filePath, buffer);

    // Return success without exposing the exact path
    return applyCors(
      request,
      NextResponse.json(
        { success: true, message: "File uploaded securely" },
        { status: 200 },
      ),
    );
  } catch (error) {
    console.error("Secure upload error:", error);
    // 5. Return a generic error message on rejection
    return applyCors(
      request,
      NextResponse.json(
        { error: "An error occurred during processing" },
        { status: 500 },
      ),
    );
  }
}
// VAPT
