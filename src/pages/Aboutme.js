import { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import Emoji from "../components/Emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";

const Aboutme = () => {
    const userContext = useContext(UserContext);

    return (
        <div
            className={"aboutme-container"}
        >
            <span>
                <h1>{"Hi! I'm Ayush Kaushik"}<Emoji symbol={"👋"} label={"wave"} className={"about-me-wave-icon"} /></h1>
                <h2>{"I'm a Software Engineer @ OpenText."}</h2>
                <div>
                    <a
                        href="https://github.com/Ayush-Kaushik"
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label="GitHub profile"
                    >
                        <FontAwesomeIcon className={"project-icon"}
                            icon={faGithubSquare} /></a>
                    <a
                        aria-label="LinkedIn profile"
                        target='_blank'
                        rel='noreferrer noopener'
                        href={"https://www.linkedin.com/in/ayushkaushik"}>
                        <FontAwesomeIcon
                            className={"project-icon"}
                            icon={faLinkedin} /></a>
                    <a
                        aria-label="Dev.to profile"
                        target='_blank'
                        rel='noreferrer noopener'
                        href={"https://dev.to/ayushkaushik"}>
                        <FontAwesomeIcon className={"project-icon"}
                            icon={faDev} /></a>
                </div>
            </span>
            <div className={"aboutme-img-container"}>
                <img src={userContext.userInfo.avatar_url} alt={"avatar"} />
            </div>
        </div>
    )
};

export default Aboutme;