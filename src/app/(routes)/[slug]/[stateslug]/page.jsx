import Breadcrumbs from "@/components/global/Breadcrumbs";
import { resolveMicroblogApiUrl } from "@/src/lib/microblogApiMap";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug, stateslug } = await params;

  if (slug === "tamilnadu") notFound();
  console.log(
    "slugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslugslug",
    slug,
  );
  const baseUrl = resolveMicroblogApiUrl(slug);

  if (!baseUrl) {
    return {
      title: "Invalid State",
      description: "Invalid microblog state",
    };
  }

  try {
    const apiUrl = `${baseUrl}?slug=${stateslug}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
    const data = await res.json();
    const post = data?.[0];
    console.log(
      "postpostpostpostpostpostpostpostpostpostpostpostpostpost postpostpostpostpostpostpostpostpostpostpost",
      post,
    );
    if (!post) {
      return {
        title: "Microblog Not Found",
        description: "No microblog available",
      };
    }

    return {
      title:
        post?.acf?.goa_micro_blog_meta_title ||
        post?.acf?.delhi_micro_blog_meta_title ||
        post?.acf?.gujarat_micro_blog_meta_title ||
        post?.acf?.tamil_nadu_micro_blog_meta_title ||
        post?.acf?.telangana_micro_blog_meta_title ||
        post?.acf?.goa_micro_blog_meta_description ||
        post?.acf?.karnataka_micro_blog_meta_title ||
        post?.acf?.haryana_micro_blog_meta_title ||
        post?.acf?.maha_micro_blog_meta_title ||
        post?.acf?.hyderabad_micro_blog_meta_title,

      description:
        post?.acf?.delhi_micro_blog_meta_description ||
        post?.acf?.gujarat_micro_blog_meta_description ||
        post?.acf?.tamil_nadu_micro_blog_meta_description ||
        post?.acf?.telangana_micro_blog_meta_description ||
        post?.acf?.karnataka_micro_blog_meta_description ||
        post?.acf?.haryana_micro_blog_meta_description ||
        post?.acf?.maha_micro_blog_meta_description ||
        post?.acf?.hyderabad_micro_blog_meta_description,

      openGraph: {
        title:
          post?.acf?.goa_micro_blog_meta_title ||
          post?.acf?.delhi_micro_blog_meta_title ||
          post?.acf?.gujarat_micro_blog_meta_title ||
          post?.acf?.tamil_nadu_micro_blog_meta_title ||
          post?.acf?.telangana_micro_blog_meta_title ||
          post?.acf?.goa_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_title ||
          post?.acf?.haryana_micro_blog_meta_title ||
          post?.acf?.maha_micro_blog_meta_title ||
          post?.acf?.hyderabad_micro_blog_meta_title,

        description:
          post?.acf?.delhi_micro_blog_meta_description ||
          post?.acf?.gujarat_micro_blog_meta_description ||
          post?.acf?.tamil_nadu_micro_blog_meta_description ||
          post?.acf?.telangana_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_description ||
          post?.acf?.haryana_micro_blog_meta_description ||
          post?.acf?.maha_micro_blog_meta_description ||
          post?.acf?.hyderabad_micro_blog_meta_description,
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title:
          post?.acf?.goa_micro_blog_meta_title ||
          post?.acf?.delhi_micro_blog_meta_title ||
          post?.acf?.gujarat_micro_blog_meta_title ||
          post?.acf?.tamil_nadu_micro_blog_meta_title ||
          post?.acf?.telangana_micro_blog_meta_title ||
          post?.acf?.goa_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_title ||
          post?.acf?.haryana_micro_blog_meta_title ||
          post?.acf?.maha_micro_blog_meta_title ||
          post?.acf?.hyderabad_micro_blog_meta_title,
        description:
          post?.acf?.delhi_micro_blog_meta_description ||
          post?.acf?.gujarat_micro_blog_meta_description ||
          post?.acf?.tamil_nadu_micro_blog_meta_description ||
          post?.acf?.telangana_micro_blog_meta_description ||
          post?.acf?.karnataka_micro_blog_meta_description ||
          post?.acf?.haryana_micro_blog_meta_description ||
          post?.acf?.maha_micro_blog_meta_description ||
          post?.acf?.hyderabad_micro_blog_meta_description,
      },
    };
  } catch (error) {
    return {
      title: "Horizon",
      description: "Horizon microblog",
    };
  }
}

export default async function MicroBlogPage({ params }) {
  const { slug, stateslug } = await params;

  if (slug === "tamilnadu") notFound();

  const baseUrl = resolveMicroblogApiUrl(slug);

  if (!baseUrl) {
    return <h1>Invalid State </h1>;
  }

  // Fetch only the microblog that matches the slug
  const apiUrl = `${baseUrl}?slug=${stateslug}`;

  const res = await fetch(apiUrl, { cache: "no-store" });
  const data = await res.json();

  const post = data[0]; // WP returns an array

  if (!post) {
    return <h1>No microblog found</h1>;
  }

  const stateLabel = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const postTitle = post?.title?.rendered?.replace(/<[^>]*>/g, "") || "";

  return (
    <>
      <div className="w-full pt-[45px] pb-0 bg-white">
        <div className="fix">
          {/* Breadcrumb */}
          <div className="mb-0">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: stateLabel, href: `/${slug}` },
                { label: "Microblog" },
              ]}
              color="#000000"
            />
          </div>

          {/* Title with Abstract Pattern */}
          <div className="mt-[15px]">
            <h1
              className="bw-r text-[28px] leading-[36px] md:text-[45px] md:leading-[55px] lg:text-[56px] lg:leading-[66px]
                tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.24px] mb-2 lg:mb-[20px] text-[#000000]"
              dangerouslySetInnerHTML={{
                __html: post?.title?.rendered,
              }}
            />
            <img
              src="/abstract_pattern.svg"
              alt="Abstract Pattern"
              className="abstract_svg"
            />
          </div>

          <div
            className="blog-content mb-10"
            dangerouslySetInnerHTML={{ __html: post?.content?.rendered }}
          />
        </div>
      </div>
    </>
  );
}
