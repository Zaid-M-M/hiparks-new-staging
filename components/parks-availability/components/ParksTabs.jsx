import React from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

export const TabButton = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(
      "relative flex-1 cursor-pointer 1440:w-[calc(1340px/6)] xl:w-[calc(90vw/6)] h-[60px] md:h-[100px] flex items-center justify-between px-4 md:px-6 transition-all duration-300 overflow-hidden group border-r border-[#ffffff20] last:border-r-0",
      isActive
        ? "text-white"
        : "bg-[#333333] text-[#ffffff] hover:bg-[#333333] hover:text-white",
    )}
  >
    {isActive && (
      <div
        className="absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(110deg, #8F53A1 24.35%, #F47922 107.33%)",
        }}
      />
    )}
    <span
      className={clsx(
        "relative z-10 text-sm md:text-[20px] font-medium whitespace-nowrap",
        isActive ? "bw-m" : "bw-r",
      )}
    >
      {title}
    </span>

    <span className="relative overflow-hidden block w-5 h-5 md:w-8 md:h-16 ml-2 z-10">
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.img
            key="active-icon"
            src="/fulfillment_center/fulfillment_icon_sec5.svg"
            alt="Arrow Right"
            initial={{ x: -10, y: 10, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            exit={{ x: -10, y: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full object-contain text-white"
          />
        )}
      </AnimatePresence>
    </span>
  </button>
);

export const NestedTab = ({ name, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(
      " cursor-pointer w-full  text-left first:pt-0 pt-4 pb-4 md:pt-8 md:pb-8 transition-colors duration-300 border-b border-[#E0E0E0] last:border-b-0 text-[26px]",
      isActive ? "text-[#f47920]" : "text-[#ffffff] hover:text-[#FFFFFF]",
    )}
  >
    <div className="flex items-center justify-between pointer-events-none">
      <span className={clsx("text-lg md:text-xl", isActive ? "bw-m" : "bw-m")}>
        {name} ({count})
      </span>
    </div>
  </button>
);
