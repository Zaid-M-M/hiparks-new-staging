// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/navigation";
// import { DetailRow } from "./SharedComponents";

// const MobSlideContent = ({ region, park, onImageClick }) => {
//   return (
//     <div className="bg-white text-black overflow-hidden">
//       {park.slides.length > 1 ? (
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, EffectFade]}
//             spaceBetween={0}
//             slidesPerView={1}
//             navigation={{
//               prevEl: `.prev-${region}`,
//               nextEl: `.next-${region}`,
//             }}
//             fadeEffect={{ crossFade: true }} // optional but recommended
//             effect="fade"
//             className="h-full w-full"
//           >
//             {park.slides.map((slide, slideIndex) => (
//               <SwiperSlide key={slideIndex}>
//                 <div className="p-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-lg font-medium">{slide.title}</h3>
//                     <div className="flex items-center gap-2">
//                       <button
//                         className={`prev-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
//                       >
//                         <img
//                           src="/parkdetail/pavarrow.svg"
//                           alt="Previous"
//                           width="40"
//                           height="40"
//                           className="rotate-180"
//                         />
//                       </button>
//                       <button
//                         className={`next-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
//                       >
//                         <img
//                           src="/parkdetail/pavarrow.svg"
//                           alt="Next"
//                           width="40"
//                           height="40"
//                         />
//                       </button>
//                     </div>
//                   </div>

//                   {/* Divider: Title → Image */}
//                   <div className="w-full border-t min-w-full my-4 border-gray-300"></div>

//                   <div className="relative p-4 mb-4">
//                     <img
//                       src={slide.masterplan_thumnail}
//                       alt={slide.title}
//                       className="w-full h-48 object-contain cursor-pointer"
//                       onClick={() => onImageClick(slide.masterplan_popup)}
//                     />
//                     <img
//                       src="/parkdetail/expand.svg"
//                       alt="Expand"
//                       onClick={() => onImageClick(slide.masterplan_popup)}
//                       className="absolute top-0 right-0 w-5 h-5 cursor-pointer"
//                     />
//                   </div>

//                   {/* Divider: Image → Details */}
//                   <div className="w-full border-t min-w-full my-4 border-gray-300"></div>

//                   <div className="space-y-2 mb-4">
//                     <DetailRow
//                       label="Available space"
//                       value={slide.availableSpace}
//                     />
//                     <DetailRow label="Usage" value={slide.usage} />
//                     <DetailRow label="Height" value={slide.height} />
//                     <DetailRow label="Docks" value={slide.docks} />
//                     <DetailRow
//                       label="Floor strength"
//                       value={slide.floorStrength}
//                     />
//                     <DetailRow
//                       label="Availability from"
//                       value={slide.availability}
//                     />
//                     <DetailRow
//                       label="Built-To-Suit Possibility"
//                       value={slide.bts}
//                     />
//                   </div>

//                   {/* Divider: Details → Grid */}
//                   <div className="w-full border-t min-w-full my-4 border-gray-300"></div>

//                   <h4 className="text-[16px] uppercase font-medium mb-3">
//                     Ease of Connectivity:
//                   </h4>

//                   <div className="grid grid-cols-2 gap-2">
//                     <div className="">
//                       <span className="text-black bw-m block mb-0.5">
//                         Location:
//                       </span>
//                       {slide.location && slide.location !== "#" ? (
//                         <a
//                           href={slide.location}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-black underline"
//                         >
//                           View Map
//                         </a>
//                       ) : (
//                         <span className="text-black">-</span>
//                       )}
//                     </div>
//                     <div className="">
//                       <span className="text-black bw-m block mb-0.5">
//                         Main access:
//                       </span>
//                       <span className="text-black">{slide.access}</span>
//                     </div>
//                     <div className="">
//                       <span className="text-black bw-m block mb-0.5">
//                         Airport:
//                       </span>
//                       <span className="text-black">{slide.airport}</span>
//                     </div>
//                     <div className="">
//                       <span className="text-black bw-m block mb-0.5">CBD:</span>
//                       <span className="text-black">{slide.cbd}</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       ) : (
//         park.slides.map((slide, slideIndex) => (
//           <div key={slideIndex} className="p-4">
//             <h3 className="text-lg font-medium mb-3">{slide.title}</h3>

