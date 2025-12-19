import { EXPERIENCE } from "../constants/Experience";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceHackathonCard from "../components/ExperienceHackathonCard";

const Experience = () => {
    return (

        <div className={"layout-page experience-container"}>
            <h1>{"Experience"}</h1>
            <div>{EXPERIENCE.map((item, index) => {
                if (item.type === "hackathon") {
                    return (
                        <ExperienceHackathonCard key={index} experience={item.data} />
                    )
                }

                return (
                    <ExperienceCard key={index} experience={item.data} />
                )
            })}
            </div>
        </div>
    )
};

export default Experience;