import CaseStudiesContent from "./CaseStudiesContent/CaseStudiesContent";
import CaseStudiesHero from "./CaseStudiesHero/CaseStudiesHero";

const CaseStudiesWrapper = () => {
  return (
    <div className="w-full h-full bg-white overflow-x-hidden">
      {/* <ReactLenis root> */}
      <CaseStudiesHero />
      <CaseStudiesContent />
      {/* </ReactLenis> */}
    </div>
  );
};

export default CaseStudiesWrapper;
