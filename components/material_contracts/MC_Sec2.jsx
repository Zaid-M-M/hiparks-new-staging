"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MC_accordion_data = [
  {
    id: 1,
    title: "Valuation Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    bg: "#F7C99B",
    docs: [
      { title: "Bagur Logistics Parks Pvt Ltd", pdf: "" },
      { title: "BRE Asia III/Horizon Share Exchange Ratio", pdf: "" },
      { title: "BRE Asia Urban/Horizon Share Exchange Ratio", pdf: "" },
      {
        title: "Embassy Industrial Parks Hosur Private Limited – OCDs",
        pdf: "",
      },
      {
        title: "Everstrat Zenith Private Limited – Class B OCDs",
        pdf: "",
      },
      {
        title: "Everstrat Zenith Private Limited – Equity Shares",
        pdf: "",
      },
      { title: "Farukhnagar Logistics Parks LLP", pdf: "" },
      {
        title: "Goodluck Buildtech Private Limited – Equity Shares",
        pdf: "",
      },
      { title: "Goodluck Buildtech Private Limited – OCDs", pdf: "" },
      { title: "Jindpur Industrial Parks Pvt Ltd", pdf: "" },
      {
        title: "Juturna Developers/Talegaon Industrial Parks",
        pdf: "",
      },
      { title: "KCP 2 - Equity Shares", pdf: "" },
      { title: "KCP 3 - Equity Shares", pdf: "" },
      { title: "Kothur Logistics Parks Private Limited", pdf: "" },
      {
        title: "Kothur Logistics Parks Private Limited - CCDs",
        pdf: "",
      },
      {
        title:
          "Onirique Builders and Developers Private Limited - Class A Equity Shares",
        pdf: "",
      },
      {
        title:
          "Onirique Builders and Developers Private Limited – Equity Shares",
        pdf: "",
      },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited – Equity Shares",
        pdf: "",
      },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited - OCDs",
        pdf: "",
      },
      { title: "Pluto Valencia Business Parks Private Limited", pdf: "" },
      { title: "Panvel Warehousing Private Limited", pdf: "" },
      {
        title:
          "Sirepumpadur Industrial and Enterprise Private Limited - Equity Shares",
        pdf: "",
      },
      { title: "Vertical Logistics Parks LLP", pdf: "" },
      { title: "Vidarbha Cargo Private Limited", pdf: "" },
      { title: "Vidarbha Cargo Private Limited - OCDs", pdf: "" },
      { title: "Vision Softtech Facilities - CCDs", pdf: "" },
      { title: "Vision Softtech Facilities - Equity Shares", pdf: "" },
      { title: "Volumnus Developers Private Limited - OCRPS", pdf: "" },
      {
        title: "XSIO Industrial Parks Private Limited - Equity Shares",
        pdf: "",
      },
      { title: "XSIO Industrial Parks Private Limited - OCDs", pdf: "" },
      {
        title: "XSIO Logistics Parks Private Limited - Equity Shares",
        pdf: "",
      },
      { title: "XSIO Logistics Parks Private Limited - OCDs", pdf: "" },
      { title: "XSIO Warehousing Private Limited - Class A OCDs", pdf: "" },
    ],
  },
  {
    id: 2,
    title: "Credit Rating Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      { title: "Bagur Logistics Park Private Limited", pdf: "" },
      {
        title: "Embassy Industrial Parks Hosur Private Limited",
        pdf: "",
      },
      { title: "Faruknagar Logistics Parks LLP", pdf: "" },
      { title: "FRK II Industrial Park Private Limited", pdf: "" },
      { title: "Goodluck Buildtech Private Limited", pdf: "" },
      { title: "Horizon Industrial Parks Private Limited", pdf: "" },
      { title: "JLV Distripark (MWC) Private Limited", pdf: "" },
      { title: "JLV Distripark Private Limited", pdf: "" },
      { title: "Jinjapur Industrial Parks Private Limited", pdf: "" },
      { title: "Kalina Warehousing Private Limited", pdf: "" },
      { title: "Lakshmipathi Realtors Private Limited", pdf: "" },
      { title: "LI Industrial Parks Private Limited", pdf: "" },
      {
        title: "Maur Logistics and Industrial Parks Private Limited",
        pdf: "",
      },
      {
        title: "Panvel Logistics and Warehousing Solutions Private Limited",
        pdf: "",
      },
      { title: "Panvel Warehousing Private Limited", pdf: "" },
      { title: "Redhills Industrial Parks Private Limited", pdf: "" },
      { title: "Vertical Logistics Park LLP", pdf: "" },
      { title: "Vidarbha Cargo Private Limited", pdf: "" },
      { title: "XSIO Warehousing Private Limited", pdf: "" },
    ],
  },
  {
    id: 3,
    title: "Share Purchase Agreement",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    bg: "#F7C99B",
    docs: [
      {
        title: "DRA Projects and Bagur Logistics Parks Private Limited - SPA",
        pdf: "",
      },
      { title: "Bagur Logistics Park Private Limited - SPA", pdf: "" },
      {
        title:
          "Goodluck Buildtech Private Limited/Jindpur Industrial Parks Private Limited - SPA",
        pdf: "",
      },
      {
        title:
          "Vidarbha Cargo Private Limited/XSIO Logistics Parks Private Limited - SPA",
        pdf: "",
      },
      {
        title:
          "Goodluck Buildtech Private Limited/Jindpur Industrial Parks Private Limited - SPA",
        pdf: "",
      },
      { title: "Panvel Warehousing Private Limited - SPA", pdf: "" },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited/Embassy Industrial Parks Hosur Private Limited - SPA",
        pdf: "",
      },
      { title: "Pluto Valencia Business Parks - SPA", pdf: "" },
      { title: "BRE Asia II Indi Holding Company I - SPA", pdf: "" },
      { title: "Mindcomp/Onrique - SPA", pdf: "" },
    ],
  },
  {
    id: 4,
    title: "Share Subscription and Purchase Agreement",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      { title: "Allcargo/Venkatapura/Kalina/Panvel - SSPA", pdf: "" },
      { title: "Kothur Logistics Park Private Limited - SSPA", pdf: "" },
      { title: "Mindcomp/Onrique - SSPA", pdf: "" },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited - SSPA",
        pdf: "",
      },
      { title: "Redhills/Everstrat Zenith - SSPA", pdf: "" },
      { title: "Vidarbha Cargo Private Limited - SSPA", pdf: "" },
      { title: "Vision Softtech - SSPA", pdf: "" },
    ],
  },
  {
    id: 5,
    title: "Share Subscription Agreement",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    bg: "#F7C99B",
    docs: [
      {
        title: "Kothur Logistics Park Private Limited - SSA",
        pdf: "/offer-documents/material-contracts",
      },
      {
        title: "KCP 2/KCP 3/Sriperumbudur - SSA",
        pdf: "/offer-documents/material-contracts",
      },
    ],
  },
  {
    id: 6,
    title: "Fresh Certificate of Incorporation",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      {
        title: "Embassy-Maini Logistics Bangalore Private Limited",
        pdf: "/offer-documents/material-contracts",
      },
      {
        title: "Embassy Industrial Parks Private Limited",
        pdf: "/offer-documents/material-contracts",
      },
      {
        title: "Horizon Industrial Parks Private Limited",
        pdf: "/offer-documents/material-contracts",
      },
      {
        title: "Horizon Industrial Parks Limited",
        pdf: "/offer-documents/material-contracts",
      },
    ],
  },
  {
    id: 7,
    title: "Shareholders Agreement",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    bg: "#F7C99B",
    docs: [
      { title: "Kothur Logistics Park Private Limited", pdf: "" },
      {
        title:
          "Talegaon Industrial Parks, Juturna Developers, Volumnus Developers",
        pdf: "",
      },
      {
        title:
          "KCP-2 Industrial Parks, KCP-3 Industrial Parks, Sriperumbudur Industrial",
        pdf: "",
      },
      {
        title: "Banamakanahalli Industrial and Logistics Private Limited",
        pdf: "",
      },
      {
        title: "Bhiwandi Industrial & Logistics Parks Private Limited",
        pdf: "",
      },
      { title: "XSIO Warehousing Private Limited", pdf: "" },
      { title: "Vidarbha Cargo Private Limited", pdf: "" },
      {
        title:
          "Vidarbha Cargo Private Limited, XSIO Logistics Parks Private Limited",
        pdf: "",
      },
      { title: "XSIO Industrial Parks Private Limited", pdf: "" },
      { title: "Vision Softtech Facilities Private Limited", pdf: "" },
    ],
  },
  {
    id: 8,
    title: "Deed of Adherence",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      {
        title:
          "Talegaon Industrial Parks, Juturna Developers, Volumnus Developers",
        pdf: "/offer-documents/material-contracts",
      },
      {
        title: "Banamakanahalli Industrial and Logistics Private Limited",
        pdf: "/offer-documents/material-contracts",
      },
      {
        title: "Bhiwandi Industrial & Logistics Parks Private Limited",
        pdf: "/offer-documents/material-contracts",
      },
    ],
  },
  {
    id: 9,
    title: "Consents",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    bg: "#F7C99B",
    docs: [
      {
        title: "M S K C & Associates LLP, S G C O & Co LLP",
        pdf: "",
      },
      { title: "D M K H & Co., Chartered Accountants", pdf: "" },
      { title: "Deloitte Haskins & Sells LLP", pdf: "" },
      { title: "Independent Architect", pdf: "" },
      {
        title: "Company Directors, Company Secretary and others",
        pdf: "",
      },
      { title: "Industry Report Provider", pdf: "" },
    ],
  },
  {
    id: 10,
    title: "Resolutions",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      { title: "Board Resolution – Authorizing the Issue", pdf: "" },
      { title: "Shareholders' Resolution – Approving the Issue", pdf: "" },
      { title: "Board Resolution – Approval of Issue Size", pdf: "" },
      { title: "Audit Committee Resolution – Approval of KPIs", pdf: "" },
      {
        title: "Board / IPO Committee Resolution – Approval of DRHP",
        pdf: "",
      },
      {
        title: "Board / IPO Committee Resolution – Approval of RHP",
        pdf: "",
      },
    ],
  },
  {
    id: 11,
    title: "Other Material Contracts",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/orange_mark.svg",
    bg: "#F7C99B",
    docs: [
      { title: "Report on Unaudited Proforma Financial Information", pdf: "" },
      {
        title:
          "Letter Agreement – Volumnus / Juturna / Talegaon / Vadakupattu / VKP-2 / Oragadam",
        pdf: "",
      },
      {
        title:
          "Issue Certificates – WAP / Objects / Basis of Issue Price / Eligibility / Creditors / Indebtedness / Statutory Dues",
        pdf: "",
      },
      { title: "Issue Agreement", pdf: "" },
      { title: "Registrar Agreement", pdf: "" },
      { title: "Cash Escrow and Sponsor Bank Agreement", pdf: "" },
      { title: "Syndicate Agreement", pdf: "" },
      { title: "Monitoring Agency Agreement", pdf: "" },
      { title: "Underwriting Agreement", pdf: "" },
      { title: "MOA & AOA", pdf: "" },
      {
        title: "Certificate of Incorporation – JEM Cements Private Limited",
        pdf: "",
      },
      {
        title: "LLP Acquisition Agreement – Vertical Logistic Park LLP",
        pdf: "",
      },
      {
        title:
          "Certificate of Registration – Change of Registered Office to Maharashtra",
        pdf: "",
      },
      {
        title: "Employment Agreement – Urvish Jayantilal Rambhia",
        pdf: "",
      },
      { title: "Option Agreement – Altronix Warehousing Seven", pdf: "" },
      {
        title: "Amendment Agreement – Bagur Logistics Park Private Limited",
        pdf: "",
      },
      {
        title:
          "Amended and Restated LLP Agreement – Faruknagar Logistics Parks LLP",
        pdf: "",
      },
      {
        title:
          "Partnership Acquisition Agreement – Faruknagar Logistics Parks LLP",
        pdf: "",
      },
      {
        title:
          "Amended and Restated LLP Agreement – Bagur Logistics Park Private Limited",
        pdf: "",
      },
      {
        title: "Investment Agreement – XSIO Warehousing Private Limited",
        pdf: "",
      },
      { title: "Scheme of Amalgamation I", pdf: "" },
      { title: "NCLT Order – Scheme of Amalgamation I", pdf: "" },
      { title: "Registrar Letter – Scheme of Amalgamation I", pdf: "" },
      { title: "Scheme of Amalgamation II", pdf: "" },
      { title: "NCLT Order – Scheme of Amalgamation II", pdf: "" },
      { title: "Registrar Letter – Scheme of Amalgamation II", pdf: "" },
      {
        title: "Investment Agreement – Vidarbha Cargo / XSIO Logistics Parks",
        pdf: "",
      },
      { title: "KPI Certificate", pdf: "" },
      { title: "Valuation Certificate – Bagur Logistics Park Shares", pdf: "" },
      { title: "Valuation Certificate – Bagur Logistics Park OCDs", pdf: "" },
      {
        title: "Call Option Agreement – Vision Softtech Facilities",
        pdf: "",
      },
      {
        title: "Put Option Agreement – Vision Softtech Facilities",
        pdf: "",
      },
      {
        title:
          "Examination Report – Restated Consolidated Financial Information",
        pdf: "",
      },
      { title: "Loan Utilisation Certificate", pdf: "" },
      { title: "Due Diligence Certificate", pdf: "" },
      { title: "CDSL Tripartite Agreement", pdf: "" },
      { title: "NSDL Tripartite Agreement", pdf: "" },
      { title: "In-principle Listing Approvals – BSE and NSE", pdf: "" },
      { title: "BRLM Letter to SEBI – Pre-IPO Placement", pdf: "" },
      { title: "SEBI Final Observation Letter", pdf: "" },
      { title: "Annual Report FY24", pdf: "" },
      { title: "Annual Report FY25", pdf: "" },
      { title: "Annual Report FY26", pdf: "" },
    ],
  },
];

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-minus"
  >
    <path d="M5 12h14" />
  </svg>
);

