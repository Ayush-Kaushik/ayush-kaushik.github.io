import { RESUME_LINK } from '../constants/MenuItems';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { label: 'Home', href: '/#aboutme' },
        { label: 'Experience', href: '/#experience' },
        { label: 'Projects', href: '/#projects' },
        { label: 'Blogs', href: '/blogs' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 shadow-lg transition-colors duration-300 ${
            isDarkMode ? 'bg-slate-900' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between md:justify-center items-center h-20 sm:h-24 relative">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-2 lg:gap-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.href}
                                    className={`px-4 sm:px-5 lg:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                                        isDarkMode
                                            ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'
                                            : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a
                                href={RESUME_LINK}
                                download
                                className="px-5 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>

                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className={`md:absolute md:right-4 lg:right-8 p-2 sm:p-3 rounded-lg transition-all duration-200 ${
                            isDarkMode
                                ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                        }`}
                        aria-label="Toggle dark mode"
                        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="text-lg" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className={`md:hidden flex flex-col space-y-1.5 p-2 rounded-lg transition-colors ${
                            isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                        }`}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`block w-7 h-0.5 transition-transform duration-300 ${
                                isDarkMode ? 'bg-slate-300' : 'bg-slate-700'
                            } ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                        />
                        <span
                            className={`block w-7 h-0.5 transition-opacity duration-300 ${
                                isDarkMode ? 'bg-slate-300' : 'bg-slate-700'
                            } ${isOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block w-7 h-0.5 transition-transform duration-300 ${
                                isDarkMode ? 'bg-slate-300' : 'bg-slate-700'
                            } ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className={`md:hidden pb-6 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 ${
                                            isDarkMode
                                                ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-800'
                                                : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={RESUME_LINK}
                                    download
                                    className="block px-4 py-3 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;