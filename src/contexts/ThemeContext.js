import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Dark mode is default for everyone regardless of system or browser preference
        try {
            const savedTheme = localStorage.getItem('theme');
            return savedTheme ? savedTheme === 'dark' : true;
        } catch (e) {
            return true;
        }
    });

    useEffect(() => {
        // Save to local storage and update document class
        try {
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        } catch (e) {}
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
