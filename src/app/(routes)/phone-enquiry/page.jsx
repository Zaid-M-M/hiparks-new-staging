import PEForm from "@/components/global/Book-site/PEForm";

export const metadata = {
  title: "Phone Enquiry",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PhoneEnquiryPage() {
  return (
    <section className="w-full xl:py-24 md:py-20 py-10">
      <div className="flex fix justify-center pb-5 md:pb-10">
        {/* Header */}
        <h2 className="text-black lg:w-[80%] lg:text-[33px] text-[25px] bw-r uppercase">
          Phone Enquiry Form
        </h2>
      </div>
      <PEForm />
    </section>
  );
}
