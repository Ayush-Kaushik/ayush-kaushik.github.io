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
            <article className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-sm sm:prose-base lg:prose-lg prose-slate max-w-none">
                        <ReactMarkdown
                            components={{
                                h1: ({ node, children, ...props }) => <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-slate-900" {...props}>{children}</h1>,
                                h2: ({ node, children, ...props }) => <h2 className="text-3xl sm:text-4xl font-bold mb-4 mt-8 text-slate-900" {...props}>{children}</h2>,
                                h3: ({ node, children, ...props }) => <h3 className="text-2xl sm:text-3xl font-bold mb-3 mt-6 text-slate-900" {...props}>{children}</h3>,
                                p: ({ node, ...props }) => <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc list-inside text-base sm:text-lg text-slate-700 mb-6 space-y-2" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-base sm:text-lg text-slate-700 mb-6 space-y-2" {...props} />,
                                li: ({ node, ...props }) => <li className="text-base sm:text-lg text-slate-700" {...props} />,
                                blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-blue-600 pl-4 py-2 my-6 italic text-slate-700 bg-slate-50 rounded-r-lg" {...props} />,
                                code: ({ node, inline, ...props }) => 
                                    inline ? (
                                        <code className="bg-slate-100 text-red-600 px-2 py-1 rounded font-mono text-sm" {...props} />
                                    ) : (
                                        <code className="block bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto font-mono text-sm mb-6 my-4" {...props} />
                                    ),
                                a: ({ node, children, ...props }) => <a className="text-blue-600 hover:text-blue-700 hover:underline transition-colors duration-200" {...props}>{children}</a>,
                                img: ({ node, alt, ...props }) => <img alt={alt || ""} className="max-w-full h-auto rounded-lg my-6 shadow-md" {...props} />,
                                hr: ({ node, ...props }) => <hr className="my-8 border-slate-300" {...props} />,
                                table: ({ node, ...props }) => <div className="overflow-x-auto my-6"><table className="border-collapse border border-slate-300 w-full" {...props} /></div>,
                                th: ({ node, ...props }) => <th className="border border-slate-300 bg-slate-100 px-4 py-2 text-left font-semibold text-slate-900" {...props} />,
                                td: ({ node, ...props }) => <td className="border border-slate-300 px-4 py-2 text-slate-700" {...props} />,
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>
        </div>

    );
};

export default Article;