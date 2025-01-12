import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ExperienceHackathonCard = ({experience}) => {
    return (
        <div className={"layout-card"}>
            <div className={"layout-card-img"}>
                {experience.link ? <a href={experience.company.link}><img src={experience.image} alt={"hackathon-experience"}/></a> : ""}
            </div>

            <h1>{experience.workTitle}</h1>
            <h2 className={"layout-card-subtitle"}>{experience.timeline}</h2>

            <div className={"experience-description"}>
                <h2>{"Project Details"}</h2>
                {experience.description ?
                    <ul>{experience.description.map((item, index) =>
                        <li key={index}>{item}</li>)}
                    </ul> : ""}
            </div>

            <div className={"experience-description"}>
                <h2>{"Responsibilities"}</h2>
                {experience.responsibilities ?
                    <ul>{experience.responsibilities.map((item, index) =>
                        <li key={index}>{item}</li>)}
                    </ul> : ""}
            </div>

            <div className={"experience-description"}>
                <h2>{"Accomplishments"}</h2>
                {experience.accomplishments ?
                    <ul>{experience.accomplishments.map((item, index) =>
                        <li key={index}>{item}</li>)}
                    </ul> : ""}
            </div>

            <div className={"layout-card-links"}>
                <h2>{"Source"}</h2>
                {experience.project.repository_url ?
                    <a href={experience.project.repository_url} target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon className={"project-icon"}
                                                                 icon={faGithub} size={"2x"}/>{"  View Source"}
                    </a> : ""}
            </div>
        </div>
    )
};

export default ExperienceHackathonCard;