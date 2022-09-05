import Image from "next/image";
import { aboutSolutions } from "../Data/About/AboutSolutionsData";
const AboutSolutions = () => {
    return (
        <section className="section-box mt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              <h2 className="text-heading-1 color-gray-900 mb-10">
                Providing solutions of every kind
              </h2>
              <p className="text-body-lead-large color-gray-600 mt-20">
                In a professional context it often happens that private or
                <br className="d-lg-block d-none" />
                corporate clients order a publication to publish news.
              </p>
            </div>
            <div className="col-lg-1 col-sm-1 col-12" />
          </div>
        </div>
        
        <div className="container mt-40">
          <div className="row">

          {aboutSolutions.map((item)=>{
           
            return (<div key={item.id} className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-50">
                <div className="item-icon">
                  <span className="icon-left">
                    <Image
                      width={100}
                      height={100}
                      src={item.img}
                      alt={item.alt}
                      title={item.alt}
                    />
                  </span>
                  <h4 className="text-heading-4">{item.title}</h4>
                  <p className="text-body-text color-gray-600 mt-15">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
            )

          })}
          
          


          </div>
        </div>
      </section>
    );
}

export default AboutSolutions;