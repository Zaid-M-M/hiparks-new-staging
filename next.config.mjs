// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === "production";

// // Content-Security-Policy (moved from middleware)
// // const CSP = [
// //   "default-src 'self' https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",
// //   "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms https://connect.facebook.net https://snap.licdn.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://code.tidio.co https://api.emailjs.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.tidio.co https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",
// //   "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms https://connect.facebook.net https://snap.licdn.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://code.tidio.co https://api.emailjs.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.tidio.co https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",
// //   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",
// //   "font-src 'self' https://fonts.gstatic.com https://*.tidio.co https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",
// //   "img-src 'self' data: https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com https://www.google-analytics.com https://*.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.google.co.in https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://www.facebook.com https://*.facebook.com https://www.clarity.ms https://*.clarity.ms https://*.tidio.co https://px.ads.linkedin.com",
// //   "media-src 'self' https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com https://*.tidio.co",
// //   "frame-src https://player.vimeo.com https://vtour.yelloskye.com https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",
// //   "connect-src 'self' https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com https://script.google.com https://script.googleusercontent.com https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com https://www.google.com https://*.google.com https://*.google.co.in https://*.googleapis.com https://*.gstatic.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://vitals.vercel-insights.com https://maps.googleapis.com https://maps.gstatic.com https://code.tidio.co https://api.tidio.co https://ws.tidio.co https://*.tidio.co wss://ws.tidio.co wss://*.tidio.co https://*.clarity.ms https://www.facebook.com https://*.facebook.com https://px.ads.linkedin.com",
// //   "frame-ancestors 'self'",
// //   "upgrade-insecure-requests",
// // ].join("; ");

// const CSP = [
//   "default-src 'self' https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",

//   // ✅ Vimeo added here
//   "script-src 'self' 'unsafe-inline' https://player.vimeo.com https://f.vimeocdn.com https://*.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms https://connect.facebook.net https://snap.licdn.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://code.tidio.co https://api.emailjs.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.tidio.co https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",

//   // ✅ Vimeo added here
//   "script-src-elem 'self' 'unsafe-inline' https://player.vimeo.com https://f.vimeocdn.com https://*.vimeocdn.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms https://connect.facebook.net https://snap.licdn.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://code.tidio.co https://api.emailjs.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.tidio.co https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",

//   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",

//   "font-src 'self' https://fonts.gstatic.com https://*.tidio.co https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",

//   // ✅ Vimeo CDN for thumbnails
//   "img-src 'self' data: https://i.vimeocdn.com https://f.vimeocdn.com https://*.vimeocdn.com https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com https://www.google-analytics.com https://*.google-analytics.com https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.google.co.in https://googleads.g.doubleclick.net https://www.googleadservices.com https://connect.facebook.net https://www.facebook.com https://*.facebook.com https://www.clarity.ms https://*.clarity.ms https://*.tidio.co https://px.ads.linkedin.com",

//   // ✅ Vimeo video stream
//   "media-src 'self' https://player.vimeo.com https://*.vimeocdn.com https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com https://*.tidio.co",

//   // ✅ Google added because Vimeo iframes it internally
//   "frame-src https://player.vimeo.com https://www.google.com https://vtour.yelloskye.com https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com",

//   "connect-src 'self' https://phpstack-725513-2688800.cloudwaysapps.com https://phpstack-725513-2801524.cloudwaysapps.com https://phpstack-725513-4957654.cloudwaysapps.com https://script.google.com https://script.googleusercontent.com https://api.emailjs.com https://www.google-analytics.com https://*.google-analytics.com https://region1.google-analytics.com https://region1.analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com https://www.google.com https://*.google.com https://*.google.co.in https://*.googleapis.com https://*.gstatic.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://vitals.vercel-insights.com https://maps.googleapis.com https://maps.gstatic.com https://code.tidio.co https://api.tidio.co https://ws.tidio.co https://*.tidio.co wss://ws.tidio.co wss://*.tidio.co https://*.clarity.ms https://www.facebook.com https://*.facebook.com https://px.ads.linkedin.com",

//   "frame-ancestors 'self'",
//   "upgrade-insecure-requests",
// ].join("; ");

// const nextConfig = {
//   // experimental: {
//   //   instrumentationHook: true,
//   // },
//   // trailingSlash: true, // Crucial for PHP servers
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "phpstack-725513-2688800.cloudwaysapps.com",
//       },
//       {
//         protocol: "https",
//         hostname: "phpstack-725513-2801524.cloudwaysapps.com",
//       },
//     ],
//     maximumRedirects: 20,
//     // unoptimized: true,
//   },

