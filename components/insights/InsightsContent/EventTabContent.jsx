// "use client";
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import LoadMoreButton from "./LoadMoreButton";
// import cmsApi from "@/src/lib/cmsApi";
// import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
// import Skeleton from "./Skeleton";
// import EventGrid from "./EventGrid";
// import EventPopup from "./EventPopup";

// const EventTabContent = () => {
//   const postsPerPage = 6;

//   const [events, setEvents] = useState([]);
//   const [availableYears, setAvailableYears] = useState([]);
//   const [selectedYear, setSelectedYear] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [showSkeleton, setShowSkeleton] = useState(true);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [selectedIndex, setSelectedIndex] = useState(0);

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
//         const res = await cmsApi.getEvents(params);
//         if (res.success) {
//           const newEvents = res.data || [];
//           newEvents.forEach((e) => {
//             const year = e.acf?.year
//               ? String(e.acf.year)
//               : String(new Date(e.date).getFullYear());
//             yearsSet.add(year);
//           });
//           hasMorePages = newEvents.length === perPage;
//           page++;
//         } else {
//           hasMorePages = false;
//         }
//       }

//       const years = Array.from(yearsSet).sort((a, b) => b - a);
//       setAvailableYears(years);
//     } catch (err) {
//       console.error("Failed to fetch years:", err);
//     }
//   };

//   // Fetch events for the grid
//   const fetchEvents = async (page = 1) => {
//     setLoading(true);
//     setShowSkeleton(true); // Show skeleton on every fetch, including year change
//     try {
//       let res;
//       const params = { per_page: postsPerPage, page, _embed: true };
//       if (selectedYear) {
//         res = await cmsApi.getFilteredPosts("events", "", selectedYear, params);
//       } else {
//         res = await cmsApi.getEvents(params);
//       }
//       if (res.success) {
//         const newEvents = res.data || [];
//         setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
//         let newHasMore;
//         if (res.hasMore !== undefined) {
//           newHasMore = res.hasMore;
//         } else if (res.totalPages) {
//           newHasMore = page < parseInt(res.totalPages);
//         } else {
//           newHasMore = newEvents.length === postsPerPage;
//         }
//         setHasMore(newHasMore);
//         if (newEvents.length > 0) {
//           setShowSkeleton(false); // Hide skeleton immediately if events are found
//         }
//       } else {
//         setHasMore(false);
//         if (page === 1) setEvents([]);
//       }
//     } catch (err) {
//       console.error(err);
//       setHasMore(false);
//       if (page === 1) setEvents([]);
//     }
//     setLoading(false);
//   };

//   // Initial load for years and events
//   useEffect(() => {
//     fetchAllYears();
//     fetchEvents(1);

//     // Set timeout to hide skeleton after 10 seconds if no events are found
//     const skeletonTimeout = setTimeout(() => {
//       if (events.length === 0 && loading === false) {
//         setShowSkeleton(false);
//       }
//     }, 10000);

//     return () => clearTimeout(skeletonTimeout); // Cleanup timeout
//   }, [selectedYear]);

//   const loadMore = () => {
//     const nextPage = currentPage + 1;
//     setCurrentPage(nextPage);
//     fetchEvents(nextPage);
//   };

//   const handleEventClick = (event) => {
//     const index = events.findIndex((e) => e.id === event.id);
//     setSelectedEvent(event);
//     setSelectedIndex(index);
//   };

//   const closePopup = () => setSelectedEvent(null);

//   const handlePrev = () => {
//     if (selectedIndex > 0) {
//       setSelectedIndex(selectedIndex - 1);
//       setSelectedEvent(events[selectedIndex - 1]);
//     }
//   };

//   const handleNext = () => {
//     if (selectedIndex < events.length - 1) {
//       setSelectedIndex(selectedIndex + 1);
//       setSelectedEvent(events[selectedIndex + 1]);
//     }
//   };

