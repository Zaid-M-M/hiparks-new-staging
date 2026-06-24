// import {
//   getAccessToken,
//   findAccount,
//   createAccount,
//   createLead,
// } from "@/src/lib/salesforce";

// export async function POST(req) {
//   console.log("SF API ▶ Request received");

//   try {
//     const {
//       tenantName,
//       firstName,
//       leadName,
//       requirement,
//       description,
//       region,
//       phone,
//       email,
//       visitDate,
//       selectLocation,
//       selectSector,
//       inquirySource,
//       enquiryType,
//       customer,
//       broker,
//     } = await req.json();

//     console.log("SF API ▶ Payload:", {
//       tenantName,
//       firstName,
//       leadName,
//       requirement,
//       region,
//     });

//     /* STEP 1: OAuth */
//     const token = await getAccessToken();
//     console.log("SF API ▶ OAuth token received");

//     /* STEP 2: Account lookup */
//     let accountId = await findAccount(token, tenantName);
//     console.log("SF API ▶ Account lookup result:", accountId);

//     /* STEP 3: Account create (if needed) */
//     if (!accountId) {
//       accountId = await createAccount(token, tenantName);
//       console.log("SF API ▶ Account CREATED:", accountId);
//     } else {
//       console.log("SF API ▶ Account EXISTS, skipping creation");
//     }

//     /* STEP 4: Lead__c create */
//     const leadPayload = {
//       Name: leadName,
//       First_Name__c: firstName,
//       Tenant_New__c: accountId,
//       Lead_Type__c: "Direct",
//       Type__c: "Manufacturing",
//       Mobile__c: phone,
//       Email__c: email,
//     };

//     // Add optional fields if they exist
//     if (requirement) leadPayload.Requirement_mm_sft__c = requirement;
//     if (description) leadPayload.Tell_Us_More__c = description;
//     if (region) leadPayload.Park_Location__c = region;
//     if (visitDate) leadPayload.Visit_Date__c = visitDate;
//     if (selectLocation) leadPayload.Select_Location__c = selectLocation;
//     if (selectSector) leadPayload.Select_Sector__c = selectSector;
//     if (inquirySource) leadPayload.Inquiry_Source__c = inquirySource;
//     if (enquiryType === "Leasing") leadPayload.Leasing__c = true;
//     if (enquiryType === "Land & Warehouse Investments")
//       leadPayload.Land_and_Warehousing__c = true;
//     if (customer === "Customer") leadPayload.Customer__c = true;
//     if (broker === "Broker") leadPayload.Broker__c = true;

//     const lead = await createLead(token, leadPayload);

//     console.log("SF API ▶ LEAD CREATED SUCCESSFULLY:", lead.id);

//     return Response.json({
//       success: true,
//       leadId: lead.id,
//       accountId,
//       message: "Lead successfully created in Salesforce",
//     });
//   } catch (err) {
//     console.error("SF API ❌ ERROR:", err);
//     return new Response(err.message || "Salesforce API error", {
//       status: 500,
//     });
//   }
// }

import { NextResponse } from "next/server";
import {
  getAccessToken,
  findAccount,
  createAccount,
  createLead,
} from "@/src/lib/salesforce";

// CORS (inlined, no extra module)
const allowedOrigins = [
  "https://www.hiparks.com",
  "https://hiparks.com",
  "https://admin.hiparks.com",
];

if (process.env.NODE_ENV === "development") {
  allowedOrigins.push("http://localhost:3000");
}

function getCorsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-rsc, rsc",
    "Access-Control-Max-Age": "86400",
  };

  if (allowedOrigins.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
    headers["Access-Control-Allow-Credentials"] = "true";
  }

  return headers;
}

function corsPreflight(request) {
  const origin = request.headers.get("origin") ?? "";
  return NextResponse.json({}, { headers: getCorsHeaders(origin) });
}

function applyCors(request, response) {
  const origin = request.headers.get("origin") ?? "";
  const headers = getCorsHeaders(origin);

  Object.entries(headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export function OPTIONS(request) {
  return corsPreflight(request);
}

export async function POST(request) {
  console.log("SF API ▶ Request received");

  try {
    const allowedFormTypes = new Set([
      "Connect With Us",
      "Book A Site Visit",
      "Conversation Form",
      "Phone Inquiry Form",
      "Fulfilment Centre Campaign",
    ]);

    const {
      tenantName,
      // firstName,
      leadName,
      requirement,
      description,
      region,
      phone,
      email,
      visitDate,
      selectState,
      selectLocation,
      selectSector,
      inquirySource,
      enquiryType,
      customer,
      broker,
      parkOther,
      State__c,
      Other_Park__c,
      Form_Type__c,
    } = await request.json();

    console.log("SF API ▶ Payload:", {
      tenantName,
      // firstName,
      leadName,
      requirement,
      region,
      selectLocation,
    });

    /* STEP 1: OAuth */
    const token = await getAccessToken();
    console.log("SF API ▶ OAuth token received");

    /* STEP 2: Account lookup */
    let accountId = await findAccount(token, tenantName);
    console.log("SF API ▶ Account lookup result:", accountId);

    /* STEP 3: Account create (if needed) */
    if (!accountId) {
      accountId = await createAccount(token, tenantName);
      console.log("SF API ▶ Account CREATED:", accountId);
    } else {
      console.log("SF API ▶ Account EXISTS, skipping creation");
    }

    /* STEP 4: Lead__c create */
    const leadPayload = {
      Name: leadName,
      // First_Name__c: firstName,
      Tenant_New__c: accountId,
      Lead_Type__c: "Direct",
      Type__c: "Manufacturing",
      Mobile__c: phone,
      Email__c: email,
    };

    // Add optional fields if they exist
    if (requirement) leadPayload.Requirement_mm_sft__c = requirement;
    if (description) leadPayload.Tell_Us_More__c = description;
    if (region) leadPayload.Park_Location__c = region;
    if (visitDate) leadPayload.Visit_Date__c = visitDate;
    if (selectLocation) leadPayload.Select_Location__c = selectLocation;
    if (State__c || selectState) leadPayload.State__c = State__c || selectState;
    if (Other_Park__c || parkOther)
      leadPayload.Other_Park__c = Other_Park__c || parkOther;
    if (Form_Type__c && allowedFormTypes.has(Form_Type__c))
      leadPayload.Form_Type__c = Form_Type__c;
    if (selectSector) leadPayload.Select_Sector__c = selectSector;
    if (inquirySource) leadPayload.Inquiry_Source__c = inquirySource;
    if (enquiryType === "Leasing") leadPayload.Leasing__c = true;
    if (enquiryType === "Land & Warehouse Investments")
      leadPayload.Land_and_Warehousing__c = true;
    if (customer === "Customer") leadPayload.Customer__c = true;
    if (broker === "Broker") leadPayload.Broker__c = true;

    const lead = await createLead(token, leadPayload);

    console.log("SF API ▶ LEAD CREATED SUCCESSFULLY:", lead.id);

    return applyCors(
      request,
      NextResponse.json({
        success: true,
        leadId: lead.id,
        accountId,
        message: "Lead successfully created in Salesforce",
      }),
    );
  } catch (err) {
    console.error("SF API ❌ ERROR:", err);
    return applyCors(
      request,
      NextResponse.json(
        { error: err.message || "Salesforce API error" },
        { status: 500 },
      ),
    );
  }
}
