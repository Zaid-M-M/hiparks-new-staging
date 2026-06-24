// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";

// const BlogTabContent = ({ selectedCategory, selectedYear }) => {
//   const postsPerPage = 6;

//   const [blogs, setBlogs] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [availableCategories, setAvailableCategories] = useState([]);
//   const [selectedBlogYear, setSelectedBlogYear] = useState(selectedYear || "");
//   const [selectedBlogCategory, setSelectedBlogCategory] = useState(
//     selectedCategory || "",
//   );
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [showSkeleton, setShowSkeleton] = useState(true);

//   // Fetch all unique years
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100;
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date",
//         };
//         const res = await cmsApi.getFilteredPosts(
//           "posts",
//           selectedBlogCategory,
//           "",
//           params,
//         );
//         if (res.success) {
//           const newBlogs = res.data || [];
//           newBlogs.forEach((b) => {
//             const year = b.acf?.year
//               ? String(b.acf.year)
//               : String(new Date(b.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newBlogs.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a);
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//       setAvailableYears([]);
//     }
//   };

//   // Fetch all unique categories
//   const fetchAllCategories = async () => {
//     try {
//       const filterParams = { per_page: 50 };
//       const result = await cmsApi.fetchData("posts", filterParams);
//       console.log("Categories API response:", result); // For debugging
//       if (result.success && result.data) {
//         const categories = cmsApi.extractCategories(result.data, "posts");
//         setAvailableCategories(categories);
//       } else {
//         setAvailableCategories([]);
//       }
//     } catch (err) {
//       console.error("Failed to fetch categories:", err);
//       setAvailableCategories([]);
//     }
//   };

//   // Fetch blogs for the grid
//   const fetchBlogs = async (page = 1) => {
//     setLoading(true);
//     setShowSkeleton(true);
//     try {
//       const params = { per_page: postsPerPage, page, _embed: true };
//       const res = await cmsApi.getFilteredPosts(
//         "posts",
//         selectedBlogCategory,
//         selectedBlogYear,
//         params,
//       );
//       if (res.success) {
//         const newBlogs = res.data || [];
//         setBlogs((prev) => (page === 1 ? newBlogs : [...prev, ...newBlogs]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newBlogs.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//         if (newBlogs.length > 0) {
//           setShowSkeleton(false);
//         }
//       } else {
//         setHasMore(false);
//         if (page === 1) setBlogs([]);
//       }
//     } catch (err) {
//       console.error("Failed to fetch blogs:", err);
//       setHasMore(false);
//       if (page === 1) setBlogs([]);
//     }
//     setLoading(false);
//   };

//   // Initial load for years, categories, and blogs
//   useEffect(() => {
//     fetchAllYears();
//     fetchAllCategories();
//     fetchBlogs(1);

//     const skeletonTimeout = setTimeout(() => {
//       if (blogs.length === 0 && !loading) {
//         setShowSkeleton(false);
//       }
//     }, 10000);

//     return () => clearTimeout(skeletonTimeout);
//   }, [selectedBlogCategory, selectedBlogYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchBlogs(nextPage);
//   };

//   const clearFilters = () => {
//     setSelectedBlogYear("");
//     setSelectedBlogCategory("");
//     setCurrentPage(1);
//   };

//   // Check if any filters are active
//   const hasActiveFilters = selectedBlogYear || selectedBlogCategory;

