"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import PEInput from "./PEInput";
import PESelect from "./PESelect";
import {
  DEFAULT_TEMPLATE_ID,
  PARK_TEMPLATE_MAP,
  SECTOR_OPTIONS,
  getEmptyErrors,
  getInitialFormValues,
  getInputBorderClass,
} from "./peFormData";
import PhoneInput from "../PhoneInput";

const CMS_BASE_URL =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";
const normaliseKey = (value = "") =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");
const PARK_DISPLAY_NAME_OVERRIDES = {
  delhii: "Alipur I",
  delhiii: "Alipur II",
};
const OTHER_OPTION_VALUE = "__other__";
const ALLOWED_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
const ALLOWED_STATE_KEYS = new Set(
  ALLOWED_STATES.map((state) => normaliseKey(state)),
);
const resolveStateFromPark = (park) => {
  const cmsStateName = (park?.acf?.state_name || "").trim();
  const stateKey = normaliseKey(cmsStateName);
  const categories = Array.isArray(park?.categories) ? park.categories : [];

  if (categories.includes(61)) return "Delhi";
  if (categories.includes(55)) return "Haryana";
  if (categories.includes(60) || categories.includes(3)) return "Gujarat";
  if (categories.includes(58) || categories.includes(6)) return "Telangana";
  if (categories.includes(59)) return "Tamil Nadu";

  if (stateKey.includes("maharashtra")) return "Maharashtra";
  if (stateKey.includes("karnataka")) return "Karnataka";
  if (stateKey.includes("tamil")) return "Tamil Nadu";
  if (stateKey.includes("telangana")) return "Telangana";
  if (stateKey.includes("gujarat")) return "Gujarat";
  if (stateKey.includes("haryana")) return "Haryana";
  if (stateKey.includes("delhi")) return "Delhi";

  if (
    categories.includes(4) ||
    categories.includes(57) ||
    categories.includes(8)
  ) {
    return "Maharashtra";
  }
  if (categories.includes(7) || categories.includes(56)) {
    return stateKey.includes("tamil") ? "Tamil Nadu" : "Karnataka";
  }

  return "";
};

const templateMapByNormalisedPark = Object.entries(PARK_TEMPLATE_MAP).reduce(
  (acc, [key, templateId]) => {
    acc[normaliseKey(key)] = templateId;
    return acc;
  },
  {},
);

const getTemplateIdForPark = (parkName) =>
  templateMapByNormalisedPark[normaliseKey(parkName)] || DEFAULT_TEMPLATE_ID;

