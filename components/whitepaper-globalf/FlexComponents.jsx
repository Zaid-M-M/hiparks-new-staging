// "use client";
// import React from "react";

// const GAP_MAP = {
//   0: "gap-0",
//   1: "gap-1",
//   2: "gap-2",
//   3: "gap-3",
//   4: "gap-4",
//   5: "gap-5",
//   6: "gap-6",
//   7: "gap-7",
//   8: "gap-8",
//   9: "gap-9",
//   10: "gap-10",
//   12: "gap-12",
//   14: "gap-14",
//   16: "gap-16",
// };

// const FlexComponents = ({
//   flexDir = "col",
//   h2 = "",
//   h3 = "",
//   h4 = "",
//   para = "",
//   image = "",
//   imageAlt = "",
//   imageWidth = "",
//   contentWidth = "",
//   paddingTop = "",
//   paddingBottom = "",
//   bgClassName = "",
//   h2TextClassName = "",
//   gap = 6,
//   h3TextClassName = "",
//   h4TextClassName = "",
//   paraTextClassName = "",
// }) => {
//   const directionValue = String(flexDir || "col").trim();
//   const directionClass = directionValue.startsWith("flex-")
//     ? directionValue
//     : `flex-${directionValue}`;

//   const gapClass = GAP_MAP[gap] || "gap-6";

//   const containerClassName = `
//     flex
//     ${directionClass}
//     ${gapClass}
//     ${paddingTop}
//     ${paddingBottom}
//     ${bgClassName}
//   `.trim();

//   const contentClassName = `w-full ${contentWidth} flex flex-col gap-4`.trim();
//   const imageClassName = `w-full ${imageWidth}`.trim();

//   return (
//     <div className="w-full">
//       <div className="fix">
//         <section className={containerClassName}>
//           <div className={contentClassName}>
//             {h2 && (
//               <h2
//                 className={`text-[40px] leading-[38px] tracking-[-1.6px] bw-m ${h2TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h2) }}
//               />
//             )}

//             {h3 && (
//               <h3
//                 className={`text-[24px] leading-[32px] bw-m ${h3TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h3) }}
//               />
//             )}

//             {h4 && (
//               <h4
//                 className={`text-[18px] leading-[30px] uppercase bw-sb ${h4TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h4) }}
//               />
//             )}

//             {para && (
//               <p
//                 className={`text-[20px] leading-[32px] bw-r ${paraTextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(para) }}
//               />
//             )}
//           </div>

//           {image && (
//             <div className={imageClassName}>
//               <img src={image} alt={imageAlt || ""} className="w-full h-auto" />
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FlexComponents;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";

// const GAP_MAP = {
//   0: "gap-0",
//   1: "gap-1",
//   2: "gap-2",
//   3: "gap-3",
//   4: "gap-4",
//   5: "gap-5",
//   6: "gap-6",
//   7: "gap-7",
//   8: "gap-8",
//   9: "gap-9",
//   10: "gap-10",
//   12: "gap-12",
//   14: "gap-14",
//   16: "gap-16",
// };

// const FlexComponents = ({
//   flexDir = "col",

//   /* 🔥 NEW PROPS */
//   h2above = "",
//   h2content = "",

//   h3 = "",
//   h4 = "",
//   para = "",
//   image = "",
//   imageAlt = "",
//   imageWidth = "",
//   contentWidth = "",
//   paddingTop = "",
//   paddingBottom = "",
//   bgClassName = "",
//   h2TextClassName = "",
//   gap = 6,
//   h3TextClassName = "",
//   h4TextClassName = "",
//   paraTextClassName = "",
// }) => {
//   const directionValue = String(flexDir || "col").trim();
//   const directionClass = directionValue.startsWith("flex-")
//     ? directionValue
//     : `flex-${directionValue}`;

//   const gapClass = GAP_MAP[gap] || "gap-6";

//   const containerClassName = `
//     flex
//     ${directionClass}
//     ${gapClass}
//     ${paddingTop}
//     ${paddingBottom}
//     ${bgClassName}
//   `.trim();

