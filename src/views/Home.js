import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Process from '../components/sections/Process';
import Portfolio from '../components/sections/Portfolio';
import Cta from '../components/sections/Cta';



/*
import Cta from '../components/sections/Cta';
import Generic from '../components/sections/GenericSection';
import videoBg from "../assets/videos/videoBg.mp4"; 
*/

const Home = () => {

  return (
    <>
      <Hero/>
      <Portfolio topDivider />
      <Process
        invertMobile
        topDivider
      />
      <Cta/>

    </>
  );
}

export default Home;