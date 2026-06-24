// Sections: III. Site Selection and Location Strategy + IV. ESG and Sustainability

const sections3 = [
  {
    h2above: "III. Site Selection and Location Strategy",
    paddingTop: "lg:pt-[80px] pt-[40px] pb-5",
    para: /*html*/ `
      <p>The success of a Grade A warehouse begins well before design and construction. Site selection plays a decisive role in determining long-term operational efficiency, cost competitiveness, and scalability. Modern warehousing strategy prioritises proximity to consumption centres, manufacturing clusters, and multimodal transport infrastructure such as highways, railheads, ports, and airports. Locations aligned with national freight corridors, industrial corridors, and designated logistics hubs offer inherent advantages in terms of connectivity and future infrastructure upgrades.</p>
      <p class="mt-5">In addition to macro connectivity, micro-level access is critical. Grade A industrial parks must provide direct access from wide arterial roads capable of handling heavy truck traffic without bottlenecks. Adequate setback from public roads, queueing space within the site, and zoning compatibility are essential to avoid regulatory or operational constraints over the asset lifecycle. Flood risk, soil bearing capacity, and availability of utilities such as power, water, and data connectivity must be assessed rigorously at the due diligence stage.</p>
    `,
  },
  {
    // GRADE A WAREHOUSE SITE SELECTION STRATEGY — complex icon table, render as image
    _type: "site-selection-table",
    paddingTop: "lg:pt-[40px] pt-[20px]",
  },
  {
    h2above: "IV. ESG and Sustainability: From Compliance to Value Creation",
    paddingTop: "lg:pt-[80px] pt-[40px] pb-5",
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4">1. ESG as a Strategic Imperative</h3>
      <p>Environmental, Social, and Governance (ESG) considerations have transitioned from peripheral concerns to central decision-making criteria for warehouse developers, occupiers, and investors. In warehousing, ESG performance is increasingly viewed as a proxy for asset quality, risk management, and long-term value creation.</p>
      <p class="my-5">The WAI e-Handbook emphasises sustainability through references to energy efficiency, environmental management systems, and alignment with frameworks such as ISO 14001, ISO 50001, IGBC, and LEED. Grade A warehouses operationalise these principles at scale.</p>
    `,
  },
  {
    // ISO / certification logos row — from Figma 4 boxes with cert logos
    _type: "esg-cert-logos",
    paddingTop: "lg:pt-[20px] pt-[10px]",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pt-[20px] pb-3 lg:pt-[40px]">2. Environmental Stewardship in Grade A Warehousing</h3>
    `,
    paddingTop: "pt-0",
  },
  {
    // 2x2 photo grid — Environmental stewardship (reuse modenwp images as placeholders)
    _type: "photo-grid-2x2",
    photos: [
      {
        src: "/white_paper/grade-a/environment1.webp",
        caption: "Horizon Industrial Park - Farukhnagar I",
      },
      {
        src: "/white_paper/grade-a/environment2.webp",
        caption: "Horizon Industrial Park - Patancheru",
      },
      {
        src: "/white_paper/grade-a/environment3.webp",
        caption: "Horizon Industrial Park - Kothur",
      },
      {
        src: "/white_paper/grade-a/environment4.webp",
        caption: "Horizon Industrial Park - Chakan II",
      },
    ],
    paddingTop: "pt-0",
  },
  {
    para: /*html*/ `
      <p>Energy efficiency is a cornerstone of sustainable logistics parks. Grade A facilities deploy LED lighting, daylight integration, high-SRI roofing, and energy-efficient equipment to minimise consumption. Rooftop solar installations have become standard in institutional logistics parks, enabling partial energy self-sufficiency and reducing carbon footprints.</p>
      <p class="mt-5">Water stewardship is equally critical. Rainwater harvesting, low-flow fixtures, and on-site sewage treatment plants reduce dependence on municipal supply and ensure regulatory compliance. Treated water reuse for landscaping and flushing significantly lowers freshwater demand.</p>
      <p class="mt-5">Waste management practices, including segregation, recycling, and reduction of packaging waste, further enhance environmental performance. These measures align with both regulatory expectations and corporate sustainability commitments.</p>
    `,
    paddingTop: "lg:pt-[20px] pt-[10px]",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pt-[20px] pb-3 lg:pt-[40px]">3. Social Responsibility and Workforce Wellbeing</h3>
    `,
    paddingTop: "pt-0",
  },
  {
    // 2x2 photo grid — Social / workforce (reuse bts images as placeholders)
    _type: "photo-grid-2x2",
    photos: [
      {
        src: "/white_paper/grade-a/social1.jpg",
        caption: "Horizon Industrial Park - Chakan II",
      },
      {
        src: "/white_paper/grade-a/social2.jpg",
        caption: "Horizon Industrial Park - Hosur",
      },
      {
        src: "/white_paper/grade-a/social3.jpg",
        caption: "Horizon Industrial Park - Farukhnagar I",
      },
      {
        src: "/white_paper/grade-a/social4.jpg",
        caption: "Horizon Industrial Park - Kothur",
      },
    ],
    paddingTop: "pt-0",
  },
  {
    para: /*html*/ `
      <p class="pt-4 md:pt-0">Warehousing is labour-intensive, and social factors play a decisive role in operational outcomes. Grade A facilities prioritise occupational safety, ergonomic design, adequate lighting, ventilation, and welfare amenities. Clear signage, defined pedestrian pathways, and safety training reduce accident rates and improve workforce morale.</p>
      <p class="mt-5">By creating cleaner, safer, and more comfortable working environments, Grade A warehouses enhance labour retention and productivity — an increasingly important consideration amid tightening labour markets.</p>
    `,
    paddingTop: "lg:pt-[20px] pt-[10px]",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pt-[20px] pb-3 lg:pt-[40px]">4. Governance, Transparency, and Reporting</h3>
      <p>Institutional-grade warehousing assets are typically governed by structured policies, audits, and performance monitoring systems. Compliance with national standards, regular safety audits, and transparent reporting frameworks reduce governance risk.</p>
      <p class="mt-5">For investors, strong ESG governance improves asset liquidity, lowers capital costs, and aligns portfolios with global investment mandates. For occupiers, it supports brand reputation and regulatory confidence.</p>
    `,
    paddingTop: "pt-0",
    paddingBottom: "",
  },
];

export default sections3;
