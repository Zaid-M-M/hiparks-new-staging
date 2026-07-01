// import React from "react";

// const amenities = [
//   {
//     icon: "/Campaign/icons/buildheight.svg",
//     title: "Building Height -12 m clear at eaves",
//   },
//   {
//     icon: "/Campaign/icons/wide.svg",
//     title: "Wide-span column-free warehouse design",
//   },
//   {
//     icon: "/Campaign/icons/udl.svg",
//     title: "UDL 5T/sqm floor, FM2-compliant",
//   },
//   {
//     icon: "/Campaign/icons/optimized.svg",
//     title: "Optimized layouts for inbound and outbound movement",
//   },
//   {
//     icon: "/Campaign/icons/dock.svg",
//     title: "1.2 m dock height with dock pits and rolling shutters",
//   },
//   {
//     icon: "/Campaign/icons/concrete.svg",
//     title: "16.5 m concrete truck apron",
//   },
//   {
//     icon: "/Campaign/icons/internal.svg",
//     title: "12 m wide internal roads",
//   },
//   {
//     icon: "/Campaign/icons/power.svg",
//     title: "Reliable power, water , utility infrastructure",
//   },
//   {
//     icon: "/Campaign/icons/ev.svg",
//     title: "EV charging infrastructure",
//   },
//   {
//     icon: "/Campaign/icons/temperature.svg",
//     title: "Temperature-controlled zones",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="py-16 md:py-24 overflow-hidden  bg-[#F8F8F8]">

//       <div className="fix flex flex-col gap-9 lg:gap-11">
//         <div className="flex flex-col gap-3">
//           <h1 className="lg:text-[56px] text-[30px] tracking-[-2.2px] font-medium leading-none text-black">
//             World Class Infrastructure <br />
//             <div className="flex overflow-hidden lg:flex-row flex-col">
//               {" "}
//               <span className="font-normal pt-3 tracking-[-2.2px] lg:pt-0 leading-[20px] lg:leading-[70px]">
//                 For Operational Efficiency
//               </span>
//               <img
//                 className="lg:ml-6 pt-4 lg:pt-0 abstract_svg"
//                 src={"/abstract_pattern.svg"}
//               />
//             </div>
//           </h1>
//         </div>

//         <div className="flex flex-wrap gap-[14px]">
//           {amenities.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center justify-center  text-center bg-white border border-[#D4D4D4] p-3 lg:p-5 h-[140px] xl:h-[210px] w-[calc(50%-7px)] md:w-[calc(33.333%-10px)] xl:w-[calc(20%-12px)]"
//             >
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="lg:w-[90px] w-[70px]"
//               />
//               <p className="font-semibold text-[12px] xl:text-[16px] leading-[125%] text-[#2E3133]">
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from "react";

const amenities = [
  {
    icon: "/Campaign/icons/buildheight.svg",
    title: "Building Height -12 m clear at eaves",
  },
  {
    icon: "/Campaign/icons/wide.svg",
    title: "Wide-span column-free warehouse design",
  },
  { icon: "/Campaign/icons/udl.svg", title: "UDL 5T/sqm floor, FM2-compliant" },
  {
    icon: "/Campaign/icons/optimized.svg",
    title: "Optimized layouts for inbound and outbound movement",
  },
  {
    icon: "/Campaign/icons/dock.svg",
    title: "1.2 m dock height with dock pits and rolling shutters",
  },
  {
    icon: "/Campaign/icons/concrete.svg",
    title: "16.5 m concrete truck apron",
  },
  { icon: "/Campaign/icons/internal.svg", title: "12 m wide internal roads" },
  {
    icon: "/Campaign/icons/power.svg",
    title: "Reliable power, water , utility infrastructure",
  },
  { icon: "/Campaign/icons/ev.svg", title: "EV charging infrastructure" },
  {
    icon: "/Campaign/icons/temperature.svg",
    title: "Temperature-controlled zones",
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

      <div className="relative z-10 fix container flex flex-col gap-9 lg:gap-[30px]">
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-[56px] text-[30px] tracking-[-2.2px] font-medium leading-none text-black">
            Sustainability works best <br />
            <div className="flex items-center flex-wrap pt-3 lg:pt-0">
              <span className="font-normal tracking-[-2.2px] leading-[20px] lg:leading-[70px]">
                when it’s built into the infrastructure
              </span>
              <img
                className="pt-5 lg:pt-0 lg:ml-6 w-[80px] lg:w-[210px] block lg:inline-block abstract_svg"
                src={"/abstract_pattern_sustain.png"}
                alt=""
              />
            </div>
          </h1>
          <p className="bw-r sm:text-xl lg:text-[20px] text-black leading-[26px] sm:leading-[30px]">
            100% of operational parks at Horizon are IGBC-certified, with
            maximum ‘Platinum’ Ratings.   Our debut GRESB participation in 2025
            earned us a 5-Star Rating and Green Star designation — placing us in
            the global top quintile for ESG performance.
          </p>
          <h4 className="font-semibold sm:text-xl lg:text-[24px] text-[18px] text-black leading-[28px] sm:leading-[34px]">
            In a short span of 5 years, we’ve delivered impactful sustainable
            operations:
          </h4>
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
