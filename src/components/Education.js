function Education() {

    const education = {
        institution: "University of New Brunswick",
        degree: "Bachelor of Computer Science",
        period: "2022 - 2026",
        highlights: [
            "Expected graduation: May 2026",
            "4x Dean's List",
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
        <section id="education" className="scroll-mt-24 bg-transparent py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto"></div>
                </div>

                {/* Education Card */}
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:bg-white/70 dark:hover:bg-white/10 hover:border-indigo-400/30 dark:hover:border-indigo-400/30 transition-all duration-300">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Logo placeholder */}
                            <div className="flex-shrink-0 w-full md:w-48 flex justify-center">
                                <div className="bg-gray-900 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-white/10">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-white mb-1">UNB</div>
                                        <div className="text-xs text-gray-400">Fredericton, NB</div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {education.institution}
                                </h3>
                                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                    {education.degree}
                                </p>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-6">
                                    {education.period}
                                </p>

                                {/* Highlights */}
                                <div className="space-y-2 mb-6">
                                    {education.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                            <span className="text-indigo-500 dark:text-indigo-400">✓</span>
                                            <span className="text-sm">{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Relevant Courses */}
                                <div className="flex flex-wrap gap-2">
                                    {education.courses.map((course, idx) => (
                                        <span 
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-white/20"
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
        </section>
    );
}

export default Education;
