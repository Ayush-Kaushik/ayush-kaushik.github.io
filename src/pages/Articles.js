import ArticleCard from "../components/ArticleCard";

const posts = [
    {
        postId: "ai-learning-strategy-and-rag-my-2-cents",
        title: "AI Learning Strategy and RAG: My 2 Cents",
        description: "A deep dive into my approach to learning AI and the role of Retrieval-Augmented Generation (RAG) in my journey.",
        social_image: "/images/ai-learning-strategy-and-rag-my-2-cents.jpg",
        positive_reactions_count: 12,
        reading_time_minutes: 8
    }
];

const Articles = () => {
    return (<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {posts.map((post) => {
            return (<ArticleCard article={post} key={post.postId} />);
        })}
    </div>);
};

export default Articles;