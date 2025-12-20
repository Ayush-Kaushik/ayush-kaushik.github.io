import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

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

    return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default Article;