//   return (
//     <div className="fix">
//       {/* Filters */}
//       <motion.div
//         // initial={{ opacity: 0 }}
//         // whileInView={{ opacity: 1 }}
//         // transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//         // viewport={{ once: true, amount: 0.2 }}
//         className="w-full mt-10 fixup"
//       >
//         {loading && blogs.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex flex-col lg:h-[82px] sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] flex-1">
//             <div className="flex md:flex-row lg:mt-0 mt-5 flex-col md:max-w-[80%] lg:gap-10 gap-2 flex-1">
//               {/* Category Filter */}
//               <div className="relative w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/2.27)]">
//                 {availableCategories.length > 0 ? (
//                   <CustomDropdown
//                     categories={["Categories", ...availableCategories]}
//                     activeTab={
//                       selectedBlogCategory
//                         ? availableCategories.findIndex(
//                             (c) => c === selectedBlogCategory,
//                           ) + 1
//                         : 0
//                     }
//                     setActiveTab={(i) => {
//                       setCurrentPage(1);
//                       if (i === 0) setSelectedBlogCategory("");
//                       else setSelectedBlogCategory(availableCategories[i - 1]);
//                     }}
//                     className="w-full mt-0 relative"
//                   />
//                 ) : (
//                   <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
//                     <span>Categories</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-chevron-down opacity-50"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 )}
//               </div>

//               {/* Year Filter */}
//               <div className="relative w-full md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/2.27)]">
//                 {availableYears.length > 0 ? (
//                   <CustomDropdown
//                     categories={["Year", ...availableYears.map(String)]}
//                     activeTab={
//                       selectedBlogYear
//                         ? availableYears.findIndex(
//                             (y) => y === selectedBlogYear,
//                           ) + 1
//                         : 0
//                     }
//                     setActiveTab={(i) => {
//                       setCurrentPage(1);
//                       if (i === 0) setSelectedBlogYear("");
//                       else setSelectedBlogYear(availableYears[i - 1]);
//                     }}
//                     className="w-full mt-0 relative"
//                   />
//                 ) : (
//                   <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
//                     <span>Year</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-chevron-down opacity-50"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Clear All Button */}
//             <div className="sm:w-[20%] flex justify-end">
//               {hasActiveFilters && (
//                 <div className="flex justify-start">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={clearFilters}
//                     className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//                   >
//                     <img
//                       src="/cross.svg"
//                       alt="Cross"
//                       className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                     />
//                     <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                       Clear All
//                     </span>
//                   </motion.button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </motion.div>

//       {/* Blog Grid */}
//       <AnimatePresence>
//         {showSkeleton ? (
//           <motion.div key="skeleton">
//             <Skeleton type="grid" count={6} />
//           </motion.div>
//         ) : blogs.length === 0 ? (
//           <motion.div
//             key="no-blogs"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="text-center py-10"
//           >
//             No blogs found.
//           </motion.div>
//         ) : (
//           <motion.div key="blog-grid" className="mt-10">
//             <BlogGrid blogs={blogs} />
//             {hasMore && (
//               <div className="text-center">
//                 <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default BlogTabContent;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";

// const BlogTabContent = ({ selectedCategory, selectedYear }) => {
//   const postsPerPage = 6;

//   const [blogs, setBlogs] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [availableCategories, setAvailableCategories] = useState([]);
//   const [selectedBlogYear, setSelectedBlogYear] = useState(selectedYear || "");
//   const [selectedBlogCategory, setSelectedBlogCategory] = useState(
//     selectedCategory || "",
//   );
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [showSkeleton, setShowSkeleton] = useState(true);

//   // Fetch all unique years
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100;
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date",
//         };
//         const res = await cmsApi.getFilteredPosts(
//           "posts",
//           selectedBlogCategory,
//           "",
//           params,
//         );
//         if (res.success) {
//           const newBlogs = res.data || [];
//           newBlogs.forEach((b) => {
//             const year = b.acf?.year
//               ? String(b.acf.year)
//               : String(new Date(b.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newBlogs.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a);
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//       setAvailableYears([]);
//     }
//   };

//   // Fetch all unique categories
//   const fetchAllCategories = async () => {
//     try {
//       const filterParams = { per_page: 50 };
//       const result = await cmsApi.fetchData("posts", filterParams);
//       console.log("Categories API response:", result); // For debugging
//       if (result.success && result.data) {
//         const categories = cmsApi.extractCategories(result.data, "posts");
//         setAvailableCategories(categories);
//       } else {
//         setAvailableCategories([]);
//       }
//     } catch (err) {
//       console.error("Failed to fetch categories:", err);
//       setAvailableCategories([]);
//     }
//   };

