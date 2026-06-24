import SectorMicroBlogDetail from "@/components/global/SectorMicroBlogDetail";

const AUTOMOTIVE_MICROBLOG_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/chemicals_micros";

async function fetchAutomotiveMicroBlog(chemslug) {
  const apiUrl = `${AUTOMOTIVE_MICROBLOG_API}?slug=${chemslug}`;
  const res = await fetch(apiUrl, { cache: "no-store" });
  const data = await res.json();
  return data?.[0] || null;
}

export async function generateMetadata({ params }) {
  const { chemslug } = await params;

  try {
    const post = await fetchAutomotiveMicroBlog(chemslug);

    if (!post) {
      return {
        title: "Microblog Not Found",
        description: "No microblog available",
      };
    }

    const metaTitle =
      post?.acf?.sector_micro_blog_meta_title || post?.title?.rendered;
    const metaDescription =
      post?.acf?.sector_micro_blog_meta_description || "Automotive microblog";
    const metaKeywords = post?.acf?.sector_micro_blog_meta_keyword;

    return {
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: metaTitle,
        description: metaDescription,
      },
    };
  } catch (error) {
    return {
      title: "Horizon",
      description: "Horizon microblog",
    };
  }
}

export default async function ChemicalsMicroBlogPage({ params }) {
  const { chemslug } = await params;
  const post = await fetchAutomotiveMicroBlog(chemslug);

  if (!post) {
    return <h1>No microblog found</h1>;
  }

  return (
    <SectorMicroBlogDetail
      post={post}
      breadcrumbitems={[
        { label: "Home", href: "/" },
        {
          label: "Chemicals",
          href: "/chemicals",
        },
        {
          label: "Microblog",
          href: `/chemicals/${chemslug}`,
        },
      ]}
    />
  );
}
