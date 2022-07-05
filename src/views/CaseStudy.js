import React from 'react';
// import sections
import Hero from '../components/sections/CaseStudy/CsHero';
import FirstContact from "../components/sections/CaseStudy/FirstContact";
import Design from "../components/sections/CaseStudy/Design";
import Build from "../components/sections/CaseStudy/Build";
import Deploy from "../components/sections/CaseStudy/Deploy";



const CaseStudy = () => {

  return (
    <>
      <Hero/>
      <FirstContact/>
      <Design />
      <Build />
      <Deploy/>
    </>
  );
}

export default CaseStudy;