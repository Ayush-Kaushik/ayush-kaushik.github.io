import ArticleCard from "../components/ArticleCard";
import { ARTICLES as posts } from "../constants/Articles";

const Articles = () => {
    return (<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {posts.map((post) => {
            return (<ArticleCard article={post} key={post.postId} />);
        })}
    </div>);
};

export default Articles;