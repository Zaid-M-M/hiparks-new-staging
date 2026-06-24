// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { PlusIcon, Minus, RotateCcw } from "lucide-react";
// import Modal from "../parkdetial/gallery/Modal";
// import MobParksAvailability from "./MobParksAvailability";
// // import { parksData } from "./data/parksData";
// import TabButton from "./components/TabButton";
// import NestedTab from "./components/NestedTab";
// import DesktopSlider from "./components/DesktopSlider";

// const ParksAvailability = ({ parksData = {} }) => {
//   const [activeRegion, setActiveRegion] = useState(Object.keys(parksData)[0] || "");
//   const [activeSubTab, setActiveSubTab] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalImage, setModalImage] = useState(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     setActiveSubTab(0);
//   }, [activeRegion]);

//   const regionData = parksData[activeRegion] || [];
//   const activePark = regionData[activeSubTab];
//   const slides = activePark?.slides || [];

//   const handleZoom = (type) => {
//     if (type === "in") setZoomLevel((prev) => Math.min(prev + 0.2, 5));
//     if (type === "out") setZoomLevel((prev) => Math.max(prev - 0.2, 1));
//     if (type === "reset") {
//       setZoomLevel(1);
//     }
//   };

//   const openModal = (imgSrc) => {
//     setModalImage(imgSrc);
//     setZoomLevel(1);
//     setIsModalOpen(true);
//   };

//   return (
//     <React.Fragment>
//       {/* Mobile Version */}
//       <div className="block lg:hidden">
//         <MobParksAvailability parksData={parksData} />
//       </div>

//       {/* Desktop Version */}
//       <div className="hidden lg:block">
//         <div className="w-full bg-black text-white min-h-screen py-10 md:py-20 font-light relative">
//           <img
//             src="/factory/cardsec/bgro.png"
//             className="absolute top-20 right-[max(5%,calc((100vw-1340px)/2))] 1280:w-[553px] 1280:h-[341px] w-[60vw] z-0 h-auto"
//             alt=""
//           />
//           <div className="fix px-4 md:px-0">
//             {/* Header */}
//             <div className="mb-10 lg:mb-16">
//               <h1 className="text-[40px] md:text-[64px] leading-tight">
//                 <span className="txt_gradient font-medium block">
//                   Available
//                 </span>
//                 <span className="text-white font-light flex items-center gap-4">
//                   Spaces
//                   <img
//                     src="/abstract_pattern.webp"
//                     alt="Truck"
//                     className="abstract_svg"
//                   />
//                 </span>
//               </h1>
//             </div>

//             {/* Top Tabs */}
//             <div className="relative w-[90%] mx-auto overflow-x-auto no-scrollbar mb-8 md:mb-16 rounded-2xl border border-[#ffffff20] backdrop-blur-sm bg-[#1a1a1a]">
//               <div className="flex min-w-max">
//                 {Object.keys(parksData).map((region) => (
//                   <TabButton
//                     key={region}
//                     title={region}
//                     isActive={activeRegion === region}
//                     onClick={() => setActiveRegion(region)}
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Content Area */}
//             {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0"> */}
//             <AnimatePresence mode="wait" initial={false}>
//               <motion.div
//                 key={activeRegion}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.2 }}
//                 className="flex max-w-full w-full overflow-hidden"
//               >
//                 {/* Nested Tabs (Sidebar) */}
//                 <motion.div className="lg:w-[20%] flex flex-col pr-20">
//                   {regionData.map((park, index) => (
//                     <NestedTab
//                       key={park.id}
//                       name={park.name}
//                       count={park.slides.length}
//                       isActive={activeSubTab === index}
//                       onClick={() => setActiveSubTab(index)}
//                     />
//                   ))}
//                   {regionData.length === 0 && (
//                     <div className="text-white/50 italic py-4">
//                       No parks available in this region.
//                     </div>
//                   )}
//                 </motion.div>