//             {/* Divider: Title → Image */}
//             <div className="w-full border-t min-w-full my-4 border-gray-300"></div>

//             <div className="relative p-4 mb-4">
//               <img
//                 src={slide.masterplan_thumnail}
//                 alt={slide.title}
//                 className="w-full h-48 object-contain cursor-pointer"
//                 onClick={() => onImageClick(slide.masterplan_popup)}
//               />
//               <img
//                 src="/parkdetail/expand.svg"
//                 alt="Expand"
//                 onClick={() => onImageClick(slide.masterplan_popup)}
//                 className="absolute top-0 right-0 w-5 h-5 cursor-pointer"
//               />
//             </div>

//             {/* Divider: Image → Details */}
//             <div className="w-full border-t min-w-full my-4 border-gray-300"></div>

//             <div className="space-y- mb-4">
//               <DetailRow label="Available space" value={slide.availableSpace} />
//               <DetailRow label="Usage" value={slide.usage} />
//               <DetailRow label="Height" value={slide.height} />
//               <DetailRow label="Docks" value={slide.docks} />
//               <DetailRow label="Floor strength" value={slide.floorStrength} />
//               <DetailRow label="Availability from" value={slide.availability} />
//               <DetailRow label="Built-To-Suit Possibility" value={slide.bts} />
//             </div>

//             {/* Divider: Details → Grid */}
//             <div className="w-full border-t min-w-full my-4 border-gray-300"></div>

//             <h4 className="text-[16px] uppercase font-medium mb-3">
//               Ease of Connectivity:
//             </h4>

//             <div className="grid grid-cols-2 gap-2">
//               <div>
//                 <span className="text-black bw-m block mb-0.5">Location:</span>
//                 {slide.location && slide.location !== "#" ? (
//                   <a
//                     href={slide.location}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-black underline"
//                   >
//                     View Map
//                   </a>
//                 ) : (
//                   <span className="text-black">-</span>
//                 )}
//               </div>
//               <div>
//                 <span className="text-black bw-m block mb-0.5">
//                   Main access:
//                 </span>
//                 <span className="text-black">{slide.access}</span>
//               </div>
//               <div>
//                 <span className="text-black bw-m block mb-0.5">Airport:</span>
//                 <span className="text-black">{slide.airport}</span>
//               </div>
//               <div>
//                 <span className="text-black bw-m block mb-0.5">CBD:</span>
//                 <span className="text-black">{slide.cbd}</span>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MobSlideContent;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/navigation";
// import { DetailRow } from "./SharedComponents";

// const MobSlideContent = ({ region, park, onImageClick }) => {
//   return (
//     <div className="bg-white text-black overflow-hidden">
//       {park.slides.length > 1 ? (
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, EffectFade]}
//             spaceBetween={0}
//             slidesPerView={1}
//             navigation={{
//               prevEl: `.prev-${region}`,
//               nextEl: `.next-${region}`,
//             }}
//             fadeEffect={{ crossFade: true }}
//             effect="fade"
//             className="h-full w-full"
//           >
//             {park.slides.map((slide, slideIndex) => (
//               <SwiperSlide key={slideIndex}>
//                 {/* TITLE */}
//                 <div className="pt-4 px-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-lg font-medium">{slide.title}</h3>
//                     <div className="flex items-center gap-2">
//                       <button
//                         className={`prev-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
//                       >
//                         <img
//                           src="/parkdetail/pavarrow.svg"
//                           alt="Previous"
//                           width="40"
//                           height="40"
//                           className="rotate-180"
//                         />
//                       </button>
//                       <button
//                         className={`next-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
//                       >
//                         <img
//                           src="/parkdetail/pavarrow.svg"
//                           alt="Next"
//                           width="40"
//                           height="40"
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-full border-t my-4 border-gray-300"></div>

