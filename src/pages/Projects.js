import { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ProjectsContext } from "../context/ProjectsContext";

const Projects = () => {
    const projectContext = useContext(ProjectsContext);

    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-slate-900 dark:text-white">
                    Projects
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {projectContext.projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;