//                 {/* Slider / Details Card */}
//                 {/* <div className="lg:col-span-9 bg-white text-black min-h-[584px] md:h-[600px] relative shadow-2xl "> */}
//                 <div className="max-w-full bg-white text-black min-h-[584px] md:h-[650px] lg:w-[80%] relative shadow-2xl ">
//                   <AnimatePresence mode="wait" initial={false}>
//                     <motion.div
//                       key={activeSubTab}
//                       className="w-full h-full"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <DesktopSlider slides={slides} onImageClick={openModal} />
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Modal Implementation */}
//           <Modal
//             isOpen={isModalOpen}
//             onClose={() => {
//               setIsModalOpen(false);
//               setZoomLevel(1);
//             }}
//           >
//             {modalImage && (
//               <div className="relative w-full max-h-[80vh] flex justify-center items-center overflow-hidden bg-white/5 md:bg-transparent">
//                 <div
//                   className="relative w-full h-[300px] md:h-[500px] lg:h-[500px] overflow-hidden bg-white"
//                 >
//                   <img
//                     src={modalImage}
//                     alt="Expanded"
//                     ref={imgRef}
//                     draggable={false}
//                     className="absolute top-0 left-0 w-full h-full object-contain select-none"
//                     style={{
//                       transform: `scale(${zoomLevel})`,
//                       transformOrigin: "center center",
//                       transition: "transform 0.1s ease-out",
//                     }}
//                   />
//                 </div>

//                 {/* Zoom Controls */}
//                 <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-2">
//                   <button
//                     className="bg-white text-black p-2 rounded shadow-lg hover:bg-gray-100 transition disabled:opacity-50"
//                     onClick={() => handleZoom("in")}
//                     disabled={zoomLevel >= 5}
//                   >
//                     <PlusIcon className="w-6 h-6" />
//                   </button>
//                   <button
//                     className="bg-white text-black p-2 rounded shadow-lg hover:bg-gray-100 transition disabled:opacity-50"
//                     onClick={() => handleZoom("out")}
//                     disabled={zoomLevel <= 1}
//                   >
//                     <Minus className="w-6 h-6" />
//                   </button>
//                   <button
//                     className="bg-white text-black p-2 rounded shadow-lg hover:bg-gray-100 transition"
//                     onClick={() => handleZoom("reset")}
//                   >
//                     <RotateCcw className="w-6 h-6" />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </Modal>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default ParksAvailability;

"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, Minus, RotateCcw } from "lucide-react";
import ParksModal from "./components/ParksModal";
import MobParksAvailability from "./MobParksAvailability";
// import { parksData } from "./data/parksData";
import { TabButton, NestedTab } from "./components/ParksTabs";
import DesktopSlider from "./components/DesktopSlider";

