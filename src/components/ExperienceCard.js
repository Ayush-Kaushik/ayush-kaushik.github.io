const ExperienceCard = ({ experience }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200 dark:border-slate-700">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {experience.workTitle}
            </h1>
            
            <h2 className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={experience.company.link}
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors duration-200"
                >
                    {experience.company.name}
                </a>
                <span className="text-slate-500 dark:text-slate-500"> | </span>
                <span className="text-slate-600 dark:text-slate-400">{experience.timeline}</span>
            </h2>

            {experience.description && (
                <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {experience.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm sm:text-base leading-relaxed">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExperienceCard;