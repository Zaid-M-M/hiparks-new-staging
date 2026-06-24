import React from "react";

const amenities = [
  {
    icon: "/chengal_landing/icons/park_level.svg",
    title: "Park-level statutory approvals acquired",
  },
  {
    icon: "/chengal_landing/icons/IBGC.svg",
    title: "IGBC certification in progress",
  },
  {
    icon: "/chengal_landing/icons/water_supply.svg",
    title: "Provisioned for uninterrupted power & water supply",
  },
  {
    icon: "/chengal_landing/icons/road.svg",
    title: "Wide roads for internal movement",
  },
  {
    icon: "/chengal_landing/icons/warehouse.svg",
    title: "0.22 MSFT unit available for dry access",
  },
];

const Features = () => {
  return (
    // Added relative and overflow-hidden to contain the absolute background elements
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#fff]">
      <img
        className="absolute z-0 w-[200px] md:w-[300px] lg:w-[400px] lg:top-0 -top-10 right-5 lg:right-20"
        src="/green_vector.svg"
        alt=""
      />

      {/* Orange Vector */}
      <img
        className="absolute z-0 w-[200px] md:w-[300px] lg:w-[400px] -top-20 -right-20 lg:-right-32"
        src="/orange_vector.svg"
        alt=""
      />

      <div className="relative z-10 fix container flex flex-col gap-9 lg:gap-11">
        <div className="flex flex-col gap-3">
          <p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
            Introducing Horizon Industrial Park Chengalpattu, an integrated
            industrial ecosystem located along the Chennai-Trichy highway
            (NH32), that offers a development potential of a 1.3 million square
            feet. Spread across 51 acres, with options for both ready-to-move-in
            and built-to-suit units, you get the flexible leasing options so
            that your business can hit the ground running.
          </p>
        </div>

        <div className="flex flex-wrap gap-[14px]">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white border border-[#D4D4D4] p-3 lg:p-5 h-[140px] xl:h-[210px] w-[calc(50%-7px)] md:w-[calc(33.333%-10px)] xl:w-[calc(20%-12px)]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="lg:w-[90px] w-[70px] mb-2"
              />
              <p className="font-semibold text-[12px] xl:text-[16px] leading-[125%] text-[#2E3133]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