const ParksAvailability = ({ parksData = {} }) => {
  const [activeRegion, setActiveRegion] = useState(
    Object.keys(parksData)[0] || "",
  );
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  useEffect(() => {
    setActiveSubTab(0);
  }, [activeRegion]);

  const regionData = parksData[activeRegion] || [];
  const activePark = regionData[activeSubTab];
  const slides = activePark?.slides || [];

  const handleZoom = (type) => {
    if (type === "in") setZoomLevel((prev) => Math.min(prev + 0.2, 5));
    if (type === "out") setZoomLevel((prev) => Math.max(prev - 0.2, 1));
    if (type === "reset") {
      setZoomLevel(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  const openModal = (imgSrc) => {
    setModalImage(imgSrc);
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
    setIsModalOpen(true);
  };

  // Drag handlers with boundaries
  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;
    dragStart.current = { x: clientX, y: clientY };
    offsetStart.current = { ...offset };
  };

  const onDrag = (e) => {
    if (!dragging || !imgRef.current) return;
    const clientX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    const clientY = e.type.includes("touch") ? e.touches[0].clientY : e.clientY;

    const img = imgRef.current;
    const container = img.parentElement;

    const imgWidth = img.offsetWidth * zoomLevel;
    const imgHeight = img.offsetHeight * zoomLevel;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let newX = offsetStart.current.x + (clientX - dragStart.current.x);
    let newY = offsetStart.current.y + (clientY - dragStart.current.y);

    // Horizontal boundaries
    if (imgWidth > containerWidth) {
      const maxX = 0;
      const minX = containerWidth - imgWidth;
      newX = Math.max(Math.min(newX, maxX), minX);
    } else {
      newX = 0;
    }

    // Vertical boundaries
    if (imgHeight > containerHeight) {
      const maxY = 0;
      const minY = containerHeight - imgHeight;
      newY = Math.max(Math.min(newY, maxY), minY);
    } else {
      newY = 0;
    }

    setOffset({ x: newX, y: newY });
  };

  const stopDrag = () => setDragging(false);

  return (
    <React.Fragment>
      {/* Mobile Version */}
      <div className="block lg:hidden">
        <MobParksAvailability parksData={parksData} />
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block">
        <div className="w-full bg-black text-white min-h-screen py-10 md:py-20 font-light relative">
          <img
            src="/factory/cardsec/bgro.png"
            className="absolute top-20 right-[max(5%,calc((100vw-1340px)/2))] 1280:w-[553px] 1280:h-[341px] w-[60vw] z-0 h-auto"
            alt=""
          />
          <div className="fix px-4 md:px-0">
            {/* Header */}
            <div className="mb-10 lg:mb-16">
              <h1 className="text-[40px] md:text-[66px] md:leading-[76px] leading-[50px]">
                <span className="txt_gradient font-medium block">
                  Available
                </span>
                <span className="text-white font-light flex items-center gap-4">
                  Spaces
                  <img
                    src="/abstract_pattern.webp"
                    alt="Truck"
                    className="abstract_svg"
                  />
                </span>
              </h1>
            </div>

            {/* Top Tabs */}
            <div className="w-full flex">
              {/* <div className="relative w-[90%] mx-auto overflow-x-auto no-scrollbar mb-8 md:mb-16 rounded-2xl border border-[#ffffff20] backdrop-blur-sm bg-[#1a1a1a]"> */}
              <div className="relative overflow-x-auto no-scrollbar mb-8 w-full md:mb-16 rounded-2xl max-w-fit border border-[#ffffff20] bg-[#333333]">
                {/* <div className="flex min-w-max"> */}
                <div className="flex max-w-full w-full">
                  {Object.keys(parksData).map((region) => (
                    <TabButton
                      key={region}
                      title={region}
                      isActive={activeRegion === region}
                      onClick={() => setActiveRegion(region)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0"> */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeRegion}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex max-w-full w-full justify-between overflow-hidden"
              >
                {/* Nested Tabs (Sidebar) */}
                <motion.div className="lg:w-[16.57%] flex flex-col">
                  {regionData.map((park, index) => (
                    <NestedTab
                      key={park.id}
                      name={park.name}
                      count={park.slides.length}
                      isActive={activeSubTab === index}
                      onClick={() => setActiveSubTab(index)}
                    />
                  ))}
                  {regionData.length === 0 && (
                    <div className="text-white/50 italic py-4">
                      No parks available in this region.
                    </div>
                  )}
                </motion.div>

                {/* Slider / Details Card */}
                {/* <div className="lg:col-span-9 bg-white text-black min-h-[584px] md:h-[600px] relative shadow-2xl "> */}
                <div className="max-w-full bg-white text-black min-h-auto md:h-[600px] w-[80%] 1440:w-[80%] relative">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeSubTab}
                      className="w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <DesktopSlider slides={slides} onImageClick={openModal} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Modal Implementation */}
          <ParksModal
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setZoomLevel(1);
              setOffset({ x: 0, y: 0 });
            }}
          >
            {modalImage && (
              <div className="relative w-full h-full flex justify-center items-center overflow-hidden bg-black">
                <div
                  className="relative cursor-grab w-full h-full overflow-hidden"
                  onMouseDown={startDrag}
                  onMouseUp={stopDrag}
                  onMouseLeave={stopDrag}
                  onMouseMove={onDrag}
                  onTouchStart={startDrag}
                  onTouchEnd={stopDrag}
                  onTouchMove={onDrag}
                >
                  <img
                    src={modalImage}
                    alt="Expanded"
                    ref={imgRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                      transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoomLevel})`,
                      transformOrigin: "top left",
                      transition: dragging ? "none" : "transform 0.1s ease-out",
                    }}
                  />
                </div>

                {/* Zoom Controls */}
                <div className="absolute bottom-2 right-2 flex flex-col gap-2 bg-opacity-40 p-0 rounded">
                  <button
                    className="bg-[#fff] aspect-square text-black text-lg font-bold px-2 py-1 transition border-1 border-[#00000021] m-auto cursor-pointer"
                    onClick={() => handleZoom("in")}
                    disabled={zoomLevel >= 5}
                  >
                    <PlusIcon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    className="bg-[#fff] aspect-square text-black text-lg font-bold px-2 py-1 transition border-1 border-[#00000021] m-auto cursor-pointer"
                    onClick={() => handleZoom("out")}
                    disabled={zoomLevel <= 1}
                  >
                    <Minus className="w-4 h-4 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    className="text-lg aspect-square font-bold px-2 py-1 text-black transition border-1 border-[#00000021] bg-[#fff] cursor-pointer"
                    onClick={() => handleZoom("reset")}
                  >
                    <RotateCcw
                      className="w-4 h-4 sm:w-6 sm:h-6"
                      strokeWidth={1.2}
                    />
                  </button>
                </div>
              </div>
            )}
          </ParksModal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ParksAvailability;
