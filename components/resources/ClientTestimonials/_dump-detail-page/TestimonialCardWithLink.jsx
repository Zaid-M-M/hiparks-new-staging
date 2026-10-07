"use client";
import React from "react";
import Image from "next/image";
import TransitionLink from "@/src/app/TransitionLink";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";
import { getTestimonialUrl } from "./testimonialUtilsWithDetailPage";

// Client testimonial card styled exactly like the Media page NewsCard.
// Links to the testimonial detail page (old popup version: ./_dump-video-popup)
const TestimonialCard = ({ testimonial }) => {
  const subtitle = [testimonial.name, testimonial.position]
    .filter(Boolean)
    .join(", ");

  return (
    <TransitionLink
      href={getTestimonialUrl(testimonial)}
      className="relative overflow-hidden bg-white border border-[#c3c3c3] group"
    >
      {/* Image */}

      <div className="relative w-full h-[200px] xl:h-[250px] overflow-hidden bg-[#dedede]">
        {testimonial.embedUrl ? (
          // Video preview only; clicking the card opens the detail page
          <iframe
            src={`${testimonial.embedUrl}?title=0&byline=0&portrait=0`}
            title={testimonial.companyText}
            className="absolute inset-0 w-full h-full pointer-events-none"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            tabIndex={-1}
          />
        ) : (
          testimonial.image && (
            <img
              src={formatMediaUrl(testimonial.image)}
              alt={testimonial.companyText}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )
        )}
        {/* Category Tag */}
        <div
          className="absolute top-[16px] left-[16px] px-[12px] py-[8px] flex items-center justify-center"
          style={{ backgroundColor: "#000" }}
        >
          <span className="bw-m text-[10px] md:text-[11px] text-white uppercase tracking-[1px] leading-none">
            Client Testimonial
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative px-[16px] py-[20px] flex flex-col"
        style={{ height: "240px" }}
      >
        {/* Customer name / designation (sits where the date is on media cards) */}
        <div className="flex items-center gap-[5px] my-[2px] h-[24px] min-w-0">
          <span
            className="bw-m text-[16px] leading-[20px] text-[#6d6d6d] truncate"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </div>

        {/* Company + description */}
        <div className="flex-1 flex flex-col justify-center gap-[6px] min-h-0">
          <h3
            className="bw-m text-left text-[24px] leading-[30px] text-[#000000] line-clamp-1 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
            dangerouslySetInnerHTML={{ __html: testimonial.company }}
          />
          <p
            className="bw-r text-left text-[16px] leading-[24px] text-[#000000] line-clamp-2 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {testimonial.description}
          </p>
        </div>

        {/* Watch Video */}
        <div>
          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              WATCH VIDEO
            </span>
            <Image
              alt="Play"
              width={20}
              height={20}
              className="w-5 h-5 brightness-0"
              src="/playbtn.svg"
            />
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default TestimonialCard;
