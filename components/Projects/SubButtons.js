import Link from "next/link";
import { useEffect } from "react";
import {motion,AnimatePresence} from 'framer-motion'

const SubButtons = ({ filterData,type2,setType2,orginalData2,setFilterData2}) => {
 

    const handleOnClick = (index) => {
      setType2(index); // remove the curly braces
    };
    useEffect(() => {
     
       let filtered=orginalData2.filter((data)=>data.sub_category==type2);
        setFilterData2(filtered)
      
        return()=>{
          
        }
    }, [type2,orginalData2,setFilterData2]);

  return (
    <motion.div  className="container">
      <div className="mt-10">
        <ul className="nav" role="tablist">
        
          
          {filterData.map((item) => {   
            return (
              <button
               
              key={item.id}
                id="contruction"
                className={
                    type2 === item.name
                      ? "sub-btn sub-btn-active"
                      : "sub-btn btn-select"
                  }

                onClick={() => handleOnClick(item.name)}
              >
                {item.name}
              </button>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default SubButtons;
