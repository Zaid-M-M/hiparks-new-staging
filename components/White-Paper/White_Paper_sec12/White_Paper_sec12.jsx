"use client";
import React, { useState } from "react";

const White_Paper_sec12 = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="w-full bg-[#EBEBEB] py-[45px] lg:py-[100px] relative">
      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between items-center fixup">
        <h2 className="text-black bw-m text-[28px] xl:text-[64px] xl:leading-[74px] tracking-[-0.04em] md:text-[56px]">
          References
        </h2>

        {/* ---------- TOGGLE BUTTON ---------- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-[45px] h-[45px] cursor-pointer 1280:w-[80px] 1280:h-[80px] border border-[#BEBEBE] flex items-center justify-center"
        >
          {isOpen ? (
            // Minus icon
            <span className="w-[16px] 1280:w-[22px] h-[2px] bg-black block"></span>
          ) : (
            // Plus icon
            <div className="relative w-[16px] h-[16px] 1280:w-[22px] 1280:h-[22px]">
              <span className="absolute inset-x-0 top-1/2 h-[2px] bg-black"></span>
              <span className="absolute inset-y-0 left-1/2 w-[2px] bg-black"></span>
            </div>
          )}
        </button>
      </div>

      {/* ---------- COLLAPSIBLE BOXES ---------- */}
      <div
        className={`overflow-hidden transition-all fixup duration-500 ease-in-out ${
          isOpen ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-[25px] px-[0px] pt-5 lg:pt-16">
          {/* BOX 1: Market & Returns - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm linkcont">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">Market & Returns</h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    IMARC Group - India Reverse Logistics Market (2024-2033):
                  </strong>

                  <a
                    href="https://www.imarcgroup.com/india-reverse-logistics-market"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.imarcgroup.com/india-reverse-logistics-market
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    Grand View Research - India Reverse Logistics Market
                    (2024-2033):
                  </strong>

                  <a
                    href="https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.grandviewresearch.com/horizon/outlook/reverse-logistics-market/india
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    Return Prime (via ET/IndiaRetailing) - India return rates
                    (2024):
                  </strong>
                  <a
                    href="https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://economictimes.indiatimes.com/industry/cons-products/fashion-/-cosmetics-/-jewellery/more-than-a-third-of-fashion-and-footwear-products-get-returned-in-online-shopping-report/articleshow/112142214.cms
                  </a>{" "}
                  <a
                    href="https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.indiaretailing.com/2024/08/18/brands-could-lose-20-30-billion-in-revenue-to-returns-by-2025-report/
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    ShipNotes 2025 - COD vs prepaid RTO (26% vs 2%):
                  </strong>
                  <a
                    href="https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://mediabrief.com/shipnotes-reveals-26-rto-rate-on-cod-orders-across-india/
                  </a>{" "}
                  <a
                    href="https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://retail.financialexpress.com/news/cods-are-the-single-biggest-contributor-to-return-to-origin-in-e-commerce-report
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    Redseer - India's Festive Ecommerce Market 2024 (GMV
                    ~US$14B, +12% YoY):
                  </strong>

                  <a
                    href="https://redseer.com/reports/indias-festive-e-commerce-market-2024/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://redseer.com/reports/indias-festive-e-commerce-market-2024/
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 2: Compliance & Waste - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm linkcont">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">
                Compliance & waste
              </h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    PIB/CPCB - Electronic Waste Management (FY24-FY25 tonnage):
                  </strong>

                  <a
                    href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2155124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2155124
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    CPCB - FAQ under E-Waste (Management) Rules, 2022 (Jan 23,
                    2024):
                  </strong>

                  <a
                    href="https://cpcb.nic.in/uploads/Projects/E-Waste/FAQ_ewaste_23012024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://cpcb.nic.in/uploads/Projects/E-Waste/FAQ_ewaste_23012024.pdf
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    CPCB - Battery Waste Management portal & guidance (2022):
                  </strong>
                  <a
                    href="https://eprbattery.cpcb.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://eprbattery.cpcb.gov.in/
                  </a>{" "}
                  <strong>Guidance manual:</strong>
                  <a
                    href="https://eprbattery.cpcb.gov.in/upload/adminDoc/Guidance%20Manual%20Producers.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://eprbattery.cpcb.gov.in/upload/adminDoc/Guidance%20Manual%20Producers.pdf
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 3: E-commerce & infrastructure context - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm linkcont">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">
                E-commerce & infrastructure context
              </h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    Cashify whitepaper & coverage (refurb growth):
                  </strong>

                  <a
                    href="https://www.storyboard18.com/advertising/cashifys-whitepaper-unveils-explosive-growth-in-indias-refurbished-smartphone-market-43172.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.storyboard18.com/advertising/cashifys-whitepaper-unveils-explosive-growth-in-indias-refurbished-smartphone-market-43172.html
                  </a>

                  <a
                    href="https://www.passionateinmarketing.com/cashify-reveals-surging-demand-for-refurbished-smartphones-in-india/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.passionateinmarketing.com/cashify-reveals-surging-demand-for-refurbished-smartphones-in-india/
                  </a>
                </div>
                <div className="mb-2">
                  <strong>Flipkart Reset (refurb enablement):</strong>

                  <a
                    href="https://www.pymnts.com/news/ecommerce/2024/flipkart-introduces-service-to-help-resellers-reach-customers/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.pymnts.com/news/ecommerce/2024/flipkart-introduces-service-to-help-resellers-reach-customers/
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    Bain - How India Shops Online 2025 (market backdrop):
                  </strong>

                  <a
                    href="https://www.bain.com/insights/how-india-shops-online-2025/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.bain.com/insights/how-india-shops-online-2025/
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    IBEF (CBRE-cited) - Industrial & Logistics leasing hits
                    all-time high in 2024 at 39.5 mn sq ft:
                  </strong>

                  <a
                    href="https://www.ibef.org/news/industrial-logistics-leasing-hits-all-time-high-in-2024-at-39-5-mn-sq-ft-across-eight-cities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.ibef.org/news/industrial-logistics-leasing-hits-all-time-high-in-2024-at-39-5-mn-sq-ft-across-eight-cities
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    CBRE - India Industrial & Logistics Figures H2 2024 (Jan
                    2025):
                  </strong>

                  <a
                    href="https://www.cbre.co.in/insights/reports/india-industrial-and-logistics-figures-h2-2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.cbre.co.in/insights/reports/india-industrial-and-logistics-figures-h2-2024
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>

          {/* BOX 4: Global comparators (for context) - Full Width */}
          <div className="relative flex flex-col bw-r w-full bg-white text-black lg:text-[20px] text-[16px] leading-[25px] lg:leading-[30px] tracking-[-0.5px] h-auto min-h-[100px] px-10 py-6 shadow-sm linkcont">
            <div className="mb-4">
              <h3 className="font-bold text-lg lg:text-xl">
                Global comparators (for context)
              </h3>
              <div className="mt-2">
                <div className="mb-2">
                  <strong>
                    NRF/Happy Returns - US ecommerce return rate 2024 (~16.9%):
                  </strong>

                  <a
                    href="https://www.shopify.com/in/enterprise/blog/ecommerce-returns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.shopify.com/in/enterprise/blog/ecommerce-returns
                  </a>
                </div>
                <div className="mb-2">
                  <strong>
                    Grand View Research - Global reverse logistics (for
                    cross-checking):
                  </strong>

                  <a
                    href="https://www.grandviewresearch.com/industry-analysis/reverse-logistics-market-report"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline min-w-full"
                  >
                    https://www.grandviewresearch.com/industry-analysis/reverse-logistics-market-report
                  </a>
                </div>
              </div>
            </div>
            <img
              src="/state/rlbg.svg"
              className="absolute bottom-0 left-0 w-[100px] aspect-square"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default White_Paper_sec12;
