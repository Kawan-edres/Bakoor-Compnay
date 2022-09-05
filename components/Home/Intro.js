import Image from "next/image";
import Link from "next/link";
import banner from "../../public/assets/imgs/Home/background2.png";
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
        <section className="section-box mt-15">
        <div className="banner-hero banner-1">
          <div className="container">
            <motion.div className="row">
            {/* left */}
              <motion.div animate={left} ref={ref} className="col-lg-7">
                <h1  className="text-display-2">
                  We are
                  <span className="color-green-900">awesome team</span>
                  for your business dream
                </h1>
                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                  Integrated workflow designed for product teams. We create
                  world-class development and branding
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
              <motion.div animate={right} className="col-lg-5 d-none d-lg-block">
                <div className="banner-imgs">
                  <Image
      
                    priority
                    layout="fill"
                    objectFit="cover"
                    className="bdrd-16 shape-2 "
                    alt="home-background "
                    src={banner}
                    placeholder="blur"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>


      </section>
    );
}

export default Intro;