"use client";
import React from "react";

const C_info_data = [
  {
    title: "Material Contracts & Documents",
    pdf: "/offer-documents/material-contracts", // EXACT filename match!
    download_img: "/arrow_btn.svg",
    mark_img: "/Invester/orange_mark.svg",
  },
];

const Material_contacts_sec = () => {
  return (
    <div className="w-full bg-[#EBEBEB]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[408px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[56px] 1280:leading-[66px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px] text-[30px] leading-[36px] tracking-[-1px] bw-r">
              Material Contracts
              <br />
              <span className="bw-r">& Documents</span>
            </h1>
          </div>

          <div className="md:w-[auto] lg:w-[700px] 1280:w-[898px]">
            <div className="flex flex-wrap md:gap-[26px] gap-[16px]">
              {C_info_data.map((info_data, index) => (
                <a
                  key={index}
                  href={info_data.pdf}
                  rel="noopener noreferrer"
                  className="flex justify-between items-center gap-[30px] 1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[75px] md:h-[65px] lg:h-[70px] 1280:h-[100px] bg-[#F7C99B] bw-r text-[20px] md:text-[20px] md:leading-[23px] 1280:text-[24px] 1280:leading-[34px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[25px] 1280:px-[40px] relative overflow-hidden cursor-pointer "
                >
                  <span className="relative z-10 bw-r ">{info_data.title}</span>
                  <img
                    src={info_data.download_img}
                    alt="Download"
                    className="lg:w-[20px] w-[20px] 1280:w-[20px] relative z-10"
                  />
                  <img
                    className="absolute left-0 1280:w-[85px] 1366:w-[85px] w-[60px] bottom-[-5px] pointer-events-none"
                    src={info_data.mark_img}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Material_contacts_sec;
