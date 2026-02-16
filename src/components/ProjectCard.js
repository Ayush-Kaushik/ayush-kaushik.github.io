import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200 dark:border-slate-700 flex flex-col h-full">
            {/* Header Section */}
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                {project.name}
            </h1>
            
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
                {project.updated_at}
            </p>

            {/* Topics/Tags Section */}
            {project.topics && project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.topics.map((topic, index) => (
                        <span
                            key={index}
                            className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold rounded-full border border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200"
                        >
                            {topic}
                        </span>
                    ))}
                </div>
            )}

            {/* Description Section */}
            {project.description && (
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>
            )}

            {/* Links Section */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                {project.html_url && (
                    <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                        View Source
                    </a>
                )}
                {project.homepage && (
                    <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                    >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" />
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;