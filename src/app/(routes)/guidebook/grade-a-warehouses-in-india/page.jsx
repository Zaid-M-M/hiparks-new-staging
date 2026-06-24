import React from "react";
import FlexComponents from "@/components/whitepaper-globalf/FlexComponents";
import Header from "./Header";
import White_Paper_sec12 from "@/components/whitepaper-globalf/White_Paper_sec12";
import ComplianceTable from "@/components/grade-a-guidebook/ComplianceTable";
import sections1 from "./data1";
import sections2 from "./data2";
import sections3 from "./data3";
import sections4 from "./data4";
import referencesBoxes from "./refdata";

export const metadata = {
  guidebook_date: "2025-05-01",
  title:
    "Grade A Warehouses in India: The Definitive Guide | Horizon Industrial Parks",
  description:
    "Understand what defines Grade A warehouses in India, why they matter operationally and economically, and how they should be designed, evaluated, and deployed.",
};

// Renders a 2x2 captioned photo grid matching the Figma ESG layout
function PhotoGrid2x2({ photos, captions }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px] w-full">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="relative w-full h-[280px] sm:h-[360px] lg:h-[400px] overflow-hidden bg-[#8e8e8e]"
        >
          <img
            src={photo.src}
            alt={photo.caption || ""}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {photo.caption && (
            <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[rgba(0,0,0,0.25)] backdrop-blur-md flex items-center justify-center px-[10px]">
              {/* // <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-[rgba(0,0,0,0.8)] flex items-center justify-center px-[10px]"> */}
              <p className="bw-m text-white text-[16px] sm:text-[18px] leading-[24px] text-center">
                {photo.caption}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Renders a full-width captioned image (Safety Week etc.)
// function CaptionedImage({ src, alt, caption }) {
//   return (
//     <div className="relative w-full h-auto aspect-video overflow-hidden bg-[#8e8e8e]">
//       <img
//         src={src}
//         alt={alt || ""}
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       {caption && (
//         <div className="absolute bottom-0 left-0 right-0 h-[60px] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] flex items-center justify-center px-[10px]">
//           <p className="bw-m text-white text-[16px] sm:text-[20px] leading-[32px] text-center">
//             {caption}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }
function CaptionedImage({ src, alt, caption }) {
  return (
    <div className="relative w-full overflow-hidden ">
      <img src={src} alt={alt || ""} className="block w-full h-auto" />

      {caption && (
        <div className="absolute bottom-0 left-0 right-0 h-[40px] sm:h-[60px] border border-[rgba(0,0,0,0.10)] bg-[rgba(0,0,0,0.03)] backdrop-blur-[60px] flex items-center justify-center px-[10px]">
          <p className="bw-m text-white text-[16px] sm:text-[20px] leading-[32px] text-center">
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}
// Renders a complex table as a horizontally-scrollable image
// function TableAsImage({ src, alt }) {
//   return (
//     <div className="w-full overflow-x-auto">
//       <img
//         src={src}
//         alt={alt || ""}
//         className="sm:w-full h-[500px] sm:h-auto sm:min-w-[640px]"
//       />
//     </div>
//   );
// }
function TableAsImage({ src, alt }) {
  return (
    <div className="w-full overflow-x-auto">
      <img
        src={src}
        alt={alt || ""}
        className="block min-w-[1200px] h-auto md:min-w-0 md:w-full"
      />
    </div>
  );
}
// Renders the Site Selection Strategy table as a horizontally-scrollable image
// function SiteSelectionTable() {
//   return (
//     <div className="w-full border py-7 px-5 border-black overflow-x-auto">
//       <h3 className="text-center w-full uppercase pb-5 text-[24px] font-semibold! md:text-[28px]">
//         Grade A Warehouse Site Selection Strategy
//       </h3>
//       <img
//         src="/white_paper/grade-a/tableimg1siteselection.png"
//         alt="Grade A Warehouse Site Selection Strategy"
//         className="w-full h-auto min-w-[640px]"
//       />
//     </div>
//   );
// }
// function SiteSelectionTable() {
//   return (
//     <div className="w-full border border-black py-[28px]">
//       <h3 className="text-center w-full uppercase pb-[15px] px-5 text-[24px] font-semibold md:text-[28px]">
//         Grade A Warehouse Site Selection Strategy
//       </h3>

//       {/* Scroll wrapper */}
//       <div className="w-full px-[20px] overflow-x-auto">
//         <img
//           src="/white_paper/grade-a/tableimg1siteselection.png"
//           alt="Grade A Warehouse Site Selection Strategy"
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// }

// function SiteSelectionTable() {
//   return (
//     <div className="w-full border border-black py-[28px]">
//       <h3 className="text-center w-full uppercase pb-[15px] px-5 text-[24px] font-semibold md:text-[28px]">
//         Grade A Warehouse Site Selection Strategy
//       </h3>

//       <div className="w-full px-[20px] overflow-x-auto">
//         <img
//           src="/white_paper/grade-a/tableimg1siteselection.png"
//           alt="Grade A Warehouse Site Selection Strategy"
//           className="h-[500px] w-auto max-w-none  md:min-w-0 md:w-full"
//         />
//       </div>
//     </div>
//   );
// }
function SiteSelectionTable() {
  return (
    <div className="w-full border border-black py-[28px]">
      <h3 className="text-center w-full uppercase pb-[15px] px-5 text-[24px] font-semibold md:text-[28px]">
        Grade A Warehouse Site Selection Strategy
      </h3>

      <div className="w-full px-[20px] overflow-x-auto">
        <img
          src="/white_paper/grade-a/tableimg1siteselection.webp"
          alt="Grade A Warehouse Site Selection Strategy"
          className="block min-w-[900px] h-auto md:min-w-0 md:w-full"
        />
      </div>
    </div>
  );
}
// ESG certification logos row (ISO 14001, ISO 50001, IGBC, LEED)
function ESGCertLogos() {
  return (
    // <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px]">
    //   {[
    //     // { label: "ISO 14001", sub: "Environmental Management" },
    //     // { label: "ISO 50001", sub: "Energy Management" },
    //     // { label: "IGBC", sub: "Green Building Council" },
    //     // { label: "LEED", sub: "Green Building Certification" },
    //     { img: "/white_paper/grade-a/esgc1.png" },
    //     { img: "/white_paper/grade-a/esgc2.png" },
    //     { img: "/white_paper/grade-a/esgc3.png" },
    //     { img: "/white_paper/grade-a/esgc4.png" },
    //   ].map((cert, i) => (
    //     <div
    //       key={i}
    //       className="border border-[#c7c7c7] flex flex-col items-center justify-center h-[140px] sm:h-[280px] gap-2 px-4"
    //     >
    //       <img src={cert.img} alt="" />
    //     </div>
    //   ))}
    // </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-[10px]">
      {[
        { img: "/white_paper/grade-a/esgc1.png" },
        { img: "/white_paper/grade-a/esgc2.png" },
        { img: "/white_paper/grade-a/esgc3.png" },
        { img: "/white_paper/grade-a/esgc4.png" },
      ].map((cert, i) => (
        <div
          key={i}
          className="border border-[#c7c7c7] flex flex-col items-center justify-center h-[140px] sm:h-[280px] gap-2 px-4 overflow-hidden"
        >
          <img
            src={cert.img}
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}

// Simple 2-column table (Parameter / Grade A Benchmark)
function Simple2ColTable({ headers, rows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[480px] border-collapse">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className={`bw-sb text-[18px] sm:text-[24px] text-left px-[20px] sm:px-[34px] py-[20px] sm:py-[23px] border border-[#e0e0e0] ${i === 0 ? "bg-[#F47920]  text-white! w-1/2" : "bg-[#8F53A1] text-white w-1/2"}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#ffffff]"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="bw-sb uppercase text-[16px] sm:text-[20px] px-[20px] sm:px-[34px] py-[18px] sm:py-[21px] border border-[#e0e0e0] text-[#1a1a1a]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Economics 3-column comparison table (Grade A vs Grade B/C)
function EconomicsTable() {
  const rows = [
    {
      metric: "HEADLINE RENTAL COST",
      src: "/white_paper/grade-a/warehouse/head.svg",
      gradeA: "Reduced business interruption.",
      gradeBc: "Elevated business interruption.",
    },
    {
      metric: "VOLUMETRIC EFFICIENCY",
      src: "/white_paper/grade-a/warehouse/volu.svg",
      gradeA: "High (e.g., ≥12m)",
      gradeBc: "Limited (e.g., <9m)",
    },
    {
      metric: "FLOORING & MAINTENANCE",
      src: "/white_paper/grade-a/warehouse/foor.svg",
      gradeA: "Superior (FM2 compliant)",
      gradeBc: "Legacy/Basic",
    },
    {
      metric: "THROUGHPUT & SPEED",
      src: "/white_paper/grade-a/warehouse/thr.svg",
      gradeA: "Optimized",
      gradeBc: "Manual-focused",
    },
    {
      metric: "AUTOMATION READINESS",
      src: "/white_paper/grade-a/warehouse/auto.svg",
      gradeA: "Native (ASRS/Cobots/AGVs)",
      gradeBc: "Retrofit often unviable",
    },
    {
      metric: "INSURANCE & RISK",
      src: "/white_paper/grade-a/warehouse/insur.svg",
      gradeA: "Proactive compliance (NBC/BIS)",
      gradeBc: "Operational gaps (fire/safety)",
    },
    {
      metric: "ESG & SUSTAINABILITY",
      src: "/white_paper/grade-a/warehouse/esg.svg",
      gradeA: "Strategic (Efficiency/Solar)",
      gradeBc: "Cost minimized",
    },
    {
      metric: "LONG-TERM ASSET VALUE",
      src: "/white_paper/grade-a/warehouse/long.svg",
      gradeA: "Durable value/Exit liquidity",
      gradeBc: "Functional obsolescence",
    },
    {
      metric: "TOTAL COST OF OPERATIONS",
      src: "/white_paper/grade-a/warehouse/total.svg",
      gradeA: "FREQUENTLY LOWER",
      gradeBc: "Often Higher (hidden costs)",
    },
  ];
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr>
            <th className="bw-sb text-[14px] sm:text-[24px] text-center text-white px-[16px] py-[20px] border border-l-0 border-[#e0e0e0] bg-[#8F53A1] w-[33%]">
              FEATURE / METRIC
            </th>
            <th className="bw-sb text-[14px] sm:text-[24px] text-center px-[16px] py-[20px] border border-[#e0e0e0] bg-[#F47920] text-white w-[33%]">
              GRADE A INDUSTRIAL <br /> &amp; SUSTAINABLE LOGISTICS PARKS
            </th>
            <th className="bw-sb text-[14px] sm:text-[24px] text-center px-[16px] py-[20px] border border-[#e0e0e0] bg-[#0DB14B] text-white w-[33%]">
              GRADE B/C LEGACY <br /> &amp; INCREMENTAL WAREHOUSING
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#ffffff]"}>
              {/* <td className="bw-sb flex items-center text-[13px] sm:text-[15px] px-[16px] py-[18px] border border-b-0 border-r-0 border-l-0 border-[#e0e0e0] text-[#1a1a1a]">
                <img
                  src={row.src}
                  alt={row.metric}
                  className="shrink-0 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
                />
                <span className="ms-5 text-[#4A4A4A]">{row.metric}</span>
              </td> */}
              <td className="bw-sb text-[12px] sm:text-[15px] px-[16px] py-[18px] border border-b-0 border-r-0 border-l-0 border-[#e0e0e0] text-[#1a1a1a]">
                <div className="flex items-center">
                  <img
                    src={row.src}
                    alt={row.metric}
                    className="shrink-0 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
                  />
                  <span className="ms-5 text-[#4A4A4A]">{row.metric}</span>
                </div>
              </td>
              <td className="bw-r text-[11px] font-semibold! uppercase text-[#4A4A4A] sm:text-[18px] px-[16px] py-[18px] border border-[#e0e0e0] text-[#1a1a1a]">
                {row.gradeA}
              </td>
              <td className="bw-r text-[11px] sm:text-[18px] uppercase font-semibold! text-[#4A4A4A] px-[16px] py-[18px] border border-[#e0e0e0] text-[#1a1a1a]">
                {row.gradeBc}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Renders a compliance table block with padding wrappers matching FlexComponents style
function ComplianceTableBlock({ section }) {
  return (
    <div className="w-full wpcontentdiv gbook">
      <div
        className={`fix ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
      >
        <ComplianceTable
          title={section.title}
          col1Header={section.col1Header}
          col2Header={section.col2Header}
          rows={section.rows}
          col1Icons={section.col1Icons}
          col2Icons={section.col2Icons}
        />
      </div>
    </div>
  );
}

// Unified section renderer — handles both standard FlexComponents and special types
function renderSection(section, index) {
  if (section._type === "compliance-table") {
    return <ComplianceTableBlock key={index} section={section} />;
  }
  if (section._type === "table-as-image") {
    return (
      <div key={index} className={`w-full wpcontentdiv gbook`}>
        <div
          className={`fix ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
        >
          <TableAsImage src={section.src} alt={section.alt} />
        </div>
      </div>
    );
  }
  if (section._type === "captioned-image") {
    return (
      <div key={index} className="w-full wpcontentdiv gbook">
        <div
          className={`fix ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
        >
          <CaptionedImage
            src={section.src}
            alt={section.alt}
            caption={section.caption}
          />
        </div>
      </div>
    );
  }
  if (section._type === "site-selection-table") {
    return (
      <div key={index} className="w-full wpcontentdiv gbook">
        <div
          className={`fix ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
        >
          <SiteSelectionTable />
        </div>
      </div>
    );
  }
  if (section._type === "photo-grid-2x2") {
    return (
      <div
        key={index}
        className={`w-full wpcontentdiv gbook ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
      >
        <div className="fix">
          <PhotoGrid2x2 photos={section.photos} captions={section.captions} />
        </div>
      </div>
    );
  }
  if (section._type === "esg-cert-logos") {
    return (
      <div
        key={index}
        className={`w-full wpcontentdiv gbook ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
      >
        <div className="fix">
          <ESGCertLogos />
        </div>
      </div>
    );
  }
  if (section._type === "simple-2col-table") {
    return (
      <div key={index} className="w-full mt-5 md:mt-0 wpcontentdiv gbook">
        <div
          className={`fix ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
        >
          <Simple2ColTable headers={section.headers} rows={section.rows} />
        </div>
      </div>
    );
  }
  if (section._type === "economics-table") {
    return (
      <div key={index} className="w-full wpcontentdiv pt-7 gbook">
        <div
          className={`fix border border-[#D0D0D0]  pt-7! ${section.paddingTop || ""} ${section.paddingBottom || ""}`}
        >
          <h3 className="text-center font-semibold! pb-2 text-[15px]! md:text-[28px]">
            WAREHOUSING ECONOMICS & LIFECYCLE COSTING: <br /> GRADE A VS GRADE
            B/C WAREHOUSING
          </h3>
          <EconomicsTable />
        </div>
      </div>
    );
  }
  // Default: standard FlexComponents
  return <FlexComponents key={index} {...section} />;
}

const page = () => {
  return (
    <div className="w-full">
      <Header
        breadcrumbs={[
          { Home: "/" },
          { Guidebooks: "/media?tab=guidebooks" },
          { "Grade A Warehouses in India": "#" },
        ]}
        h1Line1="Grade A Warehouses in India"
        h1Line2="The Definitive Guide"
        abstractPosition="line1-right"
        headerImg="/white_paper/grade-a/gahero.webp"
      />

      {sections1.map((section, index) => renderSection(section, `s1-${index}`))}
      {sections2.map((section, index) => renderSection(section, `s2-${index}`))}
      {sections3.map((section, index) => renderSection(section, `s3-${index}`))}
      {sections4.map((section, index) => renderSection(section, `s4-${index}`))}

      <White_Paper_sec12 title="References" boxes={referencesBoxes} />
    </div>
  );
};

export default page;
