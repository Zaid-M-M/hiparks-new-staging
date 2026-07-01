import React from "react";
import Image from "next/image";

export default function QuickCommerceHub() {
  const highlights = [
    "LEED Gold certified Building",
    "High COP (>5.67, as per AHRI) VFD driven screw type chillers to reduce energy consumption",
    "Energy-efficient AHUs equipped with VFD motors for the HVAC",
    "LED Lights & low-flow water systems",
    "Rainwater harvesting with a retention pond at the end of STP",
    "State-of-the-art IBMS (Integrated Building Management System) for efficient monitoring and operations",
    "Acoustic enclosures in production area to limit noise levels to 70 dB",
    "30% of the plot designated as open space with 25% vegetation cover",
  ];

  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-hidden relative">
      <img
        src="/sustainability/plant5.png"
        alt=""
        className="absolute top-0 right-0 z-0"
      />
      <div className="ml-[max(5%,calc((100vw-1340px)/2))] relative z-10 lg:mr-0 mr-[5%] flex flex-col gap-8 items-stretch">
        {/* LEFT COLUMN: Content & Image Showcase */}
        <div>
          {/* Heading utilizing global font weights and inline style overrides matching the design */}
          <h2 className="bw-m lg:text-[52px] tracking-[-4%] leading-[35px] lg:leading-[60px] txt_gradient_sustain  md:text-[52px] text-[32px] ">
            SIG Combibloc
          </h2>
          <span className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] md:items-center">
            <span className="bw-r lg:text-[52px] tracking-[-4%] lg:leading-[78px]! md:text-[52px] text-[32px] leading-[115%]">
              Manufacturing Facility
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
              Sustainable industrial infrastructure developed for aseptic carton
              manufacturing.
            </p>

            {/* Warehouse Produce Assets Container */}
            <div className="relative w-[100%] flex-1 overflow-hidden">
              {/* Referencing the local asset verbatim as per guidelines */}
              <img
                src="/Campaign/quick.jpg"
                alt="SIG Combibloc Manufacturing Facility"
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Project Highlights Cards Panel */}
          <div
            className="lg:w-[50%] rounded-none px-4 py-6 lg:p-12 flex flex-col justify-center text-white"
            style={{
              backgroundImage:
                "linear-gradient(139.82deg, #2BB04C 9.38%, #8F53A1 74.63%)",
            }}
          >
            <h3 className="text-[#E0E0E0] bw-m text-[18px] lg:text-[24px] mb-5 leading-[34px]">
              Project Highlights :
            </h3>

            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-[16px] md:text-[18px] font-normal tracking-normal leading-[normal] text-[#E0E0E0]"
                >
                  <span className="flex-shrink-0 mt-0.5 w-[22px]">
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