//   // Fetch blogs for the grid
//   const fetchBlogs = async (page = 1) => {
//     setLoading(true);
//     if (page === 1) setShowSkeleton(true);
//     try {
//       const params = { per_page: postsPerPage, page, _embed: true };
//       const res = await cmsApi.getFilteredPosts(
//         "posts",
//         selectedBlogCategory,
//         selectedBlogYear,
//         params,
//       );
//       if (res.success) {
//         const newBlogs = res.data || [];
//         setBlogs((prev) => (page === 1 ? newBlogs : [...prev, ...newBlogs]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newBlogs.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//         if (newBlogs.length > 0) {
//           setShowSkeleton(false);
//         }
//       } else {
//         setHasMore(false);
//         if (page === 1) setBlogs([]);
//       }
//     } catch (err) {
//       console.error("Failed to fetch blogs:", err);
//       setHasMore(false);
//       if (page === 1) setBlogs([]);
//     }
//     setLoading(false);
//   };

//   // Initial load for years, categories, and blogs
//   useEffect(() => {
//     fetchAllYears();
//     fetchAllCategories();
//     fetchBlogs(1);

//     const skeletonTimeout = setTimeout(() => {
//       if (blogs.length === 0 && !loading) {
//         setShowSkeleton(false);
//       }
//     }, 10000);

//     return () => clearTimeout(skeletonTimeout);
//   }, [selectedBlogCategory, selectedBlogYear]);

//   const loadMore = () => {
//     if (loading) return;
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchBlogs(nextPage);
//   };

//   const clearFilters = () => {
//     setSelectedBlogYear("");
//     setSelectedBlogCategory("");
//     setCurrentPage(1);
//   };

//   // Check if any filters are active
//   const hasActiveFilters = selectedBlogYear || selectedBlogCategory;

//   return (
//     <div className="fix">
//       {/* Filters */}
//       <motion.div
//         // initial={{ opacity: 0 }}
//         // whileInView={{ opacity: 1 }}
//         // transition={{ duration: 0.6, ease: [0.7, 0, 0.4, 1] }}
//         // viewport={{ once: true, amount: 0.2 }}
//         className="w-full mt-10 fixup"
//       >
//         {loading && blogs.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex flex-col lg:h-[82px] sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] flex-1">
//             <div className="flex md:flex-row lg:mt-0 mt-5 flex-col md:max-w-[80%] lg:gap-10 gap-2 flex-1">
//               {/* Category Filter */}
//               <div className="relative w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
//                 {availableCategories.length > 0 ? (
//                   <CustomDropdown
//                     categories={["Categories", ...availableCategories]}
//                     activeTab={
//                       selectedBlogCategory
//                         ? availableCategories.findIndex(
//                             (c) => c === selectedBlogCategory,
//                           ) + 1
//                         : 0
//                     }
//                     setActiveTab={(i) => {
//                       setCurrentPage(1);
//                       if (i === 0) setSelectedBlogCategory("");
//                       else setSelectedBlogCategory(availableCategories[i - 1]);
//                     }}
//                     className="w-full mt-0 relative"
//                   />
//                 ) : (
//                   <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
//                     <span>Categories</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-chevron-down opacity-50"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 )}
//               </div>

//               {/* Year Filter */}
//               <div className="relative -ml-[9%] w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
//                 {availableYears.length > 0 ? (
//                   <CustomDropdown
//                     categories={["Year", ...availableYears.map(String)]}
//                     activeTab={
//                       selectedBlogYear
//                         ? availableYears.findIndex(
//                             (y) => y === selectedBlogYear,
//                           ) + 1
//                         : 0
//                     }
//                     setActiveTab={(i) => {
//                       setCurrentPage(1);
//                       if (i === 0) setSelectedBlogYear("");
//                       else setSelectedBlogYear(availableYears[i - 1]);
//                     }}
//                     className="w-full mt-0 relative"
//                   />
//                 ) : (
//                   <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
//                     <span>Year</span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-chevron-down opacity-50"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Clear All Button */}
//             <div className="sm:w-[20%] flex justify-end">
//               {hasActiveFilters && (
//                 <div className="flex justify-start">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={clearFilters}
//                     className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//                   >
//                     <img
//                       src="/cross.svg"
//                       alt="Cross"
//                       className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                     />
//                     <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                       Clear All
//                     </span>
//                   </motion.button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </motion.div>