//   async headers() {
//     const securityHeaders = [
//       { key: "Content-Security-Policy", value: CSP },
//       { key: "X-Frame-Options", value: "SAMEORIGIN" },
//       { key: "X-Content-Type-Options", value: "nosniff" },
//       { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
//       {
//         key: "Permissions-Policy",
//         value: "camera=(), microphone=(), geolocation=()",
//       },
//     ];

//     if (isProd) {
//       securityHeaders.push({
//         key: "Strict-Transport-Security",
//         value: "max-age=31536000; includeSubDomains",
//       });
//     }

//     return [
//       {
//         source: "/(.*)",
//         headers: securityHeaders,
//       },
//     ];
//   },

//   async redirects() {
//     return [
//       // {
//       //   source: "/parks-availability",
//       //   destination:
//       //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability",
//       //   permanent: true,
//       // },
//       // {
//       //   source: "/parks-availability-south",
//       //   destination:
//       //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability-south",
//       //   permanent: true,
//       // },
//       // {
//       //   source: "/parks-availability-west",
//       //   destination:
//       //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability-west",
//       //   permanent: true,
//       // },
//       // {
//       //   source: "/parks-availability-north",
//       //   destination:
//       //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability-north",
//       //   permanent: true,
//       // },
//       {
//         source: "/industrial-and-logistics-parks-in-india/",
//         destination: "/industrial-logistics-parks/",
//         permanent: true,
//       },
//       {
//         source: "/incity-park/",
//         destination: "/incity-centers/",
//         permanent: true,
//       },
//       {
//         source: "/incity-park",
//         destination: "/incity-centers/",
//         permanent: true,
//       },
//       {
//         source: "/parks",
//         destination: "/network-overview/",
//         permanent: true,
//       },
//       {
//         source: "/solutions/",
//         destination: "/capabilities-overview/",
//         permanent: true,
//       },
//       {
//         source: "/solutions/strategic-land-acquisition/",
//         destination: "/integrated-business-solutions/",
//         permanent: true,
//       },
//       {
//         source: "/solutions/park-compliances-and-approvals/",
//         destination: "/integrated-business-solutions/",
//         permanent: true,
//       },
//       {
//         source: "/solutions/park-construction-and-development/",
//         destination: "/integrated-business-solutions/",
//         permanent: true,
//       },
//       {
//         source: "/solutions/property-management/",
//         destination: "/integrated-business-solutions/",
//         permanent: true,
//       },
//       {
//         source: "/explore/",
//         destination: "/know-us/",
//         permanent: true,
//       },
//       {
//         source: "/reverse-logistics-india-supply-chain-strategy/",
//         destination: "/guidebook/reverse-logistics-in-india/",
//         permanent: true,
//       },

//       {
//         source: "/media/press_releases/",
//         destination: "/media/?tab=press-release",
//         permanent: true,
//       },
//       {
//         source:
//           "/press_releases/japanese-auto-parts-giant-yazaki-expands-india-footprint-joins-hands-with-blackstones-horizon-industrial-parks",
//         destination:
//           "/press-release/yazaki-india-expands-footprint-in-collaboration-with-horizon-industrial-parks/",
//         permanent: true,
//       },
//       {
//         source: "/blog/",
//         destination: "/media/?tab=blogs",
//         permanent: true,
//       },
//       {
//         source: "/blogs/",
//         destination: "/media/?tab=blogs",
//         permanent: true,
//       },
//       {
//         source: "/events/",
//         destination: "/media/?tab=events",
//         permanent: true,
//       },
//       {
//         source: "/blog/category/technology/",
//         destination: "/media/?tab=blogs",
//         permanent: true,
//       },
//       {
//         source: "/blog/category/esg/",
//         destination: "/media/?tab=blogs",
//         permanent: true,
//       },
//       {
//         source: "/blog/category/policy/",
//         destination: "/media/?tab=blogs",
//         permanent: true,
//       },

