import React from 'react';
import {DEVTO_URL, LINKEDIN_URL, GITHUB_URL, COPYRIGHT} from "../constants/Footer";

const Footer = () => {
    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-slate-100 dark:text-slate-200 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24 lg:mt-32 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                {/* Links Section */}
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 pb-8 border-b border-slate-700 dark:border-slate-800">
                    <a
                        href={GITHUB_URL}
                        className="text-base sm:text-lg font-semibold text-slate-100 dark:text-slate-200 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        Github
                    </a>
                    <a
                        href={LINKEDIN_URL}
                        className="text-base sm:text-lg font-semibold text-slate-100 dark:text-slate-200 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                    <a
                        href={DEVTO_URL}
                        className="text-base sm:text-lg font-semibold text-slate-100 dark:text-slate-200 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                        Dev.to
                    </a>
                </div>

                {/* Copyright Section */}
                <div className="text-center">
                    <p className="text-sm sm:text-base text-slate-400 dark:text-slate-500">
                        {COPYRIGHT}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;