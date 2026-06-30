"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PopForm from "./PopForm"; // import popup form

const reportOptions = [
  {
    label: "Sustainability Report 2025–26",
    href: "/sustainability-reports/Sus-Report-25-26.pdf",
    filename: "HIP_Sustainability_Report_FY26.pdf",
  },
  {
    label: "Sustainability Report 2024–25",
    href: "/sustainability-reports/Sus-Report-24-25.pdf",
    filename: "HIP_Sustainability_Report_FY25.pdf",
  },
];

const DCSec = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState("");
  const [reportError, setReportError] = useState("");

  // Disable background scroll when modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  return (
    <div className="flex -scroll-mt-20 flex-col relative !z-10">
      <div className="md:h-24 h-12 relative !z-10">
        <img
          src="/sustainability/bird.svg"
          alt=""
          className="w-auto h-12 md:h-24 ml-0 md:ml-6"
        />
      </div>

      <div className="flex items-center justify-center lg:flex-nowrap flex-wrap gap-3 xl:gap-6">
        {/* Sustainability Report */}
        <div className="flex-1 flex flex-col lg:gap-0 items-center justify-center h-[220px] xl:h-[280px] border border-[#D4D4D4] bg-white p-4">
          <img
            src="/sustainability/b3.svg"
            className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
            alt="Bridge"
          />
          <div className="flex flex-col items-center gap-[25px] lg:gap-[20px] w-full md:w-[280px]">
            <div className="relative w-full">
              <select
                value={selectedReport}
                onChange={(e) => {
                  setSelectedReport(e.target.value);
                  setReportError("");
                }}
                className={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-black bw-r focus:outline-none cursor-pointer ${
                  reportError ? "border-red-500" : "border-[#CDCDCD]"
                }`}
              >
                <option value="" disabled>
                  Select Report*
                </option>
                {reportOptions.map((opt) => (
                  <option key={opt.href} value={opt.href}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <svg
                className="absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
              {reportError && (
                <p className="form_error_msg lg:bottom-[-19px]">
                  {reportError}
                </p>
              )}
            </div>
            <button
              onClick={() => {
                if (!selectedReport) {
                  setReportError("Please select the report");
                  return;
                }
                const opt = reportOptions.find(
                  (o) => o.href === selectedReport,
                );
                const a = document.createElement("a");
                a.href = opt.href;
                a.download = opt.filename;
                a.click();
              }}
              className="uppercase cursor-pointer gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center justify-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit w-full"
            >
              <span className="bw-m text-[16px] leading-[16px]">
                Download Report
              </span>
              <img
                src="/sustainability/down.svg"
                className="xl:w-[25px] w-[20px]"
                alt="Download"
              />
            </button>
          </div>
        </div>

        {/* ESG Policies */}
        <div className="xl:flex-[0.8] flex-1 flex flex-col lg:gap-5 items-center justify-center h-[180px] md:h-[220px] border border-[#D4D4D4] bg-white p-4 xl:h-[280px]">
          <img
            src="/sustainability/b2.svg"
            className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
            alt="Bridge"
          />
          <Link
            href="/sustainability-reports/ESG-Policy-FY25.pdf"
            target="_blank"
            download="HIP_Sustainability_policy_FY25.pdf"
            className="uppercase gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
          >
            <span className="bw-m text-[16px] leading-[16px]">
              ESG POLICIES
            </span>
            <img
              src="/sustainability/down.svg"
              className="xl:w-[25px] w-[20px]"
              alt="Download"
            />
          </Link>
        </div>

        {/* Compliance Reports */}
        <div className="flex-1 md:max-w-1/2 flex flex-col lg:gap-5 items-center justify-center h-[180px] md:h-[220px] border border-[#D4D4D4] bg-white p-4 xl:h-[280px]">
          <img
            src="/sustainability/b1.svg"
            className="w-[70px] md:w-[60px] xl:w-[auto] h-auto"
            alt="Bridge"
          />
          <button
            onClick={() => setShowForm(true)}
            className="uppercase cursor-pointer gap-1 xl:gap-4 text-white bg-[#0DB14B] flex items-center px-4 xl:px-[30px] py-2 xl:py-[18px] whitespace-nowrap min-w-fit"
          >
            <span className="bw-m text-[16px] leading-[16px]">
              Compliance Reports
            </span>
            <img
              src="/sustainability/down.svg"
              className="xl:w-[25px] w-[20px]"
              alt="Download"
            />
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-[#00000090] flex items-center justify-center z-[5000]">
          <PopForm onClose={() => setShowForm(false)} />
        </div>
      )}
    </div>
  );
};

export default DCSec;
