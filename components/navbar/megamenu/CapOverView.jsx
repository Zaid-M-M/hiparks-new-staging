// "use client";
// import React from "react";
// import TransitionLink from "@/src/app/TransitionLink";

// const CapOverView = ({ setIsNavOpen, isNavOpen }) => {
//   return (
//     <div className="flex w-full h-[400px] overflow-hidden pt-5 1440:pr-0 pr-[5%]">
//       {/* Left gradient + image */}
//       <div
//         className="1440:w-[25%] w-[25%] flex flex-col justify-between p-10"
//         style={{
//           background:
//             "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
//         }}
//       >
//         <div className="flex flex-col gap-[29px]">
//           <img
//             src="/cov.webp"
//             alt="Capabilities Overview"
//             className="w-full h-fit object-cover"
//           />
//           <div className="relative z-10 flex items-center w-full justify-between cursor-pointer">
//             <TransitionLink
//               href="/capabilities-overview/"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="text-white text-[22px] bw-m underline text-left"
//             >
//               Capabilities Overview
//             </TransitionLink>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="35"
//               height="35"
//               viewBox="0 0 50 50"
//               fill="none"
//             >
//               <path
//                 d="M13.3281 36.666L36.6615 13.3326"
//                 stroke="white"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M13.3281 13.3326H36.6615V36.666"
//                 stroke="white"
//                 strokeWidth="3"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {/* Right side – EXACT match to your screenshot */}
//       <div className="flex-1 bg-white pl-6 1440:pl-7 flex">
//         <div className="flex-1 flex gap-10 1440:gap-10">
//           {/* Left column: Industrial Facilities */}
//           <div className="flex-1 flex flex-col space-y-10">
//             <TransitionLink
//               href="/fulfilment-centers"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
//             >
//               Fulfilment Centers
//             </TransitionLink>
//             <TransitionLink
//               href="/industrial-facilities/"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
//             >
//               Industrial Facilities
//             </TransitionLink>

//             {/* InCity Centers */}
//             <TransitionLink
//               href="/incity-centers/"
//               isNavOpen={isNavOpen}
//               setIsNavOpen={setIsNavOpen}
//               className="flex w-full justify-between items-center px-5 1440:px-[20px] py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#595959] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
//             >
//               InCity Centers
//             </TransitionLink>
//           </div>

//           {/* Fulfilment Centers */}

//           {/* Right column: Sectors Specialists */}
//           <div className="w-[65%] mb-14 h-fit bg-[#F7F7F7]">
//             <TransitionLink
//               href="/sectors-specialists/"
//               className="flex w-full justify-between items-center px-5 1440:px-6 py-5 cursor-pointer transition-colors duration-200 border-b border-[#D4D4D4] bg-transparent text-[#000] hover:border-b hover:border-[#F47922] hover:bg-[rgba(0,0,0,0.02)] hover:text-[#000] bw-m text-[16px] leading-[24px] xl:text-[18px] 1440:text-[20px] 1440:leading-[24px]"
//             >
//               Sectors Specialists
//             </TransitionLink>

//             <div className="flex gap-1 w-full justify-between">
//               {/* Automotive and Auto Components */}

//               <div className="w-full">
//                 <TransitionLink
//                   href="/automotive-&-auto-components"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Automotive & Auto Components
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/logistics-&-supply-chain"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Logistics & Supply Chain
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/chemicals/"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Chemicals
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/renewable-energy/"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Renewable Energy
//                 </TransitionLink>
//               </div>
//               <div className="w-full">
//                 <TransitionLink
//                   href="/engineering-&-aerospace"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Engineering & Aerospace
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/packaging/"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Packaging
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/fmcg-&-retail"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   FMCG & Retail
//                 </TransitionLink>
//                 <TransitionLink
//                   href="/ecommerce/"
//                   isNavOpen={isNavOpen}
//                   setIsNavOpen={setIsNavOpen}
//                   className="flex w-full justify-between items-center xl:pl-5 xl:pr-2 1440:px-6 py-5 cursor-pointer transition-colors duration-200 bg-transparent text-[#595959] hover:bg-[rgba(0,0,0,0.02)] bw-m text-[16px] leading-[24px] text-left hover:text-[#F47922]"
//                 >
//                   Ecommerce
//                 </TransitionLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CapOverView;

"use client";
import React from "react";
import TransitionLink from "@/src/app/TransitionLink";

