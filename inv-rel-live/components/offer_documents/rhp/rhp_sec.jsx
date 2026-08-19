"use client";
import React, { useState } from "react";
import Btn from "@/components/global/Btn";
import { motion, AnimatePresence } from "framer-motion";

const C_info_data = [
  {
    id: "rhp",
    title: "Red Herring Prospectus",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/offer_document/rhp/pdf-sample.pdf",
  },
  {
    id: "rhp-av",
    title: "RHP AV",
    mark_img: "/Invester/green_mark.svg",
    pdf: "https://phpstack-725513-4957654.cloudwaysapps.com/offer_document/rhp/pdf-sample.pdf",
  },
];

const Rhp_sec = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleOpenDisclaimer = (item) => {
    if (activeItem?.id === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  const handleConfirm = () => {
    if (activeItem?.pdf) {
      window.open(activeItem.pdf, "_blank");
    }
  };

  const handleDoNotConfirm = () => {
    setActiveItem(null);
    document
      .getElementById("drhp-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="drhp-section" className="w-full bg-[#fff]">
      <div className="fix relative w-full lg:pt-[70px] lg:pb-[86px] pt-[45px] pb-[45px]">
        <div className="flex gap-[5px] lg:gap-[50px] 1280:gap-[60px] 1366:gap-[60px] justify-between flex-col lg:flex-row">
          <div className="w-[312px] md:w-[240px] 1280:w-[408px] mb-[15px] lg:mb-[0px] relative">
            <h1 className="1280:text-[56px] 1280:leading-[66px] 1280:tracking-[-3.04px] lg:text-[37px] lg:leading-[43px] lg:tracking-[-2.04px] text-[30px] leading-[36px] tracking-[-1px] bw-r">
              RHP
            </h1>
          </div>

          <div className="md:w-[auto] lg:w-[700px] 1280:w-[898px]">
            <div className="flex flex-wrap md:gap-[26px] gap-[16px]">
              {C_info_data.map((info_data, index) => (
                <button
                  key={index}
                  onClick={() => handleOpenDisclaimer(info_data)}
                  className="cursor-pointer text-left flex justify-between items-center gap-[30px] 1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[20px] md:text-[20px] md:leading-[23px] 1280:text-[24px] 1280:leading-[34px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[25px] 1280:px-[40px] relative overflow-hidden"
                >
                  {info_data.title}

                  <img
                    className="absolute left-0 1280:w-[85px] w-[60px] bottom-[-5px]"
                    src={info_data.mark_img}
                    alt=""
                  />

                  {activeItem?.id === info_data.id ? (
                    <img
                      src="/chevron-up.svg"
                      className="w-[40px] h-[40px]"
                      alt=""
                    />
                  ) : (
                    <img
                      src="/chevron-down.svg"
                      className="w-[40px] h-[40px]"
                      alt=""
                    />
                  )}
                </button>
              ))}

              {/* <button
                onClick={() => window.open(RHP_AV_PDF, "_blank")}
                className="cursor-pointer text-left flex justify-between items-center gap-[30px] 1280:w-[48%] md:w-[48%] lg:w-[47%] w-[100%] h-[65px] md:h-[65px] lg:h-[70px] 1280:h-[100px] bg-[#ACD5AE] bw-r text-[20px] md:text-[20px] md:leading-[23px] 1280:text-[24px] 1280:leading-[34px] leading-[23px] tracking-[-1.04px] md:py-[20px] md:px-[15px] py-[22px] px-[25px] 1280:px-[40px] relative overflow-hidden"
              >
                RHP AV
                <img
                  src="/download_icon.svg"
                  className="w-[40px] h-[40px]"
                  alt=""
                />
                <img
                  className="absolute left-0 1280:w-[85px] w-[60px] bottom-[-5px]"
                  src="/Invester/green_mark.svg"
                  alt=""
                />
              </button> */}
            </div>

            <AnimatePresence>
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-[30px] bg-white p-[20px] text-[14px] leading-[22px] bw-r"
                >
                  {/* ================= RHP DISCLAIMER ================= */}
                  {activeItem.id === "rhp" && (
                    <div className="space-y-4 text-[16px] leading-[26px]">
                      <h2 className=" text-3xl">
                        Legal Disclaimer – Important
                      </h2>

                      <p className="font-bold">
                        NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR TRANSMISSION
                        IN, INTO OR TO, DIRECTLY OR INDIRECTLY, THE UNITED
                        STATES OF AMERICA (INCLUDING ITS TERRITORIES AND
                        POSSESSIONS), ANY STATE OF THE UNITED STATES AND THE
                        DISTRICT OF COLUMBIA (THE “UNITED STATES”) OR ANY OTHER
                        JURISDICTION WHERE IT IS UNLAWFUL TO DO SO.
                      </p>

                      <p className="font-bold">
                        THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE
                        ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                      </p>

                      <p>
                        <span className="font-bold">IMPORTANT : </span>
                        You must read and agree with the terms and conditions of
                        the following disclaimer before continuing.
                      </p>

                      <p>
                        The following disclaimer applies to the red herring
                        prospectus <strong>(“RHP”)</strong> and the abridged
                        prospectus <strong>(“Abridged Prospectus”)</strong> of
                        Horizon Industrial Parks Limited{" "}
                        <strong>(the “Company”)</strong> dated August 11, 2026
                        filed with the Registrar of Companies, Mumbai-I at
                        Mumbai, Securities and Exchange Board of India{" "}
                        <strong>(“SEBI”)</strong>, BSE Limited and National
                        Stock Exchange of India Limited (collectively, the{" "}
                        <strong>“Stock Exchanges”</strong>), in relation to the
                        initial public offering of the equity shares of face
                        value of ₹10 each (“<strong>Equity Shares</strong>”) of
                        the Company (“
                        <strong>Offer</strong>”).
                      </p>

                      <p>
                        <strong>
                          EACH OF THE RHP AND THE ABRIDGED PROSPECTUS IS BEING
                          MADE AVAILABLE ON THIS WEBSITE TO COMPLY WITH
                          SECURITIES AND EXCHANGE BOARD OF INDIA (ISSUE OF
                          CAPITAL AND DISCLOSURE REQUIREMENTS) REGULATIONS,
                          2018, AS AMENDED (“SEBI ICDR REGULATIONS”).
                        </strong>{" "}
                        The RHP and the Abridged Prospectus have been hosted on
                        this website as prescribed under Regulation 26 of the
                        SEBI ICDR Regulations. In accessing the RHP and the
                        Abridged Prospectus, you agree to be bound by the
                        following terms and conditions, including any
                        modifications to them from time to time. You are advised
                        to read this disclaimer carefully before reading,
                        accessing or making any other use of the RHP and the
                        Abridged Prospectus.
                      </p>

                      <p>
                        The RHP and the Abridged Prospectus are directed at, and
                        are intended for distribution to, and use by, residents
                        of India only. The information in this portion of our
                        website, including the RHP and the Abridged Prospectus,
                        is not intended for, and may not be accessed in or by,
                        or distributed, published or transmitted in, into or to,
                        directly or indirectly, the United States of America
                        (including its territories and possessions), any state
                        of the United States and the District of Columbia (the “
                        <strong>United States</strong>”) or any other
                        jurisdiction where it is unlawful to do so. All persons
                        residing outside of the United States who wish to access
                        the RHP and the Abridged Prospectus contained on the
                        following page of this website should first ensure that
                        they are not subject to local laws or regulations that
                        prohibit or restrict their right to access this website
                        or require registration or approval for any acquisition
                        of securities by them. No part of the contents of the
                        RHP and the Abridged Prospectus shall be copied or
                        duplicated in any form by any means or redistributed.
                      </p>

                      <p>
                        Each of the RHP and the Abridged Prospectus does not
                        constitute an offer to sell, or the solicitation of an
                        offer to purchase or acquire, any securities of the
                        Company in the United States or in any other
                        jurisdiction in which such offer or solicitation would
                        be unlawful prior to registration or qualification under
                        the securities laws of such jurisdiction.
                      </p>

                      <p>
                        The Equity Shares have not been and will not be
                        registered under the United States Securities Act of
                        1933, as amended (the{" "}
                        <strong>“U.S. Securities Act”</strong>) or any other
                        applicable law of the United States and may not be
                        offered or sold within the United States except pursuant
                        to an exemption from, or in a transaction not subject
                        to, the registration requirements of the U.S. Securities
                        Act and applicable United States state securities laws.
                        Accordingly, the Equity Shares are being offered and
                        sold only (i) within India to Indian institutional,
                        non-institutional and retail investors in compliance
                        with the SEBI ICDR Regulations, (ii) within the United
                        States only to persons reasonably believed to be
                        “qualified institutional buyers” (as defined in Rule
                        144A under the U.S. Securities Act (“
                        <strong>Rule 144A</strong>”) and referred to in the RHP
                        and the Abridged Prospectus as “
                        <strong>U.S. QIBs</strong>” and, for the avoidance of
                        doubt, the term U.S. QIBs does not refer to a category
                        of institutional investor defined under applicable
                        Indian regulations and referred to in the RHP and the
                        Abridged Prospectus as QIBs) pursuant to Rule 144A or
                        another available exemption from the registration
                        requirements thereunder, and (iii) outside the United
                        States to eligible investors in “offshore transactions”
                        as defined in, and in reliance on, Regulation S (“
                        <strong>Regulation S</strong>”) under the U.S.
                        Securities Act and the applicable laws of the
                        jurisdiction where those offers and sales occur. No
                        public offering of the Equity Shares or other securities
                        is being made in the United States.
                      </p>

                      <p>
                        The RHP and the Abridged Prospectus or any information
                        contained on our website or in the RHP and the Abridged
                        Prospectus do not constitute, and should not be
                        construed as, “<strong>general solicitation</strong>” or
                        “<strong>general advertising</strong>” as defined under
                        Regulation D of the U.S. Securities Act, or “
                        <strong>directed selling efforts</strong>” under
                        Regulation S.
                      </p>

                      <p>
                        The Company, Promoters and JM Financial Limited, Axis
                        Capital Limited, IIFL Capital Services Limited (formerly
                        known as IIFL Securities Limited), SBI Capital Markets
                        Limited and 360 ONE WAM Limited (collectively, the{" "}
                        <strong>“Book Running Lead Managers”</strong>) and their
                        respective affiliates, directors, officers, agents,
                        representatives, advisers and employees do not accept
                        any liability whatsoever, direct or indirect, that may
                        arise from the use, interception and interpretation of
                        the information contained on this website. The
                        information in the RHP and the Abridged Prospectus is as
                        of the date thereof and neither the Company, the
                        Promoters, the Book Running Lead Managers nor their
                        respective affiliates, directors, officers, agents,
                        representatives, advisers or employees are under any
                        obligation to update or revise the RHP and the Abridged
                        Prospectus to reflect circumstances arising after the
                        date thereof. You are reminded that documents
                        transmitted in electronic form may be altered or changed
                        during the process of transmission and consequently,
                        neither the Company, the Promoters, the{" "}
                        <strong>Book Running Lead Managers</strong> nor any of
                        their respective affiliates, directors, officers,
                        agents, representatives, advisers or employees accepts
                        any liability or responsibility whatsoever in respect of
                        alterations or changes which have taken place during the
                        course of transmission of the RHP and the Abridged
                        Prospectus in electronic format.
                      </p>

                      <p>
                        Any potential investor should note that investment in
                        equity shares involves a high degree of risk and for
                        details relating to such risks, see the section titled
                        “Risk Factors” in the RHP and the Abridged Prospectus.
                        Any decision on whether to invest in the equity shares
                        described in the RHP and the Abridged Prospectus may
                        only be made solely on the basis of the RHP.
                      </p>

                      <p>
                        You are accessing this website at your own risk and it
                        is your responsibility to take precautions to ensure
                        that it is free from viruses. Neither the Company, the
                        Promoters, the Book Running Lead Managers nor their
                        respective affiliates, directors, officers, agents,
                        representatives, advisers or employees will be liable or
                        have any responsibility of any kind for any loss or
                        damage that you incur in the event of any failure or
                        disruption of this website, or resulting from the act or
                        omission of any other party involved in making this
                        website or the data contained therein available to you,
                        or from any other cause relating to your access to,
                        inability to access, or use of this website or the RHP
                        and the Abridged Prospectus.
                      </p>

                      <p>
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via our website does not constitute
                        a part of the RHP and the Abridged Prospectus.
                      </p>

                      <p className="font-bold underline">
                        IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS
                        WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE
                        PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS
                        WEBPAGE.
                      </p>

                      <p>
                        To access this information, you must confirm, by
                        pressing on the button marked “I Confirm”, that at the
                        time of access, you are located in India. If you cannot
                        make this confirmation, you must press the button marked
                        “I Do Not Confirm”.
                      </p>

                      <p>
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to buy or sell securities of the Company
                        in the United States or in any other jurisdiction,
                        including without limitation, India.
                      </p>
                    </div>
                  )}

                  {/* ================= RHP-AV DISCLAIMER ================= */}
                  {activeItem.id === "rhp-av" && (
                    <div className="space-y-4 text-[16px] leading-[26px]">
                      <h2 className=" text-3xl">
                        Legal Disclaimer – Important
                      </h2>

                      <p className="font-bold">
                        NOT FOR ACCESS IN OR BY, OR DISTRIBUTION OR TRANSMISSION
                        IN, INTO OR TO, DIRECTLY OR INDIRECTLY, THE UNITED
                        STATES OF AMERICA (INCLUDING ITS TERRITORIES AND
                        POSSESSIONS), ANY STATE OF THE UNITED STATES AND THE
                        DISTRICT OF COLUMBIA (THE “UNITED STATES”) OR ANY OTHER
                        JURISDICTION WHERE IT IS UNLAWFUL TO DO SO.
                      </p>

                      <p className="font-bold">
                        THESE MATERIALS ARE NOT DIRECTED AT OR INTENDED TO BE
                        ACCESSED BY PERSONS LOCATED OUTSIDE INDIA.
                      </p>

                      <p>
                        <span className="font-bold">IMPORTANT : </span>
                        You must read and agree with the terms and conditions of
                        the following disclaimer before continuing.
                      </p>

                      <p>
                        The following disclaimer applies to the red herring
                        prospectus <strong>(“RHP”)</strong> and the abridged
                        prospectus <strong>(“Abridged Prospectus”)</strong> of
                        Horizon Industrial Parks Limited{" "}
                        <strong>(the “Company”)</strong>, each dated August 11,
                        2026 filed with the Registrar of Companies, Mumbai-I at
                        Mumbai <strong>(“RoC”)</strong>, the Securities and
                        Exchange Board of India <strong>(“SEBI”)</strong>, and
                        BSE Limited and National Stock Exchange of India Limited
                        (collectively, the <strong>“Stock Exchanges”</strong>),
                        as well as the audio visual film of the Company dated
                        August 11, 2026 (the <strong>“IPO AV”</strong>) in
                        relation to the initial public offering of the equity
                        shares of face value of ₹10 each (“
                        <strong>Equity Shares</strong>”) of the Company (“
                        <strong>Issue</strong>”).
                      </p>

                      <p>
                        <strong>
                          EACH OF THE RHP AND THE ABRIDGED PROSPECTUS IS BEING
                          MADE AVAILABLE ON THIS WEBSITE IN ELECTRONIC FORM
                          SOLELY TO COMPLY WITH THE SECURITIES AND EXCHANGE
                          BOARD OF INDIA (ISSUE OF CAPITAL AND DISCLOSURE
                          REQUIREMENTS) REGULATIONS, 2018, AS AMENDED (“SEBI
                          ICDR REGULATIONS”). THE IPO AV IS BEING MADE AVAILABLE
                          ON THIS WEBSITE IN ACCORDANCE WITH CIRCULAR ON
                          “AUDIOVISUAL (AV) PRESENTATION OF DISCLOSURES MADE IN
                          PUBLIC ISSUE OFFER DOCUMENTS” DATED [ ], ISSUED BY THE
                          SECURITIES AND EXCHANGE BOARD OF INDIA.
                        </strong>
                      </p>

                      <p>
                        The RHP and the Abridged Prospectus have been hosted on
                        this website as prescribed under Regulation 26 of the
                        SEBI ICDR Regulations. You are advised to read this
                        disclaimer carefully before reading, accessing or making
                        any other use of the IPO AV. In accessing the IPO AV,
                        you agree to be bound by the following terms and
                        conditions, including any modifications to them from
                        time to time. The IPO AV is directed at, and is intended
                        for distribution to, and use by, residents of India
                        only. The information in this portion of our website,
                        including the IPO AV, is not intended for, and may not
                        be accessed in or by, or distributed or transmitted in,
                        into or to, directly or indirectly, the United States of
                        America (including its territories and possessions), any
                        state of the United States and the District of Columbia
                        (the “<strong>United States</strong>”) or any other
                        jurisdiction where it is unlawful to do so. All persons
                        residing outside of the United States who wish to access
                        the IPO AV contained on the following page of this
                        website should first ensure that they are not subject to
                        local laws or regulations that prohibit or restrict
                        their right to access this website or require
                        registration or approval for any acquisition of
                        securities by them. No part of the contents of the IPO
                        AV shall be copied or duplicated in any form by any
                        means or redistributed.
                      </p>

                      <p>
                        The IPO AV does not constitute an offer to sell, or the
                        solicitation of an offer to purchase or acquire, any
                        securities of the Company in the United States or in any
                        other jurisdiction in which such offer or solicitation
                        would be unlawful prior to registration or qualification
                        under the securities laws of such jurisdiction.
                      </p>

                      <p>
                        The Equity Shares have not been and will not be
                        registered under the United States Securities Act of
                        1933, as amended (the{" "}
                        <strong>“U.S. Securities Act”</strong>) or any other
                        applicable law of the United States and may not be
                        offered or sold within the United States except pursuant
                        to an exemption from, or in a transaction not subject
                        to, the registration requirements of the U.S. Securities
                        Act and applicable United States state securities laws.
                        Accordingly, the Equity Shares are being offered and
                        sold only (i) within the United States to persons
                        reasonably believed to be “
                        <strong>qualified institutional buyers</strong>” (as
                        defined in Rule 144A under the U.S. Securities Act (“
                        <strong>Rule 144A</strong>”)) in transactions exempt
                        from, or not subject to the registration requirements
                        of, the U.S. Securities Act, and (ii) outside the United
                        States in an “offshore transaction” as defined in and in
                        compliance with Regulation S and the applicable laws of
                        the jurisdiction where those offers and sales occur. No
                        public offering of the Equity Shares or other securities
                        is being made in the United States.
                      </p>

                      <p>
                        The IPO AV or any information contained on our website
                        or in the IPO AV does not constitute, and should not be
                        construed as, “<strong>general solicitation</strong>” or
                        “<strong>general advertising</strong>” as defined under
                        Regulation D of the U.S. Securities Act, or “
                        <strong>directed selling efforts</strong>” under
                        Regulation S of the U.S. Securities Act.
                      </p>

                      <p>
                        The Company, and JM Financial Limited, Axis Capital
                        Limited, IIFL Capital Services Limited (
                        <em>formerly known as IIFL Securities Limited</em>), SBI
                        Capital Markets Limited and 360 ONE WAM Limited
                        (collectively, the{" "}
                        <strong>“Book Running Lead Managers”</strong>) and their
                        respective affiliates, directors, officers, agents,
                        representatives, advisers and employees do not accept
                        any liability whatsoever, direct or indirect, that may
                        arise from the use of the information contained on this
                        website. The information in the IPO AV is as of the date
                        thereof and neither the Company, the Book Running Lead
                        Managers nor their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        are under any obligation to update or revise the IPO AV
                        to reflect circumstances arising after the date thereof.
                        You are reminded that documents transmitted in
                        electronic form may be altered or changed during the
                        process of transmission and consequently, neither the
                        Company, the <strong>Book Running Lead Managers</strong>{" "}
                        nor any of their respective affiliates, directors,
                        officers, agents, representatives, advisers or employees
                        accepts any liability or responsibility whatsoever in
                        respect of alterations or changes which have taken place
                        during the course of transmission of the IPO AV in
                        electronic format.
                      </p>

                      <p>
                        Any potential investor should note that investment in
                        equity shares involves a high degree of risk and for
                        details relating to such risks, see the section titled “
                        <em>Risk Factors</em>” in the RHP. Potential investors
                        should also refer to the Prospectus which will be filed
                        with the RoC and SEBI in the future, including the
                        section titled “<em>Risk Factors</em>”. The IPO AV
                        provides only the salient features of the Issue and
                        accordingly, potential investors should not rely on the
                        IPO AV. Any decision on whether to invest in the equity
                        shares must be made solely on the basis of the RHP and
                        the price band information.
                      </p>

                      <p className="font-bold">
                        Investors are advised not to rely on any other document,
                        content or information provided on the Issue on the
                        internet / online websites / social media platforms /
                        micro-blogging platforms and by the influencers since
                        the same is not approved / commissioned / paid by the
                        Company or its promoter(s) / directors / KMPs in any
                        manner. Investors are advised to rely only on the
                        information contained in the RHP and the price band
                        advertisement for making investment decision.
                      </p>

                      <p>
                        You are accessing this website at your own risk and it
                        is your responsibility to take precautions to ensure
                        that it is free from viruses. Neither the Company, the
                        Promoters, the Book Running Lead Managers nor their
                        respective affiliates, directors, officers, agents,
                        representatives, advisers or employees will be liable or
                        have any responsibility of any kind for any loss or
                        damage that you incur in the event of any failure or
                        disruption of this website, or resulting from the act or
                        omission of any other party involved in making this
                        website or the data contained therein available to you,
                        or from any other cause relating to your access to,
                        inability to access, or use of this website or the IPO
                        AV.
                      </p>

                      <p>
                        Failure to comply with this disclaimer may result in a
                        violation of the applicable laws of India and other
                        jurisdictions. Any other information contained in, or
                        that can be accessed via our website does not constitute
                        a part of the IPO AV.
                      </p>

                      <p className="font-bold underline">
                        IF YOU ARE NOT PERMITTED TO VIEW THE MATERIALS ON THIS
                        WEBSITE OR ARE IN ANY DOUBT AS TO WHETHER YOU ARE
                        PERMITTED TO VIEW THESE MATERIALS, PLEASE EXIT THIS
                        WEBPAGE.
                      </p>

                      <p>
                        To access this information, you must confirm, by
                        pressing on the button marked “I Confirm”, that at the
                        time of access, you are located in India. If you cannot
                        make this confirmation, you must press the button marked
                        “I Do Not Confirm”.
                      </p>

                      <p>
                        The documentation contained in these pages is posted
                        solely to comply with Indian legal and regulatory
                        requirements. Making the information contained herein
                        available in electronic format does not constitute an
                        offer to sell, the solicitation of an offer to buy, or a
                        recommendation to buy or sell securities of the Company
                        in the United States or in any other jurisdiction,
                        including without limitation, India.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-[20px] mt-[20px]">
                    <button
                      onClick={handleConfirm}
                      className="cursor-pointer px-[20px] py-[10px] bg-black text-white"
                    >
                      I CONFIRM
                    </button>

                    <button
                      onClick={handleDoNotConfirm}
                      className="cursor-pointer px-[20px] py-[10px] border border-black"
                    >
                      I DO NOT CONFIRM
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rhp_sec;
