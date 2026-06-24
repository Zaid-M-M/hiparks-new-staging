export const microblogApiMap = {
  goa: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/goa_micro_blog",
  delhi:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/delhi_micro_blog",
  gujarat:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/gujarat_micro_blog",
  tamilnadu:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/tamil_nadu_micro_blo",
  telangana:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/telangana_micro_blog",
  maharashtra:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/maharasht_micro_blog",
  karnataka:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/karnataka_micro_blog",
  haryana:
    "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/haryana_micro_blog",
};

const microblogSlugAliases = {
  "tamil-nadu": "tamilnadu",
};
//
const canonicalMicroblogSlugMap = {
  tamilnadu: "tamil-nadu",
};

export function resolveMicroblogApiUrl(slug) {
  const resolvedSlug = microblogSlugAliases[slug] || slug;
  return microblogApiMap[resolvedSlug];
}

export function getMicroblogSitemapSources() {
  return Object.entries(microblogApiMap).map(([slug, apiUrl]) => ({
    stateSlug: canonicalMicroblogSlugMap[slug] || slug,
    apiUrl,
  }));
}
