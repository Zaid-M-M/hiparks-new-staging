import React from "react";
import QuickCommerceHub from "./QuickCommerceHub";
import WarehousingForm from "./WarehousingForm";
import ContMain from "../parkdetial/contbox/ContMain";
import Features from "./Features";
import TrustedBySection from "./TrustedBySection";
import IndiaMapSection from "./IndiaMapSection";
import CampaignNewsletter from "./CampaignNewsletter";
import Slider from "../ecommerce/Ecom_sec5/Slider";
// import Slider from "./Brandweserve/Slider";

const dummyLeasingData = [
  {
    person_name: "Krutika Giri",
    person_number: "8879970705",
    person_email: "contactus@hiparks.com",
  },
];

const dummyBrochurePath = "/assets/docs/park_brochure.pdf";

const CampaignWrapper = () => {
  return (
    <div className="w-full h-full bg-white">
      <WarehousingForm />
      <Features />
      <QuickCommerceHub />
      <ContMain
        leasing_details={dummyLeasingData}
        park_brochure={dummyBrochurePath}
      />
      <IndiaMapSection />
      <TrustedBySection />
      <Slider />
      <CampaignNewsletter />
    </div>
  );
};

export default CampaignWrapper;
