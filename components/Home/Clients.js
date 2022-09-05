import Image from 'next/image'
import { clientsData } from '../Data/Home/ClientsData';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'



const Clients = () => {


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
        transition:{duration:1 }
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
        <div ref={ref} className="section-box overflow-visible  mt-100 text-center  ">
        <div className="container  text ">
        <motion.h2 animate={left} className="text-heading-3 text-center color-gray-900 mb-60">
                              Trusted by the world’s leading companies
                          </motion.h2>
          <motion.div animate={right} className="row justify-content-center">



             {clientsData.map((item)=>{
                return <div key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-4 text-center  box-hover-shadow hover-up">
                  <Image alt={item.alt} title={item.alt} src={item.img} width={150} height={150} style={{  filter:" grayscale(100%)"}} />
                </div>
                
             })}
           
            

          </motion.div>
        </div>
      </div>
    );
}

export default Clients;