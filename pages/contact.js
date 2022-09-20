import Layout from "../components/layout/Layout";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'
import Map from '../components/Map/Map'
import Form from "../components/Contact/Form";
import Head from '../components/Head/Head'




function Contact({data}) {


    const { ref, inView, } = useInView({
        /* Optional options */
        threshold: 0,
      });
    
      const right=useAnimation();
      const left=useAnimation();
      if(inView){
        right.start({
          x:0,
          opacity: 1,
          transition:{duration:.5 }
        });
    //     photo animation 
        left.start({
          scale:1.1,
          opacity: 1,
          transition: { duration:1},
        });
      }
    
      if(!inView){
        right.start({x:-1000,opacity:0});
        left.start({scale:0,opacity:0});
      }
    return (
        <>
            <Layout>
                    {/* <Head canonicalLink="https://devspace.krd" /> */} 
                    <Head title="Contact" />

                <section   className="section-box">
                    <div className="banner-hero banner-breadcrums">
                        <div className="container text-center">
                            <h1 className="text-heading-2 color-gray-1000">Contact Us</h1>
                        </div>
                    </div>
                </section>
                <section ref={ref}  className="section-box">
                    <motion.div  animate={right } className="container mb-50    ">
                        <div className="bdrd-58 box-gray-100 icon-wave">
                            <div className="row">
                                <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                                    <h2 className="text-heading-3 color-gray-900 mt-10">Have an project in mind?</h2>
                                    <p className="text-body-text color-gray-600 mt-20">The right move at the right time saves your investment.<br className="d-lg-block d-none" />live the dream of expanding your business.</p>
                                </div>
                                <div className="col-lg-4 mb-40">
                                    <h4 className="text-heading-6 color-gray-900 icon-home mb-10 mt-10">Bakoor Company</h4>
                                    <p className="text-body-text color-gray-600"><a href="#map">{data.data[2].value}</a></p>
                                    <p className="text-body-text color-gray-600 "><a href="tel:+964 750 445 0404">{data.data[3].value}</a></p>
                                    <p className="text-body-text color-gray-600 "><a href="tel:+964 750 378 8980">{data.data[4].value}</a></p>
                                    <p className="text-body-text color-gray-600 "> <a href="info@bakoorcompany.com">{data.data[5].value}</a></p>
                                </div>
                               
                               <Form />
                            </div>
                        </div>
                    </motion.div>
                </section>
                
                <Map />
    
            </Layout>

        </>
    )
}

export default Contact;

export async function getStaticProps(){

    try{
      const response =await fetch ("https://bakoor.devspace.krd/admin/public/api/settings");
      const data=await response.json();
     
      return {
        props: {
          data
        }, // will be passed to the page component as props
        revalidate: 5, // In seconds
    
        
      }   
    }catch(e){
      console.log(e.message);
      return ({props: {}})
  
  
    }
  
  
  }