//   const contentClassName = `w-full ${contentWidth} flex flex-col gap-4`.trim();
//   const imageClassName = `w-full ${imageWidth}`.trim();

//   return (
//     <div className="w-full">
//       <div className="fix">
//         {/* 🔹 H2 ABOVE (section-level heading) */}
//         {h2above && (
//           <h2
//             className={`text-[40px] leading-[38px] tracking-[-1.6px] bw-m mb-8 ${h2TextClassName}`.trim()}
//             dangerouslySetInnerHTML={{ __html: String(h2above) }}
//           />
//         )}

//         <section className={containerClassName}>
//           <div className={contentClassName}>
//             {/* 🔹 H2 INSIDE CONTENT */}
//             {h2content && (
//               <h2
//                 className={`text-[40px] leading-[38px] tracking-[-1.6px] bw-m ${h2TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h2content) }}
//               />
//             )}

//             {h3 && (
//               <h3
//                 className={`text-[24px] leading-[32px] bw-m ${h3TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h3) }}
//               />
//             )}

//             {h4 && (
//               <h4
//                 className={`text-[18px] leading-[30px] uppercase bw-sb ${h4TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h4) }}
//               />
//             )}

//             {para && (
//               <p
//                 className={`text-[20px] leading-[32px] bw-r ${paraTextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(para) }}
//               />
//             )}
//           </div>

//           {image && (
//             <div className={imageClassName}>
//               <img src={image} alt={imageAlt || ""} className="w-full h-auto" />
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FlexComponents;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";

// const GAP_MAP = {
//   0: "gap-0",
//   1: "gap-1",
//   2: "gap-2",
//   3: "gap-3",
//   4: "gap-4",
//   5: "gap-5",
//   6: "gap-6",
//   7: "gap-7",
//   8: "gap-8",
//   9: "gap-9",
//   10: "gap-10",
//   12: "gap-12",
//   14: "gap-14",
//   16: "gap-16",
// };

// const FlexComponents = ({
//   flexDir = "col",

//   /* 🔥 H2 POSITION CONTROL */
//   h2above = "",
//   h2content = "",

//   h3 = "",
//   h4 = "",
//   para = "",
//   image = "",
//   imageAlt = "",
//   imageWidth = "",
//   contentWidth = "",
//   paddingTop = "",
//   paddingBottom = "",
//   bgClassName = "",
//   h2TextClassName = "",
//   gap = 6,
//   h3TextClassName = "",
//   h4TextClassName = "",
//   paraTextClassName = "",
// }) => {
//   const directionValue = String(flexDir || "col").trim();
//   const directionClass = directionValue.startsWith("flex-")
//     ? directionValue
//     : `flex-${directionValue}`;

//   const gapClass = GAP_MAP[gap] || "gap-6";

//   /* 🧠 KEY LOGIC */
//   const sectionPaddingTop = h2above ? "" : paddingTop;
//   const h2PaddingTop = h2above ? paddingTop : "";

//   const containerClassName = `
//     flex
//     ${directionClass}
//     ${gapClass}
//     ${sectionPaddingTop}
//     ${paddingBottom}
//     ${bgClassName}
//   `.trim();

//   const contentClassName = `w-full ${contentWidth} flex flex-col gap-4`.trim();
//   const imageClassName = `w-full ${imageWidth}`.trim();

//   return (
//     <div className="w-full wpcontentdiv">
//       <div className="fix">
//         {/* 🔹 H2 ABOVE SECTION (non-flex wrapper) */}
//         {h2above && (
//           <div className={`${h2PaddingTop}`}>
//             <h2
//               className={`text-[40px] leading-[38px] tracking-[-1.6px] bw-m ${h2TextClassName}`.trim()}
//               dangerouslySetInnerHTML={{ __html: String(h2above) }}
//             />
//           </div>
//         )}

//         <section className={containerClassName}>
//           <div className={contentClassName}>
//             {/* 🔹 H2 INSIDE CONTENT */}
//             {h2content && (
//               <h2
//                 className={`text-[40px] leading-[38px] tracking-[-1.6px] bw-m ${h2TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h2content) }}
//               />
//             )}

