import React from "react";

const amenities = [
  {
    icon: "/enquiry_campaign/icons/buildheight.svg",
    title: "Customised factory set-ups with zero upfront investments",
  },
  {
    icon: "/enquiry_campaign/icons/wide.svg",
    title: "Flexible spaces for phased expansion",
  },
  {
    icon: "/enquiry_campaign/icons/3b.svg",
    title: "Tailored rental plans",
  },
  {
    icon: "/enquiry_campaign/icons/udl.png",
    title: "Heavy-duty industrial flooring",
  },
  {
    icon: "/enquiry_campaign/icons/5b.svg",
    title: "Utility-ready infrastructure",
  },
  {
    icon: "/enquiry_campaign/icons/6b.svg",
    title: "EOT crane-ready facilities",
  },
  {
    icon: "/enquiry_campaign/icons/7b.svg",
    title: "Structured operational layouts",
  },
  {
    icon: "/enquiry_campaign/icons/8b.svg",
    title: "Process-oriented facility planning",
  },
  { icon: "/enquiry_campaign/icons/9b.svg", title: "Recessed docks" },
  {
    icon: "/enquiry_campaign/icons/10b.svg",
    title: "Clean room capability",
  },
  {
    icon: "/enquiry_campaign/icons/11b.svg",
    title: "Dust-free zones",
  },
  {
    icon: "/enquiry_campaign/icons/12b.svg",
    title: "Cold room integration",
  },
  {
    icon: "/enquiry_campaign/icons/13b.svg",
    title: "FM-grade fire safety systems",
  },
  {
    icon: "/enquiry_campaign/icons/wide.svg",
    title: "Expansion-ready infrastructure",
  },
];

const Features = () => {
  return (
    // Added relative and overflow-hidden to contain the absolute background elements
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#F8F8F8]">
      {/* Absolute Background Vectors */}
      {/* Green Vector */}
      {/* <img
        className="absolute z-0 opacity-80 
             top-[-50px] 2xl:right-[250px] right-[-10px] md:top-[-10px] md:right-0 
             w-[200px] md:w-[300px] lg:w-[400px] 
             lg:bottom-100 lg:right-30"
        src="/green_vector.svg"
        alt=""
      /> */}

      {/* Orange Vector */}
      {/* <img
        className="absolute z-0 opacity-80 
             top-[-50px] right-[-70px] md:top-[-100px] md:right-[-50px] 
             w-[200px] md:w-[300px] lg:w-[400px] 
             lg:bottom-80 lg:left-[76%]"
        src="/orange_vector.svg"
        alt=""
      /> */}
      {/*  */}
      {/*  */}
      {/* Green Vector */}
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
          <h1 className="lg:text-[56px] text-[30px] tracking-[-2.2px] font-medium leading-none text-black">
            World Class Infrastructure <br />
            <div className="flex items-center flex-wrap pt-3 lg:pt-0">
              <span className="font-normal tracking-[-2.2px] leading-[20px] lg:leading-[70px]">
                For Operational Efficiency
              </span>
              <img
                className="pt-5 lg:pt-0 lg:ml-6 w-[80px] lg:w-[210px] block lg:inline-block abstract_svg"
                src={"/abstract_pattern.svg"}
                alt=""
              />
            </div>
          </h1>
        </div>

        <div className="flex flex-wrap gap-[14px] justify-center">
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
              <p className="font-semibold text-[12px] xl:text-[15px] leading-[125%] text-[#2E3133]">
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
