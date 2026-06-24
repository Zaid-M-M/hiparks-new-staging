import SectorMicroBlogDetail from "@/components/global/SectorMicroBlogDetail";
import { fetchSectorMicroBlog } from "@/src/lib/sectorMicroblogApi";

export async function generateMetadata({ params }) {
  const { autoslug } = await params;

  try {
    const post = await fetchSectorMicroBlog("automotive", autoslug);

    if (!post) {
      return {
        title: "Microblog Not Found",
        description: "No microblog available",
      };
    }

    const metaTitle = post?.acf?.sector_micro_blog_meta_title;
    const metaDescription = post?.acf?.sector_micro_blog_meta_description;
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

export default async function AutomotiveMicroBlogPage({ params }) {
  const { autoslug } = await params;
  const post = await fetchSectorMicroBlog("automotive", autoslug);

  if (!post) {
    return <h1>No microblog found</h1>;
  }

  return (
    <SectorMicroBlogDetail
      post={post}
      breadcrumbitems={[
        { label: "Home", href: "/" },
        {
          label: "Automotive & Auto Components",
          href: "/automotive-&-auto-components",
        },
        // {
        //   label: post?.title?.rendered,
        //   href: `/automotive-&-auto-components/${autoslug}`,
        // },
        {
          label: "Microblog",
          href: `/automotive-&-auto-components/${autoslug}`,
        },
      ]}
    />
  );
}
