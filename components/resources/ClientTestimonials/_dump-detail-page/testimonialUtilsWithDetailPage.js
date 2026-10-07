// Shared helpers for the Resources > Client Testimonials tab and the
// /client-testimonials/[slug] detail page (data source: customers_speak)

export const TESTIMONIAL_BASE_PATH = "/client-testimonials";

// Featured video (from case studies page) shown as the first normal card.
// It has no CMS entry, so its detail page is served from this object.
export const FEATURED_TESTIMONIAL = {
  id: "featured-testimonial",
  slug: "voices-of-trust",
  name: "Our Clients Speak",
  position: "",
  company: "Voices of Trust",
  companyText: "Voices of Trust",
  image: "",
  embedUrl: "https://player.vimeo.com/video/955939591",
  videoUrl: "https://player.vimeo.com/video/955939591",
  description: "",
  descriptionHtml: "",
  // No CMS sector, so it only shows when no sector is selected
  sector: "",
};

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

export const getTestimonialUrl = (testimonial) =>
  testimonial?.slug ? `${TESTIMONIAL_BASE_PATH}/${testimonial.slug}` : "#";

// Map a raw customers_speak post to the shape used by the card and detail page
export const transformTestimonial = (item, index = 0) => {
  const company = item.title?.rendered || `Company ${index + 1}`;
  const contentHtml = item.content?.rendered || item.excerpt?.rendered || "";

  return {
    id: item.id,
    slug: item.slug || "",
    name: item.acf?.customer_name || "",
    position: item.acf?.designation || "",
    company,
    companyText: stripHtmlTags(company),
    image:
      item.acf?.thumbnail_image || item.acf?.customer_thumbnail_image || "",
    videoUrl: item.acf?.customer_video_url || "#",
    // Plain text for the card preview
    description: stripHtmlTags(contentHtml || "Customer testimonial..."),
    // Original CMS HTML for the detail page (no fallback text)
    descriptionHtml: contentHtml,
    // Sector from the ACF "cs_sector" field (used by the Sector dropdown)
    sector: decodeEntities(item.acf?.cs_sector),
  };
};

// Convert a Vimeo / YouTube URL into an embeddable player URL
export const getVideoEmbedUrl = (url) => {
  if (!url || url === "#") return "";

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0`;
  }

  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  return url;
};
