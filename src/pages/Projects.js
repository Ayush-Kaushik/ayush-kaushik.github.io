import { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectsContext } from "../context/ProjectsContext";

const Projects = () => {
    const projectContext = useContext(ProjectsContext);

    return (
        <div id="projects">
            <div className={"layout-page project-container"}>
                <h1>{"Projects"}</h1>
                {projectContext.projects.map((project) => {
                    return (<ProjectCard key={project.id} project={project} />)
                })}
            </div>
        </div>
    )
};

export default Projects;