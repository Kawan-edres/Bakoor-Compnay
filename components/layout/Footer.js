/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="container pt-30 ">
          {/* <div className="footer-top "> </div> */}
          <div className="row ">
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Contact</h4>
              <div className="mt-20 text-body-text color-gray-600 mb-20">
                Iraq , Erbil-Ankawa, Close to Ankawa Palace
              </div>
              <p className="text-body-text  ">
                <a className="color-gray-600" href="tel:+964 750 445 0404">
                  +964 750 445 0404
                </a>
              </p>
              <p className="text-body-text color-gray-600 ">
                <a className="color-gray-600" href="tel:+964 750 378 8980">
                  +964 750 378 8980 
                </a>
              </p>
              <p className="text-body-text  ">
                {" "}
                <a className="color-gray-600" href="info@bakoorcompany.com">
                  info@bakoorcompany.com
                </a>
              </p>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Pages</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Social Medias</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="https://www.facebook.com/BakoorCompany">
                    <a>Facebook</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/BakoorCompany">
                    <a>Twitter</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/Bakoor.co/">
                    <a>Bakoor Water</a>
                  </Link>
                </li>
                <li>
                  <Link
                    scroll={false}
                    href="https://www.facebook.com/Erbilsunhotel/"
                  >
                    <a>Erbil Sun Hotel</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 width-16">
              <h4 className="text-heading-5">Useful links</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/projects#Contruction">
                    <a>Contruction</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects#general-trading">
                    <a>General Trading</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects#water">
                    <a>Bakoor Water</a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects#market">
                    <a>Bakoor Market</a>
                  </Link>
                </li>
               
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-4 mb-20">
                <span className="color-gray-400 text-body-lead ">
                  Developed by{" "}
                  <a href="http://devspace.krd" target="_blank" rel="noreferrer">
                    DevSpace
                  </a>
                </span>
              </div>

              <div className="col-md-4 mb-20">
                <span className="color-gray-400 text-body-lead">
                  © Bakoor Official 2022 , All Rights Reserved
                </span>
              </div>

              <div className="col-md-4 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://www.facebook.com/BakoorCompany">
                    <a
                      target="_blank"
                      className="icon-socials icon-facebook"
                      rel="noreferrer"
                    ></a>
                  </Link>
                  <Link href="https://twitter.com/BakoorCompany">
                    <a
                      target="_blank"
                      className="icon-socials icon-twitter"
                      rel="noreferrer"
                    ></a>
                  </Link>
                  {/* <Link href="https://www.instagram.com">
                    <a className="icon-socials icon-instagram"></a>
                  </Link> */}
                  {/* <Link href="https://www.linkedin.com">
                    <a className="icon-socials icon-linkedin"></a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
