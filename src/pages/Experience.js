import { EXPERIENCE } from "../constants/Experience";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceHackathonCard from "../components/ExperienceHackathonCard";

const Experience = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 sm:mb-16 text-slate-900 dark:text-white">
                    Experience
                </h1>
                
                <div className="space-y-8 md:space-y-12">
                    {EXPERIENCE.map((item, index) => {
                        if (item.type === "hackathon") {
                            return (
                                <ExperienceHackathonCard key={index} experience={item.data} />
                            )
                        }

                        return (
                            <ExperienceCard key={index} experience={item.data} />
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;