import Link from "next/link";
import Image from 'next/image'
import {experiencesData} from '../Data/Home/ExperiencesData'
import ExperienceItem from "./ExperienceItem";









const Experiences = () => {
    return (
        <section className="section-box">

        <div className="container">
        <div className="row">

       
          <div className="col-lg-2 col-sm-1 col-12" />
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
            <h2 className="text-heading-1 color-gray-900">
            BAKOOR Company Experiences
             
            </h2>
           
          </div>
          <div className="col-lg-2 col-sm-1 col-12" />
        </div>
      </div>


      <div className="container mt-70">
        <div className="row">

           {experiencesData.map((item)=>{
            return <ExperienceItem key={item.id} {...item} />
           })}
           
  
        </div>
      </div>
    </section>
    );
}

export default Experiences;