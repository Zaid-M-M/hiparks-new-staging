// Shared helpers for the Resources > Client Testimonials tab
// (data source: customers_speak)

// Display order for the Sector dropdown (same order as the sectors list).
// Sectors not in this list are added at the end alphabetically.
export const SECTOR_ORDER = [
  "Automotive & Auto Components",
  "Logistics & Supply Chain",
  "Engineering & Aerospace",
  "Chemicals",
  "Packaging",
  "FMCG & Retail",
  "Renewable Energy",
  "Ecommerce",
];

const stripHtmlTags = (html) =>
  typeof html === "string" ? html.replace(/<[^>]*>/g, "").trim() : "";

const decodeEntities = (text) =>
  typeof text === "string"
    ? text
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
        .replace(/&nbsp;/g, " ")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .trim()
    : "";

// Sectors that have at least one testimonial, in SECTOR_ORDER
export const getAvailableSectors = (testimonials = []) => {
  const sectors = new Set(testimonials.map((t) => t.sector).filter(Boolean));
  const known = SECTOR_ORDER.filter((s) => sectors.has(s));
  const others = [...sectors]
    .filter((s) => !SECTOR_ORDER.includes(s))
    .sort((a, b) => a.localeCompare(b));
  return [...known, ...others];
};

// Map a raw customers_speak post to the shape used by the card and popup
export const transformTestimonial = (item, index = 0) => {
  const company = item.title?.rendered || `Company ${index + 1}`;

  return {
    id: item.id,
    name: item.acf?.customer_name || "",
    position: item.acf?.designation || "",
    company,
    // Plain text: used as the popup heading
    companyText: decodeEntities(stripHtmlTags(company)),
    image:
      item.acf?.thumbnail_image || item.acf?.customer_thumbnail_image || "",
    videoUrl: item.acf?.customer_video_url || "#",
    // Plain text: used on the card and in the popup
    description: decodeEntities(
      stripHtmlTags(
        item.content?.rendered ||
          item.excerpt?.rendered ||
          "Customer testimonial...",
      ),
    ),
    // Sector from the ACF "cs_sector" field (dropdown + card badge)
    sector: decodeEntities(item.acf?.cs_sector),
  };
};
