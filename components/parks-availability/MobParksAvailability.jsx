"use client";

import React, { useState, useRef, useEffect } from "react";
import { MinusIcon, PlusIcon, RotateCcw } from "lucide-react"; // Removed unused PlusIcon, Minus
import MobModal from "./components/MobModal";
import MobRegionAccordion from "./components/MobRegionAccordion";

// Custom Gradient SVG Components
const GradientPlus = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradPlus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      ></linearGradient>
    </defs>
    <rect
      x="5.28"
      y="1.2"
      width="1.44"
      height="9.6"
      fill="url(#gradPlus)"
    ></rect>
    <rect
      x="1.2"
      y="5.28"
      width="9.6"
      height="1.44"
      fill="url(#gradPlus)"
    ></rect>
  </svg>
);

const GradientMinus = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradMinus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stop-color="#AC38D9"></stop>
        <stop offset="100%" stop-color="#F47922"></stop>
      </linearGradient>
    </defs>
    <rect
      x="1.2"
      y="5.28"
      width="9.6"
      height="1.44"
      fill="url(#gradMinus)"
    ></rect>
  </svg>
);

const MobParksAvailability = ({ parksData = {} }) => {
  const [openRegion, setOpenRegion] = useState(null);
  const [selectedPark, setSelectedPark] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  /* ✅ OPEN FIRST ACCORDION BY DEFAULT */
  useEffect(() => {
    const regions = Object.keys(parksData);
    if (regions.length > 0) {
      setOpenRegion(regions[0]);
      setSelectedPark({ [regions[0]]: 0 });
    }
  }, [parksData]);

  /* ✅ UPDATED: AUTOMATICALLY CLOSES PREVIOUS ACCORDION */
  const handleRegionToggle = (region) => {
    // Close all dropdowns
    setDropdownOpen({});

    // Simply set the new region. Because openRegion is a single value,
    // the previous one closes automatically.
    setOpenRegion(region);

    setSelectedPark((prev) => ({
      ...prev,
      [region]: prev[region] ?? 0,
    }));
  };

  const handleParkSelect = (region, parkIndex) => {
    setSelectedPark((prev) => ({ ...prev, [region]: parkIndex }));
    setDropdownOpen((prev) => ({ ...prev, [region]: false }));
  };

  const handleDropdownToggle = (region) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  const handleZoom = (type) => {
    if (type === "in") setZoomLevel((p) => Math.min(p + 0.2, 5));
    if (type === "out") setZoomLevel((p) => Math.max(p - 0.2, 1));
    if (type === "reset") {
      setZoomLevel(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  const startDrag = (e) => {
    e.preventDefault();
    setDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragStart.current = { x: clientX, y: clientY };
    offsetStart.current = { ...offset };
  };

  const onDrag = (e) => {
    if (!dragging || !imgRef.current) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const img = imgRef.current;
    const container = img.parentElement;

    const imgWidth = img.offsetWidth * zoomLevel;
    const imgHeight = img.offsetHeight * zoomLevel;

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    let newX = offsetStart.current.x + (clientX - dragStart.current.x);
    let newY = offsetStart.current.y + (clientY - dragStart.current.y);

    if (imgWidth > containerWidth) {
      newX = Math.max(Math.min(newX, 0), containerWidth - imgWidth);
    } else newX = 0;

    if (imgHeight > containerHeight) {
      newY = Math.max(Math.min(newY, 0), containerHeight - imgHeight);
    } else newY = 0;

    setOffset({ x: newX, y: newY });
  };

  const stopDrag = () => setDragging(false);

  const openModal = (img) => {
    setModalImage(img);
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-black text-white min-h-screen py-10 font-light">
      <div className="px-4">
        <div className="lg:mb-10 mb-5">
          <h1 className="text-[40px] leading-tight">
            <span className="txt_gradient font-medium block">Available</span>
            <span className="text-white font-light flex items-center gap-4">
              Spaces
              <img
                src="/abstract_pattern.webp"
                className="abstract_svg"
                alt="pattern"
              />
            </span>
          </h1>
        </div>

        <div className="">
          {Object.keys(parksData).map((region) => (
            <MobRegionAccordion
              key={region}
              region={region}
              parksData={parksData}
              openRegion={openRegion}
              selectedPark={selectedPark}
              dropdownOpen={dropdownOpen}
              onRegionToggle={handleRegionToggle}
              onParkSelect={handleParkSelect}
              onDropdownToggle={handleDropdownToggle}
              onImageClick={openModal}
            />
          ))}
        </div>
      </div>

      <MobModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setZoomLevel(1);
          setOffset({ x: 0, y: 0 });
        }}
      >
        {modalImage ? (
          <div className="relative w-full max-h-[80vh] flex justify-center items-center overflow-hidden bg-white/5 md:bg-transparent">
            <div
              // className="relative cursor-grab w-full h-auto aspect-[25.60/12.29] lg:aspect-auto lg:h-[700px] overflow-hidden bg-white"
              className="relative cursor-grab w-full h-auto aspect-[25.60/20.29] lg:aspect-auto lg:h-[700px] overflow-hidden bg-white"
              onMouseDown={startDrag}
              onMouseMove={onDrag}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
              onTouchStart={startDrag}
              onTouchMove={onDrag}
              onTouchEnd={stopDrag}
            >
              <img
                ref={imgRef}
                src={modalImage}
                draggable={false}
                className="absolute top-0 left-0 w-full h-full object-contain select-none"
                style={{
                  transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoomLevel})`,
                  transformOrigin: "top left",
                  transition: dragging ? "none" : "transform 0.1s ease-out",
                }}
                alt="Park View"
              />
            </div>

            <div className="absolute bottom-2 right-2 flex flex-col gap-2">
              <button
                onClick={() => handleZoom("in")}
                className="bg-white text-black p-0.5 aspect-square border border-[#00000060] flex items-center justify-center"
              >
                {/* <GradientPlus /> */}
                <PlusIcon />
              </button>
              <button
                onClick={() => handleZoom("out")}
                className="bg-white text-black p-0.5 aspect-square border border-[#00000060] flex items-center justify-center"
              >
                <MinusIcon />
              </button>
              <button
                onClick={() => handleZoom("reset")}
                className="bg-white text-black p-0.5 aspect-square border border-[#00000060] flex items-center justify-center"
              >
                <RotateCcw />
              </button>
            </div>
          </div>
        ) : null}
      </MobModal>
    </div>
  );
};

export default MobParksAvailability;
