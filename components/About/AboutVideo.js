import dynamic from "next/dynamic";
import { useState } from "react";


const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
  });
  
const AboutVideo = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        
        <section className="section-box mt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-1 col-sm-1 col-12" />
              <div className="col-lg-10 col-sm-10 col-12 text-center">
              
                <h2 className="text-display-3 color-gray-900 mb-60">
                  We believe in the power
                  <br className="d-lg-block d-none" />
                  of creative ideas
                </h2>
              </div>
              <div className="col-lg-1 col-sm-1 col-12" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-1" />
              <div className="col-lg-10">
                <div className="box-image">
                  <a
                    className="popup-youtube btn-play-video btn-play-middle"
                    onClick={() => setOpen(true)}
                  ></a>
                  <img
                    className="img-responsive bdrd-16"
                    src="assets/imgs/page/about/1/img-1.png"
                    alt="Agon"
                  />
                </div>
              </div>
              <div className="col-lg-1" />
            </div>
          </div>
          <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="7e90gBu4pas"
          onClose={() => setOpen(false)}
        />
        </section>
    );
}

export default AboutVideo;