//       {/* Blog Grid */}
//       <div className="mt-10">
//         <AnimatePresence>
//           {showSkeleton ? (
//             <motion.div
//               key="skeleton"
//               initial={{ opacity: 0.5 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Skeleton type="grid" count={6} />
//             </motion.div>
//           ) : blogs.length === 0 ? (
//             <motion.div
//               key="no-blogs"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="text-center py-[40px]"
//             >
//               <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
//                 No blogs found
//               </div>
//               <div className="bw-r text-[16px] text-[#999999]">
//                 Check back later for new content.
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="blog-grid"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="py-0"
//             >
//               <BlogGrid blogs={blogs} />
//               {hasMore && !loading && (
//                 <div className="text-center mt-[20px] md:mt-[30px]">
//                   <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default BlogTabContent;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import BlogGrid from "./BlogGrid";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";

// const BlogTabContent = ({ selectedCategory, selectedYear }) => {
//   const postsPerPage = 6;

//   const [blogs, setBlogs] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [availableCategories, setAvailableCategories] = useState([]);
//   const [selectedBlogYear, setSelectedBlogYear] = useState(selectedYear || "");
//   const [selectedBlogCategory, setSelectedBlogCategory] = useState(
//     selectedCategory || "",
//   );
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [showSkeleton, setShowSkeleton] = useState(true);

//   // Fetch all unique years based on selected category
//   const fetchAllYears = async () => {
//     try {
//       const yearsSet = new Set();
//       let page = 1;
//       const perPage = 100;
//       let hasMorePages = true;

//       while (hasMorePages) {
//         const params = {
//           per_page: perPage,
//           page,
//           _embed: true,
//           _fields: "acf,date",
//         };
//         const res = await cmsApi.getFilteredPosts(
//           "posts",
//           selectedBlogCategory,
//           "", // We don't filter by year when fetching available years
//           params,
//         );
//         if (res.success) {
//           const newBlogs = res.data || [];
//           newBlogs.forEach((b) => {
//             const year = b.acf?.year
//               ? String(b.acf.year)
//               : String(new Date(b.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newBlogs.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a);
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//       setAvailableYears([]);
//     }
//   };

//   // Fetch all unique categories based on selected year
//   const fetchAllCategories = async () => {
//     try {
//       // To get categories available in a specific year, we use getFilteredPosts
//       const params = {
//         per_page: 100, // Fetch a large enough batch to extract unique categories
//         _embed: true,
//       };

//       const result = await cmsApi.getFilteredPosts(
//         "posts",
//         "", // We don't filter by category when fetching available categories
//         selectedBlogYear,
//         params,
//       );

//       if (result.success && result.data) {
//         const categories = cmsApi.extractCategories(result.data, "posts");
//         setAvailableCategories(categories);
//       } else {
//         setAvailableCategories([]);
//       }
//     } catch (err) {
//       console.error("Failed to fetch categories:", err);
//       setAvailableCategories([]);
//     }
//   };

//   // Fetch blogs for the grid
//   const fetchBlogs = async (page = 1) => {
//     setLoading(true);
//     if (page === 1) setShowSkeleton(true);
//     try {
//       const params = { per_page: postsPerPage, page, _embed: true };
//       const res = await cmsApi.getFilteredPosts(
//         "posts",
//         selectedBlogCategory,
//         selectedBlogYear,
//         params,
//       );
//       if (res.success) {
//         const newBlogs = res.data || [];
//         setBlogs((prev) => (page === 1 ? newBlogs : [...prev, ...newBlogs]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newBlogs.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//         if (newBlogs.length > 0) {
//           setShowSkeleton(false);
//         } else {
//           setShowSkeleton(false);
//         }
//       } else {
//         setHasMore(false);
//         if (page === 1) setBlogs([]);
//         setShowSkeleton(false);
//       }
//     } catch (err) {
//       console.error("Failed to fetch blogs:", err);
//       setHasMore(false);
//       if (page === 1) setBlogs([]);
//       setShowSkeleton(false);
//     }
//     setLoading(false);
//   };

