import AboutGelery from "../../components/About/AboutGelery";
import Layout from "../../components/layout/Layout";
import Projects from "../../components/Projects/Projects";
import ProjectsIntro from "../../components/Projects/ProjectsIntro";
import img1 from '../../public/assets/imgs/Projects/projects1.jpg'
import img2 from '../../public/assets/imgs/Projects/projects2.jpg'


const projects = () => {
    return (
        <Layout>
        <ProjectsIntro />
        <div className="  pb-100">
        <AboutGelery img1={img1} img2={img2}  />

        </div>
        <Projects />
        </Layout>
    );
}

export default projects;