import Link from "next/link";
import Image from "next/image";
import aboutBackground from "../../public/assets/imgs/About/aboutImage.webp";
import projects from "../../public/assets/imgs/Projects/background.jpg";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'

const ProjectsIntro = () => {
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
        y:0,
        opacity: 1,
        transition: { duration:1},
      });

    }

    
    if(!inView){
      right.start({scale:0,opacity:0});
      left.start({y:-1000,opacity:0});
    }

  return (
    <section ref={ref} className="section-box mt-15 "  >


  
      <div className="banner-hero bg-2 ">
        <div  className="container ">
          <div   className="row" >
            <motion.div animate={left} className="col-lg-7" style={{paddingBottom:"4rem"}}>
              
              <h1 className="text-display-3  mt-30">
                A huge creative team excited to create the Best Projects
              </h1>
              <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
               Our 200 completed and under Contruction projects of our company
              </p>
              <div className="mt-40">
                <Link href="/contact">
                  <a className="btn btn-black shape-square icon-arrow-right-white">
                    Contact Us
                  </a>
                </Link>
              </div>
            </motion.div>

            <div className="col-lg-5  d-lg-block " style={{padding:"1rem"}}>
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
                  src={projects}
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

export default ProjectsIntro;
