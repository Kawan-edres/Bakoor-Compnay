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
import About from "../components/Home/About";
import Layout from "../components/layout/Layout";
import Head from '../components/Head/Head'

// images
import construction from "../public/assets/imgs/About/gelary1.jpg";
import road from "../public/assets/imgs/About/gelary2.jpg";

function About1({data,data2}) {
  return (
    <>
      <Layout>
        {/* <Head canonicalLink="https://devspace.krd" /> */}
        <Head title="About" />

        <Intro />
        <CounterUpBakoor data={data}  />
        <About />

        <AboutGelery img1={construction} img2={road} />

        <AboutOthers />

        <AboutClients data2={data2.data}  />
        <AboutSolutions />
      </Layout>
    </>
  );
}

export default About1;


export async function getStaticProps() {
 
  try{
    const response =await fetch ("https://bakoor.devspace.krd/admin/public/api/settings");
    const data=await response.json();
    const response2 =await fetch ("https://bakoor.devspace.krd/admin/public/api/clients");
    const data2=await response2.json();
   
    return {
      props: {
        data,
        data2
      }, // will be passed to the page component as props
          revalidate: 5, // In seconds
  
      
    }   
  }catch(e){
    console.log(e.message);
    return ({props: {}})


  }


  
}

