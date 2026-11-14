function Experience() {
    const experiences = [
        {
            company: "VeroSource",
            role: "Software Developer",
            period: "January 2025 - August 2025",
            logo: "verosource.png",
            logoClasses: "w-full max-w-[200px]",
            responsibilities: [
                "Implemented vulnerability scanning and semantic release across projects",
                "Created and automated the renewal of TLS certificates for client and organization domains",
                "Performed infrastructure upgrades to ensure security and performance"
            ]
        },
        {
            company: "Sonrai Security",
            role: "Software Developer",
            period: "January 2024 - August 2024",
            logo: "sonrai.png",
            logoClasses: "w-full max-w-[180px]",
            responsibilities: [
                "Developed and maintained a cloud security platform",
                "Wrote end-to-end tests in JavaScript for web application",
                "Built a script to destroy unused resources nightly, reducing AWS, Azure, and GCP costs"
            ]
        },
        {
            company: "Irving Oil",
            role: "Software Developer",
            period: "May 2023 - August 2023",
            logo: "irving.png",
            logoClasses: "w-full max-w-[150px] filter brightness-0 invert",
            responsibilities: [
                "Developed and maintained a C# REST API",
                "Created and optimized SQL databases",
                "Created a new customer service workflow using AWS"
            ]
        },
        {
            company: "Irving Oil",
            role: "IT Planning & Stewardship",
            period: "May 2022 - August 2022",
            logo: "irving.png",
            logoClasses: "w-full max-w-[150px] filter brightness-0 invert",
            responsibilities: [
                "Designed and built the internal SharePoint site",
                "Created and worked with Power BI reports"
            ]
        }
    ];

    const ExperienceCard = ({ experience, index }) => (
        <div className="group relative">
            {/* Timeline dot and line for desktop */}
            <div className="hidden md:flex absolute left-0 top-0 bottom-0 flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-zinc-100 dark:border-black ring-1 ring-indigo-500/40 z-10"></div>
                {index < experiences.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-500/60 dark:from-indigo-400/50 to-transparent mt-2"></div>
                )}
            </div>

            {/* Card content */}
            <div className="md:ml-12 bg-white dark:bg-[#09090b] border border-zinc-200 dark:border-zinc-800/90 rounded-2xl p-6 hover:border-indigo-500 dark:hover:border-indigo-500/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] md:hover:translate-x-1.5">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center mb-2 md:mb-0">
                        <div className="bg-zinc-950 dark:bg-black p-4 rounded-xl border border-zinc-800">
                            <img 
                                src={experience.logo} 
                                alt={`${experience.company} logo`}
                                decoding="async"
                                className={experience.logoClasses}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-1">
                                {experience.company}
                            </h3>
                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-1.5">
                                {experience.role}
                            </h4>
                            <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                                {experience.period}
                            </p>
                        </div>

                        <ul className="space-y-2 text-zinc-700 dark:text-zinc-200 text-sm md:text-base">
                            {experience.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-1.5 flex-shrink-0">▸</span>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="scroll-mt-24 bg-transparent py-14 px-4" id="experience">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-3">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto"></div>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-6">
                    {experiences.map((experience, index) => (
                        <ExperienceCard 
                            key={index} 
                            experience={experience} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
