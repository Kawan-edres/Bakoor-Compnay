/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useRouter } from "next/router";

const RightSidebar = ({ openClass, handleOpen, rotate1, rotate2 }) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar  ${openClass}`}
      >
        <PerfectScrollbar className="mobile-header-wrapper-inner">
          <div className="mobile-header-top ">
            <div className="user-account">
              {/* <img src="/assets/imgs/template/ava_1.png" alt="Agon" /> */}
              <div className="content ">
                <h6 className="user-name mt-50">
                  Bakoor <span className="text-brand">Web Site </span>
                </h6>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleOpen}
                >
                  <span className={`burger-icon-top ${rotate1}`} />
                  <span className={`burger-icon-bottom ${rotate2}`} />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    <Link href="/" passHref>
                      <li>
                        <a
                          className={
                            router.pathname === "/" ? "nav-active" : ""
                          }
                        >
                          Home
                        </a>
                      </li>
                    </Link>

                    <Link href="/about" passHref>
                      <li>
                        <a
                          className={
                            router.pathname === "/about" ? "nav-active" : ""
                          }
                        >
                          About
                        </a>
                      </li>
                    </Link>

                      <Link href="/projects" passHref>
                    <li>
                        <a
                          className={
                            router.pathname === "/projects" ? "nav-active" : ""
                          }
                        >
                          Projects
                        </a>
                    </li>
                      </Link>

                      <Link href="/contact" passHref>
                    <li>
                        <a
                          className={
                            router.pathname === "/contact" ? "nav-active" : ""
                          }
                        >
                          Contact
                        </a>
                    </li>
                      </Link>
                  </ul>
                </nav>
              </div>

              <div className="site-copyright color-gray-400">
                Copyright 2022 ??
                <br />
                Developed by
                <Link href="http://devspace.krd">
                  <a className="text-bold" target="_blank">
                    {" "}
                    DevSpace
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </>
  );
};

export default RightSidebar;
