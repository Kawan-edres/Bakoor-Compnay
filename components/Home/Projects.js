import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'


import { useEffect, useState } from "react";
import { projectsData } from "../Data/Home/projectsData";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index); // remove the curly braces
  };

  const { ref, inView, } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const right=useAnimation();
  const left=useAnimation();

  useEffect(()=>{
     // intro animation
     if(inView){
      right.start({
        x:0,
        opacity: 1,
        transition:{duration:.7 }
      });
//     photo animation 
      left.start({
        x:0,
        opacity: 1,
        transition: { duration:.7},
      });
    }



    if(!inView){
      right.start({x:1000,opacity:0});
      left.start({x:-1000,opacity:0});
    }

    // clean Up
    return () => {
    };


  },[activeIndex,inView,left,right])
   

  return (
    <>

   


{/* second */}
      <div className="container">
        <div ref={ref} className="tab-content">
          {projectsData.map((item) => {
            return (
              <div
                key={item.id}
                
              >
                <div className=" panel-box mt-50" >
                  <div className="row" >
                  {/* left */}
                    <motion.div animate={left}  className={` ${item.bg} col-lg-6 col-md-12`}>
                      <div className="box-optimized">
                        <h3 className="text-heading-2">{item.title}</h3>
                        <p className="text-body-excerpt mt-30">
                          {item.description}
                        </p>
                        <div className="mt-40">
                          <Link href="/page-service-1">
                            <a className="btn btn-default btn-white icon-arrow-right">
                              Learn more
                            </a>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                    {/* right */}
                    <motion.div animate={right} className="col-lg-6 col-md-12 home-projects-card ">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        layout="fill"

                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
