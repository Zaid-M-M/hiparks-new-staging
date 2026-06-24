import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ParksModal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content with 16:12 ratio */}
          <motion.div
            className="relative z-10 max-w-[70%] w-[70%] aspect-[16/9]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute bg-white top-2 right-2 text-[5px] sm:text-3xl font-bold text-black cursor-pointer z-20 lg:border lg:border-[#00000021] lg:p-[10px] px-[10px]"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                className="w-[15px] md:w-[auto]"
              >
                <path
                  d="M1 24.375L23.75 1.625"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.75 24.375L0.999998 1.625"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Children content (image/video) */}
            <div className="w-full h-full flex items-center justify-center">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ParksModal;
