import classes from "./projects-deatil.module.css";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import Head from '../../components/Head/Head'
import Map from '../../components/Map/ProjectDetailsMap'

const ProjectDetail = ({data}) => {

console.log(data?.data);
const details=data?.data;

  return (
    <Layout>
    
    <Head description={details.short_description} />
      <div className={classes.container}>
        <div className={classes.Intro}>
          <Image className={classes.img} src={details.cover[0]} alt="helo" layout="fill" />
        </div>

        <div className={classes.row}>
          <div className={classes.col1}>
            <h4 className="text-display2">Project Informtion</h4>
            <ul>
              <li>Client:{details.client}</li>
              <li>Location:{details.location}</li>
              <li>Area:{details.area}</li>
              <li>Start Date:{details.start_date}</li>
              <li>Finish Date:{details.end_date}</li>
              <li>Budget:{details.budget}</li>
            </ul>
          </div>
          <div className={classes.col2}>
            <h3 className="text-display2">{details.title}</h3>
            <p>
              {details.body.slice(3,-4)}
            </p>
          </div>
        </div>
      


      <div className={classes.grid}>

     {
       details.image.map((item)=>{
        return <Image width={400} height={400} key={item.id} src={item} alt={item.alt} title={item.alt} />
      })
     }
        
      </div>

      </div>

      <Map data={details} />
    </Layout>
  );
};

export default ProjectDetail;


export async function getStaticPaths() {

    return {
      paths: [
        {
            params: {postId: 'soran-soccer-stadium'}
        },
        {
            params: {postId: 'sewer-water-canal'}
        },
        {
            params: {postId: 'highway-and-ductile-piping-in-ankawa-section-108'}
        },
   
      ],
    // paths,
    fallback: true
    }
  }


  

export async function getStaticProps(context) { //context is an object that contains a key called params that contains the id of the post
    const {params} = context
    const response =await fetch (`https://bakoor.devspace.krd/admin/public/api/projects/${params.postId}`);
    const data=await response.json();
    
 
   
    if(!data.data.id){
        return{
            notFound:true
        }
    }
    return{
        props:{
            data
        },
        revalidate:10
    }

}