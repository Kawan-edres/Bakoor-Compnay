/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import Layout from "../components/layout/Layout";
// Components
import Clients from "../components/Home/Clients";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Experiences from "../components/Home/Experiences";
import Extra from "../components/Home/Extra";
import Featured from "../components/slider/Projects";


// Head
import Head from "../components/Head/Head";



function Home({data,data2}) {


  return (
    <>
      <Layout>
        {/* <Head canonicalLink="https://devspace.krd" /> */}
        <Intro />

        <section className="section-box">
          <About  />
          {/* <Projects /> */}
        </section>
        <Featured data2={data2} />
        <Clients data={data} />

        <Experiences />
        <div className="bg-7 mt-100 pb-50">
          <Extra />
        </div>
      </Layout>
    </>
  );
}

export default Home;

export async function getStaticProps(){

  try{
    const response =await fetch ("https://bakoor.devspace.krd/admin/public/api/clients");
    const data=await response.json();
    const response2 =await fetch ("https://bakoor.devspace.krd/admin/public/api/projects");
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


