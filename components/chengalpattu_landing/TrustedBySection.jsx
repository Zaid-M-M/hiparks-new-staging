import React from "react";

const amenities = [
  {
    icon: "/chengal_landing/exp_icon/exp_1.svg",
    title:
      "Dedicated wiring harness manufacturing facility designed for ~3,000 employees",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_2.svg",
    title: "12 m clear eave height for efficient workflow and ventilation",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_3.svg",
    title: "Floor load capacity of up to 6 t/sqm (UDL)",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_4.svg",
    title: "Multiple dock pits with dock levellers and side-loading platforms",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_5.svg",
    title: "G+1 office block directly adjoining the shopfloor",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_6.svg",
    title:
      "Dedicated 150 KLD STP, utility blocks, RO plant room, and scrap handling areas",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_7.svg",
    title:
      "Open parking areas spanning 35,780 sq ft for cars, two-wheelers, and buses",
  },
  {
    icon: "/chengal_landing/exp_icon/exp_8.svg",
    title:
      "On-site creche (350 sq ft) and medical room (~480 sq ft) dedicated for Yazaki employees",
  },
];
const TrustedBySection = () => {
  return (
    <div className=" relative overflow-hidden">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />

      <div className="lg:my-24 my-12">
        <div className="fix ">
          <div className="flex items-left flex-col">
            <h1 className="sec_hd bw-r flex flex-col">
              <span className="bw-m">Real Experiences,</span>
              <span className="flex gap-3 lg:gap-4 items-center">
                Real Impact<br className="block"></br>{" "}
                <img src="/abstract_pattern.svg" className="abstract_svg" />
              </span>
            </h1>
          </div>

          <div className="flex z-10 flex-col justify-between mt-[20px] xl:mt-[48px] 1440:gap-[20px] gap-5 xl:gap-0 lg:flex-row 1440:items-start">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] xl:mt-[10px]">
              <img
                className="w-[100%] lg:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/chengal_landing/experience_sec.webp"
              ></img>
            </div>
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-m txt_gradient  md:text-[17px] lg:text-[30px] 1280:text-[30px] md:leading-[40px] mb-[20px] text-[20px] leading-[25px] ">
                A Fully Customised Factory For Yazaki India in Horizon
                Industrial Park Chengalpattu
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
                Yazaki India, a wholly owned subsidiary of Japan-based Yazaki
                Corporation and a global leader in automotive wiring harness
                systems, expanded its manufacturing footprint in Tamil Nadu with
                a new built-to-suit facility at Horizon Industrial Park,
                Chengalpattu near Chennai. This is Yazaki’s third facility with
                Horizon, with the first being a 2.6 lakh square feet plug and
                play factory in 2023 at Horizon Industrial Park Hosur, which
                needed minimal customisation, and followed by their second a 2.6
                lakh square feet manufacturing facility in Farukhnagar NCR in
                March 2024.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                Yazaki’s campus in Chengalpattu spans approximately 348,800 sq
                ft of built-up area, purpose-designed for high-volume wiring
                harness manufacturing. The project reflects Horizon’s
                solution-led approach to delivering compliant, scalable, and
                ESG-aligned manufacturing infrastructure for global OEMs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-[14px] mt-[20px] lg:mt-[45px]">
            {amenities.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white border border-[#D4D4D4] p-3 lg:p-5 h-[170px] xl:h-[210px] w-[calc(50%-7px)] md:w-[calc(33.333%-10px)] xl:w-[calc(25%-12px)]"
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
      </div>
    </div>
  );
};

export default TrustedBySection;
