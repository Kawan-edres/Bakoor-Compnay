import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/imgs/Home/background2.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'
import { useEffect } from "react";
import Wave from "./Wave";


const Intro = () => {
  

  const { ref, inView, } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  const right=useAnimation();
  const left=useAnimation();

  useEffect(()=>{
     if(inView){
      right.start({
        scale:1.1,
        opacity: 1,
        transition:{duration:.7}
      });
      left.start({
        y:0,
        opacity: 1,
        transition: { duration:.7},
      });
}

    
    if(!inView){
      right.start({scale:0,opacity:0});
      left.start({y:-1000,opacity:0});
    }


  },[inView])
   

    return (
      
        <section ref={ref}  className="section-box">
        <div className="banner-hero banner-1">
          <div className="container">
            <motion.div className="row" >
            {/* left */}
              
              <motion.div animate={left} className="col-lg-7" style={{paddingBottom:"3rem"}}>
                <h1  className="text-display-3">
                   Bakoor Company for   
                  <span className="color-green-900"> Construction</span> <br />
                  and <br />
                  <span className="color-green-900">General </span>

                   Trading
                </h1>
                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                Bakoor Company has its eye on the future. Our mission is to deliver the best quality service to our customers.
                </p>
                <div className="mt-40">
                  <Link href="/about">
                    <a className="btn btn-black icon-arrow-right-white">
                     Learn More
                    </a>
                  </Link>
             
                </div>
              </motion.div>
              {/* right */}
              <div className="col-lg-5  d-lg-block  " style={{padding:"1rem"}}>
              <motion.div  animate={right}
                className="banner-imgs "
                style={{ height: "65vh"}}
              >
                <Image
                  priority
                  layout="fill"
                  objectFit="cover"
                  className="bdrd-16 shape-2 "
                  alt="home-background "
                  src={banner}
                  placeholder="blur"

                />
              </motion.div>
            </div>
            </motion.div>
          </div>
        <Wave />
        </div>



      </section>
        
    );
}

export default Intro;