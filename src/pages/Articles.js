import {useContext} from 'react';
import {ArticleContext} from "../context/ArticlesContext";
import ArticleCard from "../components/ArticleCard";
import {Element} from "react-scroll";

const Articles = () => {
    const articleContext = useContext(ArticleContext);

    return (
        <Element name={"articles"}>
            <div className={"layout-page"}>
                <h1>{"Blogs"}</h1>
                {
                    articleContext.articles.map(article => <ArticleCard key={article.id} article={article}/>)
                }</div>
        </Element>
    )
};


export default Articles;