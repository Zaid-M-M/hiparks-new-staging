"use client";

import React, { useRef, useState } from "react";
import { PlusIcon, MinusIcon, RotateCcw } from "lucide-react";
import MobModal from "./MobModal";

const MobileImageZoomModal = ({ isOpen, image, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const offsetStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleZoom = (type) => {
    if (type === "in") setZoomLevel((p) => Math.min(p + 0.2, 5));
    if (type === "out") setZoomLevel((p) => Math.max(p - 0.2, 1));
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

  return (
    <MobModal isOpen={isOpen} onClose={handleClose}>
      {image ? (
        <div className="relative w-full max-h-[80vh] flex justify-center items-center overflow-hidden bg-white/5">
          <div
            className="relative cursor-grab w-full h-auto aspect-[25.60/20.29] overflow-hidden bg-white"
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
              src={image}
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
  );
};

export default MobileImageZoomModal;
