import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faJava,
    faJenkins,
    faJs,
    faPhp,
    faHtml5,
    faCss3,
    faPython,
    faTrello,
    faSlack,
    faReact, 
    faDocker, 
    faGithub, 
    faGitlab, 
    faLaravel
} from "@fortawesome/free-brands-svg-icons";
import {faTerminal} from "@fortawesome/free-solid-svg-icons";

export const TECHNICAL_SKILLS = {
    "markup_languages": [
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faHtml5} size={"2x"}/>,
            "toolTip": "HTML"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faCss3} size={"2x"}/>,
            "toolTip": "CSS"
        }
    ],
    "programming_languages": [
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faJava} size={"2x"}/>,
            "toolTip": "Java"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faJs} size={"2x"}/>,
            "toolTip": "Javascript"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faPhp} size={"2x"}/>,
            "toolTip": "PHP"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faPython} size={"2x"}/>,
            "toolTip": "Python"
        },
        {
            "label": "C",
            "toolTip": "C"
        },
        {
            "label": "Groovy",
            "toolTip": "Groovy"
        },
    ],
    "frameworks": [
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faReact} size={"2x"}/>,
            "toolTip": "React"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faLaravel} size={"2x"}/>,
            "toolTip": "Laravel"
        }
    ],
    "automation": [
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faJenkins} size={"2x"}/>,
            "toolTip": "Jenkins"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faTerminal} size={"2x"}/>,
            "toolTip": "Bash"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faTerminal} size={"2x"}/>,
            "toolTip": "Shell Scripting"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faTerminal} size={"2x"}/>,
            "toolTip": "PowerShell"
        }
    ],
    "other": [
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faGithub} size={"2x"}/>,
            "toolTip": "GitHub"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faGitlab} size={"2x"}/>,
            "toolTip": "GitLab"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faDocker} size={"2x"}/>,
            "toolTip": "Docker"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faTrello} size={"2x"}/>,
            "toolTip": "Trello"
        },
        {
            "label": <FontAwesomeIcon className={"project-icon"} icon={faSlack} size={"2x"}/>,
            "toolTip": "Slack"
        },
    ],
    "Text_Editors": [
        "Webstorm",
        "Visual Studio Code",
        "Sublime Text"
    ],
    "database": [
        "MariaDB",
        "MySQL",
        "MSSQL"
    ]
}