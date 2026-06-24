"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const RelatedParksMobile = ({ parks }) => {
  return (
    <div className="mt-5 md:!hidden block relative">
      {parks.length < 2 ? (
        <AnimatePresence mode="wait">
          {parks.map((park) => (
            <div key={park.id} className="mb-12">
              <div className="flex justify-center items-center">
                <div className="w-full">
                  <div className="relative overflow-hidden bg-white border border-[#c3c3c3] group">
                    <div className="relative w-full h-[300px] overflow-hidden">
                      <Image
                        src={park.image}
                        alt={park.title}
                        fill
                        priority
                        unoptimized
                        className="object-cover"
                      />

                    </div>
                    <div
                      className="relative px-[16px] py-[20px] flex flex-col"
                      style={{ minHeight: "240px" }}
                    >
                      {/* Date */}
                      <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
                        <Image
                          src="/calendaricon.svg"
                          alt="Calendar"
                          width={24}
                          height={24}
                        />
                        <span className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]">
                          {park.date}
                        </span>
                      </div>

                      <div className="flex-1" />

                      {/* Title */}
                      <div className="absolute left-[16px] right-[16px] bottom-auto top-[70px]">
                        <h3
                          className="bw-m text-[24px] text-left leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
                          style={{ display: "-webkit-box" }}
                        >
                          {park.title}
                        </h3>
                      </div>

                      {/* Read More Button */}
                      <Link href={`/case-studies/${park.slug}`}>
                        <div className="absolute left-[16px] right-[16px] bottom-[16px]">
                          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
                            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
                              READ MORE
                            </span>
                            <img
                              alt=""
                              className="w-5 h-5"
                              src="/blackexternal.svg"
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatePresence>
      ) : (
        <div className="w-full">
          <Swiper
            key="swiper-parks"
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".custom-next-parks",
              prevEl: ".custom-prev-parks",
            }}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            slidesPerView={1}
            className="w-full"
          >
            {parks.map((park) => (
              <SwiperSlide key={park.id}>
                <AnimatePresence mode="wait">
                  <div key={park.id} className="relative pb-[1px]">
                    <div className="relative overflow-hidden bg-white border border-[#c3c3c3] group">
                      <div className="relative w-full h-[300px] overflow-hidden">
                        <Image
                          src={park.image}
                          alt={park.title}
                          fill
                          priority
                          unoptimized
                          className="object-cover"
                        />

                      </div>
                      <div
                        className="relative px-[16px] py-[20px] flex flex-col"
                        style={{ minHeight: "240px" }}
                      >
                        {/* Date */}
                        <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
                          <Image
                            src="/calendaricon.svg"
                            alt="Calendar"
                            width={24}
                            height={24}
                          />
                          <span className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]">
                            {park.date}
                          </span>
                        </div>
                        <div className="flex-1" />

                        {/* Title */}
                        <div className="absolute left-[16px] right-[16px] bottom-auto top-[70px]">
                          <h3
                            className="bw-m text-[24px] text-left leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
                            style={{ display: "-webkit-box" }}
                          >
                            {park.title}
                          </h3>
                        </div>

                        {/* Read More */}
                        <Link href={`/case-studies/${park.slug}`}>
                          <div className="absolute left-[16px] right-[16px] bottom-[16px]">
                            <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
                              <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
                                READ MORE
                              </span>
                              <img
                                alt=""
                                className="w-5 h-5"
                                src="/blackexternal.svg"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatePresence>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-end !mt-5 !mb-0 gap-4 h-10 w-full">
            <button className="custom-prev-parks cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/stateprev.svg" alt="Prev" />
            </button>
            <button className="custom-next-parks cursor-pointer h-10 w-10 transition-opacity duration-200 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
              <img src="/state/statenext.svg" alt="Next" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default RelatedParksMobile;
