"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import RelatedParksMobile from "./RelatedParksMobile";
import cmsApi from "@/src/lib/cmsApi";

export default function SlideParksAvb() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogsToShow, setBlogsToShow] = useState(2);
  const [parks, setParks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch case studies
  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await cmsApi.getClientStories({ per_page: 6 });
        if (response.success && response.data) {
          const mappedParks = response.data.map((post) => {
            // Extract category
            let category = "Manufacturing";
            if (post.acf?.industry) {
              category = post.acf.industry;
            } else if (
              post._embedded &&
              post._embedded["wp:term"] &&
              post._embedded["wp:term"][0] &&
              post._embedded["wp:term"][0].length > 0
            ) {
              category = post._embedded["wp:term"][0][0].name;
            }

            // Extract date
            let dateStr = post.date;
            if (post.acf?.completion_date) dateStr = post.acf.completion_date;
            else if (post.acf?.project_date) dateStr = post.acf.project_date;

            const dateObj = new Date(dateStr);
            const monthNames = [
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            const formattedDate = `${dateObj.getDate()} ${monthNames[dateObj.getMonth()]} ${dateObj.getFullYear()}`;

            // Extract image
            const image = cmsApi.getFeaturedImage(post) || "/parkdetail/sliderparks.jpg";

            return {
              id: post.id,
              title: post.title.rendered || post.title,
              category: category,
              date: formattedDate,
              image: image,
              slug: post.slug
            };
          });
          setParks(mappedParks);
        }
      } catch (error) {
        console.error("Failed to fetch case studies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const getBlogsToShow = () => {
    if (typeof window === "undefined") return 2;
    if (window.innerWidth < 768) return 1;
    return 2;
  };

  useEffect(() => {
    const handleResize = () => setBlogsToShow(getBlogsToShow());
    setBlogsToShow(getBlogsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, parks.length - blogsToShow);
  const showNavigation = parks.length > blogsToShow;

  const goToNextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));

  const goToPrevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  if (loading) {
    return <div className="w-full h-[400px] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="w-full bg-white relative overflow-hidden">

      <div className="fix py-[45px] md:py-[70px]">
        {/* Title Section */}
        <div className="mb-[30px] md:mb-[40px]">
          <h2 className="sec_hd bw-r flex flex-col">
            <span className="flex bw-m gap-3 lg:gap-4 items-center">
              Driving<br className="block"></br>{" "}
              <img src="/abstract_pattern.svg" className="abstract_svg" alt="" />
            </span>
            <span className="bw-r">Business Excellence</span>
          </h2>
          <p className="bw-r lg:text-[24px] text-[20px] lg:pt-[30px] pt-[20px] leading-[120%] text-[#000000]">Strategic implementation of Horizon's top-tier industrial and logistics real estate solutions.</p>
        </div>

        {/* MOBILE SWIPER */}
        <RelatedParksMobile parks={parks} />

        {/* DESKTOP SLIDER */}
        <div className="relative hidden md:block overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / blogsToShow)}%)`,
            }}
          >
            {parks.map((park) => (
              <div
                key={park.id}
                className="flex-shrink-0 pr-[30px]"
                style={{ width: `${100 / blogsToShow}%` }}
              >
                <div className="relative overflow-hidden bg-white border border-[#c3c3c3] group">
                  {/* Image */}
                  <div className="relative w-full h-[300px] md:h-[350px] xl:h-[400px] overflow-hidden">
                    <Image
                      src={park.image}
                      alt={park.title}
                      fill
                      priority
                      unoptimized
                      className="object-cover"
                    />
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
                        {park.date}
                      </span>
                    </div>

                    <div className="flex-1" />

                    {/* Title */}
                    <div className="absolute left-[16px] lg:!block !hidden right-[16px] bottom-[22px] transition-transform duration-300 ease-in-out group-hover:-translate-y-[70px]">
                      <h3
                        className="bw-m text-left text-[24px] leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] line-clamp-3 overflow-hidden"
                        style={{ display: "-webkit-box" }}
                      >
                        {park.title}
                      </h3>
                    </div>
                    <div className="absolute left-[16px] lg:!hidden !block right-[16px] bottom-auto top-[70px]">
                      <h3
                        className="bw-m text-[24px] text-left leading-[30px] text-[#000000] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden"
                        style={{ display: "-webkit-box" }}
                      >
                        {park.title}
                      </h3>
                    </div>

                    {/* Read More Button */}
                    <Link href={`/case-studies/${park.slug}`}>
                      <div className="absolute left-[16px] right-[16px] bottom-[16px] opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 lg:!block !hidden">
                        <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
                          <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
                            READ MORE
                          </span>
                          <img
                            alt=""
                            className="w-5 h-5"
                            src="/blackexternal.svg"
                          />
                        </div>
                      </div>
                    </Link>
                    <Link href={`/case-studies/${park.slug}`}>
                      <div className="absolute left-[16px] right-[16px] bottom-[16px] lg:!hidden !block">
                        <div className="cursor-pointer px-5 py-2 bg-transparent border border-black w-fit flex gap-2 items-center">
                          <span className="bw-sb text-[16px] leading-[26px] text-black tracking-[0.1em]">
                            READ MORE
                          </span>
                          <img
                            alt=""
                            className="w-5 h-5"
                            src="/blackexternal.svg"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showNavigation && (
            <div className="flex items-center justify-end md:justify-start gap-3 mt-[20px]">
              <button
                onClick={goToPrevSlide}
                disabled={currentSlide === 0}
                className="w-[60px] cursor-pointer h-[60px] border-2 border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 disabled:opacity-40"
              >
                <Image
                  src="/arrowicon.svg"
                  alt="Previous"
                  width={24}
                  height={24}
                />
              </button>

              <button
                onClick={goToNextSlide}
                disabled={currentSlide >= maxSlide}
                className="w-[60px] cursor-pointer h-[60px] border-2 border-[#CCCCCC] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-colors duration-300 disabled:opacity-40"
              >
                <Image
                  src="/arrowicon.svg"
                  alt="Next"
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