//   // Initial load and updates when filters change
//   useEffect(() => {
//     // When filters change, we refresh the available options in the OTHER dropdown
//     fetchAllYears();
//     fetchAllCategories();
//     fetchBlogs(1);

//     const skeletonTimeout = setTimeout(() => {
//       if (blogs.length === 0 && !loading) {
//         setShowSkeleton(false);
//       }
//     }, 10000);

//     return () => clearTimeout(skeletonTimeout);
//   }, [selectedBlogCategory, selectedBlogYear]);

//   const loadMore = () => {
//     if (loading) return;
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchBlogs(nextPage);
//   };

//   const clearFilters = () => {
//     setSelectedBlogYear("");
//     setSelectedBlogCategory("");
//     setCurrentPage(1);
//   };

//   // Check if any filters are active
//   const hasActiveFilters = selectedBlogYear || selectedBlogCategory;

//   return (
//     <div className="fix">
//       {/* Filters */}
//       <motion.div className="w-full mt-10 fixup">
//         {loading && blogs.length === 0 && availableCategories.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex flex-col lg:h-[82px] sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] flex-1">
//             <div className="flex md:flex-row lg:mt-0 mt-5 flex-col md:max-w-[80%] lg:gap-10 gap-2 flex-1">
//               {/* Category Filter */}
//               <div className="relative w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
//                 {availableCategories.length > 0 ? (
//                   <CustomDropdown
//                     categories={["Categories", ...availableCategories]}
//                     activeTab={
//                       selectedBlogCategory
//                         ? availableCategories.indexOf(selectedBlogCategory) + 1
//                         : 0
//                     }
//                     setActiveTab={(i) => {
//                       setCurrentPage(1);
//                       if (i === 0) setSelectedBlogCategory("");
//                       else setSelectedBlogCategory(availableCategories[i - 1]);
//                     }}
//                     className="w-full mt-0 relative"
//                   />
//                 ) : (
//                   <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
//                     <span>
//                       {selectedBlogYear
//                         ? "No Categories in this Year"
//                         : "Categories"}
//                     </span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-chevron-down opacity-50"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 )}
//               </div>

//               {/* Year Filter */}
//               <div className="relative -ml-[9%] w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
//                 {availableYears.length > 0 ? (
//                   <CustomDropdown
//                     categories={["Year", ...availableYears.map(String)]}
//                     activeTab={
//                       selectedBlogYear
//                         ? availableYears.indexOf(selectedBlogYear) + 1
//                         : 0
//                     }
//                     setActiveTab={(i) => {
//                       setCurrentPage(1);
//                       if (i === 0) setSelectedBlogYear("");
//                       else setSelectedBlogYear(availableYears[i - 1]);
//                     }}
//                     className="w-full mt-0 relative"
//                   />
//                 ) : (
//                   <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
//                     <span>
//                       {selectedBlogCategory
//                         ? "No Years for this Category"
//                         : "Year"}
//                     </span>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-chevron-down opacity-50"
//                     >
//                       <path d="m6 9 6 6 6-6" />
//                     </svg>
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Clear All Button */}
//             <div className="sm:w-[20%] flex justify-end">
//               {hasActiveFilters && (
//                 <div className="flex justify-start">
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={clearFilters}
//                     className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//                   >
//                     <img
//                       src="/cross.svg"
//                       alt="Cross"
//                       className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                     />
//                     <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                       Clear All
//                     </span>
//                   </motion.button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </motion.div>

