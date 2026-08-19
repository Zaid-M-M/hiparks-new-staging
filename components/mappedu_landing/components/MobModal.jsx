import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MobModal = ({ isOpen, onClose, children }) => {
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

          {/* Modal Content */}
          <motion.div
            className="relative z-10 max-w-[90%] w-[90%]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              className="absolute bg-white right-2 top-2 w-auto h-auto font-bold text-black cursor-pointer z-20 border p-1 border-[#00000060] aspect-square"
              onClick={onClose}
            >
              <X size={20} />
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

export default MobModal;
