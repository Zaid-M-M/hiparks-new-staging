import React from "react";
import { ReactLenis } from "lenis/react";
import InsightsHero from "@/components/insights/InsightsHero/InsightsHero";
import ResourcesContentClient from "./ResourcesContentClient";

const ResourcesWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <ReactLenis root>
        <InsightsHero breadcrumbLabel="Resources" breadcrumbHref="/resources" />
        <ResourcesContentClient />
      </ReactLenis>
    </div>
  );
};

export default ResourcesWrapper;
