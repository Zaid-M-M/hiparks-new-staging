"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Btn from "../global/Btn";

const CampaignNewsletter = () => {
  const formRef = useRef();
  const pathname = usePathname();

  // Page name conversion logic
  const pageName =
    pathname === "/"
      ? "Home"
      : pathname
          .replace("/", "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

  // Current date & time logic
  const currentDate = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
  });

  const [subscriber_email, setSubscriber_email] = useState("");

  // Validation States
  const [errors, setErrors] = useState({
    subscriber_email: "",
  });

  // Submission States
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleChange = (field, value) => {
    switch (field) {
      case "subscriber_email":
        setSubscriber_email(value);
        if (!value)
          setErrors((prev) => ({
            ...prev,
            subscriber_email: "Please enter email",
          }));
        else if (!emailRegex.test(value))
          setErrors((prev) => ({
            ...prev,
            subscriber_email: "Please enter valid email address",
          }));
        else setErrors((prev) => ({ ...prev, subscriber_email: "" }));
        break;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!subscriber_email) newErrors.subscriber_email = "Please enter email";
    else if (!emailRegex.test(subscriber_email))
      newErrors.subscriber_email = "Please enter valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const submitPromises = [
        emailjs.sendForm(
          "service_38rulc9",
          "template_y80dvie",
          formRef.current,
          "SsPYHKCapw4h-xBn_",
        ),
      ];

      await Promise.all(submitPromises);

      setStatusMessage("Your details have been submitted successfully!");
      setSubscriber_email("");
      setErrors({});
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatusMessage("Error submitting form. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="h-full  overflow-hidden w-full relative bg-cover  bg-center"
      style={{ backgroundImage: "url('/sustainable_landing/Newsletter.jpg')" }}
    >
      <div className="absolute hidden lg:block -bottom-10 -right-10 2xl:right-[0%] z-50 bg-linear-to-tr 2xl:w-[40%] w-[50%] from-[#F47922] to-[#8B37A4] h-40 blur-[60px] pointer-events-none"></div>
      {/* LAYER 1: BACKGROUND VECTOR SHAPES (Placed behind the character portrait)
       */}

      {/* LAYER 2: MAIN CONTENT CONTAINER
       */}
      <div className="fix w-full py-[45px] md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* LEFT CONTENT COLUMNS */}
          <div className="w-full xl:max-w-[55%] 2xl:max-w-[53%] flex flex-col gap-5 md:gap-10 items-start text-white ">
            {/* Title using custom scale from design matrix */}
            <h2 className="text-[28px] sm:text-[34px] 2xl:text-[38px] font-medium md:tracking-[0.7px]  leading-[120%] tracking-[-1.92px]">
              Discuss with us how Horizon can  support you in achieving your
              green goals.
            </h2>

            {/* Translucent Informational Contact Wrapper Box */}
            <div className="bg-white/10 w-fit backdrop-blur-md p-4 space-y-1">
              <p className="text-[15px] md:text-[18px] 2xl:text-[24px]  text-white/90">
                <span className="font-medium">Call Us On:</span>{" "}
                <a href="tel:+918879970705" className="hover:underline ">
                  +91 8879970705
                </a>
              </p>
              <p className="text-[15px] md:text-[18px] 2xl:text-[24px]  text-white/90">
                <span className="font-medium">Or Email Us On:</span>{" "}
                <a
                  href="mailto:contactus@hiparks.com"
                  className="hover:underline "
                >
                  contactus@hiparks.com
                </a>
              </p>
            </div>

            {/* Newsletter Action Form Block */}
            <div className="w-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="Page_name" value={pageName} />
                <input type="hidden" name="Date" value={currentDate} />

                <div className="flex ">
                  <div className="">
                    {errors.subscriber_email && (
                      <p className="text-red-400 text-xs mt-1 absolute left-0 bottom-[-18px]">
                        {errors.subscriber_email}
                      </p>
                    )}
                  </div>

                  {/* Submission Trigger Button with Arrow Alignment Accent */}
                  {/* <button
                    type="submit"
                    disabled={loading}
                    className="bg-black cursor-pointer text-white px-6 py-3.5 text-xs md:text-[16px]  leading-[26px]  font-semibold uppercase tracking-[1.6px] hover:bg-neutral-900 transition flex items-center justify-center gap-2.5 whitespace-nowrap"
                  >
                    <span>
                      {loading ? "Processing..." : "Book A Site Visit"}
                    </span>
                    <svg
                      className="w-[30px] h-[30px] transform -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button> */}
                  <Btn href="#book-a-site-visit" text={"Book A Site Visit"} />
                </div>

                {statusMessage && (
                  <p
                    className={`text-xs font-medium mt-2 ${statusMessage.includes("success") ? "text-green-300" : "text-red-300"}`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* RIGHT COLUMNS: CHARACTER OVERLAY DISPLAY */}
          <div className="w-full xl:max-w-[45%] 2xl:max-w-[47%] md:block hidden">
            <div className="relative z-10 select-none pointer-events-none overflow-hidden">
              <img
                src="/Campaign/campaignfootgirl.webp"
                alt="Horizon Fulfillment Consultant Representative Portrait"
                className="w-[100%] h-full relative -mb-28 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignNewsletter;
