import React from "react";

export const DetailRow = ({ label, value }) => (
  <div className="flex lg:py-0 py-1">
    <span className="lg:w-[40%] w-[50%] text-[#000000] font-normal text-[16px] shrink-0">
      {label}:
    </span>
    <span className="lg:w-[60%] w-[50%] text-[#000000] font-medium text-[16px]">
      {value || "NA"}
    </span>
  </div>
);
