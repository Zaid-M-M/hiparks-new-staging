"use client";
import React, { useState } from "react";

const matsub_data = [
  {
    title: "Farukhnagar Logistics Parks LLP",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },
  {
    title: "Vidharbha Cargo Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },
  {
    title: "FRK II Industrial Park Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2024-25",
  },
  {
    title: "LI Industrial Parks Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2023-24",
  },
  {
    title: "Volumnus Developers Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2023-24",
  },
  {
    title: "Talegaon Industrial Parks Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2023-24",
  },
  {
    title: "Panvel Logistics and Warehousing Solutions Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2022-23",
  },
  {
    title: "Banamakanahalli Industrial and Logistics Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2022-23",
  },
  {
    title: "Embassy Industrial Park Hosur Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2022-23",
  },
  {
    title: "Malur Logistics and Industrial Parks Pvt Ltd",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    pdf_url: "",
    year: "FY 2022-23",
  },
];

const Financial_results_secF = () => {
  const [matsubSelectedYear, setMatsubSelectedYear] = useState("FY 2024-25");

  const matsubYears = [...new Set(matsub_data.map((item) => item.year))].sort(
    (a, b) => b - a,
  );

  const filteredMatsubData = matsub_data.filter(
    (item) => item.year === matsubSelectedYear,
  );

  return (
    <div className="w-full bg-[#EBEBEB]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[20px] 1280:gap-[10px] 1366:gap-[10px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[470px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[44px] 1280:leading-[58px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px] text-[30px] leading-[36px] tracking-[-1px] bw-r">
              Financial
              <span className="bw-r"> Results</span>
            </h1>
          </div>

          <div className="md:w-[auto] lg:w-[1000px] 1280:w-[1000px]">
            <div className="flex flex-col gap-[65px]">
              {/* Material Subsidiaries Section */}
              <div className="w-full">
                <h1 className="flex items-center text-left pb-[10px] lg:pb-[5px] xl:text-[29px] xl:leading-[39px] 1440:text-[32px] 1440:leading-[42px] xl:tracking-[-2.03px] lg:text-[23px] lg:leading-[33px] lg:tracking-[-1.6px] text-[21px] leading-[31px] tracking-[-1px] bw-r">
                  Material Subsidiaries
                </h1>

                {/* Date Dropdown */}
                <div className="mb-[20px]">
                  <select
                    value={matsubSelectedYear}
                    // onChange={(e) =>
                    //   setMatsubSelectedYear(Number(e.target.value))
                    // }
                    onChange={(e) => setMatsubSelectedYear(e.target.value)}
                    className="outline-none h-[40px] md:h-[50px] cursor-pointer bw-r w-full border-b-[1px] border-[#7C7C7C] md:text-[20px] text-[16px] text-[#000000] md:pb-[10px] lg:pb-[0px] pb-[5px] max-w-[calc(100%-0px)] md:max-w-[calc(50%-20px)]"
                  >
                    {matsubYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Filtered boxes */}
                <div className="flex flex-wrap gap-[10px]">
                  {filteredMatsubData.map((MS_pdf, index) => (
                    <a
                      key={index}
                      href={MS_pdf.pdf_url}
                      target="_blank"
                      className="flex justify-between items-center gap-[5px] w-[100%] md:w-[48%] xl:w-[49%] h-[70px] md:h-[70px] lg:h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[17px] md:text-[14px] md:leading-[17px] xl:text-[20px] xl:leading-[26px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[20px] 1280:px-[25px] relative overflow-hidden"
                    >
                      {MS_pdf.title}
                      <img
                        src={MS_pdf.download_img}
                        className="lg:w-[30px] w-[30px] 1280:w-[40px]"
                      />
                      <img
                        className="absolute left-0 1280:w-[63px] 1366:w-[63px] w-[50px] bottom-[-5px]"
                        src={MS_pdf.mark_img}
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

export default Financial_results_secF;
