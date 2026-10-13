import React from "react";
import { ReactLenis } from "lenis/react";
import ResourcesHero from "./ResourcesHero";
import ResourcesContentClient from "./ResourcesContentClient";

const ResourcesWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <ReactLenis root>
        <ResourcesHero />
        <ResourcesContentClient />
      </ReactLenis>
    </div>
  );
};

export default ResourcesWrapper;
