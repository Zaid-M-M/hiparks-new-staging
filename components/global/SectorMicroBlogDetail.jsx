import SectorBread from "./SectorBread";

function removeEmptyPTags(html) {
  if (!html) return "";

  return html.replace(/<p>(?:\s|&nbsp;|&#160;|<br\s*\/?>)*<\/p>/gi, "");
}

export default function SectorMicroBlogDetail({ post, breadcrumbitems = [] }) {
  const cleanedContent = removeEmptyPTags(post?.content?.rendered);

  return (
    <div className="w-full pt-[45px] pb-0 bg-white">
      <div className="fix">
        <div className="mb-0">
          <SectorBread items={[...breadcrumbitems]} color="#000000" />
        </div>

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
          className="blog-content tableblog smbcont mb-10"
          dangerouslySetInnerHTML={{ __html: cleanedContent }}
        />
      </div>
    </div>
  );
}
