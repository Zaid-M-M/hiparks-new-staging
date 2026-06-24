// "use client";

// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-fade";
// import DetailRow from "./DetailRow";

// const DesktopSlider = ({ slides, onImageClick }) => {
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);
//   const swiperRef = useRef(null);

//   const handleSlideChange = (swiper) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   if (slides.length === 0) {
//     return (
//       <div className="w-full h-full flex items-center justify-center text-gray-400">
//         Select a park to view details
//       </div>
//     );
//   }

//   return (
//     <Swiper
//       modules={[Navigation, EffectFade]}
//       spaceBetween={0}
//       slidesPerView={1}
//       effect="fade"
//       fadeEffect={{ crossFade: true }}
//       onSwiper={(swiper) => {
//         swiperRef.current = swiper;
//         setIsBeginning(swiper.isBeginning);
//         setIsEnd(swiper.isEnd);
//         if (swiper.slides.length <= 1) setIsEnd(true);
//       }}
//       onSlideChange={handleSlideChange}
//       className="h-full max-w-full"
//       allowTouchMove={false}
//     >
//       {slides.map((slide, i) => (
//         <SwiperSlide key={i} className="bg-white">
//           <div className="flex flex-col h-full bg-white">
//             <div className="flex flex-col lg:flex-row flex-1 min-h-0">
//               <div className="lg:w-[35%] pt-5 pb-5  flex flex-col border-r-2  border-[#CDCDCD] ">
//                 <div className="flex justify-between gap-4 2xl:mb-6 lg:mb-2 border-b-2 border-[#CDCDCD] p-5">
//                   <h3 className="text-[26px]  font-medium">{slide.title}</h3>
//                   {slides.length > 1 && (
//                     <div className="flex items-center gap-4">
//                       <button
//                         onClick={() => swiperRef.current?.slidePrev()}
//                         disabled={isBeginning}
//                         className="cursor-pointer hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
//                       >
//                         <img
//                           src="/parkdetail/pavarrow.svg"
//                           alt="Previous"
//                           width="45"
//                           height="45"
//                           className="rotate-180"
//                         />
//                       </button>
//                       <button
//                         onClick={() => swiperRef.current?.slideNext()}
//                         disabled={isEnd}
//                         className="cursor-pointer hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity "
//                       >
//                         <img
//                           src="/parkdetail/pavarrow.svg"
//                           alt="Next"
//                           width="45"
//                           height="45"
//                         />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 <div className="2xl:space-y-2 lg:space-y-1 pl-7 pr-6 ">
//                   <DetailRow
//                     label="Available space"
//                     value={slide.availableSpace}
//                   />
//                   <DetailRow label="Usage" value={slide.usage} />
//                   <DetailRow label="Height" value={slide.height} />
//                   <DetailRow label="Docks" value={slide.docks} />
//                   <DetailRow
//                     label="Floor strength"
//                     value={slide.floorStrength}
//                   />
//                   <DetailRow
//                     label="Availability from"
//                     value={slide.availability}
//                   />
//                   <DetailRow
//                     label="Built-To-Suit Possibility"
//                     value={slide.bts}
//                   />
//                 </div>
//               </div>

//               <div className="lg:w-[65%] relative bg-gray-50 p-4 md:p-8 flex items-center justify-center overflow-hidden h-[300px] lg:h-auto border-t lg:border-t-0  border-gray-100 ">
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="w-full h-full object-contain mix-blend-multiply  transition-transform duration-500"
//                 // onClick={() => onImageClick(slide.image)}
//                 />
//                 {/* <button
//                   onClick={() => onImageClick(slide.image)}
//                   className="absolute top-0 right-0 md:top-0 md:right-0 cursor-pointer bg-[#00000010] p-0 hover:bg-[#00000020] transition-colors rounded backdrop-blur-sm"
//                 >
//                   <img
//                     src="/parkdetail/expand.svg"
//                     className="w-6 h-6 md:w-10 md:h-10"
//                     alt="Expand"
//                   />
//                 </button> */}
//                 <img
//                   src="/parkdetail/expand.svg"
//                   alt="Expand"
//                   onClick={() => onImageClick(slide.image)}
//                   className="
//     absolute top-0 right-0
//     md:top-0 md:right-0
//     w-6 h-6 md:w-10 md:h-10
//     cursor-pointer

//   "
//                 />
//               </div>
//             </div>

