import React from "react";
import FlexComponents from "@/components/whitepaper-globalf/FlexComponents";
import Header from "./Header";
import flexSections from "./data";
import White_Paper_sec12 from "@/components/whitepaper-globalf/White_Paper_sec12";
import referencesBoxes from "./refdata";
export const metadata = {
  guidebook_date: "2025-03-01",
  title:
    "Built-to-Suit Warehouses and Factories: Tailored Solutions for Modern Industry | Horizon Industrial Parks",
  description:
    "Explore the rise of custom-built logistics infrastructure, projected growth in BTS warehousing demand, and tailored solutions for modern industry in India.",
};

const page = () => {
  return (
    <div className="w-full">
      <Header
        breadcrumbs={[
          { Home: "/" },
          { Guidebooks: "/media?tab=guidebooks" },
          {
            "Built-to-Suit Warehouses and Factories": "#",
          },
        ]}
        h1Line1="Built-to-Suit Warehouses and Factories"
        h1Line2="Tailored Solutions for Modern Industry"
        abstractPosition="line1-right"
        headerImg="/white_paper/bts/sec1.jpg"
      />

      {flexSections.map((section, index) => (
        <FlexComponents key={index} {...section} />
      ))}

      <White_Paper_sec12 title="References" boxes={referencesBoxes} />
    </div>
  );
};

export default page;
