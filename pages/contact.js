import Layout from "../components/layout/Layout";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'
import Map from '../components/Map/Map'
import Form from "../components/Contact/Form";
import Head from '../components/Head/Head'




function Contact() {

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
                                    <p className="text-body-text color-gray-600"><a href="#map">Iraq , Erbil-Ankawa<br /> Close to Ankawa Palace</a></p>
                                    <p className="text-body-text color-gray-600 "><a href="tel:+964 750 445 0404">+964 750 445 0404</a></p>
                                    <p className="text-body-text color-gray-600 "><a href="tel:+964 750 378 8980">+964 750 378 8980</a></p>
                                    <p className="text-body-text color-gray-600 "> <a href="info@bakoorcompany.com">info@bakoorcompany.com</a></p>
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