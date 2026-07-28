"use client";
import React, { useState } from "react";

const hip_data = [
  {
    title: "Consolidated Financial Statements",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },
  {
    title: "Consolidated Audit Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },
  {
    title: "Standalone Financial Statements",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },
  {
    title: "Standalone Audit Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },

  {
    title: "Standalone Audit Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url: "",
    year: "FY 2025-26",
  },

  {
    title: "Standalone Audit Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    pdf_url: "",
    year: "FY 2025-26",
  },
];

const Annual_finanacial_sec = () => {
  const [hipSelectedYear, setHipSelectedYear] = useState("FY 2024-25");

  const hipYears = [...new Set(hip_data.map((item) => item.year))].sort(
    (a, b) => b - a,
  );

  const filteredHipData = hip_data.filter(
    (item) => item.year === hipSelectedYear,
  );

  return (
    <div className="w-full bg-[#fff]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[20px] 1280:gap-[10px] 1366:gap-[10px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[470px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[44px] 1280:leading-[58px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px] text-[30px] leading-[36px] tracking-[-1px] bw-r">
              Annual Audited <br></br>
              <span className="bw-r">Financial Statements</span>
            </h1>
          </div>

          <div className="md:w-[auto] lg:w-[1000px] 1280:w-[1000px]">
            <div className="flex flex-col gap-[65px]">
              {/* Horizon Industrial Parks Limited Section */}
              <div className="w-full">
                {/* Date Dropdown */}
                <div className="mb-[20px]">
                  <select
                    value={hipSelectedYear}
                    onChange={(e) => setHipSelectedYear(e.target.value)}
                    className="outline-none h-[40px] md:h-[50px] cursor-pointer bw-r w-full border-b-[1px] border-[#7C7C7C] md:text-[20px] text-[16px] text-[#000000] md:pb-[10px] lg:pb-[0px] pb-[5px] max-w-[calc(100%-0px)] md:max-w-[calc(50%-20px)]"
                  >
                    {hipYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtered boxes */}
                <div className="flex flex-wrap gap-[10px]">
                  {filteredHipData.map((hip_pdf, index) => (
                    <a
                      key={index}
                      href={hip_pdf.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] md:w-[48%] xl:w-[49%] h-[70px] 1280:h-[100px] bg-[#f7c99b] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[20px] xl:leading-[26px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:pl-[30px] 1280:pr-[25px] relative overflow-hidden"
                    >
                      {hip_pdf.title}
                      <img
                        src={hip_pdf.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      />
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={hip_pdf.mark_img}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annual_finanacial_sec;
