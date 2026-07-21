"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sec2_data = [
  {
    image: "/enquiry_campaign/p1.webp",
    label: "Auto Components",
  },
  {
    image: "/enquiry_campaign/p2.webp",
    label: "E-Commerce",
  },
  {
    image: "/enquiry_campaign/p3.webp",
    label: "FMCG",
  },
  {
    image: "/enquiry_campaign/p4.webp",
    label: "Pharma",
  },
];

const EC_Partner = () => {
  return (
    <div className="bg-[#fff] pt-[45px] lg:pt-[3px] lg:pb-[0px] pb-[55px] md:pt-0 md:pb-0 ">
      <div className="fixup">
        <div className="flex flex-col 1024:flex-row gap-[10px] 1024:gap-[60px] 768:py-[50px] lg:pb-[0px] lg:pt-[20px] items-center h-full 1024:items-start w-full">
          {/* ---- Left Content ---- */}
          <div className="w-full 1024:w-1/2 lg:pt-[76px] lg:pb-[80px]  md:mb-0">
            <div className="768:pb-[15px] pb-[20px] xl:pb-[30px]">
              <h2 className="bw-m text-[26px] leading-[35px] lg:leading-[52px] tracking-[-1.76px] lg:text-[40px] xl:text-[44px] text-[#2E3133]">
                One Partner <br></br>
                <span className="bw-r">Endless Possibilities</span>
                <img
                  src="/abstract_pattern.webp"
                  className="abstract_svg block lg:ml-5 pt-2 lg:pt-0 lg:inline-block"
                  alt=""
                />
              </h2>
            </div>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#000]">
              With our end-to-end capabilities, centralised design standards,
              and predictable construction timelines, Horizon enables faster
              decisions and seamless delivery-at-scale for your business.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#000]">
              Value additions like turnkey delivery, renewable energy, cold
              storage, skilling centres and staff accommodation help our
              customers scale with confidence and make us the go-to- partner for
              ready-to-move in, built-to-suit, and plug & play requirements.
            </p>
            <p className="bw-r md:text-[17px] lg:text-[17px] 1280:text-[20px] md:leading-[30px] mb-[20px] text-[#000]">
              With all our operational parks IGBC certified, we embed
              sustainability, efficiency, and long- term value into every
              development - helping occupiers meet global ESG expectations with
              certainty.
            </p>
          </div>

          <div className="w-full 1024:w-1/2 1024:py-[80px] lg:pb-[73px] relative">
            <Swiper
              slidesPerView={1}
              speed={600}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".EC-pagination",
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
            <div className="flex justify-center mt-[25px] 768:mt-[30px] 1024:mt-[43px] space-x-3 EC-pagination" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EC_Partner;
