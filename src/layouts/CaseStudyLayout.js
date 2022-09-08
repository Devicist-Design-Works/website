import React from "react";
import FooterCS from "./../components/sections/CaseStudy/FooterCS";

const CaseStudyLayout = ({ children }) => (
  <>
    <main className="site-content">{children}</main>
    <FooterCS />
  </>
);

export default CaseStudyLayout;
