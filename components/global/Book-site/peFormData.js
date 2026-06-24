export const SECTOR_OPTIONS = [
  "3PL",
  "Automobile",
  "Automotive Ancillary",
  "Construction Materials",
  "Consumer Durable",
  "E-Commerce",
  "Electronics",
  "Engineering",
  "FMCD",
  "FMCG",
  "IT",
  "Pharma",
  "Renewable Energy",
  "Others",
];

export const PARK_TEMPLATE_MAP = {
  "Farukhnagar-I": "template_8xqcdvi",
  "Farukhnagar-II": "template_8xqcdvi",
  Bilaspur: "template_8xqcdvi",
  Koka: "template_8xqcdvi",
  Luhari: "template_8xqcdvi",
  Bhayala: "template_r9mkbyb",
  "Chakan-V": "template_r9mkbyb",
  "Chakan-II": "template_r9mkbyb",
  Talegaon: "template_r9mkbyb",
  Bhiwandi: "template_r9mkbyb",
  Nashik: "template_r9mkbyb",
  "XSIO Park One": "template_r9mkbyb",
  "XSIO Park Two": "template_r9mkbyb",
  "XSIO Park Three": "template_r9mkbyb",
  "XSIO Park One North": "template_r9mkbyb",
  Kothur: "template_a6m74s3",
  Patancheru: "template_a6m74s3",
  "Dobbaspet-I": "template_a6m74s3",
  "Dobbaspet-II": "template_a6m74s3",
  Malur: "template_a6m74s3",
  Hoskote: "template_a6m74s3",
  Hosur: "template_a6m74s3",
  Chengalpattu: "template_a6m74s3",
  "Redhills-I": "template_a6m74s3",
  Mappedu: "template_a6m74s3",
  MWC: "template_a6m74s3",
  Oragadam: "template_a6m74s3",
  "Oragadam-II": "template_a6m74s3",
};

export const DEFAULT_TEMPLATE_ID = "template_r9mkbyb";

const FIELD_ERROR_KEYS = [
  "date",
  "name",
  "phone",
  "organisation",
  "email",
  "message",
  "stateType",
  "stateOther",
  "parkType",
  "parkOther",
  "sectorType",
  "space",
];

export const getEmptyErrors = () =>
  Object.fromEntries(FIELD_ERROR_KEYS.map((key) => [key, ""]));

export const getInitialFormValues = () => ({
  date: "",
  name: "",
  phone: "",
  organisation: "",
  email: "",
  message: "",
  stateType: "",
  stateOther: "",
  parkType: "",
  parkOther: "",
  sectorType: "",
  space: "",
  enquiryType: "",
});

export const getInputBorderClass = (hasError) =>
  hasError ? "border-[#fb2c36] error_line" : "border-[#CDCDCD] ";
