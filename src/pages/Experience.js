import { EXPERIENCE } from "../constants/Experience";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceHackathonCard from "../components/ExperienceHackathonCard";

const Experience = () => {
    return (
        <div id="experience">
            <div className={"layout-page"}>
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
        </div>
    )
};

export default Experience;