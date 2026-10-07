"use client";
import React from "react";
import { motion } from "framer-motion";

// Same gradient as the active tab (InsightsTabs / MediaTabs)
const TAB_GRADIENT =
  "linear-gradient(90deg, rgba(143, 83, 161, 1) 18%, rgba(244, 121, 34, 1) 96%)";

// Two-line intro shown between the tabs and the cards on Media / Resources.
// The gradient spans the whole block, so the shorter first line stays purple
// and the longer second line runs from purple to orange.
const GradientIntroText = ({ lines = [], className = "" }) => {
  return (
    <div className={`fix ${className}`}>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-fit max-w-full bw-r text-[18px] leading-[28px] md:text-[20px] md:leading-[30px] xl:text-[28px] xl:leading-[36px] bg-clip-text text-transparent"
        style={{ backgroundImage: TAB_GRADIENT }}
      >
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </motion.p>
    </div>
  );
};

export default GradientIntroText;
