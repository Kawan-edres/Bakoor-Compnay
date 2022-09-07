import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import React from "react";
import { motion } from "framer-motion";

const Layout = ({ children, headerStyle }) => {
  const [openClass, setOpenClass] = useState("");
  const [open, setOpen] = useState(true);
  const [rotate1, setRotate1] = useState("");
  const [rotate2, setRotate2] = useState("");
  const variants = {
    hidden: { opacity: 0, y: 300 },
    enter: { opacity: 1, y: 0,

      transition:{
        duration:1,
        when:"beforeChildren",
        staggerChildren:0.25,
        
    }
     },
    exit: { opacity: 0,
        transition:{
      duration:0.5,
  } },
  };

  const handleOpen = () => {
    setOpen(!open);
    if (open) {
      document.body.classList.add("mobile-menu-active");
      setOpenClass("sidebar-visible");
      setRotate1("rotate-1");
      setRotate2("rotate-2");
    } else {
      setOpenClass("");
      setRotate1("");
      setRotate2("");
    }
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpen(true);
      setOpenClass("");
      setRotate1("");
      setRotate2("");
    }
  };

  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

      <Header
        handleOpen={handleOpen}
        headerStyle={headerStyle}
        rotate1={rotate1}
        rotate2={rotate2}
        open={open}
      />
      <RightSidebar
        openClass={openClass}
        rotate1={rotate1}
        rotate2={rotate2}
        handleOpen={handleOpen}
      />
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className="main"
      >
        {children}
      </motion.main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default React.memo(Layout);
