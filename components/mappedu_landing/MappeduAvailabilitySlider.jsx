"use client";

import React, { useState } from "react";
import DesktopSlider from "./components/DesktopSliderMappedu";
import MobSlideContent from "./components/MobSlideContent";
import ImageZoomModal from "./components/ImageZoomModal";
import MobileImageZoomModal from "./components/MobileImageZoomModal";

const MappeduAvailabilitySlider = ({ slides = [] }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-white relative overflow-hidden z-20">
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[140px] "
        src="/green_vector.svg"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[400px] top-[-50px] right-[0px] lg:top-[-80px] lg:right-[-100px]"
        src="/orange_vector.svg"
      />
      {/* <img
        className="green_vctr absolute -bottom-23 -left-26 w-[200px] lg:w-[450px] pointer-events-none select-none z-0"
        src="/green_vector.svg"
        alt=""
      /> */}
      <div className="lg:my-24 my-12">
        <div className="fix">
          {/* Header */}
          <div className="mb-8 lg:mb-7 flex flex-col items-start w-full">
            <h1 className="sec_hd font-['Barlow'] capitalize">
              <span className="font-medium text-[#000000] block lg:text-[56px] md:text-[46px] text-[32px] tracking-[-4%] leading-[35px] lg:leading-[66px]">
                Available
              </span>
              <span className="font-normal text-[#000000] flex flex-col lg:flex-row md:items-center items-left gap-4 lg:text-[56px] md:text-[46px] text-[32px] tracking-[-4%] leading-[35px] lg:leading-[66px]">
                Spaces in Mappedu
                <img
                  src="/abstract_pattern.webp"
                  alt="Truck"
                  className="abstract_svg"
                />
              </span>
            </h1>
          </div>

          {/* Desktop */}
          {/* <div className="hidden lg:block max-w-full bg-white text-black h-[584px] md:h-[650px] relative shadow-2xl">
            <DesktopSlider slides={slides} onImageClick={openModal} />
          </div> */}
          <div className="hidden lg:block max-w-full bg-[#FFF] text-black h-[584px] md:h-[650px] relative border-1 border-[#CDCDCD] shadow-[0_0_24px_0_rgba(0,0,0,0.05)]">
            <DesktopSlider slides={slides} onImageClick={openModal} />
          </div>

          {/* Mobile */}
          <div className="block lg:hidden">
            <MobSlideContent
              region="Mappedu"
              park={{ slides }}
              onImageClick={openModal}
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <ImageZoomModal
          isOpen={isModalOpen}
          image={modalImage}
          onClose={closeModal}
        />
      </div>
      <div className="block lg:hidden">
        <MobileImageZoomModal
          isOpen={isModalOpen}
          image={modalImage}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default MappeduAvailabilitySlider; // "use client";

// import React, { useState } from "react";
// import DesktopSlider from "../parks-availability/components/DesktopSlider";
// import MobSlideContent from "../parks-availability/components/MobSlideContent";
// import ImageZoomModal from "../parks-availability/components/ImageZoomModal";
// import MobileImageZoomModal from "../parks-availability/components/MobileImageZoomModal";

// const MappeduAvailabilitySlider = ({ slides = [] }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState(null);

//   const openModal = (imgSrc) => {
//     setModalImage(imgSrc);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   if (slides.length === 0) {
//     return null;
//   }

//   return (
//     <div className="w-full bg-white">
//             {/* Header */}
//             <div className="mb-10 lg:mb-16">
//               <h1 className="text-[40px] md:text-[66px] md:leading-[76px] leading-[50px]">
//                 <span className="text-black font-medium block">
//                   Available
//                 </span>
//                 <span className="text-black font-light flex items-center gap-4">
//                   Spaces in Mappedu
//                   <img
//                     src="/abstract_pattern.webp"
//                     alt="Truck"
//                     className="abstract_svg"
//                   />
//                 </span>
//               </h1>
//             </div>
//       <div className="fix">
//         {/* Desktop */}
//         <div className="hidden lg:block max-w-full bg-white text-black h-[584px] md:h-[650px] relative shadow-2xl">
//           <DesktopSlider slides={slides} onImageClick={openModal} />
//         </div>

//         {/* Mobile */}
//         <div className="block lg:hidden">
//           <MobSlideContent
//             region="Mappedu"
//             park={{ slides }}
//             onImageClick={openModal}
//           />
//         </div>
//       </div>

//       <div className="hidden lg:block">
//         <ImageZoomModal
//           isOpen={isModalOpen}
//           image={modalImage}
//           onClose={closeModal}
//         />
//       </div>
//       <div className="block lg:hidden">
//         <MobileImageZoomModal
//           isOpen={isModalOpen}
//           image={modalImage}
//           onClose={closeModal}
//         />
//       </div>
//     </div>
//   );
// };

// export default MappeduAvailabilitySlider;