//       {/* Blog Grid */}
//       <div className="mt-10">
//         <AnimatePresence mode="wait">
//           {showSkeleton ? (
//             <motion.div
//               key="skeleton"
//               initial={{ opacity: 0.5 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Skeleton type="grid" count={6} />
//             </motion.div>
//           ) : blogs.length === 0 ? (
//             <motion.div
//               key="no-blogs"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="text-center py-[40px]"
//             >
//               <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
//                 No blogs found
//               </div>
//               <div className="bw-r text-[16px] text-[#999999]">
//                 Check back later for new content.
//               </div>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="blog-grid"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="py-0"
//             >
//               <BlogGrid blogs={blogs} />
//               {hasMore && !loading && (
//                 <div className="text-center mt-[20px] md:mt-[30px]">
//                   <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//                 </div>
//               )}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default BlogTabContent;
"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogGrid from "./BlogGrid";
import LoadMoreButton from "./LoadMoreButton";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import Skeleton from "./Skeleton";

const BlogTabContent = ({ selectedCategory, selectedYear }) => {
  const postsPerPage = 6;

  const [blogs, setBlogs] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [selectedBlogYear, setSelectedBlogYear] = useState(selectedYear || "");
  const [selectedBlogCategory, setSelectedBlogCategory] = useState(
    selectedCategory || "",
  );
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Helper to extract year from a blog post consistently
  const getPostYear = (post) => {
    return post.acf?.year
      ? String(post.acf.year)
      : String(new Date(post.date).getFullYear());
  };

  // Fetch all unique years based on selected category
  const fetchAllYears = async () => {
    try {
      const yearsSet = new Set();
      let page = 1;
      const perPage = 100;
      let hasMorePages = true;

      while (hasMorePages) {
        const params = {
          per_page: perPage,
          page,
          _embed: true,
          _fields: "acf,date",
        };
        const res = await cmsApi.getFilteredPosts(
          "posts",
          selectedBlogCategory,
          "",
          params,
        );
        if (res.success) {
          const newBlogs = res.data || [];
          newBlogs.forEach((b) => {
            yearsSet.add(getPostYear(b));
          });
          hasMorePages = newBlogs.length === perPage;
          page++;
        } else {
          hasMorePages = false;
        }
      }

      const years = Array.from(yearsSet).sort((a, b) => b - a);
      setAvailableYears(years);
    } catch (err) {
      console.error("Failed to fetch years:", err);
      setAvailableYears([]);
    }
  };

  // Fetch all unique categories based on selected year
  const fetchAllCategories = async () => {
    try {
      const params = {
        per_page: 100,
        _embed: true,
      };

      const result = await cmsApi.getFilteredPosts(
        "posts",
        "",
        selectedBlogYear,
        params,
      );

      if (result.success && result.data) {
        // Precise filtering for category selection logic
        let data = result.data;
        if (selectedBlogYear) {
          data = data.filter(
            (post) => getPostYear(post) === String(selectedBlogYear),
          );
        }
        const categories = cmsApi.extractCategories(data, "posts");
        setAvailableCategories(categories);
      } else {
        setAvailableCategories([]);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
      setAvailableCategories([]);
    }
  };

  // Fetch blogs for the grid
  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    if (page === 1) setShowSkeleton(true);
    try {
      const params = { per_page: postsPerPage, page, _embed: true };
      const res = await cmsApi.getFilteredPosts(
        "posts",
        selectedBlogCategory,
        selectedBlogYear,
        params,
      );

      if (res.success) {
        let newBlogs = res.data || [];

        // STRICT YEAR ENFORCEMENT
        // This ensures that even if the API returns mixed years, we only show the selected one.
        if (selectedBlogYear) {
          newBlogs = newBlogs.filter(
            (post) => getPostYear(post) === String(selectedBlogYear),
          );
        }

        setBlogs((prev) => (page === 1 ? newBlogs : [...prev, ...newBlogs]));

        let newHasMore;
        if (res.hasMore !== undefined) {
          newHasMore = res.hasMore;
        } else if (res.totalPages) {
          newHasMore = page < parseInt(res.totalPages);
        } else {
          newHasMore = newBlogs.length === postsPerPage;
        }

        setHasMore(newHasMore);
        setShowSkeleton(false);
      } else {
        setHasMore(false);
        if (page === 1) setBlogs([]);
        setShowSkeleton(false);
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
      setHasMore(false);
      if (page === 1) setBlogs([]);
      setShowSkeleton(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAllYears();
    fetchAllCategories();
    fetchBlogs(1);

    const skeletonTimeout = setTimeout(() => {
      if (blogs.length === 0 && !loading) {
        setShowSkeleton(false);
      }
    }, 10000);

    return () => clearTimeout(skeletonTimeout);
  }, [selectedBlogCategory, selectedBlogYear]);

  const loadMore = () => {
    if (loading) return;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchBlogs(nextPage);
  };

  const clearFilters = () => {
    setSelectedBlogYear("");
    setSelectedBlogCategory("");
    setCurrentPage(1);
  };

  const hasActiveFilters = selectedBlogYear || selectedBlogCategory;

  return (
    <div className="fix">
      {/* Filters */}
      <motion.div className="!w-full mt-10 fixup">
        {loading && blogs.length === 0 && availableCategories.length === 0 ? (
          <Skeleton type="filters" />
        ) : (
          <div className="flex flex-col lg:h-[82px] sm:flex-row sm:items-center gap-[16px] sm:gap-[40px] flex-1">
            <div className="flex md:flex-row lg:mt-0 mt-5 flex-col md:max-w-[80%] lg:gap-10 gap-2 flex-1">
              {/* Category Filter */}
              <div className="relative w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
                {availableCategories.length > 0 ? (
                  <CustomDropdown
                    categories={["Categories", ...availableCategories]}
                    activeTab={
                      selectedBlogCategory
                        ? availableCategories.indexOf(selectedBlogCategory) + 1
                        : 0
                    }
                    setActiveTab={(i) => {
                      setCurrentPage(1);
                      if (i === 0) setSelectedBlogCategory("");
                      else setSelectedBlogCategory(availableCategories[i - 1]);
                    }}
                    className="w-full mt-0 relative"
                  />
                ) : (
                  <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
                    <span>
                      {selectedBlogYear
                        ? "No Categories in this Year"
                        : "Categories"}
                    </span>
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

              {/* Year Filter */}
              <div className="relative lg:-ml-[9%] w-full md:w-[calc((120%-40px)/2)] lg:w-[calc((120%-80px)/2.27)]">
                {availableYears.length > 0 ? (
                  <CustomDropdown
                    categories={["Year", ...availableYears.map(String)]}
                    activeTab={
                      selectedBlogYear
                        ? availableYears.indexOf(String(selectedBlogYear)) + 1
                        : 0
                    }
                    setActiveTab={(i) => {
                      setCurrentPage(1);
                      if (i === 0) setSelectedBlogYear("");
                      else setSelectedBlogYear(availableYears[i - 1]);
                    }}
                    className="w-full mt-0 relative"
                  />
                ) : (
                  <div className="w-full border-0 border-b border-[#CDCDCD] py-3 px-0 bg-white text-[#999999] flex justify-between items-center rounded-none cursor-not-allowed">
                    <span>
                      {selectedBlogCategory
                        ? "No Years for this Category"
                        : "Year"}
                    </span>
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
              {hasActiveFilters && (
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

      {/* Blog Grid */}
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
          ) : blogs.length === 0 ? (
            <motion.div
              key="no-blogs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-center py-[40px]"
            >
              <div className="bw-r text-[18px] text-[#666666] mb-[10px]">
                No blogs found
              </div>
              <div className="bw-r text-[16px] text-[#999999]">
                Check back later for new content.
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blog-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="py-0"
            >
              <BlogGrid blogs={blogs} />
              {hasMore && !loading && (
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

export default BlogTabContent;
