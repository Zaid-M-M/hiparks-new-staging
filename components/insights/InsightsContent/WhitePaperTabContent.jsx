// "use client";

// import React, { useEffect, useState } from "react";
// import LoadMoreButton from "./LoadMoreButton";
// import WPGrid from "./WPGrid";

// const postsPerPage = 6;

// const WhitePaperTabContent = () => {
//   const [papers, setPapers] = useState([]);
//   const [displayedPapers, setDisplayedPapers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [hasMore, setHasMore] = useState(false);

//   useEffect(() => {
//     const fetchGuidebooks = async () => {
//       try {
//         const res = await fetch("/api/guidebooks", { cache: "no-store" });
//         if (!res.ok) throw new Error("Failed to fetch guidebooks");
//         const data = await res.json();
//         setPapers(data);
//         setDisplayedPapers(data.slice(0, postsPerPage));
//         setHasMore(data.length > postsPerPage);
//       } catch (error) {
//         console.error("Error fetching guidebooks:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGuidebooks();
//   }, []);

//   const loadMore = () => {
//     const nextStart = displayedPapers.length;
//     const nextEnd = nextStart + postsPerPage;
//     const nextSlice = papers.slice(nextStart, nextEnd);

//     setDisplayedPapers((prev) => [...prev, ...nextSlice]);
//     setHasMore(nextEnd < papers.length);
//   };

//   if (loading) {
//     return (
//       <div className="w-full h-96 flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   // Empty state
//   if (displayedPapers.length === 0) {
//     return <div className="text-center py-10">No Guidebooks found.</div>;
//   }

//   return (
//     <div className="fix">
//       <div className="mt-10">
//         {/* Re‑use the same BlogGrid that renders BlogCard */}
//         <WPGrid blogs={displayedPapers} activeTab="Guidebooks" />

//         {/* Show Load More only if there are more items */}
//         {hasMore && <LoadMoreButton onLoadMore={loadMore} loading={false} />}
//       </div>
//     </div>
//   );
// };

// export default WhitePaperTabContent;

"use client";

import React, { useEffect, useState } from "react";
import LoadMoreButton from "./LoadMoreButton";
import WPGrid from "./WPGrid";
import Skeleton from "./Skeleton";

const postsPerPage = 6;

const WhitePaperTabContent = () => {
  const [papers, setPapers] = useState([]);
  const [displayedPapers, setDisplayedPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchGuidebooks = async () => {
      try {
        const res = await fetch("/api/guidebooks", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch guidebooks");
        const data = await res.json();
        setPapers(data);
        setDisplayedPapers(data.slice(0, postsPerPage));
        setHasMore(data.length > postsPerPage);
      } catch (error) {
        console.error("Error fetching guidebooks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuidebooks();
  }, []);

  const loadMore = () => {
    const nextStart = displayedPapers.length;
    const nextEnd = nextStart + postsPerPage;
    const nextSlice = papers.slice(nextStart, nextEnd);

    setDisplayedPapers((prev) => [...prev, ...nextSlice]);
    setHasMore(nextEnd < papers.length);
  };

  if (loading) {
    return (
      <div className="fix">
        <Skeleton type="grid" count={6} />
      </div>
    );
  }

  // Empty state
  if (displayedPapers.length === 0) {
    return <div className="text-center py-10">No Guidebooks found.</div>;
  }

  return (
    <div className="fix">
      <div className="mt-10">
        {/* Re‑use the same BlogGrid that renders BlogCard */}
        <WPGrid blogs={displayedPapers} activeTab="Guidebooks" />

        {/* Show Load More only if there are more items */}
        {hasMore && <LoadMoreButton onLoadMore={loadMore} loading={false} />}
      </div>
    </div>
  );
};

export default WhitePaperTabContent;
