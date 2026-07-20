import React from "react";
import Image from "next/image";

export default function QuickCommerceHub() {
  const highlights = [
    // "Quick commerce fulfilment hub",
    "Built-to-suit manufacturing facility",
    "Customized operational layout",
    "Utility-ready infrastructure",
    "Efficient production environment",
    "Expansion-ready development",
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="ml-[max(5%,calc((100vw-1340px)/2))] lg:mr-0 mr-[5%] flex flex-col gap-8 items-stretch">
        {/* LEFT COLUMN: Content & Image Showcase */}
        <div className="flex md:flex-row flex-col gap-[26px] md:w-[100%] items-center">
          <div className="md:w-[51%] w-[100%]">
            {/* Heading utilizing global font weights and inline style overrides matching the design */}
            <h2 className="bw-m lg:text-[52px] tracking-[-4%] leading-[35px] lg:leading-[60px] txt_gradient md:text-[52px] text-[32px] ">
              Horizon delivers bespoke
            </h2>
            <span className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] md:items-center">
              <span className="bw-r lg:text-[52px] tracking-[-4%] lg:leading-[78px]! md:text-[52px] text-[32px] leading-[115%]">
                solution for Fosroc
              </span>
              <img
                src="/abstract_pattern.webp"
                className="abstract_svg  lg:ml-2"
              />
            </span>
          </div>
          <p className="text-[#E0E0E0]! lg:text-[24px]  text-[18px] leading-[22px] md:leading-[34px] 2xl:w-[49%] lg:w-[49%] w-[100%] lg:pr-[50px] pr-[10px]">
            A customized manufacturing facility developed to support Fosroc's
            production operations with infrastructure tailored to operational
            requirements and future growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 lg:gap-[48px]">
          <div className="flex flex-col gap-[26px] md:w-[50%] ">
            {/* Warehouse Produce Assets Container */}
            <div className="relative w-[100%] flex-1 overflow-hidden">
              {/* Referencing the local asset verbatim as per guidelines */}
              <img
                src="/bts_campaign/quick.jpg"
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
                    <img src="/bts_campaign/quicktick.svg" alt="" />
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
