import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Emoji from "../components/Emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Aboutme = () => {
    const userContext = useContext(UserContext);

    return (
        <div>
            <div
                className={"aboutme-container"}
            >
                <span>
                    <h1>{"Hi!"}<Emoji symbol={"👋"} label={"wave"} />{"    I'm Ayush Kaushik"}</h1>
                    <h2>{"I'm a Software Engineer @ OpenText."}</h2>
                    <Link to="contact" smooth={true} duration={1000}>
                        <button id={"#cta"}>
                            <h3>{"Let's Connect!"}</h3>
                        </button>
                    </Link>
                    <div>
                        <a href={userContext.userInfo.html_url}><FontAwesomeIcon className={"project-icon"}
                            icon={faGithubSquare} /></a>
                        <a href={"https://www.linkedin.com/in/ayushkaushik"}><FontAwesomeIcon
                            className={"project-icon"}
                            icon={faLinkedin} /></a>
                        <a href={"https://dev.to/ayushkaushik"}><FontAwesomeIcon className={"project-icon"}
                            icon={faDev} /></a>
                    </div>
                </span>
                <div className={"aboutme-img-container"}>
                    <img src={userContext.userInfo.avatar_url} alt={"avatar"} />
                </div>
            </div>
        </div>
    )
};

export default Aboutme;