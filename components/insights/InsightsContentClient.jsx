// components/insights/InsightsContentClient.tsx
"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import NewsTabContent from "./InsightsContent/news/NewsTabContent";
import PressTabContent from "./InsightsContent/press/PressTabContent";
import InsightsTitleSection from "./InsightsContent/InsightsTitleSection";
import MediaTabs from "./InsightsContent/MediaTabs";
import GradientIntroText from "./InsightsContent/GradientIntroText";

// Tab titles also drive the ?tab= slug used by the navbar "Media" links
export const mediaTabs = [{ title: "News" }, { title: "Press Release" }];

// These tabs moved to /resources – keep old /media?tab=… links working
const movedToResources = ["events", "blogs", "guidebooks"];

const titleToSlug = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const InsightsContentInner = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(mediaTabs[0].title);

  // Keep the active tab in sync with ?tab= so navbar links work
  // even when the user is already on /media
  const urlTab = searchParams.get("tab")?.toLowerCase() || "";
  useEffect(() => {
    if (movedToResources.includes(urlTab)) {
      router.replace(`/resources?tab=${urlTab}`);
      return;
    }
    const match = mediaTabs.find((t) => titleToSlug(t.title) === urlTab);
    setActiveTab(match ? match.title : mediaTabs[0].title);
  }, [urlTab, router]);

  const handleTabChange = useCallback(
    (title) => {
      setActiveTab(title);
      router.push(`${pathname}?tab=${titleToSlug(title)}`, { scroll: false });
    },
    [router, pathname],
  );

  return (
    <div className="w-full bg-white">
      <InsightsTitleSection
        activeTab={activeTab}
        title="Media"
        rightContent={
          <MediaTabs
            tabs={mediaTabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        }
      />

      <GradientIntroText
        className="pt-[10px] xl:pt-[30px]"
        lines={[
          "Where is Horizon making headlines?",
          "Explore recent media coverage, interviews and features on Horizon Industrial Parks.",
        ]}
      />

      {activeTab === "News" && <NewsTabContent />}
      {activeTab === "Press Release" && <PressTabContent />}
    </div>
  );
};

export default function InsightsContentClient() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-96 flex items-center justify-center">
          Loading media...
        </div>
      }
    >
      <InsightsContentInner />
    </Suspense>
  );
}
