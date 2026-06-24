"use client";
import React from "react";

const WhitePaperReferences = ({
  title = "DATA & STATS:",
  items = [],
  bgClassName = "",
  textClassName = "",
  vectorPurpleSrc = "",
  vectorPurpleAlt = "Purple Vector",
  vectorOrangeSrc = "",
  vectorOrangeAlt = "Orange Vector",
}) => {
  return (
    <section className={`relative fix lg:py-24 py-12 ${bgClassName}`.trim()}>
      {vectorPurpleSrc ? (
        <img
          className="purple_vctr hidden md:block absolute bottom-10 right-10 md:w-[370px] w-[300px]"
          src={vectorPurpleSrc}
          alt={vectorPurpleAlt}
        />
      ) : null}
      {vectorOrangeSrc ? (
        <img
          className="orange_vctr hidden md:block absolute bottom-15 right-20 md:w-[370px] w-[300px]"
          src={vectorOrangeSrc}
          alt={vectorOrangeAlt}
        />
      ) : null}

      {title ? (
        <h2
          className={`text-[40px] leading-[38px] tracking-[-1.6px] bw-m pb-[30px] ${textClassName}`.trim()}
          dangerouslySetInnerHTML={{ __html: String(title) }}
        />
      ) : null}

      <ul
        className={`space-y-3 xl:text-[20px] xl:leading-[30px] text-[16px] leading-[24px] ${textClassName}`.trim()}
      >
        {items.map((item, index) => (
          <li
            key={`ref-${index}`}
            className={`bw-r relative xl:pl-8 pl-4 before:content-[''] before:absolute before:left-0 xl:before:top-3 before:top-2 xl:before:w-3 before:w-2 xl:before:h-3 before:h-2 before:rounded-full before:bg-black ${textClassName}`.trim()}
          >
            <span dangerouslySetInnerHTML={{ __html: String(item) }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhitePaperReferences;
