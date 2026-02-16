import ArticleCard from "../components/ArticleCard";
import { ARTICLES as posts } from "../constants/Articles";

const Articles = () => {
    return (
        <section id="articles" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-slate-900">
                    Articles
                </h1>
                
                <div className="space-y-8 md:space-y-10">
                    {posts.map((post) => (
                        <ArticleCard article={post} key={post.postId} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;