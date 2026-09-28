"use client";
import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function AwardSlider({ awards }) {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 16 },
        640: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
        1280: { slidesPerView: 4, spaceBetween: 16 },
        1440: { slidesPerView: 4, spaceBetween: 24 },
        1600: { slidesPerView: 4, spaceBetween: 30 },
      }}
      className="awards_slider"
    >
      {awards.map((award, index) => {
        // 🔹 Prepare images array
        // if award.images is a string → replicate it 3 times
        // else use award.images array directly
        const images = Array.isArray(award.images)
          ? award.images
          : Array.from(
              { length: Math.floor(Math.random() * 4) + 1 }, // random 1–4 images
              () => award.images,
            );

        return (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleFlip(index)}
              className="group w-full 1440:h-[320px] xl:h-[300px] lg:h-[300px] md:h-[300px] h-[300px] [perspective:1000px] my-[25px]"
            >
              <div
                className={`relative w-[99.8%] h-full duration-700 [transform-style:preserve-3d]
                  ${flippedIndex === index ? "[transform:rotateY(180deg)]" : ""}
                  group-hover:[transform:rotateY(180deg)]
                `}
              >
                {/* Front */}
                <div className="absolute left-0 w-full h-full bg-white flex items-center justify-center backface-hidden border border-[#CDCDCD] flex-col cursor-pointer text-center px-[10px] md:px-[16px] 1440:px-[20px]">
                  <h2 className="text-[22px] leading-[30px] md:text-[22px] md:leading-[30px] xl:text-[20px] xl:leading-[27px] 1366:text-[22px] 1366:leading-[29px] 1440:text-[24px] 1440:leading-[32px] bw-m text-[#000] mb-[8px]">
                    {award.title}
                  </h2>
                  <h5 className="bw-m text-[16px] leading-[22px] lg:text-[16px] xl:text-[15px] xl:leading-[21px] 1366:text-[16px] 1366:leading-[22px] 1440:text-[17px] 1440:leading-[24px] text-gray-700">
                    {award.subtitle}
                  </h5>
                  {/* <p className="bw-r text-[15px] lg:text-[15px] xl:text-[15px] leading-[20px] xl:leading-[24px]">
                    {award.description}
                  </p> */}
                  <img
                    src="/brand_journey/flip_icon.svg"
                    className="absolute top-0 right-0"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(99%) sepia(3%) saturate(888%) hue-rotate(339deg) brightness(91%) contrast(90%)",
                    }}
                    alt="flip icon"
                  />
                </div>

                {/* Back */}
                <div className="absolute left-0 w-full h-full bg-white flex items-center justify-center [transform:rotateY(180deg)] border border-[#CDCDCD] backface-hidden flex-col cursor-pointer overflow-hidden">
                  {images.length > 1 ? (
                    <Swiper
                      modules={[Autoplay]}
                      speed={800}
                      autoplay={{ delay: 1000, disableOnInteraction: false }}
                      loop={true}
                      slidesPerView={1}
                      className="w-full h-full"
                    >
                      {images.map((img, i) => (
                        <SwiperSlide key={i}>
                          <img
                            className="absolute bottom-0 w-[75%] xl:w-[93%] 1440:w-[85%] left-1/2 -translate-x-1/2"
                            src={img}
                            alt="award"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <img
                      className="absolute bottom-0 w-[75%] xl:w-[93%] 1440:w-[85%] left-1/2 -translate-x-1/2"
                      src={images[0]}
                      alt="award"
                    />
                  )}
                  <img
                    src="/brand_journey/flip_icon.svg"
                    className="absolute top-0 right-0"
                    alt="flip icon"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}

      {/* Navigation button */}
      {/* <div className="swiper-button-prev !text-black !left-0" />
      <div className="swiper-button-next !text-black !right-0" /> */}

      <div className="flex items-center justify-start !mt-5 gap-4 h-fit w-full">
        <button className="swiper-button-prev group ease-in-out hover:bg-black/80 hover:border-black/80 [&.swiper-button-disabled]:pointer-events-none custom-prev-blogs cursor-pointer xl:w-[80px] xl:h-[80px] h-12 w-12 transition-opacity duration-300 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
          <img
            className="transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert"
            src="/blk_left_arrow.svg"
            alt="Prev"
          />
        </button>
        <button className="swiper-button-next group ease-in-out hover:bg-black/80 hover:border-black/80 [&.swiper-button-disabled]:pointer-events-none custom-next-blogs cursor-pointer xl:w-[80px] xl:h-[80px] h-12 w-12 transition-opacity duration-300 [&.swiper-button-disabled]:opacity-50 border border-gray-400 bg-white flex items-center justify-center">
          <img
            className="transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert"
            src="/blk_right_arrow.svg"
            alt="Next"
          />
        </button>
      </div>
    </Swiper>
  );
}
