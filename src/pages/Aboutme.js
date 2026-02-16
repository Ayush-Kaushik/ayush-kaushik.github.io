import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { RESUME_LINK } from "../constants/MenuItems";

const Aboutme = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-4">
            <div className="text-center max-w-4xl">
                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-900">
                    Hi, I'm Ayush Kaushik
                </h1>

                <h2 className="text-sm sm:text-lg md:text-3xl lg:text-4xl font-semibold text-slate-700 mb-10 sm:mb-12 md:mb-14">
                    I'm a Software Engineer <span className="text-blue-600 font-bold">@OpenText</span>
                </h2>

                <div className="flex justify-center">
                    <a
                        href={RESUME_LINK}
                        download
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <FontAwesomeIcon icon={faDownload} />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Aboutme;