//       {
//         source: "/press_releases/:slug",
//         destination: "/press-release/:slug",
//         permanent: true,
//       },
//       {
//         source: "/privacy_policy/",
//         destination: "/privacy-policy/",
//         permanent: true,
//       },
//       {
//         source: "/gujara",
//         destination: "/gujarat/",
//         permanent: true,
//       },
//       {
//         source: "/tamil_nadu",
//         destination: "/tamil-nadu/",
//         permanent: true,
//       },
//       {
//         source:
//           "/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
//         permanent: true,
//       },
//       {
//         source: "/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
//         permanent: true,
//       },
//       {
//         source: "/ESG-Report-FY25.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/ESG-Report-FY25.pdf",
//         permanent: true,
//       },
//       {
//         source:
//           "/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
//         permanent: true,
//       },
//       {
//         source: "/lead-report/LEADS2023_REPORT.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/lead-report/LEADS2023_REPORT.pdf",
//         permanent: true,
//       },
//       {
//         source: "/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
//         permanent: true,
//       },
//       {
//         source:
//           "/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
//         permanent: true,
//       },
//       {
//         source: "/ESG-Policy-FY25.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/ESG-Policy-FY25.pdf",
//         permanent: true,
//       },
//       {
//         source:
//           "/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
//         permanent: true,
//       },
//       {
//         source:
//           "/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
//         permanent: true,
//       },
//       {
//         source:
//           "/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
//         permanent: true,
//       },
//       {
//         source: "/compliance_report/Hosur/Environment Clearance.pdf",
//         destination:
//           "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Environment Clearance.pdf",
//         permanent: true,
//       },
//       {
//         source: "/industrial-and-warehousing-park-hosur-i",
//         destination: "/industrial-and-warehousing-park-hosur/",
//         permanent: true,
//       },
//       {
//         source: "/warehousing-park-farukhnagar",
//         destination: "/warehousing-park-farukhnagar-i/",
//         permanent: true,
//       },
//       {
//         source: "/parks/farukhnagar",
//         destination: "/warehousing-park-farukhnagar-i/",
//         permanent: true,
//       },
//       {
//         source: "/industrial-and-warehousing-park-verna",
//         destination: "/incity-centers/verna/",
//         permanent: true,
//       },
//       {
//         source: "/chengalpattu",
//         destination: "/industrial-and-warehousing-park-chengalpattu/",
//         permanent: true,
//       },
//       {
//         source: "/warehousing-park-bilaspur-i",
//         destination: "/industrial-and-warehousing-park-bilaspur/",
//         permanent: true,
//       },
//       {
//         source: "/warehousing-park-bilaspur-ii",
//         destination: "/industrial-and-warehousing-park-bilaspur/",
//         permanent: true,
//       },
//       {
//         source: "/industrial-and-warehousing-park-kothur-2",
//         destination: "/industrial-and-warehousing-park-kothur/",
//         permanent: true,
//       },
//       {
//         source: "/industrial-and-warehousing-park-dobbaspet-idobbaspet-i",
//         destination: "/industrial-and-warehousing-park-dobbaspet-i/",
//         permanent: true,
//       },
//       {
//         source: "/goa/industrial-and-warehousing-park-chengalpattu",
//         destination: "/industrial-and-warehousing-park-chengalpattu/",
//         permanent: true,
//       },
//       {
//         source: "/haryana/industrial-and-warehousing-park-chengalpattu",
//         destination: "/industrial-and-warehousing-park-chengalpattu/",
//         permanent: true,
//       },
//       {
//         source: "/gujarat/industrial-and-warehousing-park-chengalpattu",
//         destination: "/industrial-and-warehousing-park-chengalpattu/",
//         permanent: true,
//       },
//       {
//         source: "/delhi/industrial-and-warehousing-park-chengalpattu",
//         destination: "/industrial-and-warehousing-park-chengalpattu/",
//         permanent: true,
//       },
//       {
//         source: "/maharashtra/industrial-and-warehousing-park-chengalpattu",
//         destination: "/industrial-and-warehousing-park-chengalpattu/",
//         permanent: true,
//       },
//       {
//         source: "/warehousing-park-narasapura",
//         destination: "/",
//         permanent: true,
//       },
//       // {
//       //   source: "/industrial-and-logistics-parks-in-india?trk=test",
//       //   destination: "/industrial-logistics-parks/",
//       //   permanent: true,
//       // },
//       {
//         source: "/malur",
//         destination: "/warehousing-park-malur/",
//         permanent: true,
//       },
//       {
//         source: "/hosur-i",
//         destination: "/industrial-and-warehousing-park-hosur/",
//         permanent: true,
//       },
//       {
//         source: "/bhayala",
//         destination: "/industrial-and-warehousing-park-bhayala/",
//         permanent: true,
//       },
//       {
//         source: "/assets/park_2.f9e4e004dbeb877cc28c.jpg",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/faq",
//         destination: "/faqs/",
//         permanent: true,
//       },
//       {
//         source: "/careers",
//         destination: "/culture/",
//         permanent: true,
//       },
//       {
//         source: "/reverse-logistics-india-supply-chain-strategy",
//         destination: "/guidebook/reverse-logistics-in-india/",
//         permanent: true,
//       },
//       {
//         source: "/index.php",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/privacy_policy",
//         destination: "/privacy-policy/",
//         permanent: true,
//       },
//       {
//         source: "/terms-and-conditions",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/assets/career_spotlight.f155edd13af063453f51.jpg",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/assets/park_const_bts.2057b326bf92e60344a2.jpg",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/assets/park_exterior.fb650a0cd5ce538c301d.webp",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/events/cricket-dhamaka",
//         destination: "/media/?tab=events",
//         permanent: true,
//       },
//       {
//         source: "/events/hiparks-cricket-dhamaka-2024",
//         destination: "/media/?tab=events",
//         permanent: true,
//       },
//       {
//         source: "/events/elsc-awards-2023",
//         destination: "/media/?tab=events",
//         permanent: true,
//       },
//       {
//         source: "/blog/where-wings-are-made",
//         destination:
//           "/blog/where-wings-are-made-a-guide-to-aerospace-warehousing/",
//         permanent: true,
//       },
//       {
//         source: "/blog/how-to-choose-a-warehouse-location",
//         destination: "/blog/how-to-find-the-right-warehouse/",
//         permanent: true,
//       },
//       {
//         source: "/blog/goa-the-new-",
//         destination:
//           "/blog/goa-the-new-economic-and-warehousing-destination-on-the-west-coast/",
//         permanent: true,
//       },

