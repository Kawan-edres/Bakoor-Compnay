import dynamic from "next/dynamic"
const Mapp = dynamic(() => import("../../components/Map/Mapp"), { ssr:false })
import classes from "./projects-deatil.module.css";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import Head from '../../components/Head/Head'
import { useRouter } from "next/router";
import mapStyle from '../../components/Map/./map.module.css'


const ProjectDetail = ({data}) => {

  const router=useRouter();

  if(router.isFallback){
    return <h1>Loading...</h1>
}


function createMarkup(data) {
  return { __html: data };
}
  return (
    <Layout>
    
    <Head description={data.data.short_description} />
      <div className={classes.container}>
        <div className={classes.Intro}>
          <Image className={classes.img} src={data.data.cover[0]} alt="helo" layout="fill" />
        </div>

        <div className={classes.row}>
          <div className={classes.col1}>
            <h4 className="text-display2">Project Informtion</h4>
            <ul>
              <li>Client:{data.data.client}</li>
              <li>Location:{data.data.location}</li>
              <li>Area:{data.data.area}</li>
              <li>Start Date:{data.data.start_date}</li>
              <li>Finish Date:{data.data.end_date}</li>
              <li>Budget:{data.data.budget}</li>
            </ul>
          </div>
          <div className={classes.col2}>
            <h3 className="text-display2">{data.data.title}</h3>
            <p>{data.data.body}</p>

          </div>
        </div>
      


      <div className={classes.grid}>

     {
       data.data.image.map((item,i)=>{
        return <Image key={i} width={400} height={400}  src={item} alt={item.alt} title={item.alt} />
      })
     }
        
      </div>

      </div>
  
      <div className={mapStyle.mapContainer}>

      <Mapp data={data.data} />
      </div>
    </Layout>
  );
};

export default ProjectDetail;

export async function getStaticPaths() {

 
  const response=await fetch(`https://bakoor.devspace.krd/admin/public/api/projects`)
  const data=await response.json()

  const paths = data.data.map((project) => ({
    params: { postId:project.slug},
  }))

 
  return { paths, fallback: false }

}
  


export async function getStaticProps(context) { //context is an object that contains a key called params that contains the id of the post
  const {params} = context
  const response=await fetch(`https://bakoor.devspace.krd/admin/public/api/projects/${params.postId}`)
  const data=await response.json()

  if(!data.data.id){
      console.log("fucked up");
      return{
          notFound:true
      }
  }
  return{
      props:{
          data
      },
      revalidate: 5,
  }

}