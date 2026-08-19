import React from "react";

const connectivityData = [
  [
    { label: "Chennai-Bengaluru Highway", distance: "17 km" },
    // { label: "Thirumani Railway Station", distance: "12 km" },
    { label: "Chennai Port", distance: "52 km" },
    { label: "Oragadam Industrial Cluster", distance: "30 km" },
    // { label: "Sriperumbadur", distance: "42 km" },
  ],
  [
    { label: "Chennai International Airport", distance: "48 km" },
    { label: "Sriperumbudur Industrial Cluster", distance: "17 km" },
    { label: "Hyundai factory", distance: "23 km" },
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
            <h2 className="bw-m lg:text-[56px] md:text-[46px] text-[32px] tracking-[-4%] leading-[35px] lg:leading-[66px] txt_gradient">
              Connectivity
            </h2>
            <span className="flex flex-row gap-[10px] md:gap-[20px] md:items-center mt-[10px] lg:mt-[0px]">
              <span className="bw-r lg:text-[56px] md:text-[46px] text-[32px] tracking-[-4%] lg:leading-[66px]! md:leading-[52px] leading-[115%]">
                Highlights
              </span>
              <img
                src="/abstract_pattern.webp"
                className="abstract_svg h-auto lg:h-[50px]"
              />
            </span>
          </div>

          {/* <div className="flex flex-col md:flex-row gap-5 lg:gap-[48px]">
            <div className="flex flex-col gap-[26px] md:w-[100%] "> */}
          {/* Warehouse Produce Assets Container */}
          {/* <div className="relative w-[100%] flex-1 overflow-hidden"> */}
          {/* Referencing the local asset verbatim as per guidelines */}
          {/* <img
                  src="/chengal_landing/connectivity_img.webp"
                  alt="Quick Commerce Fulfilment Hub Internal Warehouse Setup"
                  className="w-full h-full object-cover object-left"
                /> */}

          {/* <iframe
                  src="https://player.vimeo.com/video/1204507052?title=0&byline=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-[200px] md:h-[400px] lg:h-[525px] xl:h-[763px]"
                ></iframe>
              </div>
            </div>
          </div> */}

          <p className="text-[#E0E0E0]! lg:text-[24px]  text-[18px] leading-[22px] md:leading-[34px]">
            Located on SH-50B with proximity to the Chennai-Bengaluru Industrial
            Corridor, Mappedu offers excellent connectivity industrial clusters,
            Manufacturing Hubs and MMLP enabling efficient movement of goods and
            supporting supply chain operations across South India.
          </p>

          <div className="flex gap-[0px] flex-col md:flex-row">
            {connectivityData.map((col, colIdx) => (
              <div key={colIdx} className="w-[100%] md:w-[50%]">
                {col.map((item, rowIdx) => (
                  <div key={rowIdx} className="flex gap-[0px]">
                    <div className="border border-[#595959] py-[12px] md:px-[20px] px-[11px] w-[72%]">
                      <h5 className="text-[15px] leading-[22px] md:text-[24px] md:leading-[34px] text-[#E0E0E0]">
                        {item.label}
                      </h5>
                    </div>
                    <div className="border border-[#595959] bg-[#8F53A1] w-[28%] flex items-center py-[12px] md:px-[20px] px-[11px]">
                      <p className="text-white text-[15px] leading-[22px] md:text-[24px] md:leading-[34px]">
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