//   const clearYearFilter = () => setSelectedYear("");

//   return (
//     <div>
//       {/* Year Filter */}
//       {/* <div className="my-10 fixup">
//         {loading && events.length === 0 ? (
//           <Skeleton type="filters" />
//         ) : (
//           <div className="flex items-center gap-4 w-full justify-between">
//             <CustomDropdown
//               categories={["Year", ...availableYears]}
//               activeTab={
//                 selectedYear
//                   ? availableYears.findIndex((y) => y === selectedYear) + 1
//                   : 0
//               }
//               setActiveTab={(i) => {
//                 if (i === 0) clearYearFilter();
//                 else setSelectedYear(availableYears[i - 1]);
//               }}
//               className="relative md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
//             />
//             {selectedYear && (
//               <button
//                 onClick={clearYearFilter}
//                 className="min-w-[130px] h-[50px] flex items-center justify-center gap-[12px] px-[16px] py-[12px] sm:min-w-[167px] sm:h-[82px] sm:gap-[24px] sm:px-[28px] sm:py-[29px] bg-transparent border border-[rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer whitespace-nowrap box-border"
//               >
//                 <img
//                   src="/cross.svg"
//                   alt="Cross"
//                   className="w-[16px] h-[16px] sm:w-[23px] sm:h-[23px]"
//                 />
//                 <span className="font-barlow font-normal text-[14px] sm:text-[20px] leading-[100%] tracking-[-0.04em] text-black text-center">
//                   Clear All
//                 </span>
//               </button>
//             )}
//           </div>
//         )}
//       </div> */}

//       {/* Event Grid */}
//       <AnimatePresence>
//         {showSkeleton ? (
//           <motion.div
//             key="skeleton"
//             className="px-[5%]"
//             initial={{ opacity: 0.5 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Skeleton type="grid" count={6} />
//           </motion.div>
//         ) : events.length === 0 ? (
//           <motion.div
//             key="no-events"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="text-center py-10"
//           >
//             No events found.
//           </motion.div>
//         ) : (
//           <motion.div
//             key="event-grid"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-10"
//           >
//             <EventGrid events={events} onEventClick={handleEventClick} />
//             {hasMore && (
//               <div className="mt-8 text-center">
//                 <LoadMoreButton onLoadMore={loadMore} loading={loading} />
//               </div>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Event Popup */}
//       {selectedEvent && (
//         <EventPopup
//           event={selectedEvent}
//           onClose={closePopup}
//           onPrevEvent={handlePrev}
//           onNextEvent={handleNext}
//           hasPrev={selectedIndex > 0}
//           hasNext={selectedIndex < events.length - 1}
//         />
//       )}
//     </div>
//   );
// };

// export default EventTabContent;

"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadMoreButton from "./LoadMoreButton";
import cmsApi from "@/src/lib/cmsApi";
import CustomDropdown from "@/components/ecommerce/Ecom_sec5/CustomDropdown";
import Skeleton from "./Skeleton";
import EventGrid from "./EventGrid";
import EventPopup from "./EventPopup";

