import Image from "next/image";
import { aboutOthersData } from "../Data/About/AboutOthersData";


const AboutOthers = () => {
  
    return (
        <section className="section-box mt-90 mb-mobile mb-150">
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-sm-1 col-12" />
                <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                    <h2 className="text-heading-1 color-gray-900 mb-10">Building the<br className="d-lg-block d-none" />Work Ecosystem</h2>
                    <p className="text-body-lead-large color-gray-600 mt-20">From year to year we strive to invent the most innovative<br className="d-lg-block d-none" />technology that is used by both small and big enterprises</p>
                </div>
                <div className="col-lg-2 col-sm-1 col-12" />
            </div>
        </div>

        <div className="container mt-90 mb-100">
            <div className="row">

                {aboutOthersData.map((item)=>{
                    return(
                    <div key={item.id} className="col-lg-6 col-sm-12 about-others-card">
                    <div className={`${item.bg} box-square hover-up mb-20`}>
                        <h4 className="text-heading-4 color-gray-900 mb-15">{item.title}</h4>
                        <p className="text-body-text-md color-gray-600">{item.description}</p>
                        <div className="box-image-inner "><Image className="bdrd-16" height={350} width={500} src={item.img} alt={item.alt} title={item.alt} placeholder="blur" /></div>
                    </div>
                </div>
                    )
                   

                })}
               
               
                
            </div>
        </div>
    </section>
    );
}

export default AboutOthers;