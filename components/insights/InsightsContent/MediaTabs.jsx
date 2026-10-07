"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// Compact version of InsightsTabs (same look) that sits at the right end of
// the "Media" title row.
const MediaTabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="grid grid-cols-2 lg:flex w-full lg:w-auto overflow-hidden bg-white rounded-2xl lg:rounded-[20px] border border-[#CDCDCD]">
      {tabs.map((tab, i) => {
        const isActive = tab.title === activeTab;

        return (
          <motion.button
            key={tab.title}
            type="button"
            onClick={() => onTabChange(tab.title)}
            initial={false}
            animate={{
              backgroundImage: isActive
                ? "linear-gradient(90deg, rgba(143, 83, 161, 1) 18%, rgba(244, 121, 34, 1) 96%)"
                : "linear-gradient(to right, #ffffff, #ffffff)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={clsx(
              "relative flex items-center justify-between gap-[12px] overflow-hidden cursor-pointer focus:outline-none h-[52px] md:h-[64px] xl:h-[96px] px-[16px] md:px-[20px] lg:min-w-[200px] xl:min-w-[240px]",
              i !== tabs.length - 1 && "border-r border-[#CDCDCD]",
            )}
          >
            <motion.span
              animate={{ color: isActive ? "#ffffff" : "#000000" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="text-left whitespace-nowrap text-[14px] md:text-[19px] xl:text-[24px] bw-r"
            >
              {tab.title}
            </motion.span>

            <span className="hidden md:flex shrink-0 items-center justify-center w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] xl:w-[32px] xl:h-[32px] relative overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                {isActive && (
                  <motion.img
                    key="active-icon"
                    initial={{ y: "100%", x: "-100%", opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    exit={{ y: "100%", x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.7, 0, 0.4, 1] }}
                    src="/whiteexternal.svg"
                    alt="Active"
                    className="w-full h-full"
                  />
                )}
              </AnimatePresence>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default MediaTabs;
