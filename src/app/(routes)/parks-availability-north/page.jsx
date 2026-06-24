import React from "react";
import Script from "next/script";
import ParksAbleWrapper from "../../../../components/parks-availability/ParksAbleWrapper";
import { fetchParksDataByZone } from "../../../../components/parks-availability/data/fetchParks";

export const metadata = {
  title: "Industrial and logistics parks in India - Horizon Industrial Parks",
  description:
    "Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India",

  icons: {
    icon: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/09/favicon.ico",
    apple:
      "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/09/favicon.ico",
  },

  openGraph: {
    title: "Industrial and logistics parks in India - Horizon Industrial Parks",
    description:
      "Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India",
    url: "https://hiparks.com/",
    images: [
      {
        url: "https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-content/uploads/2024/10/og_img_home_pg.jpg",
      },
    ],
  },
};

export default async function Page() {
  const parksData = await fetchParksDataByZone("North");

  return (
    <>
      {/* JSON-LD Schema */}
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.hiparks.com/#localbusiness",
            name: "Horizon Industrial Parks Ltd",
            alternateName: "HiParks",
            url: "https://www.hiparks.com/",
            logo: "https://www.hiparks.com/assets/horizon_logo.9eebd95c8ccc564170fc.svg",
            image:
              "https://www.hiparks.com/assets/value-asset.62dbc89e597240c7295a.webp",
            description:
              "Horizon Industrial Parks offers Grade A portfolios of high-quality, modern industrial and logistics parks across India",
            address:
              "Horizon Industrial Parks Ltd Floor 15, Tower 1, One World Center Lower Parel, Mumbai 400 013",
            telephone: ["+91 22 4158 1000", "+91 88799 70705"],
            email: "contactus@HiParks.com",
            latitude: "19.00990",
            longitude: "72.83560",
          }),
        }}
      />

      {/* <div
        className="flex items-center justify-center px-[20px]"
        style={{ height: "70vh" }}
      >
        <h1 className="text-center bw-m text-[24px] md:text-[36px]">
          Oops! Something went wrong on our end. <br></br>We&apos;re working on
          fixing it.
        </h1>
      </div> */}
      <ParksAbleWrapper zone="North" parksData={parksData} />
    </>
  );
}
