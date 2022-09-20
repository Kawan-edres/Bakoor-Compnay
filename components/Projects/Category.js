import Image from "next/image";
import classes from "./category.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";


const Category = ({ filterData2 }) => {
  return (
    <motion.div layout className={classes.category}>
      {filterData2.map((item) => {
        return ( 
          <AnimatePresence key={item.id}>
            <Link href={`projects/${item.slug}`} passHref>
              <motion.div 
                layout
                animate={{ opacity: 1, scale: 1 }}
                intial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={`  ${classes.categoryImgContainer}`}
              >
                {/* <p>{item.title}</p>     */}
                <Image
                  src={item.cover}
                  layout="fill"
                  alt={item.title}
                  title={item.title}
                  className="bdr-16"
                />
                <div className={classes["projects-mlozm"]}>
                  <h4>{item.title}</h4>
                </div>
              </motion.div>
            </Link>
          </AnimatePresence>
        );
      })}
    </motion.div>
  );
};

export default Category;
