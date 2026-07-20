import React from "react";

const testimonials = [
  {
    logo: "/bts_campaign/trusted/yazaki.svg",
    company: "Yazaki",
    name: "PV Raju ",
    designation: "CEO - Yazaki India",
    quote:
      "Horizon’s commitment to timelines, construction quality, and built-to-suit development helped us meet critical customer requirements.",
  },
  {
    logo: "/bts_campaign/trusted/fosroc.svg",
    company: "Fosroc",
    name: "Manoj Manoharan",
    designation: "Manager - operations and Supply Chain, Fosroc India",
    quote:
      "The combination of world-class infrastructure, manufacturing expertise, and a highly collaborative team made Horizon the right partner for our expansion.",
  },
  {
    logo: "/bts_campaign/trusted/lumax.svg",
    company: "Lumax ",
    name: "PSVS Raju ",
    designation: "Executive Vice President - Lumax Industries",
    quote:
      "Horizon delivered a state-of-the-art facility within the committed timelines, demonstrating excellent construction quality and highly responsive execution, exactly as envisioned.",
  },
];

const TrustedBySection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-[#1A1A1A] bg-[url('/testimonialbg.png')]">
      <div className="fix flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-2">
          <h2 className="bw-m text-[28px] leading-[110%] lg:tracking-[-2.2px] tracking-[-1.5px]  lg:text-[56px]">
            <span className="txt_gradient">Trusted By Manufacturing</span>
            <br />
            <span className="text-white bw-r leading-[110%] lg:tracking-[-2.2px] tracking-[-1.5px] ">
              And Industrial Businesses
            </span>{" "}
            <img
              src="/abstract_pattern.webp"
              className="abstract_svg block pt-2 lg:pt-0 lg:inline-block md:pl-3"
              alt=""
            />
          </h2>
        </div>

        <div className="flex flex-col md:flex-row  gap-5 lg:gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex-1 relative bg-white p-[24px] 2xl:pt-[32px] lg:pb-[44px] border border-[#e6e6e6] overflow-hidden  2xl:min-h-[280px] flex flex-col justify-between gap-3 2xl:gap-6"
            >
              {/* Background quote decoration */}
              <div className="absolute lg:bottom-[-2px] bottom-[-6px] right-[17px] opacity-[0.04] z-0 flex gap-[18.44px]">
                <img
                  src="/testimonialquote.svg"
                  alt=""
                  className="md:w-[55px] md:h-[105px] w-[45px] h-[95px]"
                />
                <img
                  src="/testimonialquote.svg"
                  alt=""
                  className="md:w-[55px] md:h-[105px] w-[45px] h-[95px]"
                />
              </div>

              {/* Quote text */}
              <p className="relative z-10 bw-r text-[15px] lg:text-[20px]  leading-[170%] text-[#000] flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Divider + attribution */}
              <div className="relative z-10 flex flex-col gap-4 md:justify-center">
                <div className="w-full h-[1.5px] bg-[#CDCDCD] md:max-w-[80%]"></div>
                <div className="flex flex-row items-center md:justify-start md:max-w-[80%] gap-4 md:gap-2 2xl:gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.logo}
                      alt={item.company}
                      loading="lazy"
                      className="md:max-w-[120px] max-w-[90px]  max-h-[40px] object-contain"
                    />
                  </div>
                  <div className="block w-[1px] h-[44px] bg-[#000] flex-shrink-0"></div>
                  <div className="flex flex-col min-h-[52px] md:h-auto  gap-[2px]">
                    <span className="bw-sb text-[15px] md:text-[17px] text-[#2E3133] leading-[130%]">
                      {item.name}
                    </span>
                    <span className="bw-r text-[12px] text-[#000000] leading-[130%]">
                      {item.designation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
