/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import "react-modal-video/css/modal-video.css";
import AboutClients from "../components/About/AboutClients";
// compoenents
import CounterUpBakoor from "../components/About/AboutCounterUp";
import AboutGelery from "../components/About/AboutGelery";
import Intro from "../components/About/AboutIntro";
import AboutOthers from "../components/About/AboutOthers";
import AboutSolutions from "../components/About/AboutSolutions";
import About from '../components/Home/About'
import Layout from "../components/layout/Layout";

// images
import construction from '../public/assets/imgs/About/gelary1.jpg'
import road from '../public/assets/imgs/About/gelary2.jpg'


function About1() {
  return (
    <>
      <Layout>
        <Intro />
        <CounterUpBakoor />
        <About />

        <AboutGelery img1={construction} img2={road} />
        
      
       <AboutOthers />
     
       <AboutClients />
        <AboutSolutions />
        
      

         






        
      </Layout>
    </>
  );
}

export default About1;
