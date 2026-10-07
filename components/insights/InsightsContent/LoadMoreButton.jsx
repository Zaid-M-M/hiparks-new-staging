// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const LoadMoreButton = ({ onLoadMore, loading }) => {
//   return (
//     <div className="w-full">
//       <div className="pb-10 flex justify-center">
//         <motion.a
//           href="javascript:void(0);"
//           onClick={(e) => {
//             e.preventDefault();
//             if (!loading) {
//               onLoadMore();
//             }
//           }}
//           className={`relative overflow-hidden bg-black border-2 border-black px-[40px] py-[14px] bw-m text-[16px] text-white transition-all duration-300 inline-block text-center ${
//             loading
//               ? "opacity-50 cursor-not-allowed pointer-events-none"
//               : "cursor-pointer hover:bg-white hover:text-black"
//           }`}
//         >
//           <span className="relative z-10">
//             {loading ? "Loading..." : "LOAD MORE"}
//           </span>
//         </motion.a>
//       </div>
//     </div>
//   );
// };

// export default LoadMoreButton;

"use client";
import React from "react";
import { motion } from "framer-motion";

// Keep the user at the same scroll position while new cards load in,
// so the page never jumps back up to the first cards.
const holdScrollPosition = (y, duration = 1500) => {
  if (typeof window === "undefined") return;
  const start = performance.now();
  let cancelled = false;
  const events = ["wheel", "touchstart", "keydown"];
  // Stop holding as soon as the user scrolls on their own
  const cancel = () => {
    cancelled = true;
    events.forEach((ev) => window.removeEventListener(ev, cancel));
  };
  events.forEach((ev) =>
    window.addEventListener(ev, cancel, { passive: true }),
  );
  const tick = () => {
    if (cancelled) return;
    if (window.scrollY < y - 50) {
      window.scrollTo({ top: y, behavior: "instant" });
    }
    if (performance.now() - start < duration) requestAnimationFrame(tick);
    else cancel();
  };
  requestAnimationFrame(tick);
};

const LoadMoreButton = ({ onLoadMore, loading }) => {
  return (
    <div className="w-full">
      <div className="pb-10 flex justify-center">
        <motion.a
          href="javascript:void(0);"
          onClick={(e) => {
            e.preventDefault();
            e.currentTarget.blur();
            if (!loading) {
              holdScrollPosition(window.scrollY);
              onLoadMore();
            }
          }}
          className={`relative overflow-hidden bg-black border-2 border-black px-[40px] py-[14px] bw-m text-[16px] text-white transition-all duration-300 inline-block text-center ${
            loading
              ? "opacity-50 cursor-not-allowed pointer-events-none"
              : "cursor-pointer hover:bg-white hover:text-black"
          }`}
        >
          <span className="relative z-10">
            {loading ? "Loading..." : "LOAD MORE"}
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default LoadMoreButton;
