import React from "react";
import FlexComponents from "@/components/whitepaper-globalf/FlexComponents";
import Header from "./Header";
import flexSections from "./data";
import White_Paper_sec12 from "@/components/whitepaper-globalf/White_Paper_sec12";
import referencesBoxes from "./refdata";
export const metadata = {
  guidebook_date: "2024-06-01",
  title:
    "Modern Warehouse Automation Powering the Next Era of Logistics Efficiency | Horizon",
  description:
    "The contemporary warehouse landscape is undergoing a profound transformation, shaped by shifting consumer expectations, the explosive growth of e-commerce, and an insistent demand for faster, more accurate order fulfilment. Traditional, labour- intensive warehouses have steadily been replaced by smart, automated facilities driven by cutting-edge technologies including robotics, automation systems, advanced data analytics, and Internet of Things (IoT) devices. The global momentum behind warehouse automation is accelerating at a remarkable pace, with industry estimates projecting the market will expand from $29.91 billion in 2025 to $63.36 billion by 2030, achieving a CAGR of 16.2%.",
};

const page = () => {
  return (
    <div className="w-full">
      <Header
        breadcrumbs={[
          { Home: "#" },
          { Guidebooks: "#" },
          {
            "Modern Warehouse Automation Powering the Next Era of Logistics Efficiency":
              "#",
          },
        ]}
        h1Line1="Modern Warehouse Automation"
        h1Line2="Powering the Next Era of Logistics Efficiency"
        abstractPosition="line1-right"
        headerImg="/white_paper/modenwp/header.webp"
      />

      {flexSections.map((section, index) => (
        <FlexComponents key={index} {...section} />
      ))}

      <White_Paper_sec12 title="References" boxes={referencesBoxes} />
    </div>
  );
};

export default page;
