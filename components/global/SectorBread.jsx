"use client";
import React from "react";

export default function SectorBread({ items = [], color = "#000000" }) {
  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex flex-row gap-[3px] p-[10px] cursor-pointer flex-none order-0 grow-0 flex-wrap items-center"
      style={{
        color,
        boxSizing: "border-box",
        backdropFilter: "blur(60px)",
        background: "rgba(0,0,0,0.12)",
        border: "1px solid rgba(0,0,0,0.2)",
      }}
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={`${item.label}-${idx}`}>
            <div className="flex items-center gap-[3px]">
              <a
                href={item.href || "#"}
                className="bw-m text-[14px] leading-[20px]"
                style={{ color }}
                dangerouslySetInnerHTML={{ __html: item.label }}
              />
              {!isLast && <span style={{ color }}>/</span>}
            </div>
          </React.Fragment>
        );
      })}
    </nav>
  );
}
