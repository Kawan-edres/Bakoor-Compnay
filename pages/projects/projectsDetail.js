import { useRouter } from "next/router";
import classes from "./projects-deatil.module.css";
import img from "../../public/assets/imgs/Projects/soran.jpg";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import {projectsPageData} from '../../components/Data/Projects/ProjectsData'
const ProjectDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <Layout>
      <div className={classes.container}>
        {/*  */}
        <div className={classes.Intro}>
          <Image className={classes.img} src={img} alt="helo" layout="fill" />
        </div>

        <div className={classes.row}>
          <div className={classes.col1}>
            <h4 className="text-display2">Project Informtion</h4>
            <ul>
              <li>Client:Kawan</li>
              <li>Location:Erbil</li>
              <li>Area:2000m</li>
              <li>Start Date:16/8/2000</li>
              <li>Finish Date:16/8/2022</li>
              <li>Budget:20000$</li>
              <li>Type:E-Commerce</li>
            </ul>
          </div>
          <div className={classes.col2}>
            <h3 className="text-display2">Sewer Water Canal</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum
              earum eligendi suscipit eos id quos voluptatum, voluptas beatae
              labore animi sint quam expedita dolorum dicta doloremque,
              voluptate sunt et. Molestias corporis illum rem possimus ipsam
              dolorum, dolores minima facere numquam optio harum, explicabo
              neque minus. Blanditiis quaerat optio iure maiores eos quam
              voluptatum, aperiam et, distinctio facilis nostrum officia!
              Dolorum quibusdam eos dolorem sunt natus ut, atque doloremque
              magnam officiis pariatur, quia unde, architecto ex exercitationem
              aliquid distinctio cumque aut laborum obcaecati et suscipit eius
              incidunt in dicta..
            </p>
          </div>
        </div>
      


      <div className={classes.grid}>

     {
      projectsPageData.map((item)=>{
        return <Image width={400} height={400} key={item.id} src={item.img} alt={item.alt} title={item.alt} />
      })
     }
        
      </div>

      </div>
    </Layout>
  );
};

export default ProjectDetail;
