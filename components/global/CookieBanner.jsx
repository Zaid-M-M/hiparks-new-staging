"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the banner for a better UX
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
    // Reload to trigger the conditional script loading in Layout
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-white border border-gray-200 shadow-2xl rounded-2xl p-6 z-[9999999]"
        >
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-black font-semibold text-lg mb-2 uppercase tracking-wide">
                Cookie Consent
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your experience, analyze our traffic,
                and serve social media features. By clicking "Accept", you agree to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAccept}
                className="flex-1 bg-black text-white py-3 px-6 rounded-full font-medium uppercase tracking-widest text-[10px] hover:bg-gray-800 transition shadow-sm cursor-pointer"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 bg-white text-black border border-gray-200 py-3 px-6 rounded-full font-medium uppercase tracking-widest text-[10px] hover:bg-gray-50 transition cursor-pointer"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
