import AroWrapper from "@/components/Arospace/AroWrapper";
import MainLayout from "@/src/layouts/MainLayout";
import Footer from "@/components/global/Footer";
import RelatedSectorLinks from "@/components/state/RelatedSectorLinks";

export const metadata = {
  title: "Aerospace Industrial Parks & Defense Manufacturing | Horizon",
  description:
    "Horizon offers Grade A aerospace industrial parks for defense and high-tech manufacturing. Scale with world-class, sustainable infrastructure and connectivity.",
};

export default function Ecommerce() {
  return (
    <MainLayout>
      <AroWrapper />
      {/* <Footer /> */}
      <RelatedSectorLinks
        basePath="/engineering-&-aerospace"
        apiUrl="https://phpstack-725513-2688800.cloudwaysapps.com/cms/wp-json/wp/v2/engineering_micro"
      />
    </MainLayout>
  );
}