const MC_Sec1 = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div id="MC-section2" className="w-full bg-[#EBEBEB]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
          <div className="overflow-hidden w-full">
            {MC_accordion_data.map((item, index) => (
              <div key={item.id} className="border-gray-300 border-b">
                <div
                  className="flex items-center h-fit justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="text-[#000] bw-m leading-[24px] xl:leading-[40px] text-[18px] xl:text-[30px] xl:py-[25px] py-[17px]">
                    {item.title}
                  </h2>
                  <div className="w-6 h-6 flex items-center justify-center">
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
                        opacity: { duration: 0.5, ease: [0.7, 0, 0.4, 1] },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="text-[#000] flex flex-col gap-3 fsans-400 text-[16px] bw-m pb-6 EX_accord_tab">
                        <div className="flex flex-wrap md:gap-[26px] gap-[16px]">
                          {item.docs.map((doc, docIndex) => (
                            <a
                              key={docIndex}
                              href={doc.pdf}
                              rel="noopener noreferrer"
                              style={{ backgroundColor: item.bg }}
                              className="flex justify-between items-center gap-[15px] 1280:w-[31%] md:w-[48%] lg:w-[47%] w-[100%] h-[75px] md:h-[65px] lg:h-[70px] 1280:h-[100px] bw-r text-[16px] md:text-[15px] md:leading-[18px] xl:text-[18px] xl:leading-[22px] leading-[19px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[25px] 1280:px-[40px] relative overflow-hidden cursor-pointer "
                            >
                              <span className="relative z-10 bw-r ">
                                {doc.title}
                              </span>
                              <img
                                src={item.download_img}
                                alt="Download"
                                className="lg:w-[30px] w-[25px] 1280:w-[40px] relative z-10"
                              />
                              <img
                                className="absolute left-0 1280:w-[85px] 1366:w-[85px] w-[60px] bottom-[-5px] pointer-events-none"
                                src={item.mark_img}
                                alt=""
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MC_Sec1;
