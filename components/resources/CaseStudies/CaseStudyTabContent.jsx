"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import LoadMoreButton from "@/components/insights/InsightsContent/LoadMoreButton";
import Skeleton from "@/components/insights/InsightsContent/Skeleton";
import ResourceCaseStudyCard from "./ResourceCaseStudyCard";

// Same data source as /case-studies-and-client-testimonials (client_stories)
const CaseStudyTabContent = () => {
  const postsPerPage = 6;

  const [caseStudies, setCaseStudies] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  // Ignore responses from requests that were superseded by a newer filter
  const requestIdRef = useRef(0);

  const fetchCaseStudies = async (page = 1) => {
    const requestId = ++requestIdRef.current;
    setLoading(true);
    if (page === 1) setShowSkeleton(true);
    try {
      const result = selectedCategory
        ? await cmsApi.getFilteredPosts("client_stories", selectedCategory, "", {
            per_page: postsPerPage,
            page,
          })
        : await cmsApi.getClientStories({ per_page: postsPerPage, page });

      if (requestId !== requestIdRef.current) return;
      if (!result.success) throw new Error(result.error || "Failed to fetch");

      const dataArray = result.data || [];
      const isLastPage = selectedCategory
        ? !result.hasMore
        : page >= parseInt(result.totalPages || 1) ||
          dataArray.length < postsPerPage;

      setCaseStudies((prev) => {
        if (page === 1) return dataArray;
        const currentIds = new Set(prev.map((i) => i.id));
        return [...prev, ...dataArray.filter((i) => !currentIds.has(i.id))];
      });
      setHasMore(!isLastPage);
    } catch (error) {
      if (requestId !== requestIdRef.current) return;
      console.error("Error fetching client stories:", error);
      setHasMore(false);
      if (page === 1) setCaseStudies([]);
    }
    setShowSkeleton(false);
    setLoading(false);
  };

  // Sector list is taken strictly from client_stories posts
  const fetchCategories = async () => {
    try {
      const samplePerPage = 50;
      const maxPages = 3;
      let aggregated = [];
      for (let p = 1; p <= maxPages; p++) {
        const res = await cmsApi.fetchData("client_stories", {
          per_page: samplePerPage,
          page: p,
        });
        if (!res.success) break;
        aggregated = aggregated.concat(res.data || []);
        if (!res.totalPages || p >= parseInt(res.totalPages)) break;
        if ((res.data || []).length < samplePerPage) break;
      }
      setAvailableCategories(
        cmsApi.extractCategories(aggregated, "client_stories") || [],
      );
    } catch (error) {
      console.error("Error fetching case study sectors:", error);
      setAvailableCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    fetchCaseStudies(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const loadMore = () => {
    if (loading) return;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchCaseStudies(nextPage);
  };

  const clearFilters = () => {
    setSelectedCategory("");
  };

  return (
    <div className="fix">
      {/* Filters */}
      <motion.div className="!w-full mt-10 fixup">
        {loading && caseStudies.length === 0 && availableCategories.length === 0 ? (
          <Skeleton type="filters" />
        ) : (
          <div className="flex flex-col lg:h-[82px] sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] flex-1">
            <div className="flex md:flex-row lg:mt-0 mt-5 flex-col md:max-w-[80%] lg:gap-10 gap-2 flex-1">
              {/* Sector Filter */}
              <div className="relative w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
                {availableCategories.length > 0 ? (
                  <CustomDropdown
                    categories={["Sector", ...availableCategories]}
                    activeTab={
                      selectedCategory
                        ? availableCategories.indexOf(selectedCategory) + 1
                        : 0
                    }
                    setActiveTab={(i) => {
                      if (i === 0) setSelectedCategory("");
                      else setSelectedCategory(availableCategories[i - 1] || "");
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
              {selectedCategory && (
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

      {/* Case Study Grid */}
      <div className="lg:mt-10">
        <AnimatePresence mode="wait">
          {showSkeleton ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Skeleton type="grid" count={6} />
            </motion.div>
          ) : caseStudies.length === 0 ? (
            <motion.div
              key="no-case-studies"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center py-[40px]"
            >
              <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
                No case studies found
              </div>
              <div className="bw-r text-[16px] text-[#999999]">
                Check back later for new content.
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="case-study-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="py-12 lg:pt-0"
            >
              <div className="grid grid-cols-1 1440:w-[1340px] 1440:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[40px] mb-10">
                {caseStudies.map((caseStudy, index) => (
                  <ResourceCaseStudyCard
                    key={caseStudy.id || index}
                    caseStudy={caseStudy}
                  />
                ))}
              </div>
              {hasMore && (
                <div className="text-center mt-[20px] md:mt-[30px]">
                  <LoadMoreButton onLoadMore={loadMore} loading={loading} />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudyTabContent;
