import React from "react";
import Image from "next/image";

export default function QuickCommerceHub() {
  const highlights = [
    // "Quick commerce fulfilment hub",
    "320,000 sq. ft. fulfilment facility",
    "40,000 sq. ft. of cold rooms and chillers",
    "45 dock doors (1 dock : 6,400 sq. ft.)",
    "800 kVA power & 1,000 kVA transformer for cold chain operations",
    "Located at Horizon Industrial Park Dobbaspet I",
    "2.5 km from NH 48",
    "Direct access to State Highway 948A",
    "Connectivity to Bengaluru consumption markets",
    "Infrastructure designed for high-volume order movement",
    "Supports inventory replenishment and last-mile distribution",
    "Expansion-ready warehousing infrastructure",
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="ml-[max(5%,calc((100vw-1340px)/2))] lg:mr-0 mr-[5%] flex flex-col gap-8 items-stretch">
        {/* LEFT COLUMN: Content & Image Showcase */}
        <div>
          {/* Heading utilizing global font weights and inline style overrides matching the design */}
          <h2 className="bw-m lg:text-[52px] tracking-[-4%] leading-[35px] lg:leading-[60px] txt_gradient_sustain  md:text-[52px] text-[32px] ">
            Quick Commerce <br className="lg:hidden" /> Fulfilment Hub
          </h2>
          <span className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] md:items-center">
            <span className="bw-r lg:text-[52px] tracking-[-4%] lg:leading-[78px]! md:text-[52px] text-[32px] leading-[115%]">
              for Scootsy (Swiggy)
            </span>
            <img
              src="/abstract_pattern_sustain.png"
              className="abstract_svg  lg:ml-2"
            />
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-5 lg:gap-[48px]">
          <div className="flex flex-col gap-[26px] md:w-[50%] ">
            <p className="text-[#E0E0E0]! lg:text-[24px]  text-[18px] leading-[22px] md:leading-[34px] 2xl:max-w-[90%] lg:max-w-[98%]">
              Customized fulfilment infrastructure developed to support
              high-volume quick commerce operations.
            </p>

            {/* Warehouse Produce Assets Container */}
            <div className="relative w-[100%] flex-1 overflow-hidden">
              {/* Referencing the local asset verbatim as per guidelines */}
              <img
                src="/Campaign/quick.jpg"
                alt="Quick Commerce Fulfilment Hub Internal Warehouse Setup"
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Project Highlights Cards Panel */}
          {/* Utilizing global design system class token `.section_color` or `.bggrad` for backgrounds */}
          <div className="lg:w-[50%] bggrad rounded-none px-4 py-6 lg:p-12 flex flex-col justify-center text-white">
            <h3 className="text-[#E0E0E0] bw-m text-[18px] lg:text-[24px] mb-5 leading-[34px]">
              Project Highlights :
            </h3>

            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-[16px] md:text-[18px] font-normal tracking-normal leading-[normal] text-[#E0E0E0]"
                >
                  {/* Checkmark icon wrapper matching the exact alignment blueprint */}
                  <span className="flex-shrink-0 mt-0.5 w-[22px]">
                    {/* <svg
                    className="w-5 h-5 opacity-85"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg> */}
                    <img src="/Campaign/quicktick.svg" alt="" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
