import Link from "next/link";
import Image from "next/image";
import aboutBackground from "../../public/assets/imgs/About/aboutImage.webp";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'

const Intro = () => {
  const { ref, inView, } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const right=useAnimation();
  const left=useAnimation();

    // intro animation
    if(inView){
      right.start({
        scale:1.1,
        opacity: 1,
        transition:{duration:1 }
      });
//     photo animation 
      left.start({
        x:0,
        opacity: 1,
        transition: { duration:1},
      });

    }

    
    if(!inView){
      right.start({scale:0,opacity:0});
      left.start({x:-1000,opacity:0});
    }

  return (
    <section ref={ref} className="section-box mt-15">
      <div className="banner-hero banner-2 bg-about-1">
        <div  className="container">
          <div   className="row">
            <motion.div animate={left} className="col-lg-7" style={{paddingBottom:"3rem"}}>
              
              <h1 className="text-display-3 mt-30">
                Bakoor Company experienced and most creative Company
              </h1>
              <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
               We expand our projects and activities, and enhance them to suit the needs and requirements for everyone.
              </p>
              <div className="mt-40">
                <Link href="/contact">
                  <a className="btn btn-black shape-square icon-arrow-right-white">
                    Contact Us
                  </a>
                </Link>
              </div>
            </motion.div>


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
                  src={aboutBackground}
                  placeholder="blur"

                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
