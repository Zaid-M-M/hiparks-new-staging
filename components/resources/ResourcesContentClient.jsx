"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InsightsTabs from "@/components/insights/InsightsContent/InsightsTabs";
import InsightsTitleSection from "@/components/insights/InsightsContent/InsightsTitleSection";
import EventTabContent from "@/components/insights/InsightsContent/EventTabContent";
import BlogTabContent from "@/components/insights/InsightsContent/BlogTabContent";
import WhitePaperTabContent from "@/components/insights/InsightsContent/WhitePaperTabContent";
import TestimonialTabContent from "./ClientTestimonials/TestimonialTabContent";
import CaseStudyTabContent from "./CaseStudies/CaseStudyTabContent";
import GradientIntroText from "@/components/insights/InsightsContent/GradientIntroText";

// Tab titles also drive the ?tab= slug used by the navbar "Resources" links
export const resourcesTabs = [
  { title: "Client Testimonials" },
  { title: "Case Studies" },
  { title: "Events" },
  { title: "Blogs" },
  { title: "Guidebooks" },
];

const titleToSlug = (title) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const ResourcesContentInner = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(resourcesTabs[0].title);

  // Keep the active tab in sync with ?tab= so navbar links work
  // even when the user is already on /resources
  const urlTab = searchParams.get("tab");
  useEffect(() => {
    if (!urlTab) return;
    const match = resourcesTabs.find(
      (t) => titleToSlug(t.title) === urlTab.toLowerCase(),
    );
    if (match) setActiveTab(match.title);
  }, [urlTab]);

  return (
    <div className="w-full bg-white">
      <InsightsTitleSection activeTab={activeTab} title="Resources" />

      <InsightsTabs
        tabs={resourcesTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <GradientIntroText
        className="pt-[30px] xl:pt-[50px]"
        lines={[
          "How does Horizon solve complex business requirements?",
          "See how operational needs are translated into tailored industrial and logistics infrastructure.",
        ]}
      />

      {activeTab === "Client Testimonials" && <TestimonialTabContent />}
      {activeTab === "Case Studies" && <CaseStudyTabContent />}
      {activeTab === "Events" && <EventTabContent />}
      {activeTab === "Blogs" && (
        <BlogTabContent selectedCategory="" selectedYear="" />
      )}
      {activeTab === "Guidebooks" && <WhitePaperTabContent />}
    </div>
  );
};

export default function ResourcesContentClient() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-96 flex items-center justify-center">
          Loading resources...
        </div>
      }
    >
      <ResourcesContentInner />
    </Suspense>
  );
}
