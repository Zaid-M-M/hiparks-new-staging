"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "@/components/global/PhoneInput";

const Mappedu_Form = () => {
  const formRef = useRef();

  const inquirySource = "Web";
  const pageName = "Mappedu Campaign";
  const source = "https://hiparks-web.vercel.app/campaign";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [sectorType, setSectorType] = useState("");
  const [space, setSpace] = useState("");
  const [enquiryType, setEnquiryType] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    organisation: "",
    email: "",
    message: "",
    location: "",
    sectorType: "",
    space: "",
    enquiryType: "",
  });

  const trackFormSubmission = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "mappedu_campaign_form_submit",
      });

      console.log("GTM event fired: mappedu_campaign_form_submit");
      console.log(window.dataLayer);
    }
  };

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const alpha_allwd = /^[A-Za-z ]+$/;
  const phoneRegex = /^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Please Enter Full Name";
    // else if (!alpha_allwd.test(name)) newErrors.name = "Letters and space only";

    if (!phone) newErrors.phone = "Please Enter Phone No";
    else if (!phoneRegex.test(phone.replace(/\s+/g, "")))
      newErrors.phone = "Please Enter Valid Phone No";

    if (!organisation) newErrors.organisation = "Please Enter Organisation";

    if (!email) newErrors.email = "Please Enter Email Address";
    else if (!emailRegex.test(email))
      newErrors.email = "Please Enter Valid Email Address";

    // if (!location) newErrors.location = "Please Select Location";

    if (!sectorType) newErrors.sectorType = "Please Select Sector";

    if (!space) newErrors.space = "Please Enter Space";

    if (!enquiryType) newErrors.enquiryType = "Please Select Enquiry Type";

    if (!message) newErrors.message = "Please Enter Message";
    // else if (!alpha_allwd.test(message))
    //   newErrors.message = "Letters and space only";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    const value = e.target.value;

    switch (field) {
      case "name":
        setName(value);
        if (!value)
          setErrors((p) => ({ ...p, name: "Please Enter Full Name" }));
        // else if (!alpha_allwd.test(value))
        // setErrors((p) => ({ ...p, name: "Letters and space only" }));
        else setErrors((p) => ({ ...p, name: "" }));
        break;

      case "phone": {
        let cleaned = value.replace(/[^\d\s+]/g, "");
        cleaned = cleaned.replace(/(?!^)\+/g, "");
        setPhone(cleaned);
        const raw = cleaned.replace(/\s+/g, "");
        if (!cleaned)
          setErrors((p) => ({ ...p, phone: "Please Enter Phone No" }));
        else if (raw.length > 0 && !phoneRegex.test(raw))
          setErrors((p) => ({ ...p, phone: "Please Enter Valid Phone No" }));
        else setErrors((p) => ({ ...p, phone: "" }));
        break;
      }

      case "organisation":
        setOrganisation(value);
        if (!value)
          setErrors((p) => ({
            ...p,
            organisation: "Please Enter Organisation",
          }));
        else setErrors((p) => ({ ...p, organisation: "" }));
        break;

      case "email":
        setEmail(value);
        if (!value)
          setErrors((p) => ({ ...p, email: "Please Enter Email Address" }));
        else if (!emailRegex.test(value))
          setErrors((p) => ({
            ...p,
            email: "Please Enter Valid Email Address",
          }));
        else setErrors((p) => ({ ...p, email: "" }));
        break;

      case "location":
        setLocation(value);
        if (!value)
          setErrors((p) => ({ ...p, location: "Please Select Location" }));
        else setErrors((p) => ({ ...p, location: "" }));
        break;

      case "sectorType":
        setSectorType(value);
        if (!value)
          setErrors((p) => ({ ...p, sectorType: "Please Select Sector" }));
        else setErrors((p) => ({ ...p, sectorType: "" }));
        break;

      case "space":
        setSpace(value);
        if (!value) setErrors((p) => ({ ...p, space: "Please Enter Space" }));
        else setErrors((p) => ({ ...p, space: "" }));
        break;

      case "message":
        setMessage(value);
        if (!value)
          setErrors((p) => ({ ...p, message: "Please Enter Message" }));
        // else if (!alpha_allwd.test(value))
        // setErrors((p) => ({ ...p, message: "Letters and space only" }));
        else setErrors((p) => ({ ...p, message: "" }));
        break;

      default:
        break;
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    if (!validateForm()) return;

    setLoading(true);

    try {
      await Promise.all([
        emailjs.sendForm(
          "service_38rulc9",
          "template_gytbdrm",
          formRef.current,
          "SsPYHKCapw4h-xBn_",
        ),
        fetch(
          "https://script.google.com/macros/s/AKfycbzAr8hWFzKLwkCo0NQsa2d1F7Ol59-2hBQTXYWe3oWgMJLvdNh_4pADo60sr9q7_IZUjg/exec",
          {
            method: "POST",
            mode: "no-cors",
            body: new FormData(formRef.current),
          },
        ),
        fetch("/api/salesforce/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tenantName: organisation,
            leadName: name,
            Form_Type__c: "Mappedu Park Page Chennai",
            requirement: space || undefined,
            description: message,
            selectSector: sectorType,
            inquirySource,
            phone,
            email,
            customer: enquiryType === "Customer" ? "Customer" : undefined,
            broker: enquiryType === "Broker" ? "Broker" : undefined,
          }),
        }).then((res) => {
          if (!res.ok) throw new Error("Salesforce submission failed");
          return res;
        }),
      ]);

      // GTM event fire after successful form submission
      trackFormSubmission();

      setStatusMessage("Your message has been sent successfully!");
      formRef.current.reset();
      setName("");
      setPhone("");
      setOrganisation("");
      setEmail("");
      setMessage("");
      setLocation("");
      setSectorType("");
      setSpace("");
      setEnquiryType("");
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatusMessage("Error sending message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-[20px] md:text-[24px] 2xl:max-w-[100%] bw-r pb-3.5 text-[#2E3133]">
        Find the right space for your business
      </h2>

      <form ref={formRef} onSubmit={sendEmail} className="w-full">
        {/* Hidden fields */}
        <input type="hidden" name="Page_name" value={pageName} />
        <input type="hidden" name="inquiry_source" value={inquirySource} />
        <input
          type="hidden"
          name="Form_Type__c"
          value="Mappedu Park Page Chennai"
        />
        <input type="hidden" name="source" value={source} />
        <input
          type="hidden"
          name="enquiry_type_radio"
          value={enquiryType || "Not Selected"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 lg:gap-y-11 w-full">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Full Name *"
              name="name"
              value={name}
              onChange={handleChange("name")}
              className={`border-b pb-3 outline-none w-full ${errors.name ? "border-[#fb2c36]" : "border-[#C7CDD2]"}`}
            />
            {errors.name && (
              <p className="text-[#fb2c36] text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="relative">
            <PhoneInput
              placeholder="Phone Number *"
              name="phone"
              value={phone}
              onChange={(val) =>
                handleChange("phone")({ target: { value: val } })
              }
              className={`border-b pb-3 outline-none w-full ${errors.phone ? "border-[#fb2c36]" : "border-[#C7CDD2]"}`}
            />
            {errors.phone && (
              <p className="text-[#fb2c36] text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Organization */}
          <div className="relative">
            <input
              type="text"
              placeholder="Organization *"
              name="organisation"
              value={organisation}
              onChange={handleChange("organisation")}
              className={`border-b pb-3 outline-none w-full ${errors.organisation ? "border-[#fb2c36]" : "border-[#C7CDD2]"}`}
            />
            {errors.organisation && (
              <p className="text-[#fb2c36] text-xs mt-1">
                {errors.organisation}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email *"
              name="email"
              value={email}
              onChange={handleChange("email")}
              className={`border-b pb-3 outline-none w-full ${errors.email ? "border-[#fb2c36]" : "border-[#C7CDD2]"}`}
            />
            {errors.email && (
              <p className="text-[#fb2c36] text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Select Location */}
          {/* <div className="relative">
            <select
              name="location"
              value={location}
              onChange={handleChange("location")}
              className="w-full border-b pb-3 text-black appearance-none outline-none bg-transparent"
              style={{
                borderColor: errors.location ? "#fb2c36" : "#C7CDD2",
              }}
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="Chengalpattu">Chengalpattu</option>
              <option value="Redhills-I">Redhills-I</option>
              <option value="Mappedu">Mappedu</option>
              <option value="MWC">MWC</option>
              <option value="Oragadam">Oragadam</option>
              <option value="Oragadam II">Oragadam II</option>
            </select>
            <svg
              className="absolute top-[40%] -translate-y-1/2 right-0 w-4 h-4 text-[#000] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {errors.location && (
              <p className="text-[#fb2c36] text-xs mt-1">{errors.location}</p>
            )}
          </div> */}

          {/* Select Sector */}
          <div className="relative md:col-span-2">
            <select
              name="sector"
              value={sectorType}
              onChange={handleChange("sectorType")}
              className="w-full border-b pb-3 text-black appearance-none outline-none bg-transparent"
              style={{
                borderColor: errors.sectorType ? "#fb2c36" : "#C7CDD2",
              }}
            >
              <option value="" disabled>
                Select Sector
              </option>
              <option value="3PL">3PL</option>
              <option value="Automobile">Automobile</option>
              <option value="Automotive Ancillary">Automotive Ancillary</option>
              <option value="Construction Materials">
                Construction Materials
              </option>
              <option value="Consumer Durable">Consumer Durable</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Electronics">Electronics</option>
              <option value="Engineering">Engineering</option>
              <option value="FMCD">FMCD</option>
              <option value="FMCG">FMCG</option>
              <option value="IT">IT</option>
              <option value="Pharma">Pharma</option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Others">Others</option>
            </select>
            <svg
              className="absolute top-[40%] -translate-y-1/2 right-0 w-4 h-4 text-[#000] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {errors.sectorType && (
              <p className="text-[#fb2c36] text-xs mt-1">{errors.sectorType}</p>
            )}
          </div>

          {/* Space Required */}
          <div className="relative">
            <input
              type="text"
              placeholder="Space Required *"
              name="space_required"
              value={space}
              onChange={handleChange("space")}
              className={`border-b pb-3 outline-none w-full ${errors.space ? "border-[#fb2c36]" : "border-[#C7CDD2]"}`}
            />
            {errors.space && (
              <p className="text-[#fb2c36] text-xs mt-1">{errors.space}</p>
            )}
          </div>

          {/* Enquiry Type */}
          <div className="relative w-full">
            <select
              name="enquiry_type"
              value={enquiryType}
              onChange={(e) => {
                setEnquiryType(e.target.value);
                if (e.target.value)
                  setErrors((p) => ({ ...p, enquiryType: "" }));
              }}
              className="w-full pb-3 border-b text-black appearance-none outline-none bg-transparent"
              style={{
                borderColor: errors.enquiryType ? "#fb2c36" : "#C7CDD2",
              }}
            >
              <option value="" disabled>
                Enquiry Type
              </option>
              <option value="Broker">Broker</option>
              <option value="Customer">Customer</option>
            </select>
            <svg
              className="absolute top-[40%] -translate-y-1/2 right-0 w-4 h-4 text-[#000] pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {errors.enquiryType && (
              <p className="text-[#fb2c36] text-xs mt-1">
                {errors.enquiryType}
              </p>
            )}
          </div>
        </div>

        {/* Your Message */}
        <div className="relative mt-7">
          <textarea
            placeholder="Your Message *"
            name="message"
            rows="1"
            value={message}
            onChange={handleChange("message")}
            className={`w-full border-b campaigninput mt-3 pb-3 text-black outline-none resize-none ${errors.message ? "border-[#fb2c36]" : "border-[#C7CDD2]"}`}
          />
          {errors.message && (
            <p className="text-[#fb2c36] text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black text-white text-lg font-bold cursor-pointer w-full h-[56px] px-[30px] py-[15px] mt-7"
        >
          {loading ? "SENDING..." : "SUBMIT"}
        </button>

        {statusMessage && (
          <p
            id="contact_form_submit"
            className={` mt-4 font-semibold text-sm ${
              statusMessage.includes("success")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </form>
    </>
  );
};

export default Mappedu_Form;
