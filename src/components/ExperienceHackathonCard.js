import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactMarkdown from 'react-markdown';

const ExperienceHackathonCard = ({ experience }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            {/* Header Section */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {experience.workTitle}
            </h1>
            
            <h2 className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6">
                <a 
                    href={experience.company.link}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                >
                    {experience.company.name}
                </a>
                <span className="text-slate-500 dark:text-slate-500"> | </span>
                <span className="text-slate-600 dark:text-slate-400">{experience.timeline}</span>
            </h2>

            {/* Challenge Section */}
            <div className="mb-6">
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    <ReactMarkdown components={{
                        p: ({ node, ...props }) => <span {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                    }}>
                        {experience.challenge}
                    </ReactMarkdown>
                </p>
            </div>

            {/* Description Section */}
            <div className="mb-8">
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    <ReactMarkdown components={{
                        p: ({ node, ...props }) => <span {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                    }}>
                        {experience.description}
                    </ReactMarkdown>
                </p>
            </div>

            {/* Responsibilities Section */}
            <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Responsibilities
                </h3>
                {experience.responsibilities && (
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        {experience.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-sm sm:text-base leading-relaxed">
                                    <ReactMarkdown components={{
                                        p: ({ node, ...props }) => <span {...props} />,
                                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                                    }}>
                                        {item}
                                    </ReactMarkdown>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Outcome Section */}
            <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-4">
                    Outcome
                </h3>
                {experience.outcome && (
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        {experience.outcome.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <span className="text-sm sm:text-base leading-relaxed">
                                    <ReactMarkdown components={{
                                        p: ({ node, ...props }) => <span {...props} />,
                                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                                    }}>
                                        {item}
                                    </ReactMarkdown>
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Links Section */}
            {experience.project.repository_url && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <a
                        href={experience.project.repository_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        GitHub Repository
                    </a>
                </div>
            )}
        </div>
    );
};

export default ExperienceHackathonCard;