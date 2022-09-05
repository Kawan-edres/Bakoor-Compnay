import Image from 'next/image'
import Civil from '../../public/assets/imgs/Home/civil.jpg'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'

import { extraData } from '../Data/Home/ExtraData';
const Extra = () => {
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
    right.start({x:1000,opacity:0});
    left.start({scale:0,opacity:0});
  }

    return (
        
        <section className="section-box mt-100 mb-100">
          <div className="container ">
            <div ref={ref} className="row">
              <motion.div animate={left} className="col-lg-6 col-sm-12 block-img-we-do">
                <Image
                  className="bdrd-16"
                  src={Civil}
                  width={800}
                  height={900}
                  
                  alt="Construction Image"
                  placeholder="blur"

                />
              </motion.div>
              <motion.div animate={right} className="col-lg-6 col-sm-12 block-we-do">
                
                <h3 className="text-heading-1 mt-30">
                  19 Years of Experience
                </h3>
                <p className="text-body-lead-large color-gray-600 mt-30">
                 We Provide the best Constructing services for our client with their satisfaction.
                </p>
                <div className="line-bd-green mt-50" />
                <div className="row">

                 {extraData.map((item)=>{
                  return <div key={item.id} className="col-lg-6 col-sm-6 col-12 mt-50">
                    <h4 className="text-heading-6 ">
                     {item.title}
                    </h4>
                    <p className="text-body-excerpt color-gray-600 mt-15">
                    {item.description}
                    </p>
                  </div>
                 })}

                  
                 
                  

                  
                  
                </div>

              </motion.div>
            </div>
          </div>
        </section>

    );
}

export default Extra;