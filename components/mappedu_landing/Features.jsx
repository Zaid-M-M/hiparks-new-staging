import React from "react";

const amenities = [
  {
    icon: "/mappedu_landing/icons/Icon-1.svg",
    title: "IGBC Platinum Certified",
  },
  {
    icon: "/mappedu_landing/icons/Icon-2.svg",
    title: "Reliable power, water and utility infrastructure",
  },
  {
    icon: "/mappedu_landing/icons/Icon-3.svg",
    title: "Wide roads for internal movement",
  },
  {
    icon: "/mappedu_landing/icons/Icon-4.svg",
    title: "Staff Accommodation Building",
  },
  {
    icon: "/mappedu_landing/icons/Icon-5.svg",
    title: "Sports Arena for tenants’ employees",
  },
   {
    icon: "/mappedu_landing/icons/Icon-6.svg",
    title: "0.25 MSFT unit available for lease",
  },
  {
    icon: "/mappedu_landing/icons/Icon-7.svg",
    title: "Existing client base of Automotive and renewable energy client",
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
           Introducing Horizon Industrial Park Mappedu, an integrated industrial and logistics ecosystem strategically located on the Chennai-Arakkonam State Highway (SH-50B). Spread across 54 acres with a development potential of 1.3 MSFT, the park offers both ready-to-move and built-to-suit facilities, giving businesses the flexibility to scale with speed. Located close to the Chennai-Bengaluru Industrial Corridor, the park provides seamless access to, industrial clusters and manufacturing hubs and MMLP, making it an ideal destination for manufacturing, warehousing and logistics operations. 

          </p>
        </div>

        <div className="flex flex-wrap gap-[14px] items-center justify-center">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center bg-white border border-[#D4D4D4] p-3 lg:p-5 h-[140px] xl:h-[210px] w-[calc(50%-7px)] md:w-[calc(33.333%-10px)] xl:w-[calc(25%-12px)]"
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
