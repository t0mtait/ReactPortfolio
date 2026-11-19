import { useRef } from 'react';

function Education() {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--mouse-x', `${x}px`);
        cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const education = {
        institution: "University of New Brunswick",
        degree: "Bachelor of Computer Science",
        period: "2022 - 2026",
        highlights: [
            "Graduated: May 2026",
            "Multi-time Dean's List Recipient",
            "Focus on software engineering and systems"
        ],
        courses: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Computer Networks",
            "Machine Learning",
            "Technology Entrepreneurship",
            "Big Data",
            "Data Mining"
        ]
    };

    return (
        <section id="education" className="scroll-mt-24 bg-transparent py-14 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-3">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto"></div>
                </div>

                {/* Education Card */}
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/90 rounded-2xl overflow-hidden hover:border-indigo-500 dark:hover:border-indigo-500/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]"
                >
                    <div className="p-8 relative z-10">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Logo */}
                            <div className="flex-shrink-0 w-full md:w-48 flex justify-center">
                                <div className="bg-zinc-950 dark:bg-black p-6 rounded-xl border border-zinc-800 transition-transform duration-300 hover:scale-105">
                                    <div className="text-center">
                                        <div className="text-3xl font-extrabold tracking-tight text-white mb-1">UNB</div>
                                        <div className="text-xs font-mono text-zinc-400">Fredericton, NB</div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-2">
                                    {education.institution}
                                </h3>
                                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1.5">
                                    {education.degree}
                                </p>
                                <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-6">
                                    {education.period}
                                </p>

                                {/* Highlights */}
                                <div className="mb-6">
                                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">Highlights</div>
                                    <ul className="space-y-2">
                                        {education.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-200">
                                                <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-1 flex-shrink-0">▸</span>
                                                <span className="leading-relaxed">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Key Courses */}
                                <div>
                                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">Relevant Coursework</div>
                                    <div className="flex flex-wrap gap-2">
                                        {education.courses.map((course, index) => (
                                            <span 
                                                key={index}
                                                className="px-3 py-1 text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-indigo-500/40 transition-colors"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
