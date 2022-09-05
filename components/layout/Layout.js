import { useEffect, useState } from 'react';
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import RightSidebar from "./RightSidebar";
import React from 'react';

const Layout = ({ children, headerStyle }) => {
    const [openClass, setOpenClass] = useState('');
    const[open,setOpen]=useState(true)
    const [rotate1,setRotate1]=useState("")
    const [rotate2,setRotate2]=useState("")

   
    const handleOpen = () => {
        
        setOpen(!open)
        if(open){
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
        setRotate1("rotate-1")
        setRotate2("rotate-2")
        }

        else{
            setOpenClass("")
            setRotate1("")
            setRotate2("")
        }
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpen(true)
            setOpenClass("")
            setRotate1("")
            setRotate2("")

        }
        
    }

    
    

  
    return (
        <>
            <div  className={openClass && "body-overlay-1"} onClick={handleRemove} />

            <Header handleOpen={handleOpen} headerStyle={headerStyle}
             rotate1={rotate1}
              rotate2={rotate2}
              open={open}
                   />
            <RightSidebar openClass={openClass}
             rotate1={rotate1}
              rotate2={rotate2}
              handleOpen={handleOpen}
               />
            <main className="main">
                {children}
            </main>
            <Footer />
            <BackToTop/>
        </>
    );
};

export default React.memo(Layout);