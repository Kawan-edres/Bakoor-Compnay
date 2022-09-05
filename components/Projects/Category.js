import { projectsPageData } from "../Data/Projects/ProjectsData";
import Image from "next/image";
import classes from "./category.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Category = ({ filterData }) => {
  return (
    <motion.div layout className={classes.category}>
      {filterData.map((item) => {
        return (
          <AnimatePresence key={item.id}>
            <Link href={"/"}>
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
                  src={item.img}
                  layout="fill"
                  alt={item.alt}
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
