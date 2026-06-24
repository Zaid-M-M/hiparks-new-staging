// Sections: II. Regulatory, Compliance and Risk Management Framework

const sections2 = [
  {
    h2above: "II. Regulatory, Compliance and Risk Management Framework",
    paddingTop: "lg:pt-[80px] pt-[40px] pb-4",
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb pb-2 mb-4">1. Regulatory Context for Warehousing in India</h3>
      <p>Warehousing infrastructure in India operates within a complex regulatory environment that spans central legislation, state-level regulations, municipal approvals, and sector-specific compliance requirements. While warehousing is not governed by a single omnibus law, Grade A industrial parks are expected to demonstrate high levels of compliance, including the National Building Code (NBC), Bureau of Indian Standards (BIS), fire safety regulations, labour laws, and environmental norms.</p>
      <p class="mt-5">Grade A warehousing differentiates itself not merely by meeting minimum statutory requirements, but by embedding compliance into design and operations from inception. This proactive approach significantly reduces regulatory risk, project delays, and operational disruptions over the asset lifecycle.</p>
    `,
  },
  {
    // Grade A COMPLIANT vs GRADE B/C NON-COMPLIANT WAREHOUSES table
    _type: "compliance-table",
    title: "GRADE A COMPLIANT vs. GRADE B/C NON-COMPLIANT WAREHOUSES",
    col1Header: "GRADE A COMPLIANT",
    col2Header: "GRADE B/C NON-COMPLIANT",
    rows: [
      {
        category: "DESIGN & CONSTRUCTION",
        categoryColor: "bg-[#f47920]",
        col1: "BUILT FOR PERFORMANCE FROM INCEPTION",
        col2: "NARROW FOCUS ON COST MINIMIZATION",
      },
      {
        category: "RISK & COMPLIANCE",
        categoryColor: "bg-[#8f53a1]",
        col1: "REDUCED REGULATORY RISK & DISRUPTIONS",
        col2: "ELEVATED BUSINESS INTERRUPTION RISK & PENALTIES",
      },
      {
        category: "OPERATIONAL EFFICIENCY",
        categoryColor: "bg-[#0db14b]",
        col1: "SUPERIOR FLOORING, OPTIMIZED LAYOUT, HIGH THROUGHPUT",
        col2: "LIMITED HEIGHT, MANUAL OPERATIONS, LOWER THROUGHPUT",
      },
      {
        category: "LONG-TERM VALUE",
        categoryColor: "bg-[#939598]",
        col1: "SUSTAINED VALUATION PREMIUMS, STRONG TENANT RETENTION",
        col2: "ACCELERATED OBSOLESCENCE, VALUE EROSION",
      },
    ],
    col1Icons: [
      "/white_paper/grade-a/compt/built.svg",
      "/white_paper/grade-a/compt/reduced.svg",
      "/white_paper/grade-a/compt/superior.svg",
      "/white_paper/grade-a/compt/sustain.svg",
    ],
    col2Icons: [
      "/white_paper/grade-a/compt/narow.svg",
      "/white_paper/grade-a/compt/elevate.svg",
      "/white_paper/grade-a/compt/lim.svg",
      "/white_paper/grade-a/compt/acc.svg",
    ],
    paddingTop: "lg:pt-[40px] pt-[20px]",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pb-2 pt-[20px] lg:pt-[40px]">2. National Building Code and Structural Compliance</h3>
      <p>The National Building Code of India (NBC 2016) classifies warehouses under Group H (Storage and Warehousing Occupancy). Compliance with NBC provisions is fundamental to ensuring structural safety, fire protection, lighting, ventilation, and life safety. Grade A industrial parks and warehouses are designed in alignment with NBC requirements including structural design, fire and life safety, and building services.</p>
      <p class="mt-5">Adherence to NBC standards ensures that warehouse can withstand operational loads, environmental stresses, and emergency scenarios. From an investor and insurer perspective, NBC compliance provides assurance regarding asset resilience and long-term viability.</p>
    `,
    paddingTop: "pt-0",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pb-2 pt-[20px] lg:pt-[40px]">3. Fire Safety, Insurance and Business Interruption Risk</h3>
    `,
    paddingTop: "pt-0",
  },
  {
    // Insurance Benefits & Risks table
    _type: "compliance-table",
    title:
      "GRADE A COMPLIANT WAREHOUSE VS. NON-COMPLIANT WAREHOUSE: INSURANCE BENEFITS & RISKS",
    col1Header: "GRADE A COMPLIANT WAREHOUSE",
    col2Header: "NON-COMPLIANT WAREHOUSE",
    rows: [
      {
        category: "INSURANCE COSTS",
        categoryColor: "bg-[#f47920]",
        col1: "LOWER INSURANCE COSTS",
        col2: "HIGHER PREMIUMS",
      },
      {
        category: "COVERAGE & CLAIMS",
        categoryColor: "bg-[#8f53a1]",
        col1: "FEWER EXCLUSIONS & FAST CLAIMS",
        col2: "COVERAGE EXCLUSIONS, SLOW OR DENIED CLAIMS",
      },
      {
        category: "BUSINESS RISK",
        categoryColor: "bg-[#0db14b]",
        col1: "REDUCED BUSINESS INTERRUPTION",
        col2: "ELEVATED BUSINESS INTERRUPTION",
      },
    ],
    col1Icons: [
      "/white_paper/grade-a/compt2/low.svg",
      "/white_paper/grade-a/compt2/few.svg",
      "/white_paper/grade-a/compt2/redu.svg",
    ],
    col2Icons: [
      "/white_paper/grade-a/compt2/high.svg",
      "/white_paper/grade-a/compt2/cover.svg",
      "/white_paper/grade-a/compt2/elev.svg",
    ],
    paddingTop: "lg:pt-[10px] pt-[10px]",
  },
  {
    para: /*html*/ `
      <p>Fire safety is one of the most critical risk dimensions in warehousing. Grade A industrial parks incorporate fire detection, alarm, suppression, and evacuation systems designed in accordance with NBC Part 4 and relevant BIS standards. These systems are engineered based on hazard classification, commodity type, and storage configuration.</p>
      <p class="mt-5">Insurance providers increasingly scrutinise fire safety compliance when underwriting warehousing assets. Facilities that fall short of prescribed standards face higher premiums, exclusions, or difficulty in obtaining coverage. Conversely, Grade A warehouses benefit from lower insurance costs, faster claims settlement, and reduced business interruption risk.</p>
    `,
    paddingTop: "lg:pt-[20px] pt-[10px]",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pb-2 pt-[20px] lg:pt-[40px]">4. Labour, Occupational Safety and Statutory Compliance</h3>
    `,
    paddingTop: "pt-0",
  },
  {
    // Safety Week image (reuse bts sec5 as placeholder)
    _type: "captioned-image",
    src: "/white_paper/grade-a/labourimg.webp",
    alt: "Safety Week - Horizon Industrial Parks",
    caption: "Safety Week - Horizon Industrial Parks",
    paddingTop: "pt-0",
  },
  {
    para: /*html*/ `
      <p class="pt-3">Warehousing operations employ large workforces, making labour compliance and occupational safety central to sustainable logistics parks operations. Grade A facilities align with occupational health and safety frameworks such as ISO 45001 and incorporate best practices for worker training, signage, emergency preparedness, and incident reporting.</p>
      <p class="mt-5">Compliance with labour laws, including working conditions, welfare facilities, and contractor management, reduces legal exposure and enhances workforce stability. These considerations, while sometimes overlooked in lower-grade facilities, have direct implications for productivity, attrition, and reputational risk.</p>
    `,
    paddingTop: "lg:pt-[20px] pt-[10px]",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pb-2 pt-[20px] lg:pt-[40px]">5. Environmental Regulations and Compliance</h3>
      <p>Environmental compliance is increasingly integral to warehouse development and operations. Grade A facilities incorporate measures to comply with environmental impact assessment requirements, pollution control norms, and waste management regulations. On-site sewage treatment plants, stormwater management systems, and air quality controls are designed to meet regulatory expectations while supporting sustainability goals.</p>
      <p class="mt-5">Proactive environmental compliance reduces approval timelines, minimises community opposition, and positions assets favourably in markets where ESG considerations influence occupier and investor decisions.</p>
    `,
    paddingTop: "pt-0",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pb-2 pt-[20px] lg:pt-[40px]">6. Asset Lifecycle and Maintainability</h3>
      <p>Grade A warehouses and industrial facilities are designed with a long-term perspective, considering not only initial construction costs but also operational expenditure, maintenance, and adaptability. Ease of access for maintenance, availability of spare parts, and durability of materials significantly influence lifecycle costs.</p>
      <p class="mt-5">Warehouse developers focus on preventive maintenance strategies, asset monitoring, and continuous improvement to preserve asset quality over decades. This approach protects investor value and ensures consistent performance for occupiers.</p>
    `,
    paddingTop: "pt-0",
  },
  {
    para: /*html*/ `
      <h3 class="text-[20px] sm:text-[24px] leading-[30px] sm:leading-[32px] bw-sb mb-4 pb-2 pt-[20px] lg:pt-[40px]">7. Risk Management and Business Continuity</h3>
      <p>Warehousing and industrial assets are critical nodes in supply chains, and any disruption can have cascading effects. Grade A facilities incorporate risk mitigation measures such as fire compartmentalisation, redundant utilities, disaster preparedness plans, and emergency response protocols.</p>
      <p class="mt-5">Business continuity planning is increasingly integrated into warehouse and factory design and operations, ensuring rapid recovery from unforeseen events and minimising downtime.</p>
    `,
    paddingTop: "pt-0",
    // paddingBottom: "lg:pb-[20px] pb-[10px]",
  },
];

export default sections2;
