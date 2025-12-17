import { useContext } from 'react';
import { ArticleContext } from "../context/ArticlesContext";
import ArticleCard from "../components/ArticleCard";

const Articles = () => {
    const articleContext = useContext(ArticleContext);

    return (
        <div id="articles">

            <div className={"layout-page"}>
                <h1>{"Blogs"}</h1>
                {
                    articleContext.articles.map(article => <ArticleCard key={article.id} article={article} />)
                }
            </div>
        </div>
    )
};


export default Articles;