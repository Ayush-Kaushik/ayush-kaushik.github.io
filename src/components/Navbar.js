import { RESUME_LINK } from '../constants/MenuItems';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { label: 'Home', href: '/#aboutme' },
        { label: 'Experience', href: '/#experience' },
        { label: 'Projects', href: '/#projects' },
        { label: 'Blogs', href: '/blogs' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex justify-between md:justify-center items-center h-20 sm:h-24">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex gap-2 lg:gap-4">
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.href}
                                    className="px-4 sm:px-5 lg:px-6 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200 whitespace-nowrap"
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

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden flex flex-col space-y-1.5 p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`block w-7 h-0.5 bg-slate-700 transition-transform duration-300 ${
                                isOpen ? 'rotate-45 translate-y-2.5' : ''
                            }`}
                        />
                        <span
                            className={`block w-7 h-0.5 bg-slate-700 transition-opacity duration-300 ${
                                isOpen ? 'opacity-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-7 h-0.5 bg-slate-700 transition-transform duration-300 ${
                                isOpen ? '-rotate-45 -translate-y-2.5' : ''
                            }`}
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-6">
                        <ul className="space-y-3">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-base sm:text-lg font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-all duration-200"
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