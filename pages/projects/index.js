import Layout from "../../components/layout/Layout";
import Projects from "../../components/Projects/Projects";
import ProjectsIntro from "../../components/Projects/ProjectsIntro";
import Head from '../../components/Head/Head'




const projects = () => {
    return (
        <Layout>
                {/* <Head canonicalLink="https://devspace.krd" /> */}
                <Head title="Projects" />

        <ProjectsIntro />
        {/* <div className="  pb-100">
        <AboutGelery img1={img1} img2={img2}  />

        </div> */}
        <Projects />
        </Layout>
    );
}

export default projects;