//       {
//         source: "/newsletter/tenant_newsletter/:path*",
//         destination:
//           "https://phpstack-725513-4957654.cloudwaysapps.com/newsletter/tenant_newsletter/:path*",
//         permanent: true,
//       },
//       {
//         source: "/employee_newsletter/:path*",
//         destination:
//           "https://phpstack-725513-4957654.cloudwaysapps.com/employee_newsletter/:path*",
//         permanent: true,
//       },
//       {
//         source: "/agility-campaign-sustainability-lp",
//         destination:
//           "https://phpstack-725513-4957654.cloudwaysapps.com/agility-campaign-sustainability-lp/",
//         permanent: true,
//       },
//       {
//         source: "/agility-campaign-sustainability-lp/:path*",
//         destination:
//           "https://phpstack-725513-4957654.cloudwaysapps.com/agility-campaign-sustainability-lp/:path*",
//         permanent: true,
//       },
//       {
//         source: "/white-paper/reverse-logistics-in-india",
//         destination: "/guidebook/reverse-logistics-in-india",
//         permanent: true, // 308 redirect
//       },
//       {
//         source: "/fulfillment",
//         destination: "/fulfilment-centers",
//         permanent: true,
//       },
//       {
//         source: "/factory-and-inplant-solutions",
//         destination: "/industrial-facilities",
//         permanent: true,
//       },
//       {
//         source: "/sector-specialists",
//         destination: "/sectors-specialists",
//         permanent: true,
//       },
//       {
//         source: "/automotive",
//         destination: "/automotive-&-auto-components",
//         permanent: true,
//       },
//       {
//         source: "/aerospace",
//         destination: "/engineering-&-aerospace",
//         permanent: true,
//       },
//       {
//         source: "/logistics",
//         destination: "/logistics-&-supply-chain",
//         permanent: true,
//       },
//       {
//         source: "/fmcg",
//         destination: "/fmcg-&-retail",
//         permanent: true,
//       },
//       {
//         source: "/chemical",
//         destination: "/chemicals",
//         permanent: true,
//       },

//       // Integrated Solutions
//       {
//         source: "/integrated-business-solutions",
//         destination: "/integrated-solutions-overview",
//         permanent: true,
//       },
//       {
//         source: "/value-added-services",
//         destination: "/value-added-solutions",
//         permanent: true,
//       },
//       {
//         source: "/workforce",
//         destination: "/workforce-amenities",
//         permanent: true,
//       },

//       // Sustainability
//       {
//         source: "/sustainability",
//         destination: "/sustainability-overview",
//         permanent: true,
//       },

//       // Explore Horizon
//       {
//         source: "/contact",
//         destination: "/contact-us",
//         permanent: true,
//       },

//       // Media
//       {
//         source: "/case-studies",
//         destination: "/case-studies-and-client-testimonials",
//         permanent: true,
//       },
//     ];
//   },