const fetchAllCmsPages = async (endpoint) => {
  let page = 1;
  let totalPages = 1;
  let allItems = [];

  do {
    const response = await fetch(
      `${CMS_BASE_URL}/${endpoint}?per_page=100&page=${page}`,
      {
        cache: "no-store",
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${endpoint} page ${page}`);
    }

    const items = await response.json();
    allItems = [...allItems, ...items];
    totalPages = parseInt(response.headers.get("X-WP-TotalPages"), 10) || 1;
    page += 1;
  } while (page <= totalPages);

  return allItems;
};

const getIncityParkOption = (park) => {
  const parkName = (
    park?.acf?.incity_city_name ||
    park?.title?.rendered ||
    park?.acf?.incity_name ||
    ""
  ).trim();

  if (!parkName) return null;
  return { value: parkName, label: parkName };
};

const getParkDisplayName = (parkName = "") =>
  PARK_DISPLAY_NAME_OVERRIDES[normaliseKey(parkName)] || parkName;

const PEForm = () => {
  const formRef = useRef();
  const pathname = usePathname();

  const pageName =
    pathname === "/"
      ? "Home"
      : pathname
          .replace("/", "")
          .replace(/-/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
  const inquirySource = pathname === "/phone-enquiry" ? "Phone" : "Web";

  const [formValues, setFormValues] = useState(getInitialFormValues);
  const [errors, setErrors] = useState(getEmptyErrors);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [stateOptions, setStateOptions] = useState([]);
  const [parksByState, setParksByState] = useState({});
  const [allParkOptions, setAllParkOptions] = useState([]);
  const [locationsLoading, setLocationsLoading] = useState(true);

  const alpha_allwd = /^[A-Za-z ]+$/;
  // Robust international phone regex: allow leading +, then digits/spaces, min 7 digits, max 25 digits
  const phoneRegex = /^\+?\d[\d\s]{5,30}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const parkToStateMap = useMemo(() => {
    const map = {};
    Object.entries(parksByState).forEach(([stateName, parks]) => {
      parks.forEach((park) => {
        map[normaliseKey(park.value)] = stateName;
      });
    });
    return map;
  }, [parksByState]);

  const parkOptions = useMemo(() => {
    const baseOptions = formValues.stateType
      ? parksByState[formValues.stateType] || []
      : allParkOptions;

    return [...baseOptions, { value: OTHER_OPTION_VALUE, label: "Other" }];
  }, [allParkOptions, parksByState, formValues.stateType]);

  useEffect(() => {
    let cancelled = false;

    const loadLocations = async () => {
      try {
        const [states, parks, incityParks] = await Promise.all([
          fetchAllCmsPages("states"),
          fetchAllCmsPages("parks"),
          fetchAllCmsPages("incity_parks"),
        ]);

        if (cancelled) return;

        void states;

        const groupedParks = {};
        const allParksArray = [];

        parks.forEach((park) => {
          const parkName = (
            park?.acf?.park_name ||
            park?.title?.rendered ||
            ""
          ).trim();
          if (!parkName) return;

          const parkOption = {
            value: parkName,
            label: getParkDisplayName(parkName),
          };
          allParksArray.push(parkOption);

          const resolvedState = resolveStateFromPark(park);
          if (
            resolvedState &&
            ALLOWED_STATE_KEYS.has(normaliseKey(resolvedState))
          ) {
            if (!groupedParks[resolvedState]) groupedParks[resolvedState] = [];
            groupedParks[resolvedState].push(parkOption);
          }
        });

        // Goa parks come from `incity_parks` instead of `parks`.
        const goaIncityParks = (Array.isArray(incityParks) ? incityParks : [])
          .filter((park) => {
            const classList = Array.isArray(park?.class_list)
              ? park.class_list
              : [];
            return classList.some(
              (className) => normaliseKey(className) === "categorygoa",
            );
          })
          .map(getIncityParkOption)
          .filter(Boolean);

        groupedParks.Goa = goaIncityParks;
        allParksArray.push(...goaIncityParks);

        Object.keys(groupedParks).forEach((stateName) => {
          groupedParks[stateName] = groupedParks[stateName]
            .filter(
              (option, index, array) =>
                array.findIndex(
                  (item) =>
                    normaliseKey(item.value) === normaliseKey(option.value),
                ) === index,
            )
            .sort((a, b) => a.label.localeCompare(b.label));
        });

        const finalStateOptions = [...ALLOWED_STATES]
          .sort((a, b) => a.localeCompare(b))
          .map((stateName) => ({
            value: stateName,
            label: stateName,
          }));

        const uniqueParks = allParksArray
          .filter(
            (option, index, array) =>
              array.findIndex(
                (item) =>
                  normaliseKey(item.value) === normaliseKey(option.value),
              ) === index,
          )
          .sort((a, b) => a.label.localeCompare(b.label));

        setParksByState(groupedParks);
        setAllParkOptions(uniqueParks);
        setStateOptions(finalStateOptions);
      } catch (error) {
        console.error("Failed to load states and parks:", error);
      } finally {
        if (!cancelled) {
          setLocationsLoading(false);
        }
      }
    };

    loadLocations();

    return () => {
      cancelled = true;
    };
  }, []);

  const setFieldValue = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const fieldValidators = {
    date: (value) => (!value ? "Please Enter date" : ""),
    name: (value) => {
      if (!value) return "Please Enter Full Name";
      if (!alpha_allwd.test(value)) return "Letters and space only";
      return "";
    },
    phone: (value) => {
      if (!value) return "Please Enter Phone No";
      const digits = value.replace(/[^\d]/g, "").length;
      if (!phoneRegex.test(value) || digits < 7 || digits > 25) {
        return "Please Enter Valid Phone No";
      }
      return "";
    },
    organisation: (value) => (!value ? "Please Enter Organisation" : ""),
    email: (value) =>
      value && !emailRegex.test(value)
        ? "Please Enter Valid Email Address"
        : "",
    message: () => "",
    stateType: () => "",
    parkType: () => "",
    sectorType: () => "",
    space: (value) => (!value ? "Please Enter Space" : ""),
  };

  const resetFormState = () => {
    setFormValues(getInitialFormValues());
    setErrors(getEmptyErrors());
  };

  const validateForm = () => {
    const nextErrors = {
      date: fieldValidators.date(formValues.date),
      name: fieldValidators.name(formValues.name),
      phone: fieldValidators.phone(formValues.phone),
      organisation: fieldValidators.organisation(formValues.organisation),
      email: fieldValidators.email(formValues.email),
      space: fieldValidators.space(formValues.space),
    };
    const hasError = Object.values(nextErrors).some(Boolean);

    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return !hasError;
  };

  const normalizePhone = (value = "") => {
    // Rely on PhoneInput's built-in sanitisation, just enforce absolute max length if needed
    return value.slice(0, 25);
  };

  const handleChange = (field) => (e) => {
    const value =
      field === "phone" ? normalizePhone(e.target.value) : e.target.value;

    if (field === "stateType") {
      setFormValues((prev) => {
        const currentParkState = parkToStateMap[normaliseKey(prev.parkType)];
        const shouldClearPark =
          prev.parkType &&
          prev.parkType !== OTHER_OPTION_VALUE &&
          currentParkState &&
          currentParkState !== value;

        return {
          ...prev,
          stateType: value,
          stateOther: "",
          parkType: shouldClearPark ? "" : prev.parkType,
          parkOther:
            shouldClearPark || prev.parkType !== OTHER_OPTION_VALUE
              ? ""
              : prev.parkOther,
        };
      });
      setErrors((prev) => ({
        ...prev,
        stateType: fieldValidators.stateType(value),
        parkType: "",
      }));
      return;
    }

    if (field === "parkType") {
      setFormValues((prev) => {
        if (value === OTHER_OPTION_VALUE) {
          return {
            ...prev,
            parkType: value,
            parkOther: prev.parkOther,
          };
        }

        const inferredState = parkToStateMap[normaliseKey(value)];
        return {
          ...prev,
          parkType: value,
          parkOther: "",
          stateType: inferredState || prev.stateType,
          stateOther: "",
        };
      });
      setErrors((prev) => ({
        ...prev,
        parkType: fieldValidators.parkType(value),
      }));
      return;
    }

    setFieldValue(field, value);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldValidators[field] ? fieldValidators[field](value) : "",
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    if (!validateForm()) return;

    setLoading(true);

    try {
      const resolvedState = formValues.stateType;
      const resolvedPark =
        formValues.parkType === OTHER_OPTION_VALUE
          ? formValues.parkOther || "Other"
          : formValues.parkType;
      const templateId = getTemplateIdForPark(resolvedPark);

      const submitPromises = [
        emailjs.sendForm(
          "service_38rulc9",
          templateId,
          formRef.current,
          "SsPYHKCapw4h-xBn_",
        ),
        fetch(
          "https://script.google.com/macros/s/AKfycbyggqH3ochC4ko8T7Xwh8Cl8urvNClIs_w93Y6CP5F0j7DYgslgsGpM2AR3HG-vdIL4yg/exec",
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
            tenantName: formValues.organisation,
            leadName: formValues.name,
            Form_Type__c: "Phone Inquiry Form",
            requirement: formValues.space || undefined,
            description: formValues.message,
            visitDate: formValues.date,
            region: resolvedPark,
            selectState: resolvedState,
            selectLocation: resolvedPark,
            State__c: resolvedState,
            Location__c: resolvedPark,
            stateOther: undefined,
            Other_Park__c:
              formValues.parkType === OTHER_OPTION_VALUE
                ? formValues.parkOther || undefined
                : undefined,
            parkOther:
              formValues.parkType === OTHER_OPTION_VALUE
                ? formValues.parkOther || undefined
                : undefined,
            selectSector: formValues.sectorType,
            inquirySource,
            phone: formValues.phone,
            email: formValues.email,
            customer:
              formValues.enquiryType === "Customer" ? "Customer" : undefined,
            broker: formValues.enquiryType === "Broker" ? "Broker" : undefined,
          }),
        }).then(async (res) => {
          if (!res.ok) throw new Error("Salesforce submission failed");
          return res;
        }),
      ];

      await Promise.all(submitPromises);

      setStatusMessage("Your message has been sent successfully!");
      formRef.current.reset();
      resetFormState();
    } catch (err) {
      console.error(err);
      setStatusMessage("Error sending message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-start w-full fix">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        className="bg-[#fff] p-6 lg:w-[80%] w-full h-full overflow-auto relative border border-[#CDCDCD]"
      >
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="xl:space-y-8 space-y-4 sm:space-y-10 w-full mt-[20px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative xl:mb-[40px]">
            <input type="hidden" name="Page_name" value={pageName} />
            <input
              type="hidden"
              name="inquiry_source"
              value={inquirySource}
              readOnly
            />
            <input
              type="hidden"
              name="enquiry_type_radio"
              value={formValues.enquiryType || "Not Selected"}
            />

            <PESelect
              name="state"
              value={formValues.stateType}
              onChange={handleChange("stateType")}
              placeholder="Select State"
              options={stateOptions}
              error={errors.stateType}
              selectClassName={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-[#000] placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                Boolean(errors.stateType),
              )}`}
            />

            <PESelect
              name="location"
              value={formValues.parkType}
              onChange={handleChange("parkType")}
              placeholder="Select Park"
              options={parkOptions}
              error={errors.parkType}
              // disabled={locationsLoading}
              selectClassName={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-[#000] placeholder-[#000] bw-r focus:outline-none ${
                locationsLoading ? "cursor-not-allowed text-[#999999]" : ""
              } ${getInputBorderClass(Boolean(errors.parkType))}`}
            />

            {formValues.parkType === OTHER_OPTION_VALUE && (
              <PEInput
                name="park_other"
                value={formValues.parkOther}
                onChange={handleChange("parkOther")}
                placeholder="Enter Other Park"
                inputClassName={`w-full border-b py-2 sm:mt-4 text-black placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                  Boolean(errors.parkOther),
                )}`}
                wrapperClassName="relative md:col-span-2"
              />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 relative xl:mb-[40px]">
            <PESelect
              name="sector"
              value={formValues.sectorType}
              onChange={handleChange("sectorType")}
              placeholder="Select Sector"
              options={SECTOR_OPTIONS}
              error={errors.sectorType}
              selectClassName={`w-full border-b py-2 bg-transparent appearance-none pr-8 text-[#000] placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                Boolean(errors.sectorType),
              )}`}
            />

            <div className="relative">
              {!formValues.date && (
                <label className="absolute top-[8px] left-[1px] block md:hidden">
                  DD-MM-YYYY
                </label>
              )}
              <input
                type="date"
                name="date"
                value={formValues.date}
                onChange={handleChange("date")}
                className={`w-full border-b py-2 text-black focus:outline-none ${getInputBorderClass(
                  Boolean(errors.date),
                )}`}
              />
              {errors.date && <p className="eqstky_error_msg">{errors.date}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[40px]">
            <PEInput
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange("name")}
              placeholder="Name*"
              error={errors.name}
              inputClassName={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                Boolean(errors.name),
              )}`}
            />

            <PEInput
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange("email")}
              placeholder="Email Address"
              error={errors.email}
              inputClassName={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                Boolean(errors.email),
              )}`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 xl:mb-[40px]">
            <PEInput
              type="text"
              name="organisation"
              value={formValues.organisation}
              onChange={handleChange("organisation")}
              placeholder="Organisation*"
              error={errors.organisation}
              inputClassName={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                Boolean(errors.organisation),
              )}`}
            />

            <PEInput
              name="space_required"
              value={formValues.space}
              onChange={handleChange("space")}
              placeholder="Space required*"
              error={errors.space}
              inputClassName={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                Boolean(errors.space),
              )}`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 ">
            <div className="relative">
              <PhoneInput
                name="phone"
                value={formValues.phone}
                onChange={(val) =>
                  handleChange("phone")({ target: { value: val } })
                }
                onPaste={(e) => {
                  e.preventDefault();
                  const pasted = e.clipboardData.getData("text");
                  const nextValue = normalizePhone(
                    `${formValues.phone}${pasted}`,
                  );
                  setFieldValue("phone", nextValue);
                  setErrors((prev) => ({
                    ...prev,
                    phone: fieldValidators.phone(nextValue),
                  }));
                }}
                placeholder="Phone No*"
                className={`w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none ${getInputBorderClass(
                  Boolean(errors.phone),
                )}`}
              />
              {errors.phone && (
                <p className="eqstky_error_msg">{errors.phone}</p>
              )}
            </div>

            <div className="lg:mb-[20px]">
              <p className="bw-r text-black mb-2">Enquiry Type</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="enquiry_type"
                    value="Broker"
                    checked={formValues.enquiryType === "Broker"}
                    onChange={(e) =>
                      setFieldValue("enquiryType", e.target.value)
                    }
                  />
                  Broker
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="enquiry_type"
                    value="Customer"
                    checked={formValues.enquiryType === "Customer"}
                    onChange={(e) =>
                      setFieldValue("enquiryType", e.target.value)
                    }
                  />
                  Customer
                </label>
              </div>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="message" className="">
              Tell Us More
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formValues.message}
              onChange={handleChange("message")}
              className={`mb-[-5px] w-full border-b py-2 text-black placeholder-[#000] bw-r focus:outline-none resize-none ${getInputBorderClass(
                Boolean(errors.message),
              )}`}
            />
            {errors.message && (
              <p className="eqstky_error_msg">{errors.message}</p>
            )}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 uppercase tracking-[0.2em] hover:bg-gray-800 transition cursor-pointer"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {statusMessage && (
              <p
                className={`mt-4 font-semibold ${
                  statusMessage.includes("success")
                    ? "text-green-600"
                    : "text-[#fff59d]"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PEForm;
