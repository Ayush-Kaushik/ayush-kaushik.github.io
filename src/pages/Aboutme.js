import { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import { AnalyticsContext } from "../context/AnalyticsContext";
import Emoji from "../components/Emoji";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin, faDev } from "@fortawesome/free-brands-svg-icons";
import { logEvent } from 'firebase/analytics';

const Aboutme = () => {
    const userContext = useContext(UserContext);
    const { analytics } = useContext(AnalyticsContext);

    const handleExternalLinkClick = (platform) => {
        if (analytics) {
            logEvent(analytics, 'external_link_click', {
                platform: platform
            });
        }
    };

    return (
        <div>
            <div
                className={"aboutme-container"}
            >
                <span>
                    <h1>{"Hi! I'm Ayush Kaushik"}<Emoji symbol={"👋"} label={"wave"} className={"about-me-wave-icon"} /></h1>
                    <h2>{"I'm a Software Engineer @ OpenText."}</h2>
                    <div>
                        <a href={userContext.userInfo.html_url} onClick={() => handleExternalLinkClick('GitHub')}><FontAwesomeIcon className={"project-icon"}
                            icon={faGithubSquare} /></a>
                        <a href={"https://www.linkedin.com/in/ayushkaushik"} onClick={() => handleExternalLinkClick('LinkedIn')}><FontAwesomeIcon
                            className={"project-icon"}
                            icon={faLinkedin} /></a>
                        <a href={"https://dev.to/ayushkaushik"} onClick={() => handleExternalLinkClick('Dev.to')}><FontAwesomeIcon className={"project-icon"}
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