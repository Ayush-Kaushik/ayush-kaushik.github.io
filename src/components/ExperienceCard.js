const ExperienceCard = ({experience}) => {
    return (
        <div className={"layout-card"}>
            <h1>{experience.workTitle}</h1>
            <h2 className={"layout-card-subtitle"}><a href={experience.company.link}>{experience.company.name}</a> | {experience.timeline}</h2>

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