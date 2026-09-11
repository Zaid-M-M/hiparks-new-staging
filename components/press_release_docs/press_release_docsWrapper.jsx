import React from "react";
import Pr_Sec1 from "./pr_Sections/pr_Sec1";
import Pr_Sec2 from "./pr_Sections/pr_Sec2";

const press_release_docsWrapper = () => {
  return (
    <div className="w-full h-full">
      <Pr_Sec1 />
      <Pr_Sec2 />
    </div>
  );
};

export default press_release_docsWrapper;
