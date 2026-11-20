import { useRef } from 'react';

function Experience() {
    const timelineItems = [
        {
            year: "2026",
            company: "University of New Brunswick",
            role: "Graduated — Bachelor of Computer Science",
            period: "2022 - May 2026",
            isEducation: true,
            badgeText: "UNB",
            badgeSub: "Fredericton, NB",
            responsibilities: [
                "Graduated: May 2026",
                "Multi-time Dean's List Recipient",
                "Focus on software engineering, distributed systems, and machine learning"
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
        },
        {
            year: "2025",
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
            year: "2024",
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
            year: "2023",
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
            year: "2022",
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

    const TimelineCard = ({ item, index }) => {
        const cardRef = useRef(null);

        const handleMouseMove = (e) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardRef.current.style.setProperty('--mouse-x', `${x}px`);
            cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        const isLast = index === timelineItems.length - 1;

        return (
            <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-8 group">
                {/* Year Label to the left of the timeline node (Desktop) */}
                <div className="hidden md:flex flex-col items-end justify-start pt-6 w-20 flex-shrink-0">
                    <span className="font-mono text-xl font-extrabold text-indigo-600 dark:text-indigo-400 tracking-tight group-hover:scale-110 transition-transform">
                        {item.year}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">
                        {item.isEducation ? 'GRAD' : 'WORK'}
                    </span>
                </div>

                {/* Vertical Timeline Track & Node */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0 relative">
                    {/* Glowing Timeline Dot */}
                    <div className="relative z-10 mt-7 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-zinc-100 dark:border-black ring-2 ring-indigo-500/40 group-hover:ring-indigo-400 group-hover:scale-125 transition-all duration-300" />
                        <div className="absolute -inset-1 rounded-full bg-indigo-500/20 blur-sm group-hover:bg-indigo-500/50 transition-colors" />
                    </div>
                    {/* Connecting vertical line */}
                    {!isLast && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-500/60 dark:from-indigo-400/50 via-indigo-500/30 to-indigo-500/10 mt-2 min-h-[140px]" />
                    )}
                </div>

                {/* Mobile Year Badge */}
                <div className="flex md:hidden items-center gap-3 mb-1">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 font-mono text-sm font-bold">
                        {item.year}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                        {item.isEducation ? 'Education & Graduation' : item.period}
                    </span>
                </div>

                {/* Card Content */}
                <div className="flex-1 pb-8">
                    <div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        className="spotlight-card bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/90 rounded-2xl p-6 sm:p-7 hover:border-indigo-500 dark:hover:border-indigo-500/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)] md:hover:translate-x-1.5"
                    >
                        <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                            {/* Logo / Badge */}
                            <div className="flex-shrink-0 w-full md:w-auto flex justify-center mb-2 md:mb-0">
                                <div className="bg-zinc-950 dark:bg-black p-4 rounded-xl border border-zinc-800 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center min-w-[130px] min-h-[85px]">
                                    {item.isEducation ? (
                                        <div className="text-center px-4 py-1">
                                            <div className="text-2xl font-black tracking-tight text-white">{item.badgeText}</div>
                                            <div className="text-[10px] font-mono text-zinc-400">{item.badgeSub}</div>
                                        </div>
                                    ) : (
                                        <img 
                                            src={item.logo} 
                                            alt={`${item.company} logo`}
                                            decoding="async"
                                            className={item.logoClasses}
                                        />
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="text-center md:text-left">
                                    <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 mb-1">
                                        <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                                            {item.company}
                                        </h3>
                                        <span className="hidden md:inline-block font-mono text-xs px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
                                            {item.period}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                                        {item.role}
                                    </h4>
                                </div>

                                <ul className="space-y-2 text-zinc-700 dark:text-zinc-200 text-sm md:text-base mb-4">
                                    {item.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-1.5 flex-shrink-0">▸</span>
                                            <span className="leading-relaxed">{resp}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Relevant Coursework for Education */}
                                {item.courses && (
                                    <div className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
                                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
                                            Relevant Coursework
                                        </span>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.courses.map((course, cIdx) => (
                                                <span
                                                    key={cIdx}
                                                    className="px-2.5 py-1 text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-md"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="scroll-mt-24 bg-transparent py-14 px-4" id="experience">
            <div className="max-w-6xl mx-auto">
                {/* Section Header with Launching Rocket Icon */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shadow-lg shadow-indigo-500/10 hover:scale-110 transition-transform">
                            {/* Animated / styled Rocket icon launching to the left of Experience */}
                            <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m-4.5 13.5L5 21m11.5-3.5L19 21" />
                            </svg>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400">
                            Experience & Timeline
                        </h2>
                    </div>
                    <div className="w-28 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto mb-3"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
                        Career journey, university graduation, and software engineering roles
                    </p>
                </div>

                {/* Timeline Header Track (Rocket Launch Indicator on the timeline rail) */}
                <div className="relative pl-0 md:pl-2">
                    <div className="hidden md:flex items-center gap-8 mb-4">
                        <div className="w-20 text-right font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                            Timeline
                        </div>
                        <div className="w-5 flex justify-center">
                            {/* Rocket at the top of the vertical timeline */}
                            <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.6)] -ml-1.5" title="Launch Timeline">
                                <span className="text-base transform -rotate-45 block">🚀</span>
                            </div>
                        </div>
                        <div className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold">
                            Current to 2022
                        </div>
                    </div>

                    {/* Timeline entries list */}
                    <div className="space-y-2">
                        {timelineItems.map((item, index) => (
                            <TimelineCard 
                                key={index} 
                                item={item} 
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
