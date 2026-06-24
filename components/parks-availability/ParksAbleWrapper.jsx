import React from "react";
import ParksAvailability from "./ParksAvailability";
// import { fetchParksData, fetchParksDataByZone } from "./data/fetchParks";
import Parkssec1 from "./parkssec1.jsx/Parkssec1";
import Parksintegrate from "./parksintegrate/ParksIntegrate";
import SlideParksAvb from "./slideparksavb";

import AroSlider from "../Arospace/Aro_sec5/Slider";
import AutoSlider from "../Automotive/Auto_sec5/Slider";
import FactoryFormSec from "../Factory/Formsec";
import ParkDetailFormSec from "../parkdetial/FormSec";

const ParksAbleWrapper = ({ zone, parksData }) => {
  let SliderComponent;
  let FormComponent;

  if (zone) {
    // If zone is provided, we might need to filter the parksData if it wasn't already filtered by the parent page
    // BUT since we are moving logic to page.jsx, we assume the parent page passes the CORRECT data.
    // However, for now, main page passes all data.
    // Ideally, the zone specific pages should also fetch and pass data.

    // For now, let's keep the component selection logic
    SliderComponent = AutoSlider;

    if (zone === "West") {
      FormComponent = ParkDetailFormSec;
    } else {
      FormComponent = FactoryFormSec;
    }
  } else {
    SliderComponent = AroSlider;
    FormComponent = FactoryFormSec;
  }

  return (
    <div className="">
      <Parkssec1 />
      <ParksAvailability parksData={parksData} />
      <SliderComponent />
      <Parksintegrate />
      <SlideParksAvb />
      <FormComponent />
    </div>
  );
};

export default ParksAbleWrapper;
