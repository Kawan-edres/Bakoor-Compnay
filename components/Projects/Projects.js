import Buttons from "./Buttons";
import Category from "./Category";
import SubButtons from "./SubButtons";
import { useEffect, useState } from "react";

const Projects = ({ projects, data2 }) => {
  //Category States
  const [orginalData, setOrginalData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [type, setType] = useState(1);

  // SubCategory States
  const [orginalData2, setOrginalData2] = useState([]);
  const [filterData2, setFilterData2] = useState([]);
  const [type2, setType2] = useState("concrete");



  const filter = projects.data.filter((item) => {
    return item.category_id == 1;
  });
  useEffect(() => {
    setOrginalData(projects.data);
    setFilterData(filter);
    setOrginalData2(data2.data);
    setFilterData2(data2.data.filter(item=>item.sub_category==="concrete"));

    return()=>{
          
    }
    
  }, []);

  return (
    <section className="section-box pb-50 ">
      <Buttons
        orginalData={orginalData}
        setFilterData={setFilterData}
        type={type}
        setType={setType}
      />
      <SubButtons
        filterData={filterData}
        type2={type2}
        setType2={setType2}
        orginalData2={orginalData2}
        setFilterData2={setFilterData2}

      />

      <Category filterData2={filterData2}  />
    </section>
  );
};

export default Projects;




