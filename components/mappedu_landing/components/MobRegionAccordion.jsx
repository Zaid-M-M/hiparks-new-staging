// "use client";

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { PlusIcon, Minus } from "lucide-react";
// import MobParkDropdown from "./MobParkDropdown";
// import MobSlideContent from "./MobSlideContent";

// const MobRegionAccordion = ({
//   region,
//   parksData,
//   openRegion,
//   selectedPark,
//   dropdownOpen,
//   onRegionToggle,
//   onParkSelect,
//   onDropdownToggle,
//   onImageClick,
// }) => {
//   return (
//     <div className="border-b border-[#ffffff] overflow-hidden">
//       {/* Region Header */}
//       <button
//         className="w-full flex items-center justify-between py-5 px-3 bg-transparent text-left"
//         onClick={() => onRegionToggle(region)}
//       >
//         <span className="text-lg font-medium text-white">{region}</span>
//         <span className="text-white">
//           {openRegion === region ? (
//             <Minus className="w-5 h-5" />
//           ) : (
//             <PlusIcon className="w-5 h-5" />
//           )}
//         </span>
//       </button>

//       {/* Region Content */}
//       <AnimatePresence>
//         {openRegion === region && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <div className="bg-[#0a0a0a] pt-3">
//               <MobParkDropdown
//                 region={region}
//                 parksData={parksData}
//                 selectedPark={selectedPark}
//                 dropdownOpen={dropdownOpen}
//                 onParkSelect={onParkSelect}
//                 onDropdownToggle={onDropdownToggle}
//               />

//               {selectedPark[region] !== undefined &&
//                 selectedPark[region] !== "" && (
//                   <MobSlideContent
//                     region={region}
//                     park={parksData[region][selectedPark[region]]}
//                     onImageClick={onImageClick}
//                   />
//                 )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobRegionAccordion;
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
/////
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobSlideContent from "./MobSlideContent";

const MobParkDropdown = ({
  region,
  parksData,
  selectedPark,
  dropdownOpen,
  onParkSelect,
  onDropdownToggle,
}) => {
  return (
    <div className="mb-4 relative">
      <button
        onClick={() => onDropdownToggle(region)}
        className="w-full border-0 border-b border-[#CDCDCD] py-3 px-2 bg-white text-black flex justify-between items-center rounded-none"
      >
        <span>
          {selectedPark[region] !== undefined
            ? `${parksData[region][selectedPark[region]].name} (${parksData[region][selectedPark[region]].slides.length})`
            : "Select a park..."}
        </span>

        <motion.svg
          animate={{ rotate: dropdownOpen[region] ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {dropdownOpen[region] && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 right-0 bg-white border border-[#CDCDCD] shadow-md z-60"
          >
            {parksData[region].map((park, i) => (
              <button
                key={i}
                onClick={() => onParkSelect(region, i)}
                className={`w-full text-left px-4 py-2 text-black hover:bg-gray-100 ${
                  selectedPark[region] === i ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {park.name} ({park.slides.length})
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const GradientPlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none">
    <defs>
      <linearGradient
        id="gradPlus"
        x1="0"
        y1="0"
        x2="12"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#AC38D9" />
        <stop offset="100%" stopColor="#F47922" />
      </linearGradient>
    </defs>
    <rect x="5.28" y="1.2" width="1.44" height="9.6" fill="url(#gradPlus)" />
    <rect x="1.2" y="5.28" width="9.6" height="1.44" fill="url(#gradPlus)" />
  </svg>
);

const MobRegionAccordion = ({
  region,
  parksData,
  openRegion,
  selectedPark,
  dropdownOpen,
  onRegionToggle,
  onParkSelect,
  onDropdownToggle,
  onImageClick,
}) => {
  return (
    <div className="border-b border-gray-600 overflow-hidden last:border-0">
      {/* Region Header */}
      <button
        className="w-full flex items-center justify-between py-5  bg-transparent text-left cursor-pointer"
        onClick={() => onRegionToggle(region)}
      >
        <span className="text-lg font-medium text-white">{region}</span>

        {/* Icon replaced only */}
        <span className="text-white">
          <GradientPlusIcon />
        </span>
      </button>

      {/* Region Content */}
      <AnimatePresence>
        {openRegion === region && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "fit-content", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-[#0a0a0a] pt-3">
              <MobParkDropdown
                region={region}
                parksData={parksData}
                selectedPark={selectedPark}
                dropdownOpen={dropdownOpen}
                onParkSelect={onParkSelect}
                onDropdownToggle={onDropdownToggle}
              />

              {selectedPark[region] !== undefined &&
                selectedPark[region] !== "" && (
                  <MobSlideContent
                    key={`${region}-${selectedPark[region]}`}
                    region={region}
                    park={parksData[region][selectedPark[region]]}
                    onImageClick={onImageClick}
                  />
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobRegionAccordion;
