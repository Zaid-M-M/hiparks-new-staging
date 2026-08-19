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
import FormSec from "../parkdetial/FormSec";
import MappeduAvailabilitySlider from "./MappeduAvailabilitySlider";
import { fetchParkSlidesByName } from "../parks-availability/data/fetchParks";

const dummyLeasingData = [
  {
    person_name: "Priti Ram",
    person_number: "8879970705",
    person_email: "contactus@hiparks.com",
  },
];

const dummyBrochurePath =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/07/Chengalpattu_Park-Brochure_New.pdf";

const CampaignMappeduWrapper = async () => {
  const mappeduSlides = await fetchParkSlidesByName("Mappedu");

  return (
    <div className="w-full h-full bg-white">
      <WarehousingForm />
      <Features />
      <QuickCommerceHub />
      <ContMain
        leasing_details={dummyLeasingData}
        park_brochure={dummyBrochurePath}
      />
      {/* <IndiaMapSection /> */}
      <TrustedBySection />
      <MappeduAvailabilitySlider slides={mappeduSlides} />

      <Slider />
      {/* <FormSec /> */}
      {/* <CampaignNewsletter /> */}
    </div>
  );
};

export default CampaignMappeduWrapper;