//             {h3 && (
//               <h3
//                 className={`text-[24px] leading-[32px] bw-m ${h3TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h3) }}
//               />
//             )}

//             {h4 && (
//               <h4
//                 className={`text-[18px] leading-[30px] uppercase bw-sb ${h4TextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h4) }}
//               />
//             )}

//             {para && (
//               <p
//                 className={`text-[20px] leading-[32px] bw-r ${paraTextClassName}`.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(para) }}
//               />
//             )}
//           </div>

//           {image && (
//             <div className={imageClassName}>
//               <img src={image} alt={imageAlt || ""} className="w-full h-auto" />
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FlexComponents;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";

// const GAP_MAP = {
//   0: "gap-0",
//   1: "gap-1",
//   2: "gap-2",
//   3: "gap-3",
//   4: "gap-4",
//   5: "gap-5",
//   6: "gap-6",
//   7: "gap-7",
//   8: "gap-8",
//   9: "gap-9",
//   10: "gap-10",
//   12: "gap-12",
//   14: "gap-14",
//   16: "gap-16",
// };

// const FlexComponents = ({
//   flexDir = "col",

//   /* 🔥 H2 POSITION CONTROL */
//   h2above = "",
//   h2content = "",

//   h3 = "",
//   h4 = "",
//   para = "",
//   image = "",
//   imageAlt = "",
//   imageWidth = "",
//   contentWidth = "",
//   paddingTop = "",
//   paddingBottom = "",
//   bgClassName = "",
//   h2TextClassName = "",
//   gap = 6,
//   h3TextClassName = "",
//   h4TextClassName = "",
//   paraTextClassName = "",
// }) => {
//   const directionValue = String(flexDir || "col").trim();
//   const directionClass = directionValue.startsWith("flex-")
//     ? directionValue
//     : `flex-${directionValue}`;

//   const gapClass = GAP_MAP[gap] || "gap-6";

//   /* 🧠 KEY LOGIC */
//   const sectionPaddingTop = h2above ? "" : paddingTop;
//   const h2PaddingTop = h2above ? paddingTop : "";

//   const containerClassName = `
//     flex
//     ${directionClass}
//     ${gapClass}
//     ${sectionPaddingTop}
//     ${paddingBottom}
//     ${bgClassName}
//   `.trim();

//   const contentClassName = `w-full ${contentWidth} flex flex-col gap-4`.trim();
//   const imageClassName = `w-full ${imageWidth}`.trim();

//   return (
//     <div className="w-full wpcontentdiv">
//       <div className="fix">
//         {/* 🔹 H2 ABOVE SECTION */}
//         {h2above && (
//           <div className={`${h2PaddingTop}`}>
//             <h2
//               className={`
//                 text-[28px] leading-[34px] tracking-[-1px]
//                 sm:text-[40px] sm:leading-[38px] sm:tracking-[-1.6px]
//                 bw-m
//                 ${h2TextClassName}
//               `.trim()}
//               dangerouslySetInnerHTML={{ __html: String(h2above) }}
//             />
//           </div>
//         )}

//         <section className={containerClassName}>
//           <div className={contentClassName}>
//             {/* 🔹 H2 INSIDE CONTENT */}
//             {h2content && (
//               <h2
//                 className={`
//                   text-[28px] leading-[34px] tracking-[-1px]
//                   sm:text-[40px] sm:leading-[38px] sm:tracking-[-1.6px]
//                   bw-m
//                   ${h2TextClassName}
//                 `.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h2content) }}
//               />
//             )}

//             {h3 && (
//               <h3
//                 className={`
//                   text-[20px] leading-[30px]
//                   sm:text-[24px] sm:leading-[32px]
//                   bw-m
//                   ${h3TextClassName}
//                 `.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h3) }}
//               />
//             )}

//             {h4 && (
//               <h4
//                 className={`
//                   text-[17px] leading-[26px]
//                   sm:text-[18px] sm:leading-[30px]
//                   uppercase
//                   bw-sb
//                   ${h4TextClassName}
//                 `.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(h4) }}
//               />
//             )}

