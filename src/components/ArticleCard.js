import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faDev} from "@fortawesome/free-brands-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({article}) => {
    return (
        <div className={"layout-card"}>
            <h1>{article.title}</h1>
            <div className={"layout-card-img"}>
                <img src={article.social_image} alt={"article"}/>
            </div>

            <span className={"layout-card-links"}>
                <p><FontAwesomeIcon
                    className={"project-icon"}
                    icon={faHeart}/>{"  " + article.positive_reactions_count}</p>
                <p>{article.description}</p>
                <a href={article.url}><FontAwesomeIcon className={"project-icon"}
                                                          icon={faDev}
                                                          size={"2x"}/> {"Read More"}</a>
            </span>
        </div>
    )
};

export default ArticleCard;