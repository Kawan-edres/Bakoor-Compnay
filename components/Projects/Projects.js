import Link from "next/link";
import Image from "next/image";
import { projectsPageData } from "../Data/Projects/ProjectsData";
import Buttons from "./Buttons";
import Category from "./Category";
import { useEffect, useState } from "react";

const Projects = () => {
  const [orginalData,setOrginalData]=useState([]);
  const [filterData,setFilterData]=useState([]);
  const [type,setType]=useState("construction");

  useEffect(()=>{
    setOrginalData(projectsPageData);
    setFilterData(projectsPageData)
  },[])
  
  return (
    <section className="section-box pb-50 ">
     
       <Buttons orginalData={orginalData} setFilterData={setFilterData} type={type} setType={setType} />
       <Category filterData={filterData}  />
  
    </section>
  );
};

export default Projects;


// <div className="container list-category-homepage7 mt-70">
// <div className="row">
//   {projectsPageData.map((item) => {
//     return (
//       <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
//         <div className="grid-category-2">
//           <div className="grid-category-image">
//             <Link href="#">
//               <a>
//                 <Image  height={500} width={700} src={item.img} placeholder="blur" />
//               </a>
//             </Link>
//           </div>
//           <Link href="#">
//             <a className="text-heading-5 color-gray-900">
//               {item.title}
//             </a>
//           </Link>

//           <div className="category-info-bottom">
//             <div className="link-category">
//               <Link href="#">
//                 <a className="mr-20">{item.type}</a>
//               </Link>
//               <span className="text-date">{item.date}</span>
//             </div>

//             <div className="link-readmore">
//               <Link href="#">
//                 <a>READ MORE</a>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   })}
// </div>
// </div>