
import Image from 'next/image';
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import {motion} from 'framer-motion'



const AboutGelery = ({img1,img2,bg}) => {
  const { ref, inView, } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const right=useAnimation();
  const left=useAnimation();

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



  
    return (
        <motion.div  ref={ref} className={`section-box mt-100 `} style={{overflowX:"hidden"}}>
        <div className="container ">
          <div className="row" style={{margin:"0 auto"}} >
            <motion.div animate={left} className="col-lg-6  mb-20 " style={{position:"relative",height:"60vh",marginRight:"3rem",}}><Image className='bdrd-16 '  layout='fill' src={img1} alt="construction" placeholder="blur"  /></motion.div>
            <motion.div animate={right} className="col-lg-5  " style={{position:"relative",height:"60vh"}}><Image className='bdrd-16' layout='fill' src={img2} alt="road" placeholder="blur"  /></motion.div>
          </div>
        </div>
      </motion.div>
    );
}

export default AboutGelery;