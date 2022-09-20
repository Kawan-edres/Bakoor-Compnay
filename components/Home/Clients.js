import Image from 'next/image'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'



const   Clients = ({data}) => {



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
                              Trusted by the Enormous Leading Companies
                          </motion.h2>
          <motion.div animate={right} className="row justify-content-center">



             {data.data.map((item)=>{
                return <div key={item.id} className="col-lg-2 col-md-3 col-sm-3 col-4 text-center   ">
                  <Image alt={item.name} title={item.name} src={item.image} width={150} height={100}  />
                </div>
                
             })}
           
            

          </motion.div>
        </div>
      </div>
    );
}

export default Clients;
