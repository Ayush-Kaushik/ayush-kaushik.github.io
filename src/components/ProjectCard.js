import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({ project }) => {

    return (
        <div className={"layout-card"}>
            <h1>{project.name}</h1>
            <h2 className={"layout-card-subtitle"}>{project.created_at}</h2>

            {project.topics && project.topics.length > 0 && (
                <div className="project-tags">
                    {project.topics.map((topic, index) => (
                        <span key={index} className="project-tag">
                            {topic}
                        </span>
                    ))}
                </div>
            )}

            {project.description ? <p>{project.description}</p> : ""}

            <span className={"layout-card-links"}>
                {project.html_url ?
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className={"project-icon"} icon={faGithub} />{"  View Source"}</a> : ""}
                {project.homepage ? <a href={project.homepage} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className={"project-icon"} icon={faExternalLinkAlt} /> {"Live Demo"}</a> : ""}
            </span>
        </div>
    )
};

export default ProjectCard;