//             <div className="w-full border-t-2 border-[#CDCDCD] bg-white p-6 md:px-10 pt-[38px] pb-[40px] grid grid-cols-2 md:grid-cols-4 gap-9 text-xs font-medium text-[#000000]">
//               <div className="flex flex-col">
//                 <span className="text-[#000000] text-[16px] pb-2">
//                   Location:
//                 </span>
//                 {slide.location && slide.location !== "#" ? (
//                   <a
//                     href={slide.location}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-black underline truncate hover:text-[#8F53A1] transition-colors text-[16px]"
//                   >
//                     {slide.location || ""}
//                   </a>
//                 ) : (
//                   <span className="text-black text-sm">-</span>
//                 )}
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[#000000] text-[16px] pb-2">
//                   Main access:
//                 </span>
//                 <span className="text-black line-clamp-2 text-[16px] bw-m">
//                   {slide.access}
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[#000000] text-[16px] pb-2">
//                   Airport:
//                 </span>
//                 <span className="text-black line-clamp-2 text-[16px] bw-m">
//                   {slide.airport}
//                 </span>
//               </div>
//               <div className="flex flex-col">
//                 <span className="text-[#000000] text-[16px] pb-2">
//                   CBD:
//                 </span>
//                 <span className="text-black line-clamp-2 text-[16px] bw-m">
//                   {slide.cbd}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default DesktopSlider;
"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-fade";
import { DetailRow } from "./SharedComponents";

const DesktopSlider = ({ slides, onImageClick }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  if (slides.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-400">
        Select a park to view details
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
        if (swiper.slides.length <= 1) setIsEnd(true);
      }}
      onSlideChange={handleSlideChange}
      className="h-full max-w-full"
      allowTouchMove={false}
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="bg-white">
          <div className="flex flex-col h-full bg-white">
            <div className="flex flex-col lg:flex-row flex-1 min-h-0">
              <div className="lg:w-[38%] flex flex-col border-r-2  border-[#CDCDCD] ">
                <div className="flex justify-between gap-4 2xl:mb-6 lg:mb-2 border-b-2 border-[#CDCDCD] p-5">
                  <h3 className="text-[26px]  font-medium">{slide.title}</h3>
                  {slides.length > 1 && (
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        disabled={isBeginning}
                        className="cursor-pointer hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                      >
                        <img
                          src="/parkdetail/pavarrow.svg"
                          alt="Previous"
                          width="45"
                          height="45"
                          className="rotate-180"
                        />
                      </button>
                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        disabled={isEnd}
                        className="cursor-pointer hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity "
                      >
                        <img
                          src="/parkdetail/pavarrow.svg"
                          alt="Next"
                          width="45"
                          height="45"
                        />
                      </button>
                    </div>
                  )}
                </div>

                <div className="pl-7 pr-0 md:space-y-3">
                  <DetailRow
                    label="Available space"
                    value={slide.availableSpace}
                  />
                  <DetailRow label="Usage" value={slide.usage} />
                  <DetailRow label="Height" value={slide.height} />
                  <DetailRow label="Docks" value={slide.docks} />
                  <DetailRow
                    label="Floor strength"
                    value={slide.floorStrength}
                  />
                  <DetailRow
                    label="Availability from"
                    value={slide.availability}
                  />
                  <DetailRow
                    label="Built-To-Suit Possibility"
                    value={slide.bts}
                  />
                </div>
              </div>

              <div className="lg:w-[62%] relative bg-gray-50 p-4 md:p-0 flex items-center justify-center overflow-hidden h-[300px] lg:h-auto border-t lg:border-t-0  border-gray-100 ">
                <img
                  src={slide.masterplan_thumnail}
                  alt={slide.title}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 aspect-[640/577]"
                  // onClick={() => onImageClick(slide.masterplan_thumnail)}
                />
                {/* <button
                  onClick={() => onImageClick(slide.masterplan_thumnail)}
                  className="absolute top-0 right-0 md:top-0 md:right-0 cursor-pointer bg-[#00000010] p-0 hover:bg-[#00000020] transition-colors rounded backdrop-blur-sm"
                >
                  <img
                    src="/parkdetail/expand.svg"
                    className="w-6 h-6 md:w-10 md:h-10"
                    alt="Expand"
                  />
                </button> */}
                <img
                  src="/parkdetail/expand.svg"
                  alt="Expand"
                  onClick={() => onImageClick(slide.masterplan_popup)}
                  className="absolute top-0 right-0 md:top-0 md:right-0 w-6 h-6 md:w-10 md:h-10 cursor-pointer"
                />
              </div>
            </div>

            {/* <div className="w-full border-t-2 border-[#CDCDCD] bg-white p-6 md:px-10 pt-[38px] pb-[40px] grid grid-cols-2 md:grid-cols-4 gap-9 text-xs font-medium text-[#000000]"> */}
            <div className="flex flex-col gap-3 w-full border-t-2 border-[#CDCDCD] bg-white px-6 md:px-7 md:py-5 py-3">
              <h4 className="text-[16px] uppercase font-medium">
                Ease of Connectivity:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-9 text-[16px] text-[#000000]">
                <div className="flex flex-col">
                  <span className="text-[#000000] text-[16px] pb-2 bw-r">
                    Main access:
                  </span>
                  <span className="text-black line-clamp-2 text-[16px] bw-m">
                    {slide.access}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[#000000] text-[16px] pb-2 bw-r">
                    Airport:
                  </span>
                  <span className="text-black line-clamp-2 text-[16px] bw-m">
                    {slide.airport}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#000000] text-[16px] pb-2 bw-r">
                    CBD:
                  </span>
                  <span className="text-black line-clamp-2 text-[16px] bw-m">
                    {slide.cbd}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#000000] text-[16px] pb-2 bw-r">
                    Location:
                  </span>
                  {slide.location && slide.location !== "#" ? (
                    <a
                      href={slide.location}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0254A1] bw-m hover:text-[#F47922] truncate transition-colors text-[16px]"
                    >
                      {slide.location || ""}
                    </a>
                  ) : (
                    <span className="text-black bw-m text-sm">-</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DesktopSlider;
