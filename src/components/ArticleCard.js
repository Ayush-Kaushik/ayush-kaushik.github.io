import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200 flex flex-col h-full">
            {/* Title Section */}
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 line-clamp-2">
                {article.title}
            </h1>
            
            {/* Description Section */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 flex-grow line-clamp-3">
                {article.description}
            </p>

            {/* Metadata Section */}
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-6 pt-4 border-t border-slate-200">
                <FontAwesomeIcon icon={faBookReader} className="text-blue-600" />
                <span className="font-medium">{article.reading_time_minutes} min read</span>
            </div>

            {/* Link Section */}
            <Link
                to={`/blog/${article.postId}`}
                className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors duration-200"
            >
                Read More
                <span className="sr-only"> {article.title}</span>
            </Link>
        </div>
    );
};

export default ArticleCard;