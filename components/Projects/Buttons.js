import Link from "next/link";
import { useEffect, useState } from "react";

const Buttons = ({ orginalData, setFilterData, type, setType }) => {
  const handleOnClick = (index) => {
    setType(index); // remove the curly braces
  };
  useEffect(() => {
    let filtered=orginalData.filter((data)=>data.category_id==1);
    if (type == 1) {
       filtered=orginalData.filter((data)=>data.category_id==type)
      setFilterData(filtered);
     return
      
    }
    else if(type==2){
       filtered = orginalData.filter((data) => data.category_id==type);
      setFilterData(filtered);

    }
  }, [type,orginalData,setFilterData]);

  return (
    <div className="container">
      <div className=" mt-100">
        <ul className="nav" role="tablist">
          <button
            id="contruction"
            className={
              type == 1
                ? "btn btn-default btn-bd-green-hover btn-select active"
                : "btn btn-default btn-bd-green-hover btn-select"
            }
            onClick={() => handleOnClick(1)}
          >
            Contruction
          </button>
          <button
          id="general trading"
            className={
              type == 2
                ? "btn btn-default btn-bd-green-hover btn-select active"
                : "btn btn-default btn-bd-green-hover btn-select"
            }
            onClick={() => handleOnClick(2)}
          >
            General Trading
          </button>
         
        </ul>
      </div>
    </div>
  );
};

export default Buttons;


