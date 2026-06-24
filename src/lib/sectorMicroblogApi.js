const SECTOR_MICROBLOG_APIS = {
  automotive: "automomotive_micro",
  logistics: "logistics_micro",
  engineering: "engineering_micro",
  ecommerce: "ecommerce_micros",
  chemicals: "chemicals_micros",
  fmcg: "fmcg_micros",
  packaging: "packaging_micros",
  renewable: "energy_micros",
};

const BASE_MICROBLOG_API =
  "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2";

export async function fetchSectorMicroBlog(sectorKey, slug) {
  const endpoint = SECTOR_MICROBLOG_APIS[sectorKey];
  if (!endpoint || !slug) return null;

  try {
    const apiUrl = `${BASE_MICROBLOG_API}/${endpoint}?slug=${encodeURIComponent(slug)}`;
    const res = await fetch(apiUrl, { cache: "no-store" });
    if (!res.ok) return null;

    const data = await res.json();
    return data?.[0] || null;
  } catch (error) {
    return null;
  }
}
