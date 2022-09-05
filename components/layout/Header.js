/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";



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
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {/* {headerStyle ? (
                        <img alt="Agon" src="/assets/imgs/Logo/logo.png" />
                        ) : (
                        <img alt="Agon" src="/assets/imgs/Logo/logo.png" />
                        )} */}
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li className="has-children">
                      <Link href="/">
                        <a className={router.pathname==="/" ? "nav-active" :""} >Home</a>
                      </Link>
                      <ul className="sub-menu two-col">
                        <li>
                          <Link href="/">
                            <a>
                              <i className="fi fi-rr-home" />
                              Homepage - 1
                            </a>
                          </Link>
                        </li>

                       

                        <li>
                          <Link href="/index-7">
                            <a>
                              <i className="fi fi-rr-home" />
                              Homepage - 7
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/index-8">
                            <a>
                              <i className="fi fi-rr-home" />
                              Homepage - 8
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link href="/about">
                        <a className={router.pathname==="/about" ? "nav-active" :""}>About</a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/about">
                            <a>
                              <i className="fi fi-rr-star" />
                              About Us - 1
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-about-2">
                            <a>
                              <i className="fi fi-rr-star" />
                              About Us - 2
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-about-3">
                            <a>
                              <i className="fi fi-rr-star" />
                              About Us - 3
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    
                    <li className="has-children">
                      <Link href="/projects">
                        <a className={router.pathname==="/projects" ? "nav-active" :""}>Projects </a>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/page-contact">
                            <a>Construction</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/page-contact">
                            <a> Genera trading</a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/404">
                            <a>Water</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/404">
                            <a>Hyper Market</a>
                          </Link>
                        </li>
                      </ul>
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
