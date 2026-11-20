import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 140;
            const nearBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

            if (nearBottom) {
                setActiveSection(navLinks[navLinks.length - 1].id);
                return;
            }

            let currentSection = navLinks[0].id;
            for (const link of navLinks) {
                const element = document.getElementById(link.id);
                if (element && element.offsetTop <= scrollPosition) {
                    currentSection = link.id;
                }
            }
            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsMenuOpen(false);
    };

    const handleBrandClick = (e) => {
        e.preventDefault();
        setActiveSection('about');
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.history.pushState) {
            window.history.pushState(null, '', window.location.pathname);
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/90 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#about"
                        onClick={handleBrandClick}
                        className="flex items-center space-x-3 group focus:outline-none"
                        aria-label="Scroll to top"
                    >
                        <div className="flex items-center justify-center w-10 h-10 bg-indigo-50 dark:bg-zinc-950 border border-indigo-300 dark:border-indigo-500/40 rounded-lg group-hover:border-indigo-500 dark:group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_-3px_rgba(99,102,241,0.4)] transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="text-indigo-600 dark:text-indigo-400" viewBox="0 0 16 16">
                                <path
                                    d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                            </svg>
                        </div>
                        <span className="text-zinc-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 text-xl font-extrabold tracking-tight transition-colors duration-300">tomjt.com</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        <ul className="flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.id;
                                return (
                                    <li key={link.id}>
                                        <a
                                            href={link.href}
                                            onClick={() => handleNavClick(link.id)}
                                            aria-current={isActive ? 'page' : undefined}
                                            className={`px-3.5 py-2 rounded-lg transition-all duration-200 font-semibold text-sm ${
                                                isActive
                                                    ? 'text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/30'
                                                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent'
                                            }`}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        
                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle-btn p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-all duration-200 ml-2"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <svg className="theme-icon-swap w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="theme-icon-swap w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle-btn p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-500/60 transition-all duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <svg className="theme-icon-swap w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="theme-icon-swap w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-200"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-3 pt-2 pb-3 space-y-1 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => handleNavClick(link.id)}
                                aria-current={isActive ? 'page' : undefined}
                                className={`block px-4 py-3 rounded-lg transition-all duration-200 font-semibold ${
                                    isActive
                                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/15'
                                        : 'text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                                }`}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
