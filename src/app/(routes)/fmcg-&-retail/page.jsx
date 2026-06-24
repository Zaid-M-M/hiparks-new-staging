import FmcgWrapper from "@/components/Fmcg/FmcgWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";
import RelatedSectorLinks from "@/components/state/RelatedSectorLinks";

export const metadata = {
  title: "FMCG Warehousing & Retail Distribution Centers | Horizon",
  description:
    "Horizon provides Grade A FMCG warehousing and retail distribution centers. Scale with top-notch hygiene standards and sustainable, IGBC-certified infrastructure.",
};

export default function Ecommerce() {
  return (
    <MainLayout>
      <FmcgWrapper />
      {/* <Footer /> */}
      {/* <RelatedSectorLinks
        basePath="/fmcg-&-retail"
        apiUrl="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/fmcg_micros"
      /> */}
    </MainLayout>
  );
}