const capabilityGroups = [
  {
    title: "Capabilities",
    url: "/capabilities-overview/",
    links: [
      { text: "Industrial Facilities", url: "/industrial-facilities/" },
      { text: "InCity Centers", url: "/incity-centers/" },
      { text: "Fulfillment Centers", url: "/fulfilment-centers/" },
    ],
  },
  {
    title: "Integrated Solutions Overview",
    url: "/integrated-solutions-overview/",
    links: [
      { text: "Enabling Agile Growth", url: "/enabling-agile-growth/" },
      { text: "Value Added Solutions", url: "/value-added-solutions/" },
      { text: "Workforce Amenities", url: "/workforce-amenities/" },
    ],
  },
];

// Listed row by row so the two-column grid reads left-to-right
const sectorLinks = [
  {
    text: "Automotive and Auto Components",
    url: "/automotive-&-auto-components/",
  },
  { text: "Engineering and Aerospace", url: "/engineering-&-aerospace/" },
  { text: "Logistics and Supply Chain", url: "/logistics-&-supply-chain/" },
  { text: "Packaging", url: "/packaging/" },
  { text: "Chemicals", url: "/chemicals/" },
  { text: "FMCG and Retail", url: "/fmcg-&-retail/" },
  { text: "Renewable Energy", url: "/renewable-energy/" },
  { text: "Ecommerce", url: "/ecommerce/" },
];

const CapOverView = ({ setIsNavOpen, isNavOpen }) => {
  return (
    <div className="flex w-full h-[390px] overflow-hidden mt-5 pr-[5%] 1440:pr-0">
      {/* Left gradient + image */}
      <div
        className="1440:w-[25%] w-[25%] flex flex-col justify-between px-7 py-10"
        style={{
          background:
            "linear-gradient(-245deg, #8F53A1 19.06%, #F47922 105.78%)",
        }}
      >
        <div className="flex flex-col gap-[29px]">
          <img
            src="/cov.webp"
            alt="Capabilities Overview"
            className="w-full h-fit object-cover"
          />
          <div className="relative z-10 flex items-center w-full justify-between cursor-pointer">
            <TransitionLink
              href="/capabilities-overview/"
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="text-white text-[22px] bw-m underline text-left"
            >
              Capabilities Overview
            </TransitionLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M13.3281 36.666L36.6615 13.3326"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3281 13.3326H36.6615V36.666"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Middle: Capabilities + Integrated Solutions */}
      <div className="w-[20%] ml-[3.7%] pt-[10px] flex flex-col gap-[30px]">
        {capabilityGroups.map((group) => (
          <div key={group.title}>
            <TransitionLink
              href={group.url}
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="block pl-4 pb-[10px] border-b border-[#D4D4D4] text-black bw-m text-[16px] 1440:text-[18px] leading-[24px] text-left hover:text-[#F47922] transition-colors duration-200"
            >
              {group.title}
            </TransitionLink>
            <div className="flex flex-col gap-[12px] pt-[14px]">
              {group.links.map((link) => (
                <TransitionLink
                  key={link.url}
                  href={link.url}
                  isNavOpen={isNavOpen}
                  setIsNavOpen={setIsNavOpen}
                  className="block pl-4 text-[#595959] bw-r text-[14px] 1440:text-[16px] leading-[21px] text-left hover:text-[#F47922] transition-colors duration-200"
                >
                  {link.text}
                </TransitionLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Sectors Specialists */}
      <div className="w-[40%] ml-auto h-fit bg-black">
        <TransitionLink
          href="/sectors-specialists/"
          isNavOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          className="block px-[17px] pt-[20px] pb-[20px] border-b border-[#4D4D4D] text-white/90 bw-m text-[16px] 1440:text-[18px] leading-[24px] text-left hover:text-[#F47922] transition-colors duration-200"
        >
          Sectors Specialists
        </TransitionLink>
        <div className="grid grid-cols-2 gap-x-4 gap-y-[30px] px-[17px] pt-[20px] pb-[42px]">
          {sectorLinks.map((link) => (
            <TransitionLink
              key={link.url}
              href={link.url}
              isNavOpen={isNavOpen}
              setIsNavOpen={setIsNavOpen}
              className="block text-white/70 bw-r text-[13px] 1440:text-[15px] leading-[20px] text-left hover:text-[#F47922] transition-colors duration-200"
            >
              {link.text}
            </TransitionLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapOverView;
