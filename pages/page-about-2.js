/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";

function About2() {
  return (
    <>
      <Layout>
     
        <section className="section-box mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
                <div className="text-center mb-20">
                  <span className="tag-1">How It Work ?</span>
                </div>
                <h2 className="text-display-3 color-gray-900 mb-60">
                  Elevate your Employee
                  <br className="d-lg-block d-none" />
                  Development Journey
                </h2>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-12 col-12" />
              <div className="col-lg-10 col-sm-12 col-12">
                <ul className="list-steps">
                  <li
                    className="icon-asset1 wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    <div className="text-center block-step">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-start-plan.svg"
                          alt="Agon"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Start Plan</h3>
                      <p className="text-body-text color-gray-500">
                        Choose any of our packages
                      </p>
                    </div>
                  </li>
                  <li
                    className="icon-asset2 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="text-center block-step">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-connect.svg"
                          alt="Agon"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Connect</h3>
                      <p className="text-body-text color-gray-500">
                        Receive concepts In 24 hours
                      </p>
                    </div>
                  </li>
                  <li
                    className="icon-asset3 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="text-center block-step bg-5">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-match.svg"
                          alt="Agon"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Match</h3>
                      <p className="text-body-text color-gray-500">
                        Development Stage
                      </p>
                    </div>
                  </li>
                  <li
                    className="icon-asset4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".9s"
                  >
                    <div className="text-center block-step bg-5">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-complete.svg"
                          alt="Agon"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Complete</h3>
                      <p className="text-body-text color-gray-500">
                        After-release Support
                      </p>
                    </div>
                  </li>
                  <li
                    className="wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="text-center block-step bg-9">
                      <div className="mb-30">
                        <img
                          src="/assets/imgs/page/about/2/icon-review.svg"
                          alt="Agon"
                        />
                      </div>
                      <h3 className="text-heading-5 mb-10">Review</h3>
                      <p className="text-body-text color-gray-500">
                        Project launch and checkout
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 col-sm-12 col-12" />
            </div>
          </div>
        </section>
        
        <section className="section-box mt-100 bg-green-900 pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
                <div className="row">
                  <div className="col-lg-6">
                    <img
                      className="img-responsive mb-10"
                      src="assets/imgs/page/about/2/img-2.png"
                      alt="Agon"
                    />
                    <img
                      className="img-responsive"
                      src="assets/imgs/page/about/2/img-3.png"
                      alt="Agon"
                    />
                  </div>
                  <div className="col-lg-6">
                    <img
                      className="img-responsive"
                      src="assets/imgs/page/about/2/img-1.png"
                      alt="Agon"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-12 block-pl">
                <h2 className="text-heading-1 color-white mb-30 mt-20">
                  Our game-changing approach to working together
                </h2>
                <p className="text-inter-lg">
                  Check out stories from companies like Leroy Merlin and
                  Decathlon to get inspired by how much you can gain.
                </p>
                <div className="mt-30">
                  <Link href="/page-service-2">
                    <a className="btn btn-black text-body-text">Keep Reading</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-box">
        
          <div className="container mt-90">
            <div className="row">
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-1.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-2.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-3.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Company</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      We can blend colors multiple ways, the most common
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-4.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Marketing Event</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      How To Blow Through Capital At An Incredible Rate
                    </a>
                  </Link>

                  <div className="grid-4-img">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-5.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 pr-30">
                <div className="card-grid-style-4">
                  <span className="tag-dot">Customer Services</span>
                  <Link href="/blog-single">
                    <a className="text-heading-4">
                      Design Studios That Everyone Should Know About?
                    </a>
                  </Link>

                  <div className="grid-4-img color-bg-4">
                    <Link href="/blog-single">
                      <a>
                        <img
                          src="/assets/imgs/page/homepage1/img-news-6.png"
                          alt="Agon"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      




      </Layout>
    </>
  );
}

export default About2;
