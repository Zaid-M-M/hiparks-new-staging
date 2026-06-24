"use client";
import React from "react";

const DEFAULT_COLORS = [
  "bg-[#f47920]",
  "bg-[#8f53a1]",
  "bg-[#0db14b]",
  "bg-[#939598]",
];

const DEFAULT_ICON = "/white_paper/grade-a/tabledummyicon.svg";

const ComplianceTable = ({
  title,
  col1Header = "GRADE A COMPLIANT",
  col2Header = "GRADE B/C NON-COMPLIANT",
  rows = [],
  col1Icons = [],
  col2Icons = [],
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[680px]">
        {title && (
          <p className="font-semibold! text-[14px] sm:text-[18px] lg:text-[22px] uppercase text-center py-4 sm:py-5 px-4 border border-[#d0d0d0] border-b-0 tracking-wide leading-[1.3]">
            {title}
          </p>
        )}
        <table className="w-full border-collapse border border-[#d0d0d0] text-left">
          <thead>
            <tr>
              <th className="w-[28%] border border-[#d0d0d0] p-0" />
              <th className="w-[36%] border border-[#d0d0d0] px-5 py-4 bw-sb text-[13px] sm:text-[17px] lg:text-[20px] uppercase text-center text-black leading-[1.3]">
                {col1Header}
              </th>
              <th className="w-[36%] border border-[#d0d0d0] px-5 py-4 bw-sb text-[13px] sm:text-[17px] lg:text-[20px] uppercase text-center text-black leading-[1.3]">
                {col2Header}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const bgColor =
                row.categoryColor ||
                DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
              const icon1 = col1Icons[idx] || DEFAULT_ICON;
              const icon2 = col2Icons[idx] || DEFAULT_ICON;
              return (
                <tr key={idx}>
                  <td
                    className={`border border-[#d0d0d0] px-4 sm:px-5 py-4 bw-sb text-[12px] sm:text-[17px] lg:text-[20px] uppercase text-white leading-[1.4] ${bgColor}`}
                  >
                    {row.category}
                  </td>
                  <td className="border border-[#d0d0d0] px-4 sm:px-5 py-4 bg-white">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={icon1}
                        alt=""
                        className="shrink-0 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
                      />
                      <p className="bw-sb font-semibold! text-[11px]! sm:text-[14px] lg:text-[18px]! uppercase text-[#4a4a4a] leading-[16px]! sm:leading-[1.4]!">
                        {row.col1}
                      </p>
                    </div>
                  </td>
                  <td className="border border-[#d0d0d0] px-4 sm:px-5 py-4 bg-white">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={icon2}
                        alt=""
                        className="shrink-0 w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
                      />
                      <p className="bw-sb font-semibold! text-[11px]! sm:text-[14px] lg:text-[18px]! uppercase text-[#4a4a4a] leading-[16px]! sm:leading-[1.4]!">
                        {row.col2}
                      </p>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplianceTable;
