import Layout from "../../components/layout/Layout";
import Projects from "../../components/Projects/Projects";
import ProjectsIntro from "../../components/Projects/ProjectsIntro";
import Head from '../../components/Head/Head'




const projects = ({projects,data2}) => {
    return (
        <Layout>
                {/* <Head canonicalLink="https://devspace.krd" /> */}
                <Head title="Projects" />

        <ProjectsIntro />
        {/* <div className="  pb-100">
        <AboutGelery img1={img1} img2={img2}  />

        </div> */}
        <Projects projects={projects} data2={data2} />
        </Layout>
    );
}

export default projects;



export async function getStaticProps    (context){
    try{
        const response =await fetch ("https://bakoor.devspace.krd/admin/public/api/sub-categories");
        const projects=await response.json();
        const response2 =await fetch (`"https://bakoor.devspace.krd/admin/public/api/projects"`);
        const data2=await response2.json();
    
        
       
        return {
          props: {
            projects,
            data2
            
          }, // will be passed to the page component as props
          revalidate: 5, // In seconds
      
          
        }   
      }catch(e){
        console.log(e.message);
        return ({props: {}})
    
    
      }
    

}


