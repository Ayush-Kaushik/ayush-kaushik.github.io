import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faBookReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <div className={"layout-card"}>
            <div className={"layout-card-img"}>
                <img src={article.social_image} alt={"article"} />
            </div>

            <h1>{article.title}</h1>
            <p>{article.description}</p>

            <div className={"layout-card-metadata"}>
                <p><FontAwesomeIcon className={"project-icon"} icon={faHeart} />{"  " + article.positive_reactions_count + " reactions"}</p>
                <p><FontAwesomeIcon className={"project-icon"} icon={faBookReader} />{"  " + article.reading_time_minutes + " min read"}</p>
            </div>

            <span className={"layout-card-links"}>
                <Link to={`/blog/${article.postId}`} style={{ textDecoration: "none" }}><FontAwesomeIcon className={"project-icon"} icon={faDev} /> {"Read More"}
                    <span className="sr-only"> {article.title}</span></Link>
            </span>
        </div>
    )
};

export default ArticleCard;