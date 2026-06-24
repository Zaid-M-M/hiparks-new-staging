import React from "react";

const connectivityData = [
  [
    { label: "Chennai – Trichy Highway", distance: "1 km" },
    { label: "Thirumani Railway Station", distance: "12 km" },
    { label: "Chennai Airport", distance: "44 km" },
    { label: "Sriperumbadur", distance: "42 km" },
  ],
  [
    { label: "Mahindra World City", distance: "18 km" },
    { label: "Maramalai Nagar Industrial Area", distance: "26 km" },
    { label: "Oragadam Industrial Corridor", distance: "35 km" },
    { label: "Sriperumbadur Industrial Corridor", distance: "40 km" },
  ],
];

export default function QuickCommerceHub() {
  return (
    <section className="bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 fix container">
        <div className="flex flex-col gap-8 ">
          {/* LEFT COLUMN: Content & Image Showcase */}
          <div>
            {/* Heading utilizing global font weights and inline style overrides matching the design */}
            <h2 className="bw-m lg:text-[52px] tracking-[-4%] leading-[35px] lg:leading-[62px] txt_gradient md:text-[52px] text-[32px] ">
              Connectivity
            </h2>
            <span className="flex flex-col md:flex-row gap-[10px] md:gap-[20px] md:items-center">
              <span className="bw-r lg:text-[52px] tracking-[-4%] lg:leading-[78px]! md:text-[52px] text-[32px] leading-[115%]">
                Highlights
              </span>
              <img src="/abstract_pattern.webp" className="abstract_svg" />
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-5 lg:gap-[48px]">
            <div className="flex flex-col gap-[26px] md:w-[100%] ">
              {/* Warehouse Produce Assets Container */}
              <div className="relative w-[100%] flex-1 overflow-hidden">
                {/* Referencing the local asset verbatim as per guidelines */}
                <img
                  src="/chengal_landing/connectivity_img.webp"
                  alt="Quick Commerce Fulfilment Hub Internal Warehouse Setup"
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>
          </div>

          <p className="text-[#E0E0E0]! lg:text-[24px]  text-[18px] leading-[22px] md:leading-[34px]">
            Located just 56 km from Chennai, Chengalpattu has rapidly
            transformed into a key industrial hub. With the new peripheral ring
            road connecting it to the Chennai port, and a new SIDCO industrial
            estate at Kodur Village, announced in 2021, Chengalpattu is set to
            further boost local industry.
          </p>

          <div className="flex gap-[0px]">
            {connectivityData.map((col, colIdx) => (
              <div key={colIdx} className="w-[100%] md:w-[50%]">
                {col.map((item, rowIdx) => (
                  <div key={rowIdx} className="flex gap-[0px]">
                    <div className="border border-[#595959] py-[12px] px-[20px] w-[72%]">
                      <h5 className="text-[24px] leading-[34px] text-[#E0E0E0]">
                        {item.label}
                      </h5>
                    </div>
                    <div className="border border-[#595959] bg-[#8F53A1] w-[28%] flex items-center py-[12px] px-[20px]">
                      <p className="text-white text-[24px] leading-[34px]">
                        {item.distance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Add code here */}
        </div>
      </div>
    </section>
  );
}
