const ExperienceCard = ({ experience }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {experience.workTitle}
            </h1>
            
            <h2 className="text-base sm:text-lg text-slate-600 mb-6">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={experience.company.link}
                    className="text-blue-600 font-semibold hover:text-blue-700 hover:underline transition-colors duration-200"
                >
                    {experience.company.name}
                </a>
                <span className="text-slate-500"> | </span>
                <span className="text-slate-600">{experience.timeline}</span>
            </h2>

            {experience.description && (
                <ul className="space-y-3 text-slate-700">
                    {experience.description.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
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