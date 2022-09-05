/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer " >
        <div className="container pt-30 " >

        {/* <div className="footer-top "> </div> */}
          <div className="row ">
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Contact</h4>
              <div className="mt-20 text-body-text color-gray-600 mb-20">
              Iraq , Erbil-Ankawa, Close to Ankawa Palace
              </div>
              <div className="mt-20 text-body-text color-gray-600">
              +964 750 445 0404 <br />
              +964 750 378 8980
              </div>
              <div className="text-body-text color-gray-600">
              info@bakoorcompany.com
              </div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">About Us</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/#">
                    <a>Mission &amp; Vision</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-career">
                    <a>Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Press &amp; Media</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Advertising</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Testimonials</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Discover</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/blog-2">
                    <a>Our Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-pricing-1">
                    <a>Plans &amp; Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Knowledge Base</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Cookie Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Office Center</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-1">
                    <a>News &amp; Events</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 width-16">
              <h4 className="text-heading-5">Useful links</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/#">
                    <a>Request an offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>How it works</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-pricing-2">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Reviews</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Stories</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © Bakoor Official 2022 ,  All Rights Reserved
                </span>

                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">
                    Terms of service
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://www.facebook.com/BakoorCompany">
                    <a target="_blank" className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://twitter.com/BakoorCompany">
                    <a target="_blank" className="icon-socials icon-twitter"></a>
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
