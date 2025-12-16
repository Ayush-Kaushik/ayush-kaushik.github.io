import React from 'react';
import { Element } from "react-scroll";
import { TECHNICAL_SKILLS } from "../constants/Skills";

const Skills = () => {
    return (
        <Element name={"skills"}>
            <div className={"layout-page skill-container"}>

                <h1>{"Skills"}</h1>

                <div className={"layout-card"}>
                    <h2>{"Programming Languages"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.programming_languages.map((item, index) => (
                                <span key={index}>
                                    <h3>{item.label}</h3>
                                    <p>{item.toolTip}</p>
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Markup Languages"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.markup_languages.map((item, index) => (
                                <h3>{item.label}
                                    <span key={index}>

                                        <p>{item.toolTip}</p>
                                    </span></h3>

                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Frameworks"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.frameworks.map((item, index) => (
                                <span key={index}>
                                    <h3>{item.label}</h3>
                                    <p>{item.toolTip}</p>
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Automation"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.automation.map((item, index) => (
                                <span key={index}>
                                    <h3>{item.label}</h3>
                                    <p>{item.toolTip}</p>
                                </span>
                            ))
                        }
                    </div>
                </div>

                <div className={"layout-card"}>
                    <h2>{"Other Tools"}</h2>
                    <div className={"skill-language"}>
                        {
                            TECHNICAL_SKILLS.other.map((item, index) => (
                                <span key={index}>
                                    <h3>{item.label}</h3>
                                    {item.toolTip}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Element>
    )
};

export default Skills;