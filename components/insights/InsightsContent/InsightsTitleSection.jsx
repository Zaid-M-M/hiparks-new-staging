"use client";
import React from "react";
import { motion } from "framer-motion";

const InsightsTitleSection = ({ activeTab, title = "Media", rightContent }) => {
  return (
    <div className="fix pt-[40px] xl:pt-[80px] pb-5 xl:pb-[30px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.7, 0, 0.4, 1] }}
        viewport={{ once: true, amount: 0.2 }}
        className={`flex flex-col lg:flex-row justify-between md:gap-[20px] gap-[25px] ${
          rightContent ? "lg:items-center" : ""
        }`}
      >
        <div className="max-w-[600px] md:max-w-[100%] lg:max-w-[50%]">
          <div className="flex items-left flex-col md:items-left relative md:w-[460px] lg:w-[auto]">
            <div className="flex gap-[10px] md:gap-[17px] flex-col items-start">
              {/* <h2 className="lg:w-[auto] capitalize whitespace-nowrap text-[35px] leading-[45px] md:text-[45px] md:leading-[55px] lg:text-[64px] lg:leading-[74px] font-barlow font-normal tracking-[-1.4px] md:tracking-[-1.8px] lg:tracking-[-2.56px] text-black">
                <span className="bw-r">{title}</span>
              </h2> */}
              <div className="flex flex-col gap-[0px] md:gap-[0px] items-start">
                <h2 class="bw-m text-[33px] leading-[40px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] 1366:leading-[74px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:tracking-[-3.04px]">
                  Media
                </h2>
                <h2 class="bw-r text-[33px] leading-[40px] 768:text-[45px] 768:leading-[55px] 1280:text-[56px] 1280:leading-[66px] 1366:text-[64px] tracking-[-1.92px] 1280:tracking-[-2.24px] 1366:leading-[74px] 1366:tracking-[-3.04px]">
                  Horizon Making Headlines
                </h2>
              </div>
              <img
                src="/abstract_pattern.svg"
                alt="Abstract Pattern"
                className="abstract_svg"
              />
            </div>
          </div>
        </div>

        {rightContent && (
          <div className="w-full lg:w-auto lg:shrink-0">{rightContent}</div>
        )}
      </motion.div>
    </div>
  );
};

export default InsightsTitleSection;
