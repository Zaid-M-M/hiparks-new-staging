"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const TIDIO_DISABLED_PATHS = new Set([
  "/campaign/grade-a-fulfillment-centers-in-india",
]);

export default function TrackingScripts() {
  const pathname = usePathname();
  const disableTidio = TIDIO_DISABLED_PATHS.has(pathname);

  return (
    <>
      <GoogleTagManager gtmId="GTM-W5TDXMD" />
      <GoogleAnalytics gaId="G-2VB35ZXSZY" />

      {!disableTidio && (
        <Script
          id="tidio-chat"
          src="https://code.tidio.co/ie0hwxpri9o05xhjbf2zly2wuom4y6ri.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}