const EventTabContent = () => {
  const postsPerPage = 6;

  const [events, setEvents] = useState([]);
  const [availableYears, setAvailableYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Fetch all unique years
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
        const res = await cmsApi.getEvents(params);
        if (res.success) {
          const newEvents = res.data || [];
          newEvents.forEach((e) => {
            const year = e.acf?.year
              ? String(e.acf.year)
              : String(new Date(e.date).getFullYear());
            yearsSet.add(year);
          });
          hasMorePages = newEvents.length === perPage;
          page++;
        } else {
          hasMorePages = false;
        }
      }

      const years = Array.from(yearsSet).sort((a, b) => b - a);
      setAvailableYears(years);
    } catch (err) {
      console.error("Failed to fetch years:", err);
    }
  };

  // Fetch events for the grid
  const fetchEvents = async (page = 1) => {
    setLoading(true);
    // Skeleton only for first page / year change — on Load More keep existing cards
    // so the page height doesn't collapse and scroll doesn't jump to the top
    if (page === 1) setShowSkeleton(true);
    try {
      let res;
      const params = { per_page: postsPerPage, page, _embed: true };
      if (selectedYear) {
        res = await cmsApi.getFilteredPosts("events", "", selectedYear, params);
      } else {
        res = await cmsApi.getEvents(params);
      }
      if (res.success) {
        const newEvents = res.data || [];
        setEvents((prev) => (page === 1 ? newEvents : [...prev, ...newEvents]));
        let newHasMore;
        if (res.hasMore !== undefined) {
          newHasMore = res.hasMore;
        } else if (res.totalPages) {
          newHasMore = page < parseInt(res.totalPages);
        } else {
          newHasMore = newEvents.length === postsPerPage;
        }
        setHasMore(newHasMore);
        if (newEvents.length > 0) {
          setShowSkeleton(false); // Hide skeleton immediately if events are found
        }
      } else {
        setHasMore(false);
        if (page === 1) setEvents([]);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
      if (page === 1) setEvents([]);
    }
    setLoading(false);
  };

  // Initial load for years and events
  useEffect(() => {
    fetchAllYears();
    fetchEvents(1);

    // Set timeout to hide skeleton after 10 seconds if no events are found
    const skeletonTimeout = setTimeout(() => {
      if (events.length === 0 && loading === false) {
        setShowSkeleton(false);
      }
    }, 10000);

    return () => clearTimeout(skeletonTimeout); // Cleanup timeout
  }, [selectedYear]);

  const loadMore = () => {
    if (loading) return;
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    fetchEvents(nextPage);
  };

  const handleEventClick = (event) => {
    const index = events.findIndex((e) => e.id === event.id);
    setSelectedEvent(event);
    setSelectedIndex(index);
  };

  const closePopup = () => setSelectedEvent(null);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedEvent(events[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedIndex < events.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedEvent(events[selectedIndex + 1]);
    }
  };

  const clearYearFilter = () => setSelectedYear("");

  return (
    <div>
      {/* Year Filter */}
      {/* <div className="my-10 fixup">
        {loading && events.length === 0 ? (
          <Skeleton type="filters" />
        ) : (
          <div className="flex items-center gap-4 w-full justify-between">
            <CustomDropdown
              categories={["Year", ...availableYears]}
              activeTab={
                selectedYear
                  ? availableYears.findIndex((y) => y === selectedYear) + 1
                  : 0
              }
              setActiveTab={(i) => {
                if (i === 0) clearYearFilter();
                else setSelectedYear(availableYears[i - 1]);
              }}
              className="relative md:w-[calc((100%-40px)/2)] lg:w-[calc((100%-80px)/3)]"
            />
            {selectedYear && (
              <button
                onClick={clearYearFilter}
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
              </button>
            )}
          </div>
        )}
      </div> */}

      {/* Event Grid */}
      <AnimatePresence>
        {showSkeleton ? (
          <motion.div
            key="skeleton"
            className="px-[5%]"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Skeleton type="grid" count={6} />
          </motion.div>
        ) : events.length === 0 ? (
          <motion.div
            key="no-events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center py-10"
          >
            No events found.
          </motion.div>
        ) : (
          <motion.div
            key="event-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10"
          >
            <EventGrid events={events} onEventClick={handleEventClick} />
            {hasMore && (
              <div className="mt-8 text-center">
                <LoadMoreButton onLoadMore={loadMore} loading={loading} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event Popup */}
      {selectedEvent && (
        <EventPopup
          event={selectedEvent}
          onClose={closePopup}
          onPrevEvent={handlePrev}
          onNextEvent={handleNext}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < events.length - 1}
        />
      )}
    </div>
  );
};

export default EventTabContent;
