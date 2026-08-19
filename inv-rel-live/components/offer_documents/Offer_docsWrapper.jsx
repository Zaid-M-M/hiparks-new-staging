import React from "react";
import Offer_docs_Sec1 from "./offer_docs_Sec1/offer_docs_Sec1";
import Prospectus_sec from "./prospectus/prospectus_sec";
import Rhp_sec from "./rhp/rhp_sec";
import Drhp_sec from "./drhp/drhp_sec";
import Industry_report_sec from "./industry_report/industry_report_sec";

import Material_contacts_sec from "./material_contacts/material_contacts_sec";
const Offer_docsWrapper = () => {
  return (
    <div className="w-full h-full">
      <Offer_docs_Sec1 />
      <Prospectus_sec />
      <Rhp_sec />
      <Drhp_sec />
      <Industry_report_sec />
      <Material_contacts_sec />
    </div>
  );
};

export default Offer_docsWrapper;
