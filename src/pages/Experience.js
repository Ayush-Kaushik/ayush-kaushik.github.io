import React from 'react';
import { EXPERIENCE } from "../constants/Experience";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceHackathonCard from "../components/ExperienceHackathonCard";
import { Element } from "react-scroll";

const Experience = () => {
    return (
        <Element name={"experience"}>
            <div className={"layout-page"}>
                <h1>{"Experience"}</h1>
                <div>{EXPERIENCE.map((item, index) => {
                    if (item.type === "job") {
                        return (
                            <ExperienceCard key={index} experience={item.data} />
                        )
                    } else if (item.type === "hackathon") {
                        return (
                            <ExperienceHackathonCard key={index} experience={item.data} />
                        )
                    }
                })}
                </div>
            </div>
        </Element>
    )
};

export default Experience;