const referencesBoxes = [
  {
    html: `
      <div class="mb-2">
        <strong>Jenkins, A. (2025, November 4). Warehouse automation explained: Trends, types & best practices. NetSuite.</strong>
        <a href="https://www.netsuite.com/portal/resource/articles/inventory-management/warehouse-automation.shtml" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.netsuite.com/portal/resource/articles/inventory-management/warehouse-automation.shtml</a>
      </div>
      <div class="mb-2">
        <strong>Mordor Intelligence. (2025). "Warehouse Automation Market - Industry Size & Growth 2025-2030." Retrieved from</strong>
        <a href="https://www.mordorintelligence.com/industry-reports/warehouse-automation-market" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.mordorintelligence.com/industry-reports/warehouse-automation-market</a>
      </div>
      <div class="mb-2">
        <strong>Grand View Research. (2024). "Warehouse Automation Market Size And Share Report, 2030." Retrieved from</strong>
        <a href="https://www.grandviewresearch.com/industry-analysis/warehouse-automation-market-report" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.grandviewresearch.com/industry-analysis/warehouse-automation-market-report</a>
      </div>
      <div class="mb-2">
        <strong>Grand View Research. (2024). "Internet of Things In Warehouse Management Market Report, 2030." Retrieved from</strong>
        <a href="https://www.grandviewresearch.com/industry-analysis/internet-of-things-iot-warehouse-management-market" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.grandviewresearch.com/industry-analysis/internet-of-things-iot-warehouse-management-market</a>
      </div>
    `,
  },
  {
    html: `
      <div class="mb-2">
        <strong>CRE Daily. (2025). "Warehouse Automation Driving Amazon's Robotic Workforce Surge." Retrieved from</strong>
        <a href="https://www.credaily.com/briefs/warehouse-automation-driving-amazons-robotic-workforce-surge/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.credaily.com/briefs/warehouse-automation-driving-amazons-robotic-workforce-surge/</a>
      </div>
      <div class="mb-2">
        <strong>About Amazon. (2025). "Amazon unveils 7 new robots powering faster, safer deliveries." Retrieved from</strong>
        <a href="https://www.aboutamazon.com/news/operations/new-amazon-robots-delivery-station" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.aboutamazon.com/news/operations/new-amazon-robots-delivery-station</a>
      </div>
      <div class="mb-2">
        <strong>HR Grapevine. (2025). "Amazon close to having more warehouse robots than human staff." Retrieved from</strong>
        <a href="https://www.hrgrapevine.com/us/content/article/2025-07-04-amazon-nears-equal-number-of-warehouse-robots-staff" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.hrgrapevine.com/us/content/article/2025-07-04-amazon-nears-equal-number-of-warehouse-robots-staff</a>
      </div>
      <div class="mb-2">
        <strong>LogisticsIQ. (2025). "Warehouse Automation Market By Technology - Global Forecast to 2028." Retrieved from</strong>
        <a href="https://www.thelogisticsiq.com/research/warehouse-automation-market" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.thelogisticsiq.com/research/warehouse-automation-market</a>
      </div>
    `,
  },
  {
    html: `
           <div class="mb-2">
        <strong>Fortune Business Insights. (2024). "IoT in Warehouse Management Market Size & Growth [2032]." Retrieved from</strong>
        <a href="https://www.fortunebusinessinsights.com/iot-in-warehouse-management-market-107383" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.fortunebusinessinsights.com/iot-in-warehouse-management-market-107383</a>
      </div>
      <div class="mb-2">
        <strong>ClickPost. (2025). "Warehouse Statistics: Industry, Automation, & More for 2025." Retrieved from</strong>
        <a href="https://www.clickpost.ai/blog/warehouse-statistics" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.clickpost.ai/blog/warehouse-statistics</a>
      </div>
      <div class="mb-2">
        <strong>Markets and Markets. (2023). "Warehouse Robotics Market Size, Share, Warehouse Automation Industry Report, Statistics 2030." Retrieved from</strong>
        <a href="https://www.marketsandmarkets.com/Market-Reports/warehouse-robotic-market-128876258.html" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.marketsandmarkets.com/Market-Reports/warehouse-robotic-market-128876258.html</a>
      </div>
      <div class="mb-2">
        <strong>Next Move Strategy Consulting. (2024). "Warehouse Automation Market 2024: Trends, Key Players, and Growth Forecast." Retrieved from</strong>
        <a href="https://statzon.com/insights/the-warehouse-automation-market" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://statzon.com/insights/the-warehouse-automation-market</a>
      </div>
    `,
  },
  {
    html: `
      <div class="mb-2">
        <strong>U.S. Census Bureau. (Various years). "Quarterly Retail E-Commerce Sales Reports."</strong>
      </div>
      <div class="mb-2">
        <strong>Philippine Statistics Authority. (2021). "E-commerce Sales Data."</strong>
      </div>
      <div class="mb-2">
        <strong>ABI Research. (2024). "Robotics-as-a-Service Deployment Forecasts."</strong>
      </div>
      <div class="mb-2">
        <strong>Interact Analysis. (2024). "Global Warehouse Construction and Automation Trends."</strong>
      </div>
      <div class="mb-2">
        <strong>About Amazon. (2023). "How Amazon deploys collaborative robots in its operations to benefit employees and customers." Retrieved from</strong>
        <a href="https://www.aboutamazon.com/news/operations/how-amazon-deploys-robots-in-its-operations-facilities" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.aboutamazon.com/news/operations/how-amazon-deploys-robots-in-its-operations-facilities</a>
      </div>
      <div class="mb-2">
        <strong>Distribution Strategy. (2025). "Amazon Reaches 750000 Robots in Fulfillment Operations." Retrieved from</strong>
        <a href="https://distributionstrategy.com/amazon-reaches-750000-robots-in-fulfillment-operations/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://distributionstrategy.com/amazon-reaches-750000-robots-in-fulfillment-operations/</a>
      </div>
      <div class="mb-2">
        <strong>MHL News. (2024). "Warehouse Automation ROI and Deployment Statistics."</strong>
      </div>
      <div class="mb-2">
        <strong>Acumen Research and Consulting. (2022). "Warehouse Automation Market Size, Share, Trends 2030." Retrieved from</strong>
        <a href="https://www.acumenresearchandconsulting.com/warehouse-automation-market" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.acumenresearchandconsulting.com/warehouse-automation-market</a>
      </div>
      <div class="mb-2">
        <strong>Stellar Market Research. (2020). "Warehouse Automation Market: Analysis and Forecast (2024-2030)." Retrieved from</strong>
        <a href="https://www.stellarmr.com/report/Warehouse-Automation-Market/157" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline max-w-full inline-block break-all">https://www.stellarmr.com/report/Warehouse-Automation-Market/157</a>
      </div>
    `,
  },
];
export default referencesBoxes;
