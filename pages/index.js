/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import Layout from "../components/layout/Layout";
// Components
import Clients from "../components/Home/Clients";
import Intro from "../components/Home/Intro";
import About from "../components/Home/About";
import Projects from "../components/Home/Projects";
import Experiences from "../components/Home/Experiences";
import Extra from "../components/Home/Extra";
import Featured from '../components/slider/Projects'

// Head
import Head from '../components/Head/Head'



function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout>
      {/* <Head canonicalLink="https://devspace.krd" /> */}
        <Intro />


        <section className="section-box">
          <About />
          {/* <Projects /> */}
        </section>
          <Featured />
        <Clients />


        <Experiences />
        <div className="bg-7 mt-100 pb-50">

        <Extra />
        </div>

      
      </Layout>
    </>
  );
}

export default Home;