//   // Keep wp-content here if it's working, but REMOVE /newsletter/ from here
//   // async rewrites() {
//   //   return [
//   //     {
//   //       source: "/wp-content/:path*",
//   //       destination:
//   //         "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/:path*",
//   //     },
//   //     {
//   //       source: "/newsletter/:path*",
//   //       destination:
//   //         "https://phpstack-725513-2801524.cloudwaysapps.com/newsletter/:path*",
//   //     },
//   //     {
//   //       source: "/employee_newsletter/:path*",
//   //       destination:
//   //         "https://phpstack-725513-2801524.cloudwaysapps.com/employee_newsletter/:path*",
//   //     },
//   //     {
//   //       source: "/agility-campaign-sustainability-lp/:path*",
//   //       destination:
//   //         "https://phpstack-725513-2801524.cloudwaysapps.com/agility-campaign-sustainability-lp/:path*",
//   //     },
//   //   ];
//   // },
// };

// export default nextConfig;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const CSP = [
  "default-src 'self' " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
    "https://player.vimeo.com https://f.vimeocdn.com https://*.vimeocdn.com " +
    "https://www.googletagmanager.com https://www.google-analytics.com " +
    "https://*.google-analytics.com https://*.analytics.google.com " +
    "https://maps.googleapis.com https://maps.gstatic.com " +
    "https://*.googleapis.com https://*.gstatic.com " +
    "https://script.google.com https://script.googleusercontent.com " +
    "https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms " +
    "https://connect.facebook.net https://www.facebook.com https://*.facebook.com " +
    "https://snap.licdn.com https://www.linkedin.com https://*.linkedin.com " +
    "https://www.googleadservices.com https://googleads.g.doubleclick.net " +
    "https://code.tidio.co https://api.tidio.co https://*.tidio.co " +
    "https://api.emailjs.com https://cdn.emailjs.com " +
    "https://*.salesforce.com https://*.force.com https://*.salesforceliveagent.com " +
    "https://*.lightning.force.com https://*.visualforce.com " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "script-src-elem 'self' 'unsafe-inline' " +
    "https://player.vimeo.com https://f.vimeocdn.com https://*.vimeocdn.com " +
    "https://www.googletagmanager.com https://www.google-analytics.com " +
    "https://*.google-analytics.com https://*.analytics.google.com " +
    "https://maps.googleapis.com https://maps.gstatic.com " +
    "https://*.googleapis.com https://*.gstatic.com " +
    "https://script.google.com https://script.googleusercontent.com " +
    "https://www.clarity.ms https://*.clarity.ms https://scripts.clarity.ms " +
    "https://connect.facebook.net https://www.facebook.com https://*.facebook.com " +
    "https://snap.licdn.com https://www.linkedin.com https://*.linkedin.com " +
    "https://www.googleadservices.com https://googleads.g.doubleclick.net " +
    "https://code.tidio.co https://api.tidio.co https://*.tidio.co " +
    "https://api.emailjs.com https://cdn.emailjs.com " +
    "https://*.salesforce.com https://*.force.com https://*.salesforceliveagent.com " +
    "https://*.lightning.force.com https://*.visualforce.com " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "style-src 'self' 'unsafe-inline' " +
    "https://fonts.googleapis.com https://*.googleapis.com " +
    "https://*.tidio.co " +
    "https://*.salesforce.com https://*.force.com https://*.lightning.force.com " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "font-src 'self' data: " +
    "https://fonts.gstatic.com https://*.gstatic.com " +
    "https://*.tidio.co " +
    "https://*.salesforce.com https://*.force.com " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "img-src 'self' data: blob: " +
    "https://i.vimeocdn.com https://f.vimeocdn.com https://*.vimeocdn.com " +
    "https://maps.googleapis.com https://maps.gstatic.com " +
    "https://*.googleapis.com https://*.gstatic.com " +
    "https://*.google.com https://*.google.co.in " +
    "https://www.google-analytics.com https://*.google-analytics.com " +
    "https://googleads.g.doubleclick.net https://www.googleadservices.com " +
    "https://connect.facebook.net https://www.facebook.com https://*.facebook.com " +
    "https://px.ads.linkedin.com https://*.linkedin.com " +
    "https://www.clarity.ms https://*.clarity.ms " +
    "https://*.tidio.co " +
    "https://*.salesforce.com https://*.force.com https://*.content.force.com " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "media-src 'self' blob: " +
    "https://player.vimeo.com https://*.vimeocdn.com https://*.vimeo.com " +
    "https://*.tidio.co " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "frame-src " +
    "https://player.vimeo.com https://*.vimeo.com " +
    "https://www.google.com https://*.google.com https://*.google.co.in " +
    "https://vtour.yelloskye.com " +
    "https://www.facebook.com https://*.facebook.com " +
    "https://www.linkedin.com https://*.linkedin.com " +
    "https://googleads.g.doubleclick.net " +
    "https://*.salesforce.com https://*.force.com " +
    "https://*.lightning.force.com https://*.visualforce.com " +
    "https://*.salesforceliveagent.com " +
    "https://*.tidio.co " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com",

  "connect-src 'self' " +
    "https://phpstack-725513-2688800.cloudwaysapps.com " +
    "https://phpstack-725513-2801524.cloudwaysapps.com " +
    "https://phpstack-725513-4957654.cloudwaysapps.com " +
    "https://script.google.com https://script.googleusercontent.com " +
    "https://sheets.googleapis.com " +
    "https://api.emailjs.com https://cdn.emailjs.com " +
    "https://www.google-analytics.com https://*.google-analytics.com " +
    "https://region1.google-analytics.com https://region1.analytics.google.com " +
    "https://*.analytics.google.com https://www.googletagmanager.com " +
    "https://www.google.com https://*.google.com https://*.google.co.in " +
    "https://*.googleapis.com https://*.gstatic.com " +
    "https://www.googleadservices.com https://googleads.g.doubleclick.net " +
    "https://maps.googleapis.com https://maps.gstatic.com " +
    "https://vitals.vercel-insights.com " +
    "https://code.tidio.co https://api.tidio.co https://ws.tidio.co https://*.tidio.co " +
    "wss://ws.tidio.co wss://*.tidio.co " +
    "https://*.clarity.ms " +
    "https://www.facebook.com https://*.facebook.com " +
    "https://px.ads.linkedin.com https://*.linkedin.com " +
    "https://vimeo.com https://*.vimeo.com https://*.vimeocdn.com " +
    "https://*.salesforce.com https://*.force.com " +
    "https://*.salesforceliveagent.com " +
    "wss://*.salesforce.com wss://*.salesforceliveagent.com",

  "worker-src 'self' blob:",

  "frame-ancestors 'self'",

  "upgrade-insecure-requests",
].join("; ");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phpstack-725513-2688800.cloudwaysapps.com",
      },
      {
        protocol: "https",
        hostname: "phpstack-725513-2801524.cloudwaysapps.com",
      },
    ],
    maximumRedirects: 20,
  },

  async headers() {
    const securityHeaders = [
      // ---------------------------------------------------------------
      // 🧪 STEP 1 — Deploy this first and test your whole site
      //    Open browser devtools > Console on every important page
      //    Look for any "CSP violation" warnings and tell me what they say
      //    Nothing will break — violations are only logged, never blocked
      //
      // 🚀 STEP 2 — Once confirmed working, swap these two lines:
      //    Remove:    Content-Security-Policy-Report-Only
      //    Uncomment: Content-Security-Policy
      // ---------------------------------------------------------------
      { key: "Content-Security-Policy-Report-Only", value: CSP },
      // { key: "Content-Security-Policy", value: CSP },  // ← uncomment when ready to go live

      // 🔒 Prevents your site being embedded in iframes on other sites (clickjacking)
      { key: "X-Frame-Options", value: "SAMEORIGIN" },

      // 🔒 Stops browsers guessing file types (MIME sniffing attacks)
      { key: "X-Content-Type-Options", value: "nosniff" },

      // 🔒 Controls how much referrer info is sent when clicking links
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

      // 🔒 Disables browser features you don't use
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },

      // 🔒 Stops cross-origin pages from accessing your window object
      { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },

      // 🔒 Allows CDN/external resources to load while blocking hotlinking abuse
      { key: "Cross-Origin-Resource-Policy", value: "cross-origin" },

      // 🔒 Blocks Flash and PDF cross-domain requests (legacy but still good to have)
      { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
    ];

    if (isProd) {
      securityHeaders.push({
        // 🔒 Forces HTTPS for 2 years — only active in production
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      });
    }

    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      // {
      //   source: "/parks-availability",
      //   destination:
      //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability",
      //   permanent: true,
      // },
      // {
      //   source: "/parks-availability-south",
      //   destination:
      //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability-south",
      //   permanent: true,
      // },
      // {
      //   source: "/parks-availability-west",
      //   destination:
      //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability-west",
      //   permanent: true,
      // },
      // {
      //   source: "/parks-availability-north",
      //   destination:
      //     "https://phpstack-725513-4957654.cloudwaysapps.com/parks-availability-north",
      //   permanent: true,
      // },
      {
        source: "/industrial-and-logistics-parks-in-india/",
        destination: "/industrial-logistics-parks/",
        permanent: true,
      },
      {
        source: "/incity-park/",
        destination: "/incity-centers/",
        permanent: true,
      },
      {
        source: "/incity-park",
        destination: "/incity-centers/",
        permanent: true,
      },
      {
        source: "/parks",
        destination: "/network-overview/",
        permanent: true,
      },
      {
        source: "/solutions/",
        destination: "/capabilities-overview/",
        permanent: true,
      },
      {
        source: "/solutions/strategic-land-acquisition/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/solutions/park-compliances-and-approvals/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/solutions/park-construction-and-development/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/solutions/property-management/",
        destination: "/integrated-business-solutions/",
        permanent: true,
      },
      {
        source: "/explore/",
        destination: "/know-us/",
        permanent: true,
      },
      {
        source: "/reverse-logistics-india-supply-chain-strategy/",
        destination: "/guidebook/reverse-logistics-in-india/",
        permanent: true,
      },

      {
        source: "/media/press_releases/",
        destination: "/media/?tab=press-release",
        permanent: true,
      },
      {
        source:
          "/press_releases/japanese-auto-parts-giant-yazaki-expands-india-footprint-joins-hands-with-blackstones-horizon-industrial-parks",
        destination:
          "/press-release/yazaki-india-expands-footprint-in-collaboration-with-horizon-industrial-parks/",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/blogs/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/events/",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/blog/category/technology/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/blog/category/esg/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },
      {
        source: "/blog/category/policy/",
        destination: "/media/?tab=blogs",
        permanent: true,
      },

      {
        source: "/press_releases/:slug",
        destination: "/press-release/:slug",
        permanent: true,
      },
      {
        source: "/privacy_policy/",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/gujara",
        destination: "/gujarat/",
        permanent: true,
      },
      {
        source: "/tamil_nadu",
        destination: "/tamil-nadu/",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_21.pdf",
        permanent: true,
      },
      {
        source: "/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_21.pdf",
        permanent: true,
      },
      {
        source: "/ESG-Report-FY25.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/ESG-Report-FY25.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2021.pdf",
        permanent: true,
      },
      {
        source: "/lead-report/LEADS2023_REPORT.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/lead-report/LEADS2023_REPORT.pdf",
        permanent: true,
      },
      {
        source: "/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Six_Monthly_Compliance_June_22.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2022.pdf",
        permanent: true,
      },
      {
        source: "/ESG-Policy-FY25.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/ESG-Policy-FY25.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_June_2021.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Farukhnagar/Six_Monthly_Compliance_June_22.pdf",
        permanent: true,
      },
      {
        source:
          "/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Bilaspur/Six_Monthly_Compliance_Dec_2020.pdf",
        permanent: true,
      },
      {
        source: "/compliance_report/Hosur/Environment Clearance.pdf",
        destination:
          "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2025/12/compliance_report/Hosur/Environment Clearance.pdf",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-hosur-i",
        destination: "/industrial-and-warehousing-park-hosur/",
        permanent: true,
      },
      {
        source: "/warehousing-park-farukhnagar",
        destination: "/warehousing-park-farukhnagar-i/",
        permanent: true,
      },
      {
        source: "/parks/farukhnagar",
        destination: "/warehousing-park-farukhnagar-i/",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-verna",
        destination: "/incity-centers/verna/",
        permanent: true,
      },
      {
        source: "/chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/warehousing-park-bilaspur-i",
        destination: "/industrial-and-warehousing-park-bilaspur/",
        permanent: true,
      },
      {
        source: "/warehousing-park-bilaspur-ii",
        destination: "/industrial-and-warehousing-park-bilaspur/",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-kothur-2",
        destination: "/industrial-and-warehousing-park-kothur/",
        permanent: true,
      },
      {
        source: "/industrial-and-warehousing-park-dobbaspet-idobbaspet-i",
        destination: "/industrial-and-warehousing-park-dobbaspet-i/",
        permanent: true,
      },
      {
        source: "/goa/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/haryana/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/gujarat/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/delhi/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/maharashtra/industrial-and-warehousing-park-chengalpattu",
        destination: "/industrial-and-warehousing-park-chengalpattu/",
        permanent: true,
      },
      {
        source: "/warehousing-park-narasapura",
        destination: "/",
        permanent: true,
      },
      // {
      //   source: "/industrial-and-logistics-parks-in-india?trk=test",
      //   destination: "/industrial-logistics-parks/",
      //   permanent: true,
      // },
      {
        source: "/malur",
        destination: "/warehousing-park-malur/",
        permanent: true,
      },
      {
        source: "/hosur-i",
        destination: "/industrial-and-warehousing-park-hosur/",
        permanent: true,
      },
      {
        source: "/bhayala",
        destination: "/industrial-and-warehousing-park-bhayala/",
        permanent: true,
      },
      {
        source: "/assets/park_2.f9e4e004dbeb877cc28c.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/faqs/",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/culture/",
        permanent: true,
      },
      {
        source: "/reverse-logistics-india-supply-chain-strategy",
        destination: "/guidebook/reverse-logistics-in-india/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy_policy",
        destination: "/privacy-policy/",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/career_spotlight.f155edd13af063453f51.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/park_const_bts.2057b326bf92e60344a2.jpg",
        destination: "/",
        permanent: true,
      },
      {
        source: "/assets/park_exterior.fb650a0cd5ce538c301d.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/events/cricket-dhamaka",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/events/hiparks-cricket-dhamaka-2024",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/events/elsc-awards-2023",
        destination: "/media/?tab=events",
        permanent: true,
      },
      {
        source: "/blog/where-wings-are-made",
        destination:
          "/blog/where-wings-are-made-a-guide-to-aerospace-warehousing/",
        permanent: true,
      },
      {
        source: "/blog/how-to-choose-a-warehouse-location",
        destination: "/blog/how-to-find-the-right-warehouse/",
        permanent: true,
      },
      {
        source:
          "/blog/cloud-kitchens-in-india-infrastructure-is-the-new-secret-sauce",
        destination:
          "/blog/how-are-cloud-kitchens-transforming-urban-warehousing-and-last-mile-logistics-in-india/",
        permanent: true,
      },
      {
        source:
          "/blog/what-union-budget-2026-27-means-for-indias-logistics-and-warehousing-sector",
        destination:
          "/blog/what-union-budget-2026-27-means-for-indias-logistics-and-warehousing-economy/",
        permanent: true,
      },
      {
        source: "/blog/goa-the-new-",
        destination:
          "/blog/goa-the-new-economic-and-warehousing-destination-on-the-west-coast/",
        permanent: true,
      },

      {
        source: "/newsletter/tenant_newsletter/:path*",
        destination:
          "https://phpstack-725513-4957654.cloudwaysapps.com/newsletter/tenant_newsletter/:path*",
        permanent: true,
      },
      {
        source: "/employee_newsletter/:path*",
        destination:
          "https://phpstack-725513-4957654.cloudwaysapps.com/employee_newsletter/:path*",
        permanent: true,
      },
      {
        source: "/agility-campaign-sustainability-lp",
        destination:
          "https://phpstack-725513-4957654.cloudwaysapps.com/agility-campaign-sustainability-lp/",
        permanent: true,
      },
      {
        source: "/agility-campaign-sustainability-lp/:path*",
        destination:
          "https://phpstack-725513-4957654.cloudwaysapps.com/agility-campaign-sustainability-lp/:path*",
        permanent: true,
      },
      {
        source: "/white-paper/reverse-logistics-in-india",
        destination: "/guidebook/reverse-logistics-in-india",
        permanent: true, // 308 redirect
      },
      {
        source: "/fulfillment",
        destination: "/fulfilment-centers",
        permanent: true,
      },
      {
        source: "/factory-and-inplant-solutions",
        destination: "/industrial-facilities",
        permanent: true,
      },
      {
        source: "/sector-specialists",
        destination: "/sectors-specialists",
        permanent: true,
      },
      {
        source: "/automotive",
        destination: "/automotive-&-auto-components",
        permanent: true,
      },
      {
        source: "/aerospace",
        destination: "/engineering-&-aerospace",
        permanent: true,
      },
      {
        source: "/logistics",
        destination: "/logistics-&-supply-chain",
        permanent: true,
      },
      {
        source: "/fmcg",
        destination: "/fmcg-&-retail",
        permanent: true,
      },
      {
        source: "/chemical",
        destination: "/chemicals",
        permanent: true,
      },

      // Integrated Solutions
      {
        source: "/integrated-business-solutions",
        destination: "/integrated-solutions-overview",
        permanent: true,
      },
      {
        source: "/value-added-services",
        destination: "/value-added-solutions",
        permanent: true,
      },
      {
        source: "/workforce",
        destination: "/workforce-amenities",
        permanent: true,
      },

      // Sustainability
      {
        source: "/sustainability",
        destination: "/sustainability-overview",
        permanent: true,
      },

      // Explore Horizon
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },

      // Media
      {
        source: "/case-studies",
        destination: "/case-studies-and-client-testimonials",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
