import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Portfolio topDivider id="portfolio" />
      {/* <FeaturesTiles /> */}
      <Process
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
        id="process"
      />

      <Cta split id="contact" />
    </>
  );
}

export default Home;