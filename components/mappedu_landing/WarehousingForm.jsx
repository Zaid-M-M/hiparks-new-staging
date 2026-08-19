"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Mappedu_Form from "./Mappedu_Form";

const WarehousingForm = () => {
  return (
    <>
      <div
        id="book-a-site-visit"
        className="h-[565px] gap-[20px] lg:h-auto lg:pt-0 w-full flex flex-col justify-start lg:justify-between bg-cover bg-center md:bg-bottom lg:bg-center bg-[url('/mappedu_landing/Mappedo_Mobile.webp')] lg:bg-[url('/mappedu_landing/Mappedo_Hero.webp')]"
      >
        <div className="fix !my-[0px] lg:my-auto  pt-[30px] lg:pt-10">
          <div className="w-[323px] flex gap-[14px]">
            <Link href="/">
              <motion.img
                key={"Horizon_White"}
                className="max-w-full"
                src={"/nav/Horizon_White.svg"}
                alt="Hipark Logo"
              />
            </Link>
            <a href="https://www.blackstone.com/" target="_blank">
              <motion.img
                key={"blackstone_white"}
                className="max-w-full"
                src={"/nav/blackstone_white.svg"}
                alt="Blackstone Logo"
              />
            </a>
          </div>
        </div>

        <div className="fix !my-[0px] lg:my-auto  pb-20">
          <div className="flex flex-col pt-[20px] lg:pt-12 lg:flex-row items-end justify-end gap-12 lg:gap-20">
            {/* Left Section */}
            <div className="lg:w-[55%] flex flex-col justify-center gap-3 lg:gap-10 w-full lg:pb-6">
              <div className="flex flex-col gap-4 lg:gap-7">
                <h1 className="lg:text-[43px] 2xl:text-[48px] text-[32px] bw-m leading-[35px] tracking-[-1.9px] lg:leading-[53px] 2xl:leading-[58px] text-white">
                  Grow your operations in a Grade-A
                  {/* <div className="flex items-start flex-col lg:flex-row overflow-visible">
                    <span className="font-normal leading-[35px] tracking-[-1.9px] lg:leading-[58px] whitespace-nowrap">
                      in a Grade-A Industrial Park
                    </span>
                  </div> */}
                  <div className="flex items-start flex-col lg:flex-row overflow-visible">
                    <span className="font-normal leading-[35px] tracking-[-1.9px] lg:leading-[58px] whitespace-nowrap">
                      Industrial Park in Mappedu
                    </span>
                    <img
                      className="lg:mt-[5px] ml-0 pt-2 lg:pt-0 lg:ml-5 w-[80px] lg:w-[170px]! block lg:inline-block 2xl:w-[210px]! shrink-0 abstract_svg"
                      src={"/abstract_pattern.svg"}
                      alt=""
                    />
                  </div>
                </h1>

                <div className="text-white">
                  {/* Acres div */}
                  <div>
                    {/* <h3 className="text-[30px] md:text-[48px] leading-[28px] md:leading-[58px] font-medium text-[#fff]">
      51{" "}
      <span className="text-[19px] md:text-[28px] leading-[32px] md:leading-[38px] font-normal ">
        Acres
      </span>{" "}
    </h3> */}
                    <span className="font-['Barlow'] text-[#FFF] text-[18px] md:text-[24px] 2xl:text-[28px] leading-normal [leading-trim:both] [text-edge:cap]">
                      <span className="font-medium">0.25 </span>
                      <span className="font-normal">
                        msft Available for Lease
                      </span>
                    </span>
                  </div>
                  <span className="w-[1px] h-[35px] md:h-[46px] bg-white"></span>
                  {/*  msft div */}
                  {/* <div>
                    <h3 className="text-[30px] md:text-[48px] leading-[28px] md:leading-[58px] font-medium text-[#fff]">
                      1.3{" "}
                      <span className="text-[19px] md:text-[28px] leading-[32px] md:leading-[38px] font-normal">
                        msft
                      </span>{" "}
                    </h3>
                  </div> */}
                </div>
              </div>
              <button className="flex justify-between lg:h-[56px] tracking-[2px] items-center gap-3 bg-none border-2 px-[10px] py-[5px] lg:p-2 mr-auto border-white lg:px-[20px] lg:py-[14px] text-white text-xl font-medium max-w-fit">
                <img
                  src="/Campaign/phone.svg"
                  className="lg:w-[26px] w-[20px]"
                  alt=""
                />
                <a
                  href="tel:+918879970705"
                  className="text-[14px] tracking-[2px] leading-[26px] lg:text-[20px]"
                >
                  CALL US : <span className="font-[700]!">8879970705</span>
                </a>
              </button>
            </div>

            {/* Desktop Right Section - Form */}
            <div className="w-full lg:w-[45%] campaigninput bg-white hidden lg:flex flex-col gap-7 p-[20px] md:p-[30px] items-start">
              <Mappedu_Form />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Form Div */}
      <div className="w-full lg:w-[40%] campaigninput bg-white flex lg:hidden flex-col gap-[15px] md:gap-7 pt-[20px] pb-[40px] px-[20px] md:p-[30px] items-start">
        <Mappedu_Form />
      </div>
    </>
  );
};

export default WarehousingForm;