//             {para && (
//               <p
//                 className={`
//                   text-[16px] leading-[26px]
//                   sm:text-[20px] sm:leading-[32px]
//                   bw-r
//                   ${paraTextClassName}
//                 `.trim()}
//                 dangerouslySetInnerHTML={{ __html: String(para) }}
//               />
//             )}
//           </div>

//           {image && (
//             <div className={imageClassName}>
//               <img src={image} alt={imageAlt || ""} className="w-full h-auto" />
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default FlexComponents;
"use client";
import React from "react";

const GAP_MAP = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  7: "gap-7",
  8: "gap-8",
  9: "gap-9",
  10: "gap-10",
  12: "gap-12",
  14: "gap-14",
  16: "gap-16",
};

const FlexComponents = ({
  flexDir = "col",

  /* 🔥 H2 POSITION CONTROL */
  h2above = "",
  h2content = "",

  h3 = "",
  h4 = "",
  para = "",
  image = "",
  imageAlt = "",
  imageWidth = "",
  contentWidth = "",
  paddingTop = "",
  paddingBottom = "",
  bgClassName = "",
  h2TextClassName = "",
  gap = 6,
  h3TextClassName = "",
  h4TextClassName = "",
  paraTextClassName = "",
}) => {
  /* ✅ FLEX DIRECTION — FIXED */
  const directionValue = String(flexDir || "").trim();

  const directionClass =
    directionValue.includes(":") || directionValue.includes(" ")
      ? directionValue // already full Tailwind classes
      : `flex-${directionValue || "col"}`;

  const gapClass = GAP_MAP[gap] || "gap-6";

  /* 🧠 KEY LOGIC */
  const sectionPaddingTop = h2above ? "" : paddingTop;
  const h2PaddingTop = h2above ? paddingTop : "";

  const containerClassName = `
    flex
    ${directionClass}
    ${gapClass}
    ${sectionPaddingTop}
    ${paddingBottom}
    ${bgClassName}
  `.trim();

  const contentClassName = `w-full ${contentWidth} flex flex-col gap-4`.trim();
  const imageClassName = `w-full ${imageWidth}`.trim();

  return (
    <div className="w-full wpcontentdiv gbook">
      <div className="fix">
        {/* 🔹 H2 ABOVE SECTION */}
        {h2above && (
          <div className={h2PaddingTop}>
            <h2
              className={`
                text-[28px] leading-[34px] tracking-[-1px]
                sm:text-[40px] sm:leading-[38px] sm:tracking-[-1.6px]
                bw-m
                ${h2TextClassName}
              `.trim()}
              dangerouslySetInnerHTML={{ __html: String(h2above) }}
            />
          </div>
        )}

        <section className={containerClassName}>
          <div className={contentClassName}>
            {/* 🔹 H2 INSIDE CONTENT */}
            {h2content && (
              <h2
                className={`
                  text-[28px] leading-[34px] tracking-[-1px]
                  sm:text-[40px] sm:leading-[38px] sm:tracking-[-1.6px]
                  bw-m
                  ${h2TextClassName}
                `.trim()}
                dangerouslySetInnerHTML={{ __html: String(h2content) }}
              />
            )}

            {h3 && (
              <h3
                className={`
                  text-[20px] leading-[30px]
                  sm:text-[24px] sm:leading-[32px]
                  bw-m
                  ${h3TextClassName}
                `.trim()}
                dangerouslySetInnerHTML={{ __html: String(h3) }}
              />
            )}

            {h4 && (
              <h4
                className={`
                  text-[17px] leading-[26px]
                  sm:text-[18px] sm:leading-[30px]
                  uppercase
                  bw-sb
                  ${h4TextClassName}
                `.trim()}
                dangerouslySetInnerHTML={{ __html: String(h4) }}
              />
            )}

            {para && (
              <p
                className={`
                  text-[16px] leading-[26px]
                  sm:text-[20px] sm:leading-[32px]
                  bw-r
                  ${paraTextClassName}
                `.trim()}
                dangerouslySetInnerHTML={{ __html: String(para) }}
              />
            )}
          </div>

          {image && (
            <div className={imageClassName}>
              <img src={image} alt={imageAlt || ""} className="w-full h-auto" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default FlexComponents;
