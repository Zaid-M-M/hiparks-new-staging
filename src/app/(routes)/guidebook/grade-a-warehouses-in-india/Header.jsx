import React from "react";

const DEFAULT_LINE1 = "Grade A Warehouses in India";
const DEFAULT_LINE2 = "The Definitive Guide";

const DEFAULT_ABSTRACT_SRC = "/abstract_pattern.svg";
const DEFAULT_ABSTRACT_ALT = "Abstract Pattern";

const Header = ({
  h1Line1 = DEFAULT_LINE1,
  h1Line2 = DEFAULT_LINE2,
  p = "",
  headerImg = "",
  headerImgAlt = "Header Image",
  abstractImg = DEFAULT_ABSTRACT_SRC,
  abstractImgAlt = DEFAULT_ABSTRACT_ALT,
  abstractPosition = "below", // "line1-right" | "line2-right" | "below"
  breadcrumbs = [],
}) => {
  const paragraphHtml = String(p || "").trim();

  const breadcrumbLabel = `${h1Line1} ${h1Line2}`.replace(/<[^>]*>/g, "");
  const breadcrumbItems =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? breadcrumbs
      : [
          { Home: "/" },
          { Guidebooks: "/media?tab=guidebooks" },
          { [breadcrumbLabel]: "#" },
        ];

  return (
    <div className="w-full">
      <section className="py-[45px] fix md:py-[50px] lg:py-[70px] flex flex-col gap-3 lg:gap-[30px] relative overflow-hidden">
        {/* Breadcrumbs */}
        <div className="bw-r px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-black">
          {breadcrumbItems.map((item, index) => {
            const [label, href] = Object.entries(item || {})[0] || ["", "#"];
            return (
              <React.Fragment key={`${label}-${index}`}>
                <a
                  href={href || "#"}
                  className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
                >
                  <span dangerouslySetInnerHTML={{ __html: String(label) }} />
                </a>
                {index < breadcrumbItems.length - 1 && (
                  <span className="mx-1 text-black">/</span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Heading */}
        <h1 className="bw-r flex flex-col gap-2">
          {/* Line 1 */}
          <span className="flex items-center gap-3 text-[28px] leading-[38px] md:text-[43px] md:leading-[53px] lg:text-[56px] lg:leading-[64px] tracking-[-1.5px] w-fit">
            <span dangerouslySetInnerHTML={{ __html: h1Line1 }} />

            {abstractPosition === "line1-right" && (
              <img
                src={abstractImg}
                alt={abstractImgAlt}
                className="hidden abstract_svg md:inline-block"
              />
            )}
          </span>

          {/* Line 2 */}
          {h1Line2 && (
            <span className="flex lg:-mt-0 -mt-1 items-center gap-3 text-[28px] leading-[38px] md:text-[43px] md:leading-[53px] lg:text-[56px] lg:leading-[64px] tracking-[-1.5px] w-fit">
              <span dangerouslySetInnerHTML={{ __html: h1Line2 }} />

              {abstractPosition === "line2-right" && (
                <img
                  src={abstractImg}
                  alt={abstractImgAlt}
                  className="hidden abstract_svg md:inline-block"
                />
              )}
            </span>
          )}

          {/* Abstract image – below (desktop & mobile) */}
          {(abstractPosition === "below" || abstractImg) && (
            <img
              src={abstractImg}
              alt={abstractImgAlt}
              className="md:hidden abstract_svg lg:mt-2"
            />
          )}

          {abstractPosition === "below" && (
            <img
              src={abstractImg}
              alt={abstractImgAlt}
              className="hidden abstract_svg md:block mt-2"
            />
          )}
        </h1>

        {/* Header Image */}
        {headerImg && (
          <img
            src={headerImg}
            alt={headerImgAlt}
            className="w-full h-auto object-cover"
          />
        )}

        {/* Paragraph */}
        {paragraphHtml && (
          <p
            className="text-[20px] leading-[32px] bw-r"
            dangerouslySetInnerHTML={{ __html: paragraphHtml }}
          />
        )}
      </section>
    </div>
  );
};

export default Header;
