import React from "react";

const amenities = [
  {
    icon: "/mappedu_landing/exp_icon/exp_1.svg",
    title:
      "380,000+ sq ft total manufacturing area across phases",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_2.svg",
    title: "12m eave height for high-precision shopfloor operations",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_3.svg",
    title: "23m bay width with 5T EOT crane capacity",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_4.svg",
    title: "FM-compliant flooring (5T/sqm ground floor, 1T/sqm mezzanine)",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_5.svg",
    title: "300 lux lighting with complete fire-fighting systems",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_6.svg",
    title:
      "2 dock doors with dock levellers + 1 drive-in shutter",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_7.svg",
    title:
      "Mezzanine floor across 2/3 rd of the facility for upper shopfloor",
  },
  {
    icon: "/mappedu_landing/exp_icon/exp_8.svg",
    title:
      "Dedicated HT power capacity of 2,500 KvA",
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
              <span className="bw-m lg:text-[56px] md:text-[46px] text-[32px] tracking-[-4%] leading-[35px] lg:leading-[66px]">Real Experiences,</span>
              <span className="flex gap-3 lg:gap-4 items-center lg:text-[56px] md:text-[46px] text-[32px] tracking-[-4%] leading-[35px] lg:leading-[66px]">
                Real Impact<br className="block"></br>{" "}
                <img src="/abstract_pattern.svg" className="abstract_svg" />
              </span>
            </h1>
          </div>

          <div className="flex z-10 flex-col justify-between mt-[20px] xl:mt-[48px] 1440:gap-[20px] gap-5 xl:gap-0 lg:flex-row 1440:items-start">
            <div className=" max-w-[600px] md:max-w-[100%] lg:max-w-[45%] mb-[0px] lg:mb-[0px] xl:mt-[10px]">
              <img
                className="w-[100%] lg:h-auto h-full 1440:object-contain object-cover 1440:object-center object-left"
                src="/mappedu_landing/Mappedo_exp.jpg"
              ></img>
            </div>
            <div className="1280:max-w-[600px] 1440:max-w-[658px] 1536:max-w-[700px] md:max-w-[100%] lg:max-w-[55%] max-w-[658px]">
              <p className="bw-m txt_gradient  md:text-[17px] lg:text-[30px] 1280:text-[30px] md:leading-[40px] mb-[20px] text-[20px] leading-[25px] ">
               A Fully Customised Precision Manufacturing Campus for TD Connex at Horizon 
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px]">
               TD Connex, a Singapore-headquartered global electronics manufacturer, established a built-to-suit production campus at Horizon Industrial Park Oragadam to strengthen its presence in India. Developed in close collaboration with TD Connex's global engineering and operations teams, the facility supports the manufacturing of mobile phone components, relay electronics and medical devices, while providing the flexibility to accommodate future expansion.
              </p>
              <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px]">
                Delivered in 3 phases with separate blocks for different product lines within the same ecosystem, and total area of ~3,80,000 sq. ft., the development incorporates cleanroom-ready production environments, dedicated fire protection systems, controlled site access, integrated office and support spaces, and infrastructure planned for future process upgrades. The cumulative development reflects Horizon’s ability to deliver scalable infrastructure, aligned precisely to process, equipment, and compliance needs across business verticals.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-[14px] mt-[20px] lg:mt-[45px] justify-center">
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
