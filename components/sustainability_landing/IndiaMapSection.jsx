import React from "react";

const stats = [
  { value: "10", label: "MARKETS" },
  { value: "45", label: "PARKS" },
  { value: "58", sup: "MSFT", label: "LEASABLE AREA" },
  { value: "2200", label: "ACRES" },
];

const legend = [
  { color: "#F47920", label: "Industrial Parks" },
  { color: "#4CAF50", label: "InCity Parks" },
];

const IndiaMapSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/orange_vector.svg"
      />
      <img
        className=" purple_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/purple_vector.svg"
      /> */}
      <img
        className="green_vctr absolute z-0 w-[200px] md:w-[300px] lg:w-[400px] lg:-top-40 -top-20 right-5 lg:right-20 "
        src="/green_vector.svg"
      />
      <img
        className=" purple_vctr absolute z-0 w-[200px] md:w-[300px] lg:w-[400px] top-0 lg:-top-20 -right-10 lg:-right-32"
        src="/purple_vector.svg"
      />
      <div className="ml-[max(5%,calc((100vw-1340px)/2))] lg:mr-0 mr-[5%]">
        <h2 className="bw-m text-[26px] leading-[35px] lg:leading-normal tracking-[-1.76px] lg:text-[40px] xl:text-[44px] text-[#2E3133]">
          Strategically Located Industrial And{" "}
          <br className="lg:hidden" /> Logistics Parks Across India's <br />
          <span className="bw-r">
            Major Manufacturing And Supply Chain Corridors.
          </span>
          <img
            src="/abstract_pattern_sustain.png"
            className="abstract_svg block lg:ml-5 pt-2 lg:pt-0 lg:inline-block"
            alt=""
          />
        </h2>
        <div className="flex flex-col justify-between lg:flex-row lg:gap-x-20 items-stretch gap-0">
          {/* Left: India map */}
          <div className="pt-7 lg:pt-0 lg:w-[50%] xl:w-[55%] flex-shrink-0 flex items-center justify-center lg:justify-start">
            <img
              src="/Campaign/map.svg"
              alt="Strategically Located Grade A Parks Across India"
              className="w-full max-w-[520px] lg:max-w-none lg:w-full h-auto object-contain"
            />
          </div>

          {/* Right: heading + stats */}
          <div className="flex flex-col justify-center gap-8 lg:gap-10 lg:mt-0 mt-10 lg:py-10 lg:flex-1">
            {/* Stats grid — border-based cross */}
            <div className="lg:mr-10">
              <div className="grid 2xl:max-w-[460px] w-full lg:max-w-[400px] grid-cols-2">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={[
                      "flex flex-col justify-center items-center text-center h-[100px] lg:h-[150px]",
                      // Right border on left column (indices 0, 2)
                      i % 2 === 0 ? "border-r border-[#B3B3B3]" : "",
                      // Bottom border on top row (indices 0, 1)
                      i < 2 ? "border-b border-[#B3B3B3]" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span className="bw-b font-semibold text-[35px] 2xl:text-[56px] leading-[70px] flex items-end justify-center">
                      <span className="txt_gradient_sustain leading-[128%] font-semibold">
                        {stat.value}
                      </span>
                      {stat.sup && (
                        <span className="ml-2 text-[#B8B8B8] font-medium text-[16px] lg:text-[24px] bw-m leading-none mb-[8px]">
                          {stat.sup}
                        </span>
                      )}
                    </span>
                    <span className="bw-m text-[14px] lg:text-[16px] tracking-[0.2px] text-[#464646] uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex justify-end">
              <div className="bg-[#F5F5F5] px-8 py-[14px] lg:py-[20px] w-[500px]!">
                <div className="flex flex-col gap-2 lg:gap-5">
                  {legend.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <span
                        className="w-[12px] h-[12px] flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="bw-m text-[14px] lg:text-[20px] text-[#464646]! leading-[128%]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndiaMapSection;
