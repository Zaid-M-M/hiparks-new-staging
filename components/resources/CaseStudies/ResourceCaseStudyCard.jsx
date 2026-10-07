"use client";
import React from "react";
import Image from "next/image";
import TransitionLink from "@/src/app/TransitionLink";
import cmsApi from "@/src/lib/cmsApi";
import { formatMediaUrl } from "@/src/utils/formatMediaUrl";

// Case study card styled exactly like the Media page NewsCard
const ResourceCaseStudyCard = ({ caseStudy }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getPublishDate = () => {
    if (caseStudy?.acf?.completion_date)
      return formatDate(caseStudy.acf.completion_date);
    if (caseStudy?.acf?.project_date)
      return formatDate(caseStudy.acf.project_date);
    if (caseStudy?.date) return formatDate(caseStudy.date);
    return formatDate(new Date());
  };

  const getIndustry = () => {
    if (caseStudy?.acf?.industry) return caseStudy.acf.industry;
    const categoryTerms = caseStudy?._embedded?.["wp:term"]?.[0];
    if (Array.isArray(categoryTerms) && categoryTerms.length > 0) {
      return categoryTerms[0].name || "Manufacturing";
    }
    return "Manufacturing";
  };

  const imageUrl = cmsApi.getFeaturedImage(caseStudy) || "";
  const title =
    typeof caseStudy?.title === "object"
      ? caseStudy.title.rendered
      : caseStudy?.title || "";
  const caseStudyUrl = `/case-studies-and-client-testimonials/${caseStudy?.slug}`;

  return (
    <TransitionLink
      href={caseStudyUrl}
      className="relative overflow-hidden bg-white border border-[#c3c3c3] group"
    >
      {/* Image */}
      <div className="relative w-full h-[200px] xl:h-[250px] overflow-hidden">
        <Image
          src={formatMediaUrl(imageUrl)}
          alt={cmsApi.stripHtmlTags(title)}
          fill
          priority
          className="object-cover"
        />
        {/* Industry Tag */}
        <div
          className="absolute top-[16px] left-[16px] px-[12px] py-[8px] flex items-center justify-center"
          style={{ backgroundColor: "#000" }}
        >
          <span
            className="bw-m text-[10px] md:text-[11px] text-white uppercase tracking-[1px] leading-none"
            dangerouslySetInnerHTML={{ __html: getIndustry() }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className="relative px-[16px] py-[20px] flex flex-col"
        style={{ height: "240px" }}
      >
        {/* Date */}
        <div className="flex items-center gap-[5px] my-[2px] h-[24px]">
          <Image
            src="/calendaricon.svg"
            alt="Calendar"
            width={24}
            height={24}
          />
          <span className="bw-m text-[16px] leading-[20px] text-[#6d6d6d]">
            {getPublishDate()}
          </span>
        </div>

        {/* Title */}
        <div className="flex-1 flex flex-col justify-center">
          <h3
            className="bw-m text-left text-[24px] leading-[30px] text-[#000000] line-clamp-3 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Read More */}
        <div>
          <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
            <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
              READ MORE
            </span>
            <Image
              alt="External link"
              width={20}
              height={20}
              className="w-5 h-5"
              src="/blackexternal.svg"
            />
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

export default ResourceCaseStudyCard;
