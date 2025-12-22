import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import ReadingProgressBar from "./ReadingProgressBar";

const Article = () => {

    const { postId } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/posts/${postId}.md`)
            .then((res) => {
                return res.text()
            })
            .then((text) => setContent(text))
            .catch((err) => console.log(err));
    }, [postId]);

    return (
        <div>
            <ReadingProgressBar />
            <div className="article-container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        </div>
        
    );
};

export default Article;