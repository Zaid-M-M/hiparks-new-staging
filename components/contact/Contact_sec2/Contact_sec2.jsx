"use client";
import React, { useState } from "react";
import { PlusIcon, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";

const Contact_sec2 = () => {
  // Single state for accordion
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <div className="fix py-[45px] lg:py-[100px] px-4 sm:px-6 md:px-8 360:px-0">
        <div className="flex flex-col lg:flex-row w-full h-full items-stretch gap-0 lg:gap-0 360:flex-col-reverse">
          {/* LEFT SIDE – Form */}
          <div className="bg-white w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-[45px] py-8 sm:py-10 md:py-12">
            <h3 className="bw-s text-[28px] leading-[30px] tracking-[-1px] sm:text-[26px] sm:leading-[36px] xl:text-[56px] xl:leading-[66px] xl:tracking-[-1.2px]">
              <span className="bw-r">Connect</span>{" "}
              <span className="bw-m">With Us</span>
            </h3>

            <div className="w-full pt-9 flex-1 flex flex-col justify-start xl:pt-13">
              <ContactForm />
            </div>
          </div>

          {/* RIGHT SIDE – Contact Info */}
          <div className="bg-[linear-gradient(141deg,#8F53A1_32.62%,#F47922_101.53%)] text-white w-full lg:w-1/2 p-6 sm:p-8 md:p-10 xl:px-[30px] xl:py-[46px] flex flex-col text-sm leading-6">
            <h3 className="text-[24px] font-semibold sm:text-[26px] md:text-[28px] bw-m">
              Connect With Us
            </h3>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="md:p-2 xl:p-0 1440:p-2 rounded">
                <p className="bw-m text-[16px]">Mumbai - Head Office</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                  Horizon Industrial Parks Ltd, <br /> Floor 15, Tower 1, One
                  World Center <br /> Lower Parel, Mumbai 400 013
                </p>
              </div>
              <div>
                <p className="bw-m text-[16px]">Phone</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l pb-[10px]">
                  <a href="tel:+912241581000">+91 22 4158 1000</a> |{" "}
                  <a href="tel:+918879970705">+91 88799 70705</a>
                </p>
                <div>
                  <p className="bw-m text-[16px]">Business Hours</p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                    Monday to Friday | 9 am to 6 pm IST
                  </p>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>
              <div className=" rounded">
                <div className="md:pt-2 xl:pt-0 1440:pt-2 rounded">
                  <p className="bw-m text-[16px]">Delhi - Zonal Office</p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                    Tower 2, 1608, 16th Floor, <br /> Magnum Global Park, Golf
                    Course Ext. Road, Sector 58, Gurugram,
                    <br />
                    Haryana-122 011
                  </p>
                  {/* <div className="pt-[10px]">
                    <p className="bw-m text-[16px]">Phone</p>
                    <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l pb-[10px]">
                      +91 99711 44317
                    </p>
                  </div> */}
                </div>
              </div>
              <div className="md:p-2 xl:p-0 1440:p-2 rounded">
                <p className="bw-m text-[16px]">Bengaluru - Zonal Office</p>
                <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l">
                  2nd Floor, Marquis Ventures, <br /> Vittal Mallya Road,
                  Shanthala Nagar, <br /> Ashok Nagar, Bengaluru, <br />{" "}
                  Karnataka 560001.
                </p>
                {/* <div className="pt-[10px]">
                  <p className="bw-m text-[16px]">Phone</p>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] bw-l pb-[10px]">
                    +91 80695 39800
                  </p>
                </div> */}
              </div>
              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>
            </div>

            {/* Accordions */}
            <div className="space-y-6 mt-1 xl:mt-[16px]">
              {/* For Industrial & Incity Leasing Inquiries */}
              <div className="mb-[14px] md:mb-[0px]">
                <button
                  className="flex items-center justify-between w-full bw-r text-left cursor-pointer"
                  onClick={() => toggleSection("industrial")}
                >
                  <span className="text-[16px] bw-m">
                    For Industrial & Incity Leasing Inquiries
                  </span>
                  <span>
                    {openSection === "industrial" ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === "industrial" && (
                    <motion.div
                      key="industrial"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
                      className="overflow-hidden mt-2 space-y-2 "
                    >
                      <p className="text-[15px] mb-[10px]">
                        Priti Ram &nbsp;|&nbsp;{" "}
                        <a href="tel:+918879970705" className="">
                          +91 8879970705
                        </a>{" "}
                        &nbsp;|{" "}
                        <a
                          href="mailto:contactus@hiparks.com"
                          className=" pl-[3px] text-[16px]"
                        >
                          contactus@hiparks.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>

              {/* For Investor Relations Inquiries */}
              <div className="mb-[14px] md:mb-[0px]">
                <button
                  className="flex items-center justify-between w-full bw-r text-left mt-5 cursor-pointer"
                  onClick={() => toggleSection("relations")}
                >
                  <span className="text-[16px]  bw-m">
                    For Investor Relations Inquiries
                  </span>
                  <span>
                    {openSection === "relations" ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === "relations" && (
                    <motion.div
                      key="relations"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
                      className="overflow-hidden mt-2 "
                    >
                      <p className="text-[15px] mb-[10px]">
                        Prapti Zaveri <br></br> Head - Investors Relations
                        &nbsp;|&nbsp;{" "}
                        <a href="tel:+912241581000" className="">
                          +91 22 4158 1000
                        </a>{" "}
                        &nbsp;|{" "}
                        <a
                          href="mailto:investor.relations@hiparks.com"
                          className=" pl-[3px] text-[16px]"
                        >
                          investor.relations@hiparks.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>

              {/* For Investor Compliance Inquiries */}
              <div className="mb-[14px] md:mb-[0px]">
                <button
                  className="flex items-center justify-between w-full bw-r text-left mt-5 cursor-pointer"
                  onClick={() => toggleSection("compliance")}
                >
                  <span className="text-[16px]  bw-m">
                    For Investor Compliance Inquiries
                  </span>
                  <span>
                    {openSection === "compliance" ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === "compliance" && (
                    <motion.div
                      key="compliance"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
                      className="overflow-hidden mt-2 "
                    >
                      <p className="text-[15px] mb-[10px]">
                        Shraddha Poddar <br></br> Company Secretary & Compliance
                        Officer &nbsp;|&nbsp;{" "}
                        <a href="tel:+912241581000" className="">
                          +91 22 4158 1000
                        </a>{" "}
                        &nbsp;|{" "}
                        <a
                          href="mailto:compliance@hiparks.com"
                          className=" pl-[3px] text-[16px]"
                        >
                          compliance@hiparks.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>

              {/* For Registrar Office */}
              <div className="mb-[14px] md:mb-[0px]">
                <button
                  className="flex items-center justify-between w-full bw-r text-left mt-5 cursor-pointer"
                  onClick={() => toggleSection("registrar")}
                >
                  <span className="text-[16px]  bw-m">Registrar Office</span>
                  <span>
                    {openSection === "registrar" ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <PlusIcon className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openSection === "registrar" && (
                    <motion.div
                      key="registrar"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [1, 0, 0.3, 0.7] }}
                      className="overflow-hidden mt-2 "
                    >
                      <p className="text-[15px] mb-[10px]">
                        KFin Technologies Limited &nbsp;|&nbsp;{" "}
                        <a href="tel:+912241581000" className="">
                          +1800 571 6677
                        </a>{" "}
                        &nbsp;|{" "}
                        <a
                          href="mailto:support.mfs@kfintech.com"
                          className=" pl-[3px] text-[16px]"
                        >
                          support.mfs@kfintech.com
                        </a>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="col-span-1 sm:col-span-2 border-t border-white/30 my-2"></div>

              {/* Land/Warehouse Proposals */}
              <div className="mt-2 xl:mt-[20px]">
                <p className="bw-m text-[16px]">
                  For Land and Warehouse Investment Proposals
                </p>
                <a
                  href="mailto:acquisitions@hiparks.com"
                  className=" pl-[3px] bw-l text-[16px]"
                >
                  acquisitions@hiparks.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_sec2;
