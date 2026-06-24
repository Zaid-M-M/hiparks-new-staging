// "use client";
// import React from "react";

// const DEFAULT_TITLE =
//   "Reverse Logistics in India Turning Returns into Strategic Advantage";
// const DEFAULT_PATTERN_SRC = "/abstract_pattern.svg";
// const DEFAULT_PATTERN_ALT = "Grade A Box";

// const Header = ({
//   h1 = DEFAULT_TITLE,
//   p = "",
//   img = DEFAULT_PATTERN_SRC,
//   imgAlt = DEFAULT_PATTERN_ALT,
//   breadcrumbs = [],
// }) => {
//   const titleText = String(h1 || "").trim() || DEFAULT_TITLE;
//   const splitIndex = titleText.indexOf(":");
//   const line1 =
//     splitIndex > -1 ? titleText.slice(0, splitIndex + 1) : titleText;
//   const line2 = splitIndex > -1 ? titleText.slice(splitIndex + 1).trim() : "";
//   const paragraphHtml = String(p || "").trim();
//   const patternSrc = img || DEFAULT_PATTERN_SRC;
//   const patternAlt = imgAlt || DEFAULT_PATTERN_ALT;
//   const breadcrumbLabel = titleText.replace(/<[^>]*>/g, "");
//   const breadcrumbItems =
//     Array.isArray(breadcrumbs) && breadcrumbs.length > 0
//       ? breadcrumbs
//       : [
//           { Home: "/" },
//           { Guidebooks: "/media?tab=guidebooks" },
//           { [breadcrumbLabel]: "#" },
//         ];

//   return (
//     <div className="md:py-[80px] lg:py-[100px] lg:pb-[27px] xl:pb-[40px] py-[45px] flex flex-col gap-8 lg:gap-5 relative overflow-hidden 360:pb-[15px]">
//       <div className="relative w-full fix">
//         {/* Breadcrumbs */}
//         <div className="bw-r px-[8px] py-[3px] md:px-[10px] md:py-[7px] w-fit border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] text-black">
//           {breadcrumbItems.map((item, index) => {
//             const [label, href] = Object.entries(item || {})[0] || ["", "#"];
//             return (
//               <React.Fragment key={`${label}-${index}`}>
//                 <a
//                   href={href || "#"}
//                   className="text-[13px] md:text-[13px] lg:text-[16px] text-black"
//                 >
//                   <span dangerouslySetInnerHTML={{ __html: String(label) }} />
//                 </a>
//                 {index < breadcrumbItems.length - 1 ? (
//                   <span className="text-[13px] md:text-[13px] lg:text-[16px] text-black mx-1">
//                     /
//                   </span>
//                 ) : null}
//               </React.Fragment>
//             );
//           })}
//         </div>

//         <div className="flex flex-col justify-between md:gap-[20px] gap-[25px] xl:flex-row pt-[10px]">
//           <div className="w-full">
//             <div className="flex flex-col md:flex-row md:items-center relative lg:w-auto">
//               <h1 className="flex items-start flex-col">
//                 <span className="lg:text-[56px] lg:leading-[64px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[38px] text-[28px] md:leading-[53px] md:text-[43px] flex gap-[10px] md:gap-[17px] w-full">
//                   <span dangerouslySetInnerHTML={{ __html: line1 }} />
//                   {patternSrc ? (
//                     <img
//                       src={patternSrc}
//                       className="abstract_svg hidden lg:flex md:flex"
//                       alt={patternAlt}
//                     />
//                   ) : null}
//                 </span>
//                 <div className="flex flex-col xl:gap-0 gap-2.5">
//                   <span
//                     className="lg:text-[56px] lg:leading-[64px] xl:text-[56px] wmhead xl:leading-[66px] tracking-[-1.92px] lg:tracking-[-2.24px] leading-[38px] text-[28px] md:leading-[53px] md:text-[43px] flex flex-col max-h-fit justify-start capitalize xl:w-[1084px] bw-m"
//                     dangerouslySetInnerHTML={{ __html: line2 }}
//                   />
//                   {patternSrc ? (
//                     <img
//                       src={patternSrc}
//                       className="abstract_svg flex lg:hidden md:hidden"
//                       alt={patternAlt}
//                     />
//                   ) : null}
//                 </div>
//               </h1>
//             </div>
//             {paragraphHtml ? (
//               <p
//                 className="text-[20px] leading-[32px] bw-r mt-[16px]"
//                 dangerouslySetInnerHTML={{ __html: paragraphHtml }}
//               />
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
"use client";
import React from "react";

const DEFAULT_TITLE =
  "Reverse Logistics in India Turning Returns into Strategic Advantage";
const DEFAULT_PATTERN_SRC = "/abstract_pattern.svg";
const DEFAULT_PATTERN_ALT = "Grade A Box";

const Header = ({
  h1 = DEFAULT_TITLE,
  p = "",
  img = DEFAULT_PATTERN_SRC,
  imgAlt = DEFAULT_PATTERN_ALT,
  breadcrumbs = [],
}) => {
  const titleHtml = String(h1 || "").trim() || DEFAULT_TITLE;
  const paragraphHtml = String(p || "").trim();
  const patternSrc = img || DEFAULT_PATTERN_SRC;
  const patternAlt = imgAlt || DEFAULT_PATTERN_ALT;

  const breadcrumbLabel = titleHtml.replace(/<[^>]*>/g, "");
  const breadcrumbItems =
    Array.isArray(breadcrumbs) && breadcrumbs.length > 0
      ? breadcrumbs
      : [
          { Home: "/" },
          { Guidebooks: "/media?tab=guidebooks" },
          { [breadcrumbLabel]: "#" },
        ];

  return (
    <section className="py-[45px] md:py-[80px] lg:py-[100px] flex flex-col gap-[30px] relative overflow-hidden">
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
      <h1
        className="wmhead text-[28px] leading-[38px] md:text-[43px] md:leading-[53px] lg:text-[56px] lg:leading-[64px] tracking-[-1.5px]"
        dangerouslySetInnerHTML={{ __html: titleHtml }}
      />

      {/* Image */}
      {patternSrc && (
        <img
          src={patternSrc}
          alt={patternAlt}
          className="w-full h-auto object-contain"
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
  );
};

export default Header;
