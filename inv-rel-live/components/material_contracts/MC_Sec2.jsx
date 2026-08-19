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
      {
        title: "Bagur Logistics Parks Pvt Ltd",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Bagur_Logistics_Parks_Pvt_Ltd.pdf",
      },
      {
        title: "BRE Asia III/Horizon Share Exchange Ratio",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/BRE_Asia_III_Horizon_Share_Exchange_Ratio.pdf",
      },
      {
        title: "BRE Asia Urban/Horizon Share Exchange Ratio",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/BRE_Asia_Urban_Horizon_Share_Exchange_Ratio.pdf",
      },
      {
        title: "Embassy Industrial Parks Hosur Private Limited – OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Embassy_Industrial_Parks_Hosur_Private_Limited_OCDs.pdf",
      },
      {
        title: "Everstrat Zenith Private Limited – Class B OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Everstrat_Zenith_Private_Limited_Class_B_OCDs.pdf",
      },
      {
        title: "Everstrat Zenith Private Limited – Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Evertstrat_Zenith_Private_Limited_Equity_Shares.pdf",
      },
      {
        title: "Farukhnagar Logistics Parks LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Farukhnagar_Logistics_Parks_LLP.pdf",
      },
      {
        title: "Goodluck Buildtech Private Limited – Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Goodluck_Buildtech_Private_Limited_Equity_Shares.pdf",
      },
      {
        title: "Goodluck Buildtech Private Limited – OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Goodluck_Buildtech_Private_Limited_OCDs.pdf",
      },
      {
        title: "Jindpur Industrial Parks Pvt Ltd",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Jindpur_Industrial_Parks_Pvt_Ltd.pdf",
      },
      {
        title: "Juturna Developers/Talegaon Industrial Parks",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Juturna_Developers_Talegaon_Industrial_Parks.pdf",
      },
      {
        title: "KCP 2 - Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/KCP2_Equity_Shares.pdf",
      },
      {
        title: "KCP 3 - Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/KCP3_Equity_Shares.pdf",
      },
      {
        title: "Kothur Logistics Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Kothur_Logistics_Parks_Private_Limited.pdf",
      },
      {
        title: "Kothur Logistics Parks Private Limited - CCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Kothur_Logistics_Parks_Private_Limited_CCDs.pdf",
      },
      {
        title:
          "Onirique Builders and Developers Private Limited - Class A Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Onirique_Builders_and_Developers_Private_Limited_Class_A_Equity_Shares.pdf",
      },
      {
        title:
          "Onirique Builders and Developers Private Limited – Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Onirique_Builders_and_Developers_Private_Limited_Equity_Shares.pdf",
      },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited – Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Panvel_Logistics_and_Warehousing_Solutions_Private_Limited_Equity_Shares.pdf",
      },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited - OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Panvel_Logistics_and_Warehousing_Solutions_Private_Limited_OCDs.pdf",
      },
      {
        title: "Pluto Valencia Business Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Pluto_Valencia_Business_Parks_Private_Limited.pdf",
      },
      {
        title: "Panvel Warehousing Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Panvel_Warehousing_Private_Limited.pdf",
      },
      {
        title:
          "Sriperumbudur Industrial and Enterprise Private Limited - Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Sriperumbudur_Industrial_and_Logistics_Private_Limited_Equity_Shares.pdf",
      },
      {
        title: "Vertical Logistics Parks LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Vertical_Logistics_Parks_LLP.pdf",
      },
      {
        title: "Vidarbha Cargo Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Vidarbha_Cargo_Private_Limited.pdf",
      },
      {
        title: "Vidarbha Cargo Private Limited - OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Vidarbha_Cargo_Private_Limited_OCDs.pdf",
      },
      {
        title: "Vision Softtech Facilities - CCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Vision_Softech_Facilities_CCDs.pdf",
      },
      {
        title: "Vision Softtech Facilities - Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Vision_Softech_Facilities_Equity_Shares.pdf",
      },
      {
        title: "Volumnus Developers Private Limited - OCRPS",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/Volumnus_Developers_Private_Limited_OCRPS.pdf",
      },
      {
        title: "XSIO Industrial Parks Private Limited - Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/XSIO_Industrial_Parks_Private_Limited_Equity_Shares.pdf",
      },
      {
        title: "XSIO Industrial Parks Private Limited - OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/XSIO_Industrial_Parks_Private_Limited_OCDs.pdf",
      },
      {
        title: "XSIO Logistics Parks Private Limited - Equity Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/XSIO_Logistics_Parks_Private_Limited_Equity_Shares.pdf",
      },
      {
        title: "XSIO Logistics Parks Private Limited - OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/XSIO_Logistics_Parks_Private_Limited_OCDs.pdf",
      },
      {
        title: "XSIO Warehousing Private Limited - Class A OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/valuation_report/XSIO_Warehousing_Private_Limited_Class_A_OCDs.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "Credit Rating Report",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      {
        title: "Bagur Logistics Park Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Bagur_Logistics_Parks_Private_Limited.pdf",
      },
      {
        title: "Embassy Industrial Parks Hosur Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Embassy_Industrial_Parks_Hosur_Private_Limited.pdf",
      },
      {
        title: "Faruknagar Logistics Parks LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Farukhnagar_Logistics_Parks_LLP.pdf",
      },
      {
        title: "FRK II Industrial Park Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/FRK_II_Industrial_Park_Private_Limited.pdf",
      },
      {
        title: "Goodluck Buildtech Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Goodluck_Buildtech_Private_Limited.pdf",
      },
      {
        title: "Horizon Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Horizon_Industrial_Parks_Limited.pdf",
      },
      {
        title: "ILV Distripark (MWC) Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/ILV_Distripark_(MWC)_Private_Limited.pdf",
      },
      {
        title: "ILV Distripark Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/ILV_Distripark_Private_Limited.pdf",
      },
      {
        title: "Jindpur Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Jindpur_Industrial_Parks_Private_Limited.pdf",
      },
      {
        title: "Kalina Warehousing Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Kalina_Warehousing_Private_Limited.pdf",
      },
      {
        title: "Lakshmipathi Realtors Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Lakshmipathi_Realtors_Private_Limited.pdf",
      },
      {
        title: "LI Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/LI_Industrial_Parks_Private_Limited.pdf",
      },
      {
        title: "Maur Logistics and Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Malur_Logistics_and_Industrial_Parks_Private_Limited.pdf",
      },
      {
        title: "Panvel Logistics and Warehousing Solutions Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Panvel_Logistics_and_Warehousing_Solutions_Private_Limited.pdf",
      },
      {
        title: "Panvel Warehousing Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Panvel_Warehousing_Private_Limited.pdf",
      },
      {
        title: "Redhills Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Redhills_Industrial_Park_Private_Limited.pdf",
      },
      {
        title: "Vertical Logistics Park LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Vertical_Logistics_Park_LLP.pdf",
      },
      {
        title: "Vidarbha Cargo Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/Vidarbha_Cargo_Private_Limited.pdf",
      },
      {
        title: "XSIO Warehousing Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/credit_rating_report/XSIO_Warehousing_Private_Limited.pdf",
      },
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
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/DRA_Projects_and_Bagur_Logistics_Parks_Private_Limited_SPA.PDF",
      },
      {
        title: "Bagur Logistics Park Private Limited - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Bagur_Logistics_Park_Private_Limited_SPA.pdf",
      },
      {
        title:
          "Goodluck Buildtech Private Limited/Jindpur Industrial Parks Private Limited - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Goodluck_Buildtech_Jindpur_Industrial_Parks_SPA.pdf",
      },
      {
        title:
          "Vidarbha Cargo Private Limited/XSIO Logistics Parks Private Limited - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Vidarbha_Cargo_and_XSIO_Logistics_Parks_Private_SPA.pdf",
      },
      {
        title:
          "Goodluck Buildtech Private Limited/Jindpur Industrial Parks Private Limited - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Goodluck_Buildtech_Jindpur_Industrial_Parks_SPA_1.pdf",
      },
      { title: "Panvel Warehousing Private Limited - SPA", pdf: "" },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited/Embassy Industrial Parks Hosur Private Limited - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Panvel_Logistics_and_Embassy_Industrial_Parks_Hosur_SPA.pdf",
      },
      {
        title: "Pluto Valencia Business Parks - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Pluto_Valencia_Business_Parks_SPA.pdf",
      },
      {
        title: "BRE Asia II Indian Holding Company I - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/BRE_Asia_II_India_Holding_Company_I_SPA.pdf",
      },
      {
        title: "Mindcomp/Onrique - SPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_agreement/Mindcomp_and_Onrique_SPA.pdf",
      },
    ],
  },
  {
    id: 4,
    title: "Share Subscription and Purchase Agreement",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      {
        title: "Allcargo/Venkatapura/Kalina/Panvel - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Allcargo_Venkatapura_Kalina_Panvel_SSPA.pdf",
      },
      {
        title: "Kothur Logistics Park Private Limited - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Kothur_Logistics_Park_Private_Limited_SSPA.pdf",
      },
      {
        title: "Mindcomp/Onrique - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Mindcomp_and_Onrique_SSPA.pdf",
      },
      {
        title:
          "Panvel Logistics and Warehousing Solutions Private Limited - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Panvel_Logistics_and_Warehousing_Solutions_Private_Limited_SSPA.pdf",
      },
      {
        title: "Redhills/Everstrat Zenith - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Redhills_Everstrat_Zenith_SSPA.pdf",
      },
      {
        title: "Vidarbha Cargo Private Limited - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Vidarbha_Cargo_Private_Limited_SSPA.pdf",
      },
      {
        title: "Vision Softtech - SSPA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_purchase_and_subscription_agreement/Vision_Softech_SSPA.pdf",
      },
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
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_subscription_agreement/Kothur_Logistics_Park_Private_Limited_SSA.pdf",
      },
      {
        title: "KCP 2/KCP 3/Sriperumbudur - SSA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/share_subscription_agreement/KCP2_KCP3_and_Sriperumbudur_SSA.pdf",
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
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/fresh_coi/Embassy_Maini_Logistics_Bangalore_Private_Limited.pdf",
      },
      {
        title: "Embassy Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/fresh_coi/Embassy_Industrial_Parks_Private_Limited.PDF",
      },
      {
        title: "Horizon Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/fresh_coi/Horizon_Industrial_Parks_Private_Limited.pdf",
      },
      {
        title: "Horizon Industrial Parks Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/fresh_coi/Horizon_Industrial_Parks_Limited.pdf",
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
      {
        title: "Kothur Logistics Park Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Kothur_Logistics_Park_Private_Limited.pdf",
      },
      {
        title:
          "Talegaon Industrial Parks, Juturna Developers, Volumnus Developers",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Talegaon_Industrial_Parks_Juturna_Developers_Volumnus_Developers.pdf",
      },
      {
        title:
          "KCP-2 Industrial Parks, KCP-3 Industrial Parks, Sriperumbudur Industrial",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/KCP2_Industrial_Parks_KCP3_Industrial_Parks_Sriperumbudur_Industrial.pdf",
      },
      {
        title: "Banamakanahalli Industrial and Logistics Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Banamakanahalli_Industrial_and_Logistics_Private_Limited.pdf",
      },
      {
        title: "Bhiwandi Industrial & Logistics Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Bhiwandi_Industrial_&_Logistics_Parks_Private_Limited.pdf",
      },
      {
        title: "XSIO Warehousing Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/XSIO_Warehousing_Private_Limited.pdf",
      },
      {
        title: "Vidarbha Cargo Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Vidarbha_Cargo_Private_Limited.pdf",
      },
      {
        title:
          "Vidarbha Cargo Private Limited, XSIO Logistics Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Vidarbha_Cargo_Private_Limited_XSIO_Logistics_Parks_Private_Limited.pdf",
      },
      {
        title: "XSIO Industrial Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/XSIO_Industrial_Parks_Private_Limited.pdf",
      },
      {
        title: "Vision Softtech Facilities Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/shareholders_agreement/Vision_Softech_Facilities_Private_Limited.pdf",
      },
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
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/deed_of_adherence/Talegaon_Industrial_Parks_Juturna_Developers_Volumnus.pdf",
      },
      {
        title: "Banamakanahalli Industrial and Logistics Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/deed_of_adherence/Banamakanahalli_Industrial_and_Logistics_Private_Limited.pdf",
      },
      {
        title: "Bhiwandi Industrial & Logistics Parks Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/deed_of_adherence/Bhiwandi_Industrial_and_Logistics_Parks_Private_Limited.pdf",
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
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/consents/MSKC_&_Associates_LLP_SGCO_&_Co_LLP.pdf",
      },
      {
        title: "D M K H & Co., Chartered Accountants",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/consents/DMKH_Consent.pdf",
      },
      // { title: "Deloitte Haskins & Sells LLP", pdf: "" },
      { title: "Independent Architect", pdf: "" },
      {
        title: "Company Directors, Company Secretary and others",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/consents/Directors_Consent.pdf",
      },
      {
        title: "Industry Report Provider",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/consents/Industry_Report_Provider.pdf",
      },
    ],
  },
  {
    id: 10,
    title: "Resolutions",
    download_img: "/download_icon.svg",
    mark_img: "/Invester/green_mark.svg",
    bg: "#ACD5AE",
    docs: [
      {
        title: "Board Resolution – Authorizing the Issue",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/resolutions/Board_Resolution_Authorizing_the_Issue.pdf",
      },
      {
        title: "Shareholders' Resolution – Approving the Issue",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/resolutions/Shareholders_Resolution_Approving_the_Issue.pdf",
      },
      {
        title: "Board Resolution – Approval of Issue Size",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/resolutions/Board_Resolution_Approval_of_Issue_Size.pdf",
      },
      {
        title: "Audit Committee Resolution – Approval of KPIs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/resolutions/Audit_Committee_Resolution_Approval_of_KPIs.pdf",
      },
      {
        title: "Board / IPO Committee Resolution – Approval of DRHP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/resolutions/Board_IPO_Committee_Resolution_Approval_of_DRHP.pdf",
      },
      {
        title: "Board / IPO Committee Resolution – Approval of RHP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/resolutions/Board_IPO_Committee_Resolution_Approval_of_RHP.pdf",
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
      {
        title: "Report on Unaudited Proforma Financial Information",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Report_on_Unaudited_Proforma_Financial_Information.pdf",
      },
      {
        title:
          "Letter Agreement – Volumnus / Juturna / Talegaon / Vadakupattu / VKP-2 / Oragadam",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Letter_Agreement_Volumnus_Juturna_Talegaon_Vadakkupattu_VKP_2_Oragadam.pdf",
      },
      {
        title:
          "Issue Certificates – WAP / Objects / Basis of Issue Price / Eligibility / Creditors / Indebtedness / Statutory Dues",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Issue_Certificates.pdf",
      },
      {
        title: "Issue Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Issue_Agreement.pdf",
      },
      {
        title: "Registrar Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Registrar_Agreement.pdf",
      },
      {
        title: "Cash Escrow and Sponsor Bank Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Cash_and_Escrow_Agreement.pdf",
      },
      {
        title: "Syndicate Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Syndicate_Agreement.pdf",
      },
      {
        title: "Monitoring Agency Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Monitoring_Agency_Agreement.pdf",
      },
      { title: "Underwriting Agreement", pdf: "" },
      {
        title: "MOA & AOA",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/MOA&AOA.pdf",
      },
      {
        title: "Certificate of Incorporation – JEM Cements Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Certificate_of_Incorporation_JEM_Cements_Private_Limited.pdf",
      },
      {
        title: "LLP Acquisition Agreement – Vertical Logistic Park LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/LLP_Acquisition_Agreement_Vertical_Logistic_Park_LLP.pdf",
      },
      {
        title:
          "Certificate of Registration – Change of Registered Office to Maharashtra",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Certificate_of_Registration_Change_of_Registered_Office_to_Maharashtra.pdf",
      },
      {
        title: "Employment Agreement – Urvish Jayantilal Rambhia",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Employment_Agreement_Urvish_Jayantilal_Rambhia.pdf",
      },
      {
        title: "Option Agreement – Altronix Warehousing Seven",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Option_Agreement_Alotronix_Warehousing_Seven.pdf",
      },
      {
        title: "Amendment Agreement – Bagur Logistics Park Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Amendment_Agreement_Bagur_Logistics_Park_Private_Limited.pdf",
      },
      {
        title:
          "Amended and Restated LLP Agreement – Faruknagar Logistics Parks LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Amended_and_Restated_LLP_Agreement_Farukhnagar_Logistics_Parks_LLP.pdf",
      },
      {
        title:
          "Partnership Acquisition Agreement – Faruknagar Logistics Parks LLP",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Partnership_Acquisition_Agreement_Farukhnagar_Logistics_Parks_LLP.pdf",
      },
      {
        title:
          "Amended and Restated LLP Agreement – Bagur Logistics Park Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Amended_and_Restated_LLP_Agreement_Bagur_Logistics_Park_Private_Limited.pdf",
      },
      {
        title: "Investment Agreement – XSIO Warehousing Private Limited",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Investment_Agreement_XSIO_Warehousing_Private_Limited.pdf",
      },
      {
        title: "Scheme of Amalgamation I",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Scheme_of_Amalgamation_I.pdf",
      },
      {
        title: "NCLT Order – Scheme of Amalgamation I",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/NCLT_Order_Scheme_of_Amalgamation_I.pdf",
      },
      {
        title: "Registrar Letter – Scheme of Amalgamation I",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Registrar_Letter_Scheme_of_Amalgamation_I.pdf",
      },
      {
        title: "Scheme of Amalgamation II",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Scheme of Amalgamation II.pdf",
      },
      {
        title: "NCLT Order – Scheme of Amalgamation II",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/NCLT_Order_Scheme_of_Amalgamation_II.pdf",
      },
      {
        title: "Registrar Letter – Scheme of Amalgamation II",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Registrar_Letter_Scheme_of_Amalgamation_II.pdf",
      },
      {
        title: "Investment Agreement – Vidarbha Cargo / XSIO Logistics Parks",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Investment_Agreement_Vidarbha_Cargo_XSIO_Logistics_Parks.pdf",
      },
      {
        title: "KPI Certificate",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/KPI_Certificate.pdf",
      },
      {
        title: "Valuation Certificate – Bagur Logistics Park Shares",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Valuation_Certificate_Bagur_Logistics_Park_Shares.pdf",
      },
      {
        title: "Valuation Certificate – Bagur Logistics Park OCDs",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Valuation_Certificate_Bagur_Logistics_Park_OCDs.pdf",
      },
      {
        title: "Call Option Agreement – Vision Softtech Facilities",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Call_Option_Agreement_Vision_Softech_Facilities.pdf",
      },
      {
        title: "Put Option Agreement – Vision Softtech Facilities",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Put_Option_Agreement_Vision_Softech_Facilities.pdf",
      },
      {
        title:
          "Examination Report – Restated Consolidated Financial Information",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Examination_Report_Restated_Consolidated_Financial_Information.pdf",
      },
      {
        title: "Loan Utilisation Certificate",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Loan_Utilisation_Certificate.pdf",
      },
      {
        title: "Due Diligence Certificate",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Due_Diligence_Certificate.pdf",
      },
      {
        title: "CDSL Tripartite Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/CDSL_Tripartite_Agreement.pdf",
      },
      {
        title: "NSDL Tripartite Agreement",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/NSDL_Tripartite_Agreement.pdf",
      },
      { title: "In-principle Listing Approvals – BSE and NSE", pdf: "" },
      { title: "BRLM Letter to SEBI – Pre-IPO Placement", pdf: "" },
      {
        title: "SEBI Final Observation Letter",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/SEBI_Final_Observation_Letter.pdf",
      },
      { title: "Annual Report FY24", pdf: "" },
      {
        title: "Annual Report FY25",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Annual_Report_FY25.pdf",
      },
      {
        title: "Annual Report FY26",
        pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/material_contracts/other_material/Annual_Report_FY26.pdf",
      },
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

  const getDownloadHref = (url, title) =>
    url
      ? `/api/download-pdf?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(title)}`
      : "#";

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
                              href={getDownloadHref(doc.pdf, doc.title)}
                              onClick={(e) => {
                                if (!doc.pdf) e.preventDefault();
                              }}
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