//                 {/* IMAGE - FULL WIDTH */}
//                 <div className="relative mb-4">
//                   <img
//                     src={slide.masterplan_thumnail}
//                     alt={slide.title}
//                     className="w-full h-48 object-contain cursor-pointer"
//                     onClick={() => onImageClick(slide.masterplan_popup)}
//                   />
//                   <img
//                     src="/parkdetail/expand.svg"
//                     alt="Expand"
//                     onClick={() => onImageClick(slide.masterplan_popup)}
//                     className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
//                   />
//                 </div>

//                 <div className="w-full border-t my-4 border-gray-300"></div>

//                 {/* DETAILS */}
//                 <div className="py-4 px-4 space-y-2">
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

//                 <div className="w-full border-t my-4 border-gray-300"></div>

//                 {/* CONNECTIVITY */}
//                 <div className="pb-4 px-4">
//                   <h4 className="text-[16px] uppercase font-medium mb-3">
//                     Ease of Connectivity:
//                   </h4>

//                   <div className="grid grid-cols-2 gap-2">
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">
//                         Location:
//                       </span>
//                       {slide.location && slide.location !== "#" ? (
//                         <a
//                           href={slide.location}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-black underline"
//                         >
//                           View Map
//                         </a>
//                       ) : (
//                         <span className="text-black">-</span>
//                       )}
//                     </div>
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">
//                         Main access:
//                       </span>
//                       <span className="text-black">{slide.access}</span>
//                     </div>
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">
//                         Airport:
//                       </span>
//                       <span className="text-black">{slide.airport}</span>
//                     </div>
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">CBD:</span>
//                       <span className="text-black">{slide.cbd}</span>
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       ) : (
//         park.slides.map((slide, slideIndex) => (
//           <div key={slideIndex}>
//             {/* TITLE */}
//             <div className="pt-4 px-4">
//               <h3 className="text-lg font-medium mb-3">{slide.title}</h3>
//             </div>

//             <div className="w-full border-t my-4 border-gray-300"></div>

//             {/* IMAGE */}
//             <div className="relative mb-4">
//               <img
//                 src={slide.masterplan_thumnail}
//                 alt={slide.title}
//                 className="w-full h-48 object-contain cursor-pointer"
//                 onClick={() => onImageClick(slide.masterplan_popup)}
//               />
//               <img
//                 src="/parkdetail/expand.svg"
//                 alt="Expand"
//                 onClick={() => onImageClick(slide.masterplan_popup)}
//                 className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
//               />
//             </div>

//             <div className="w-full border-t my-4 border-gray-300"></div>

//             {/* DETAILS */}
//             <div className="py-4 px-4 space-y-2">
//               <DetailRow label="Available space" value={slide.availableSpace} />
//               <DetailRow label="Usage" value={slide.usage} />
//               <DetailRow label="Height" value={slide.height} />
//               <DetailRow label="Docks" value={slide.docks} />
//               <DetailRow label="Floor strength" value={slide.floorStrength} />
//               <DetailRow label="Availability from" value={slide.availability} />
//               <DetailRow label="Built-To-Suit Possibility" value={slide.bts} />
//             </div>

//             <div className="w-full border-t my-4 border-gray-300"></div>

//             {/* CONNECTIVITY */}
//             <div className="pb-4 px-4">
//               <h4 className="text-[16px] uppercase font-medium mb-3">
//                 Ease of Connectivity:
//               </h4>

//               <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <span className="text-black bw-m block mb-0.5">
//                     Location:
//                   </span>
//                   {slide.location && slide.location !== "#" ? (
//                     <a
//                       href={slide.location}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-black underline"
//                     >
//                       View Map
//                     </a>
//                   ) : (
//                     <span className="text-black">-</span>
//                   )}
//                 </div>
//                 <div>
//                   <span className="text-black bw-m block mb-0.5">
//                     Main access:
//                   </span>
//                   <span className="text-black">{slide.access}</span>
//                 </div>
//                 <div>
//                   <span className="text-black bw-m block mb-0.5">Airport:</span>
//                   <span className="text-black">{slide.airport}</span>
//                 </div>
//                 <div>
//                   <span className="text-black bw-m block mb-0.5">CBD:</span>
//                   <span className="text-black">{slide.cbd}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MobSlideContent;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { DetailRow } from "./SharedComponents";

// const MobSlideContent = ({ region, park, onImageClick }) => {
//   // Logic: Check if we have more than one slide
//   const hasMultipleSlides = park.slides.length > 1;

//   return (
//     <div className="bg-white text-black overflow-hidden">
//       <div className="relative">
//         <Swiper
//           modules={[Navigation, EffectFade]}
//           spaceBetween={0}
//           slidesPerView={1}
//           // Only enable touch dragging if there are multiple slides
//           allowTouchMove={hasMultipleSlides}
//           navigation={{
//             prevEl: `.prev-${region}`,
//             nextEl: `.next-${region}`,
//           }}
//           fadeEffect={{ crossFade: true }}
//           effect="fade"
//           className="w-full h-full"
//         >
//           {park.slides.map((slide, slideIndex) => (
//             <SwiperSlide className="!min-h-full" key={slideIndex}>
//               <div className="flex flex-col w-full h-full">
//                 {/* TITLE ROW */}
//                 <div className="pt-4 px-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-[25px] font-medium">{slide.title}</h3>

//                     {/* NAVIGATION BUTTONS: Only render if we have multiple slides */}
//                     {hasMultipleSlides && (
//                       <div className="flex items-center gap-2">
//                         <button
//                           className={`prev-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
//                         >
//                           <img
//                             src="/parkdetail/pavarrow.svg"
//                             alt="Previous"
//                             width="40"
//                             height="40"
//                             className="rotate-180"
//                           />
//                         </button>
//                         <button
//                           className={`next-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
//                         >
//                           <img
//                             src="/parkdetail/pavarrow.svg"
//                             alt="Next"
//                             width="40"
//                             height="40"
//                           />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 <div className="w-full border-t mt-4 border-gray-300"></div>

//                 {/* IMAGE - FULL WIDTH */}
//                 <div className="relative">
//                   <img
//                     src={slide.masterplan_thumnail}
//                     alt={slide.title}
//                     className="w-full h-auto object-contain cursor-pointer"
//                     onClick={() => onImageClick(slide.masterplan_popup)}
//                   />
//                   <img
//                     src="/parkdetail/expand.svg"
//                     alt="Expand"
//                     onClick={() => onImageClick(slide.masterplan_popup)}
//                     className="absolute top-2 right-2 w-[30px] h-[30px] cursor-pointer"
//                   />
//                 </div>

//                 <div className="w-full border-t mb-0 border-gray-300"></div>

//                 {/* DETAILS */}
//                 <div className="py-4 px-4 lg:space-y-2">
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

//                 <div className="w-full border-t border-gray-300"></div>

//                 {/* CONNECTIVITY */}
//                 <div className="py-4 bg-[#EBEBEB] px-4 mt-auto">
//                   <h4 className="text-[16px] uppercase font-medium mb-3">
//                     Ease of Connectivity:
//                   </h4>

//                   <div className="grid grid-cols-2 gap-2">
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">
//                         Location:
//                       </span>
//                       {slide.location && slide.location !== "#" ? (
//                         <a
//                           href={slide.location}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-black underline"
//                         >
//                           View Map
//                         </a>
//                       ) : (
//                         <span className="text-black">-</span>
//                       )}
//                     </div>
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">
//                         Main access:
//                       </span>
//                       <span className="text-black">{slide.access}</span>
//                     </div>
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">
//                         Airport:
//                       </span>
//                       <span className="text-black">{slide.airport}</span>
//                     </div>
//                     <div>
//                       <span className="text-black bw-m block mb-0.5">CBD:</span>
//                       <span className="text-black">{slide.cbd}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default MobSlideContent;
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { DetailRow } from "./SharedComponents";

const MobSlideContent = ({ region, park, onImageClick }) => {
  // Logic: Check if we have more than one slide
  const hasMultipleSlides = park.slides.length > 1;

  return (
    <div className="bg-white text-black overflow-hidden h-full">
      <div className="relative h-full">
        <Swiper
          modules={[Navigation, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          // Only enable touch dragging if there are multiple slides
          allowTouchMove={hasMultipleSlides}
          navigation={{
            prevEl: `.prev-${region}`,
            nextEl: `.next-${region}`,
          }}
          fadeEffect={{ crossFade: true }}
          effect="fade"
          // ADDED: [&_.swiper-wrapper]:!h-full to ensure internal wrapper stretches
          className="w-full h-full [&_.swiper-wrapper]:!h-full bg-[#ebebeb]"
        >
          {park.slides.map((slide, slideIndex) => (
            // CHANGED: !min-h-full -> !h-full (Forces slide to fill the wrapper)
            <SwiperSlide className="!h-full" key={slideIndex}>
              <div className="flex flex-col w-full h-full">
                {/* TITLE ROW */}
                <div className="pt-4 px-4 bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-[25px] font-medium">{slide.title}</h3>

                    {/* NAVIGATION BUTTONS: Only render if we have multiple slides */}
                    {hasMultipleSlides && (
                      <div className="flex items-center gap-2">
                        <button
                          className={`prev-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
                        >
                          <img
                            src="/parkdetail/pavarrow.svg"
                            alt="Previous"
                            width="40"
                            height="40"
                            className="rotate-180"
                          />
                        </button>
                        <button
                          className={`next-${region} cursor-pointer hover:opacity-70 disabled:opacity-30 transition-opacity`}
                        >
                          <img
                            src="/parkdetail/pavarrow.svg"
                            alt="Next"
                            width="40"
                            height="40"
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="w-full border-t border-gray-300"></div>

                {/* IMAGE - FULL WIDTH */}
                <div className="relative">
                  <img
                    src={slide.masterplan_thumnail}
                    alt={slide.title}
                    className="w-full h-auto object-contain cursor-pointer"
                    onClick={() => onImageClick(slide.masterplan_popup)}
                  />
                  <img
                    src="/parkdetail/expand.svg"
                    alt="Expand"
                    onClick={() => onImageClick(slide.masterplan_popup)}
                    className="absolute top-2 right-2 w-[30px] h-[30px] cursor-pointer"
                  />
                </div>

                <div className="w-full border-t mb-0 border-gray-300"></div>

                {/* DETAILS - ADDED flex-1 to push footer down */}
                <div className="py-4 px-4 lg:space-y-2 flex-1 bg-white">
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

                <div className="w-full border-t border-gray-300"></div>

                {/* CONNECTIVITY - Stuck to bottom via flex-1 above and mt-auto here */}
                <div className="py-4 bg-[#EBEBEB] px-4 mt-auto">
                  <h4 className="text-[16px] uppercase font-medium mb-3">
                    Ease of Connectivity:
                  </h4>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-black bw-m block mb-0.5">
                        Location:
                      </span>
                      {slide.location && slide.location !== "#" ? (
                        <a
                          href={slide.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black underline"
                        >
                          View Map
                        </a>
                      ) : (
                        <span className="text-black">-</span>
                      )}
                    </div>
                    <div>
                      <span className="text-black bw-m block mb-0.5">
                        Main access:
                      </span>
                      <span className="text-black">{slide.access}</span>
                    </div>
                    <div>
                      <span className="text-black bw-m block mb-0.5">
                        Airport:
                      </span>
                      <span className="text-black">{slide.airport}</span>
                    </div>
                    <div>
                      <span className="text-black bw-m block mb-0.5">CBD:</span>
                      <span className="text-black">{slide.cbd}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MobSlideContent;
