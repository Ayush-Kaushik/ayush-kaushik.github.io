import React from 'react';

const ExperienceCard = ({experience}) => {
    return (
        <div className={"layout-card"}>
            <div className={"layout-card-img"}>
                <a href={experience.company.link}><img src={experience.image} alt={"experience image"}/></a>
            </div>

            <h1>{experience.workTitle}</h1>
            <h2 className={"layout-card-subtitle"}>{experience.timeline}</h2>

            <div className={"experience-description"}>
                {experience.description ?
                    <ul>{experience.description.map((item, index) =>
                        <li key={index}>{item}</li>)}
                    </ul> : ""}
            </div>
        </div>
    )
};

export default ExperienceCard;