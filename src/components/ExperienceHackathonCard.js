import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ExperienceHackathonCard = ({ experience }) => {
    return (
        <div className={"layout-card"}>
            <h1>{experience.workTitle}</h1>
            <h2 className={"layout-card-subtitle"}>{experience.company.name} | {experience.timeline}</h2>

            <div className={"experience-description"}>
                <span>{experience.challenge}</span>
            </div>

            <div className={"experience-description"}>
                <span>{experience.description}</span>
            </div>

            <div className={"experience-description"}>
                <h2 className={"layout-card-subtitle-02"}>{"Responsibilities"}</h2>
                {experience.responsibilities ?
                    <ul>{experience.responsibilities.map((item, index) =>
                        <li key={index}>{item}</li>)}
                    </ul> : ""}
            </div>

            <div className={"experience-description"}>
                <h2 className={"layout-card-subtitle-02"}>{"Outcome"}</h2>
                {experience.outcome ?
                    <ul>{experience.outcome.map((item, index) =>
                        <li key={index * 2}>{item}</li>)}
                    </ul> : ""}
            </div>

            <div className={"layout-card-links"}>
                {experience.project.repository_url ?
                    <a href={experience.project.repository_url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className={"project-icon"} icon={faGithub} />{"  GitHub Repository"}
                    </a> : ""}
            </div>
        </div>
    )
};

export default ExperienceHackathonCard;