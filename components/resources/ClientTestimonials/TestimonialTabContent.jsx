"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import LoadMoreButton from "@/components/insights/InsightsContent/LoadMoreButton";
import Skeleton from "@/components/insights/InsightsContent/Skeleton";
import VideoPopup from "@/components/case-studies/CaseStudiesContent/VideoPopup";
import TestimonialCard from "./TestimonialCard";
import { transformTestimonial, getAvailableSectors } from "./testimonialUtils";

// Same data source as the "Voices of Trust" section on
// /case-studies-and-client-testimonials (customers_speak).
// Cards open the video popup; old detail page version: ./_dump-detail-page
const TestimonialTabContent = () => {
  const postsPerPage = 6;

  const [testimonials, setTestimonials] = useState([]);
  const [visibleCount, setVisibleCount] = useState(postsPerPage);
  const [loading, setLoading] = useState(true);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const result = await cmsApi.getCustomersSpeak({ per_page: 100 });
        if (cancelled) return;

        if (result.success) {
          const transformed = (result.data || []).map(transformTestimonial);
          setTestimonials(transformed);
        } else {
          console.error("Failed to fetch testimonials:", result.error);
          setTestimonials([]);
        }
      } catch (error) {
        if (cancelled) return;
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      }
      if (!cancelled) setLoading(false);
    };

    fetchTestimonials();
    return () => {
      cancelled = true;
    };
  }, []);

  // Sector list is taken strictly from the cs_sector field of the testimonials
  const availableSectors = useMemo(
    () => getAvailableSectors(testimonials),
    [testimonials],
  );

  // Show the first page again whenever the sector changes
  useEffect(() => {
    setVisibleCount(postsPerPage);
  }, [selectedSector]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + postsPerPage);
  };

  const clearFilters = () => {
    setSelectedSector("");
  };

  const closePopup = useCallback(() => setSelectedVideo(null), []);

  const allItems = selectedSector
    ? testimonials.filter((t) => t.sector === selectedSector)
    : testimonials;

  // VideoPopup shows the company as its heading, so pass plain text
  const popupData = selectedVideo
    ? { ...selectedVideo, company: selectedVideo.companyText }
    : null;

  return (
    <div className="fix">
      {/* Filters */}
      <motion.div className="!w-full mt-10 fixup">
        {loading ? (
          <Skeleton type="filters" />
        ) : (
          <div className="flex flex-col lg:h-[82px] sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] flex-1">
            <div className="flex md:flex-row lg:mt-0 mt-5 flex-col md:max-w-[80%] lg:gap-10 gap-2 flex-1">
              {/* Sector Filter */}
              <div className="relative w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
                {availableSectors.length > 0 ? (
                  <CustomDropdown
                    categories={["Sector", ...availableSectors]}
                    activeTab={
                      selectedSector
                        ? availableSectors.indexOf(selectedSector) + 1
                        : 0
                    }
                    setActiveTab={(i) => {
                      if (i === 0) setSelectedSector("");
                      else setSelectedSector(availableSectors[i - 1] || "");
                    }}
                    className="w-full mt-0 relative"
                  />
                ) : (
                  <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
                    <span>Sector</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-down opacity-50"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {/* Clear All Button */}
            <div className="sm:w-[20%] flex justify-end">
              {selectedSector && (
                <div className="flex justify-start">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={clearFilters}
                    className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
                  >
                    <img
                      src="/cross.svg"
                      alt="Cross"
                      className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
                    />
                    <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
                      Clear All
                    </span>
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>

      {/* Testimonial Grid */}
      <div className="lg:mt-10">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Skeleton type="grid" count={6} />
            </motion.div>
          ) : allItems.length === 0 ? (
            <motion.div
              key="no-testimonials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center py-[40px]"
            >
              <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
                No testimonials found
              </div>
              <div className="bw-r text-[16px] text-[#999999]">
                Check back later for new content.
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`testimonial-grid-${selectedSector || "all"}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="py-12 lg:pt-0"
            >
              <div className="grid grid-cols-1 1440:w-[1340px] 1440:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] mb-10">
                {allItems.slice(0, visibleCount).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    onWatch={setSelectedVideo}
                  />
                ))}
              </div>
              {visibleCount < allItems.length && (
                <div className="text-center mt-[20px] md:mt-[30px]">
                  <LoadMoreButton onLoadMore={loadMore} loading={false} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <VideoPopup
        isOpen={Boolean(selectedVideo)}
        onClose={closePopup}
        videoData={popupData}
      />
    </div>
  );
};

export default TestimonialTabContent;
