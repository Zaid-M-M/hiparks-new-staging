"use client";
import React, { useState } from "react";

const White_Paper_sec12 = ({ title = "References", boxes = [] }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#EBEBEB] py-[45px] lg:py-[100px] relative">
      <div className="flex justify-between items-center fixup">
        <h2 className="text-black bw-m text-[28px] xl:text-[64px] xl:leading-[74px] tracking-[-0.04em] md:text-[56px]">
          {title}
        </h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[45px] h-[45px] cursor-pointer 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
        >
          {isOpen ? (
            <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
          ) : (
            <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
              <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
              <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
            </div>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
          isOpen ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-[25px] px-[0px] pt-5 lg:pt-16">
          {boxes.map((box, index) => (
            <div
              key={`box-${index}`}
              className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-5 lg:px-10 py-6 shadow-sm linkcont"
            >
              <div className="mb-4">
                <h3 className="font-bold text-lg lg:text-xl">{box.title}</h3>
                <div
                  className="mt-2"
                  dangerouslySetInnerHTML={{ __html: String(box.html || "") }}
                />
              </div>
              <img
                src="/state/rlbg.svg"
                className="absolute bottom-0 left-0 w-[100px] aspect-square"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default White_Paper_sec12;
