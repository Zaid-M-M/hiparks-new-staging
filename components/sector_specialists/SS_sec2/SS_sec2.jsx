"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sec2_data = [
  {
    image: "/sector_specialist/slide1.png",
    label: "Auto Components",
  },
  {
    image: "/sector_specialist/slide2.png",
    label: "E-Commerce",
  },
  {
    image: "/sector_specialist/slide3.png",
    label: "FMCG",
  },
  {
    image: "/sector_specialist/slide4.png",
    label: "Pharma",
  },
];

const SS_sec2 = () => {
  return (
    <div className="bg-[#000] pt-[45px] lg:pt-[3px] lg:pb-[0px] pb-[55px] md:pt-0 md:pb-0 ">
      <div className="fixup">
        <div className="flex flex-col 1024:flex-row gap-[10px] 1024:gap-[60px] 768:py-[50px] lg:pb-[0px] lg:pt-[20px] items-center h-full 1024:items-start w-full">
          {/* ---- Left Content ---- */}
          <div className="w-full 1024:w-1/2 lg:pt-[76px] lg:pb-[80px]  md:mb-0">
            <div className="768:pb-[15px] pb-[20px] xl:pb-[30px]">
              <h2 className="bw-m text-[38px] leading-[45px] 768:text-[48px] 768:leading-[52px] 1024:text-[52px] 1024:leading-[52px] xl:text-[66px] xl:leading-[76px] capitalize  tracking-[-0.04em] txt_gradient">
                Sector-Specific
              </h2>
              <h3 className="bw-r capitalize text-[35px] leading-[45px] 768:text-[45px] 768:leading-[52px] 1024:text-[48px] 1024:leading-[52px] xl:text-[66px] xl:leading-[76px]  text-white tracking-[-0.04em]">
                Responsive Design
              </h3>
            </div>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
              Today, over 50% developments delivered by Horizon are tailored
              Build-to-Suit (BTS). These numbers reflect more than the volume or
              technical capability—they show our commitment to sector-specific,
              responsive design.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#E0E0E0]">
              Where needed, we also offer temporary space solutions to help
              customers manage seasonal surges—because we understand that
              flexibility isn't a feature; it is a necessity.
            </p>
          </div>

          <div className="w-full 1024:w-1/2 1024:py-[80px] lg:pb-[73px] relative">
            <Swiper
              slidesPerView={1}
              speed={600}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
                renderBullet: (index, className) => {
                  return `<span class="custom-bullet ${className}"></span>`;
                },
              }}
              className="sector_slider custom-swiper"
            >
              {sec2_data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full xl:w-[auto] xl:h-[auto]">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Container */}
            <div className="flex justify-center mt-[25px] 768:mt-[30px] 1024:mt-[43px] space-x-3 custom-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SS_sec2;
