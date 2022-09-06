/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from '../../public/assets/imgs/Logo/logo.png'



const Header = ({ handleOpen, headerStyle,rotate1,rotate2,open}) => {
  const router=useRouter();
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left">
             
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                        <Image alt="Bakoor-Logo" width={100} height={100} src={Logo} />
                        ) : (
                        <Image alt="Bakoor-Logo" width={100} height={100} src={Logo} />
                        )}
                  </a>
                </Link>
                          
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-md-block">
                  <ul className="main-menu">
                    <li className="has-children">
                      <Link href="/">
                        <a className={router.pathname==="/" ? "nav-active" :""} >Home</a>
                      </Link>
                     
                       

                    </li>
                    <li className="has-children">
                      <Link href="/about">
                        <a className={router.pathname==="/about" ? "nav-active" :""}>About</a>
                      </Link>
                      
                    </li>
                    
                    <li className="has-children">
                      <Link href="/projects">
                        <a className={router.pathname==="/projects" ? "nav-active" :""}>Projects </a>
                      </Link>
                      
                  
                    </li>

                    <li className="has-children">
                      <Link href="/contact"><a className={router.pathname==="/contact" ? "nav-active" :""} >Contact</a></Link>
                    </li>
                  </ul>
                </nav>

                <div
                  className="burger-icon burger-icon-white"
                  style={{visibility:`${open?"visible":"hidden"}`}}
                  onClick={
                        handleOpen
                  
                      } 
                  
                >
                  <span   className={`burger-icon-top ${rotate1}`} />
                  <span  className={`burger-icon-bottom ${rotate2}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default React.memo(Header);
