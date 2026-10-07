import { notFound } from "next/navigation";
import CTHero from "./components/CTHero";
import CTContent from "./components/CTContent";
import FormSec from "@/components/Factory/Formsec";
import {
  FEATURED_TESTIMONIAL,
  transformTestimonial,
} from "@/components/resources/ClientTestimonials/testimonialUtils";

// Force SSR with no caching
export const dynamic = "force-dynamic";

const WP_BASE =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

/**
 * Decode HTML entities from WordPress text (e.g. &#8217; &amp;) for meta tags
 */
function decodeEntities(text = "") {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCharCode(parseInt(code, 16)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Fetch a single customers_speak testimonial by slug
 */
async function fetchTestimonialBySlug(slug) {
  // Featured "Voices of Trust" video has no CMS entry
  if (slug === FEATURED_TESTIMONIAL.slug) return FEATURED_TESTIMONIAL;

  try {
    const res = await fetch(
      `${WP_BASE}/customers_speak?slug=${encodeURIComponent(slug)}`,
      { cache: "no-store" },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch customers_speak: ${res.status}`);
    }

    const data = await res.json();
    return data?.length ? transformTestimonial(data[0]) : null;
  } catch (err) {
    console.error("Error fetching customers_speak:", err);
    return null;
  }
}

/* -----------------------------------------------------------
   ✅ generateMetadata()
----------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const testimonial = await fetchTestimonialBySlug(slug);

  if (!testimonial) {
    return {
      title: "Testimonial Not Found",
      description: "The requested client testimonial could not be found.",
    };
  }

  const company = decodeEntities(testimonial.companyText);
  const metaTitle = `${company} - Client Testimonial | Horizon Industrial Parks`;
  const metaDescription =
    (testimonial.descriptionHtml && decodeEntities(testimonial.description)) ||
    `Hear from ${company} about their experience with Horizon Industrial Parks.`;

  return {
    title: metaTitle,
    description: metaDescription,

    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      images: testimonial.image
        ? [
            {
              url: testimonial.image,
              width: 1200,
              height: 630,
              alt: company,
            },
          ]
        : [],
    },

    twitter: {
      card: testimonial.image ? "summary_large_image" : "summary",
      title: metaTitle,
      description: metaDescription,
      images: testimonial.image ? [testimonial.image] : [],
    },
  };
}

/* -----------------------------------------------------------
   PAGE COMPONENT
----------------------------------------------------------- */
export default async function ClientTestimonialPage({ params }) {
  const { slug } = await params;

  const testimonial = await fetchTestimonialBySlug(slug);

  if (!testimonial) {
    notFound();
  }

  return (
    <>
      <CTHero testimonial={testimonial} />
      <CTContent testimonial={testimonial} />
      <FormSec />
    </>
  );
}
