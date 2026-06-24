import ChmWrapper from "@/components/Chemical/chmWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";
import RelatedSectorLinks from "@/components/state/RelatedSectorLinks";

export const metadata = {
  title: "Chemical Industrial Park & Warehousing Solutions | Horizon",
  description:
    "Horizon provides Grade A chemical industrial parks and storage warehousing with strict safety compliance. Scale with sustainable, IGBC-certified infrastructure.",
};
export default function Ecommerce() {
  return (
    <MainLayout>
      <ChmWrapper />
      {/* <Footer /> */}
      {/* <RelatedSectorLinks
        basePath="/chemicals"
        apiUrl="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/chemicals_micros"
      /> */}
    </MainLayout>
  );
}
