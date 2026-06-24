const PARKS_API_URL =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/parks-availability?per_page=100";

const desiredOrder = [
  "NCR",
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Pune",
  "Gujarat",
];

const normalize = (value) => (value || "").toString().trim().toLowerCase();

const buildParksData = (posts) => {
  const formattedData = {};

  posts.forEach((post) => {
    const region = post.acf?.main_tab || "Other";
    if (!formattedData[region]) {
      formattedData[region] = [];
    }

    const accessDetails = {};
    if (Array.isArray(post.acf?.ease_of_access)) {
      post.acf.ease_of_access.forEach((item) => {
        const title = (item.eoa_title || "").toLowerCase();
        const value = item.eoa_value || "";

        if (title.includes("location")) accessDetails.location = value;
        else if (title.includes("main access")) accessDetails.access = value;
        else if (title.includes("airport")) accessDetails.airport = value;
        else if (title.includes("cbd")) accessDetails.cbd = value;
      });
    }

    const slides = Array.isArray(post.acf?.block_slider)
      ? post.acf.block_slider.map((block, index) => {
          const details = {};
          if (Array.isArray(block.block_details)) {
            block.block_details.forEach((det) => {
              const key = (det.block_detail_key || "").toLowerCase();
              const val = det.block_detail_value || "";

              if (key.includes("available space")) details.availableSpace = val;
              else if (key.includes("usage")) details.usage = val;
              else if (key.includes("height")) details.height = val;
              else if (key.includes("docks")) details.docks = val;
              else if (key.includes("floor strength"))
                details.floorStrength = val;
              else if (key.includes("availability")) details.availability = val;
              else if (key.includes("built-to-suit")) details.bts = val;
            });
          }

          return {
            id: `slide-${post.id}-${index}`,
            title: block.block_title || `Block ${index + 1}`,
            masterplan_thumnail: block.masterplan_thumnail,
            masterplan_popup: block.masterplan_popup,
            ...details,
            ...accessDetails,
          };
        })
      : [];

    const innerOrder = parseInt(post.acf?.order_field_for_inner_tab, 10) || 999;

    formattedData[region].push({
      id: post.id.toString(),
      name: post.acf?.innter_tab || post.title?.rendered,
      slides,
      innerOrder,
      parkZone: post.acf?.park_zone || "",
    });
  });

  Object.keys(formattedData).forEach((region) => {
    formattedData[region].sort((a, b) => a.innerOrder - b.innerOrder);
  });

  const orderedParksData = {};
  desiredOrder.forEach((region) => {
    const foundKey = Object.keys(formattedData).find(
      (k) => k.toLowerCase() === region.toLowerCase(),
    );
    if (foundKey) {
      orderedParksData[foundKey] = formattedData[foundKey];
      delete formattedData[foundKey];
    }
  });

  Object.assign(orderedParksData, formattedData);
  return orderedParksData;
};

export async function fetchParksData() {
  try {
    const res = await fetch(PARKS_API_URL, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error("Failed to fetch parks data");
    const data = await res.json();
    return buildParksData(data);
  } catch (error) {
    console.error("Error fetching parks:", error);
    return {};
  }
}

export async function fetchParksDataByZone(zone) {
  const parksData = await fetchParksData();
  const targetZone = normalize(zone);

  if (!targetZone) {
    return parksData;
  }

  const zoneFilteredData = {};
  Object.entries(parksData).forEach(([region, parks]) => {
    const filteredParks = (parks || []).filter(
      (park) => normalize(park.parkZone) === targetZone,
    );
    if (filteredParks.length > 0) {
      zoneFilteredData[region] = filteredParks;
    }
  });

  return zoneFilteredData;
}
