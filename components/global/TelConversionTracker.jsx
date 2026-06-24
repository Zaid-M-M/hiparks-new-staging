"use client";

import { useEffect } from "react";

export default function TelConversionTracker() {
  useEffect(() => {
    const handleTelClick = (e) => {
      // Find out if the clicked element (or any of its parents) is an <a> tag with a tel: link
      const target = e.target;
      const telLink = target.closest('a[href^="tel:"]');

      if (telLink) {
        // Safe check to ensure gtag is loaded
        if (
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          window.gtag("event", "conversion", {
            send_to: "AW-11222827838/9Y7uCKbu6ZccEL6Gu-cp",
            value: 1.0,
            currency: "INR",
          });
        }
      }
    };

    // Attach to the document for global event delegation
    document.addEventListener("click", handleTelClick);

    // Cleanup the listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleTelClick);
    };
  }, []);

  // This component doesn't render anything to the DOM
  return null;
}
