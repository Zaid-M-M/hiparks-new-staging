import React from "react";
import Finan_info_Sec1 from "./finan_info_Sec1/finan_info_Sec1";
import Financial_results_sec from "./financial_results/financial_results_sec";
import Group_company_finance_sec from "./Group_company_finance/Group_company_finance_sec";
import General_meeting_sec from "./general_meeting/general_meeting_sec";
import Agm_egm_sec from "./agm_egm/agm_egm_sec";
import Board_meeting_sec from "./board_meeting/board_meeting_sec";
import Financial_results_secF from "./financial_results/Financial_results_secF";
// import Quaterly_finanacial_sec from "./financial_results/Quaterly_finanacial_sec";
import Annual_finanacial_sec from "./financial_results/Annual_finanacial_sec";
const financial_infoWrapper = () => {
  return (
    <div className="w-full h-full">
      <Finan_info_Sec1 />
      {/* <Quaterly_finanacial_sec /> */}
      <Annual_finanacial_sec />
      <Financial_results_secF />
      <Group_company_finance_sec />
      {/* <Financial_results_sec />
       <Annual_reports_sec />
      <General_meeting_sec />
      <Board_meeting_sec /> */}
    </div>
  );
};

export default financial_infoWrapper;
