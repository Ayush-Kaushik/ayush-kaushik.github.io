import { TECHNICAL_SKILLS } from "../constants/Skills";

const Skills = () => {
    const skillCategories = [
        { title: "Programming Languages", data: TECHNICAL_SKILLS.programming_languages },
        { title: "Markup Languages", data: TECHNICAL_SKILLS.markup_languages },
        { title: "Frameworks", data: TECHNICAL_SKILLS.frameworks },
        { title: "Automation", data: TECHNICAL_SKILLS.automation },
        { title: "Other Tools", data: TECHNICAL_SKILLS.other },
    ];

    return (
        <section id="skills" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-slate-900">
                    Skills
                </h1>

                <div className="space-y-8 md:space-y-10">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 md:p-8 border border-slate-200">
                            {/* Category Title */}
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                                {category.title}
                            </h2>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {category.data.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group px-4 py-3 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all duration-200 cursor-default"
                                    >
                                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                                            {item.label}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                            {item.toolTip}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;