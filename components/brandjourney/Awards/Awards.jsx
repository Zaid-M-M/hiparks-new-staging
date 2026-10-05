"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AwardSlider from "./_components/AwardSlider";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import awards from "./NewAwards/data/awardsData";

const Awards = () => {
  const [value, setValue] = useState("2025"); // default selected year

  // Get unique years from awards data
  const years = [...new Set(awards.map((a) => a.year))].sort((a, b) => b - a);

  // For mobile dropdown (keep both in sync)
  const [activeTab, setActiveTab] = useState(
    years.findIndex((y) => y.toString() === value),
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const index = years.findIndex((y) => y.toString() === newValue);
    setActiveTab(index);
  };

  const handleDropdownChange = (index) => {
    setActiveTab(index);
    setValue(years[index].toString());
  };

  return (
    <div className="relative overflow-hidden bg-[#fff]">
      {/* Background Vectors */}
      <img
        className="green_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[0px] md:left-[-100px] left-[-80px] lg:top-[-100px] xl:left-[-300px] 1920:left-[-200px]"
        src="/green_vector.svg"
        alt="green vector"
      />
      <img
        className="orange_vctr absolute w-[200px] md:w-[300px] lg:w-[300px] xl:w-[auto] top-[50px] md:left-[-100px] left-[0px] lg:top-[-200px] xl:left-[-200px] 1920:left-[0px]"
        src="/orange_vector.svg"
        alt="orange vector"
      />

      {/* Main Section */}
      <div className="relative fix overflow-hidden pt-[45px] md:pt-[60px] pb-[45px] lg:pb-[0px]">
        <div className="flex w-full">
          <div className="w-full">
            <TabContext value={value.toString()}>
              <div className="w-full flex justify-between items-center gap-3 flex-col md:gap-5 md:flex-row xl:gap-[100px]">
                <div className="flex md:flex-row flex-col gap-2 md:gap-10 justify-between w-full">
                  {/* Left Heading Section */}
                  <div className="flex gap-[10px] md:gap-[17px] flex-col">
                    <h2 className="1366:text-[56px] 1024:text-[48px] text-[28px] md:text-[35px] leading-[38px] 1366:leading-[66px] 1024:leading-[58px] 1024:tracking-[-1.92px] 1366:tracking-[-2.24px] bw-r ">
                      <span className="inline-flex bw-m items-center">
                        Recognised for{" "}
                      </span>
                      <br />
                      What We Deliver.
                    </h2>
                    <img
                      src="/abstract_pattern.svg"
                      alt="pattern"
                      className="abstract_svg w-max"
                    />
                  </div>

                  {/* Right Tabs or Dropdown */}
                  <div className="flex md:w-1/2 flex-col lg:justify-start gap-5 mt-[25px]">
                    {/* ✅ Show dropdown for mobile/tablet */}
                    <CustomDropdown
                      categories={years.map((y) => y.toString())}
                      activeTab={activeTab}
                      setActiveTab={handleDropdownChange}
                      className="w-full mt-6 relative xl:hidden" // visible below 1024px
                    />

                    {/* ✅ Show tabs for desktop only */}
                    <div className="hidden xl:flex lg:justify-end">
                      <div className="w-fit mt-0">
                        <TabList
                          onChange={handleChange}
                          aria-label="awards year tabs"
                          className="border border-[#CDCDCD] rounded-[20px]"
                        >
                          {years.map((year) => (
                            <Tab
                              key={year}
                              value={year.toString()}
                              className="!border-r last:!border-none !border-[#CDCDCD]"
                              label={
                                <div className="flex items-center gap-1">
                                  <span>{year}</span>
                                  {value.toString() === year.toString() && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="30"
                                      height="30"
                                      viewBox="0 0 39 40"
                                      fill="none"
                                    >
                                      <path
                                        d="M8.125 31.3745L30.875 8.62451"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M8.125 8.62451H30.875V31.3745"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </div>
                              }
                              sx={{
                                height: {
                                  xs: "60px",
                                  lg: "100px",
                                  xl: "100px",
                                },
                                width: { xs: "50%", lg: "160px", xl: "165px" },
                                color: "#000",
                                fontFamily: "Barlow",
                                fontSize: {
                                  xs: "19px",
                                  md: "21px",
                                  lg: "23px",
                                },
                                fontWeight: "400",
                                textTransform: "none",
                                "&.Mui-selected": {
                                  background:
                                    "linear-gradient(110deg, #8f53a1 24.35%, #f47922 107.33%)",
                                  color: "#fff",
                                  border: "none",
                                },
                              }}
                            />
                          ))}
                        </TabList>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Panels --- */}
              {years.map((year) => (
                <TabPanel
                  key={year}
                  value={year.toString()}
                  sx={{
                    float: "left",
                    paddingTop: "30px",
                    paddingLeft: 0,
                    paddingRight: 0,
                    width: "100%",
                  }}
                >
                  <AwardSlider awards={awards.filter((a) => a.year === year)} />
                </TabPanel>
              ))}
            </TabContext>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
