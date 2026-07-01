import React from "react";
import QuickCommerceHub from "./QuickCommerceHub";
import WarehousingForm from "./WarehousingForm";
import ContMain from "../parkdetial/contbox/ContMain";
import Features from "./Features";
import TrustedBySection from "./TrustedBySection";
import IndiaMapSection from "./IndiaMapSection";
import CampaignNewsletter from "./CampaignNewsletter";
import BrandsSlider from "./BrandsSlider";

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
        // secbg="/sustainable_landing/suslcta.webp"
        secbg="bg-[url(/sustainable_landing/suslcta.webp)]"
        downtext="DOWNLOAD BROCHURE"
      />
      <IndiaMapSection />
      <TrustedBySection />
      <BrandsSlider />
      <CampaignNewsletter />
    </div>
  );
};

export default CampaignWrapper;
