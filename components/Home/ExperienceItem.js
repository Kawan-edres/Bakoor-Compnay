import Image from "next/image";
import Link from "next/link";

const ExperienceItem = (props) => {
    return (
       
        <div className="col-lg-4 col-sm-12">
        <div className={`card-grid-1 ${props.bg}  hover-up`}>
          <div className="grid-1-img">
            <Image
               src={props.img}
              alt={props.alt}
              title={props.alt}
            />
          </div>
          <h3 className="text-heading-3 mt-20">{props.heading}</h3>
          <p className="text-body-excerpt mt-20">
           {props.description}
          </p>
          <div className="mt-30">
            <Link href="/projects">
              <a className="btn btn-default btn-white icon-arrow-right">
                Learn more
              </a>
            </Link>
          </div>
        </div>
      </div>


    );
}

export default ExperienceItem;