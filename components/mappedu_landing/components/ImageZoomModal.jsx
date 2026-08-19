"use client";

import React, { useRef, useState } from "react";
import { PlusIcon, Minus, RotateCcw } from "lucide-react";
import ParksModal from "./ParksModal";

const ImageZoomModal = ({ isOpen, image, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleZoom = (type) => {
    if (type === "in") setZoomLevel((prev) => Math.min(prev + 0.2, 5));
    if (type === "out") setZoomLevel((prev) => Math.max(prev - 0.2, 1));
    if (type === "reset") {
      setZoomLevel(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleClose = () => {
    setZoomLevel(1);
    setOffset({ x: 0, y: 0 });
    onClose();
  };

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
    <ParksModal isOpen={isOpen} onClose={handleClose}>
      {image && (
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
              src={image}
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
              <RotateCcw className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={1.2} />
            </button>
          </div>
        </div>
      )}
    </ParksModal>
  );
};

export default ImageZoomModal;
