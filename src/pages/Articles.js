import ArticleCard from "../components/ArticleCard";
import { ARTICLES as posts } from "../constants/Articles";

const Articles = () => {
    return (<div className="articles-container">
        {posts.map((post) => {
            return (<ArticleCard article={post} key={post.postId} />);
        })}
    </div>);
};

export default Articles;