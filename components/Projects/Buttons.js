import Link from "next/link";
import { useEffect, useState } from "react";
import { projectsBtn } from "../Data/Home/projectsButton";

const Buttons = ({orginalData,setFilterData,type,setType}) => {
    const handleOnClick = (index) => {
        setType(index); // remove the curly braces
    };
    useEffect(()=>{
        if(type==="construction"){
            setFilterData(orginalData);
            return; //tawaw letawa hamuim awe  macho xwartr 
        }
        const filtered=orginalData.filter((data)=>data.category.includes(type));
        setFilterData(filtered);
    },[type])


    return (
        <div className="container">
        <div className=" mt-100">
          <ul className="nav" role="tablist">

          <button className={
            type === "construction"
                ? "btn btn-default btn-bd-green-hover btn-select active"
                : "btn btn-default btn-bd-green-hover btn-select"
            } onClick={()=>handleOnClick("construction")} >Construction</button>
               <button className={
            type === "general-trading"
                ? "btn btn-default btn-bd-green-hover btn-select active"
                : "btn btn-default btn-bd-green-hover btn-select"
            } onClick={()=>handleOnClick("construction")} >General Trading</button>
          <button className={
            type === "water"
                ? "btn btn-default btn-bd-green-hover btn-select active"
                : "btn btn-default btn-bd-green-hover btn-select"
            } onClick={()=>handleOnClick("water")} >Water</button>
          <button className={
            type === "market"
                ? "btn btn-default btn-bd-green-hover btn-select active"
                : "btn btn-default btn-bd-green-hover btn-select"
            } onClick={()=>handleOnClick("market")} >Market</button>
            
          </ul>
        </div>
      </div>
    );
}

export default Buttons;


// {projectsBtn.map((item) => {
//     return (
//       <li key={item.id} onClick={() => handleOnClick(item.id)}>
//         <Link href={item.link}>
//           <a
//             className={
//               activeIndex === item.id
//                 ? "btn btn-default btn-bd-green-hover btn-select active"
//                 : "btn btn-default btn-bd-green-hover btn-select"
//             }
//           >
//             {item.text}
//           </a>
//         </Link>
//       </li>
//     );
//   })}