import { useRef } from 'react';

function Projects() {
    const projects = [
        {
            id: "01",
            category: "Full-Stack Healthcare App",
            title: "SupplementDB",
            description: "Auth-first healthcare platform to track, analyse, and share personal supplement stacks synchronized to HAPI FHIR R4 and MongoDB with daily wellness check-ins.",
            technologies: ["Next.js", "HAPI-FHIR", "MongoDB", "Auth0", "Docker"],
            highlights: [
                "Personal stack stored as FHIR MedicationStatement resources mirrored in MongoDB",
                "Daily wellness check-in system with 90-day mood, energy, sleep, and circadian habit tracking",
                "Auth0 authentication, automated research ingestion, and drug-supplement interaction checking"
            ],
            visitUrl: "https://supplementdb.app",
            accentBar: "from-indigo-500 via-violet-500 to-cyan-400",
            badgeStyle: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            )
        },
        {
            id: "02",
            category: "Machine Learning",
            title: "NBA Win Predictor",
            description: "Flask web app training a logistic-regression model on 69,000+ historical NBA team box scores with an interactive What-If Game Win Simulator.",
            technologies: ["Python", "Flask", "scikit-learn", "Docker", "REST API"],
            highlights: [
                "Scikit-learn Pipeline (StandardScaler + Logistic Regression) trained on 69,000+ historical box scores",
                "Interactive What-If Game Win Simulator scoring hypothetical game stats against the live model",
                "Automated retraining pipeline ingesting Kaggle dataset and live ESPN box score APIs"
            ],
            githubUrl: "https://github.com/t0mtait/nba-ai",
            visitUrl: "https://nba.tomjt.com",
            accentBar: "from-emerald-400 via-teal-500 to-cyan-500",
            badgeStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: "03",
            category: "Full-Stack Web App",
            title: "smpl",
            description: "Personal inventory and decluttering web app to track possessions, calculate declutter scores, and log sales.",
            technologies: ["Next.js", "React", "SQLite", "Tailwind CSS"],
            highlights: [
                "Track possessions, usage cadences, and estimated item values",
                "Weighted declutter scoring algorithm to recommend items to offload",
                "Self-hosted architecture using Next.js and Node 22 built-in SQLite"
            ],
            githubUrl: "https://github.com/t0mtait/smpl",
            visitUrl: "https://gosmpl.app",
            accentBar: "from-amber-400 via-orange-500 to-rose-500",
            badgeStyle: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            )
        },
        {
            id: "04",
            category: "QA & Automation",
            title: "Testing",
            description: "Automated tests to ensure proper functionality across all my projects. Built with Playwright.",
            technologies: ["Playwright", "JavaScript", "E2E Testing"],
            highlights: [
                "End-to-end automated test suites with Playwright",
                "Verifies functionality and accessibility across all projects",
                "Automated HTML test reporting and assertions"
            ],
            githubUrl: "https://github.com/t0mtait/testing",
            accentBar: "from-cyan-400 via-indigo-500 to-purple-500",
            badgeStyle: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        }
    ];

    const GitHubIcon = () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
        </svg>
    );

    const ExternalLinkIcon = () => (
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
    );

    const ProjectCard = ({ project }) => {
        const cardRef = useRef(null);

        const handleMouseMove = (e) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            cardRef.current.style.setProperty('--mouse-x', `${x}px`);
            cardRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        return (
            <div className="group h-full">
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    className="spotlight-card relative h-full flex flex-col bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/90 rounded-2xl overflow-hidden hover:border-indigo-500 dark:hover:border-indigo-500/80 transition-all duration-300 shadow-sm hover:shadow-[0_0_35px_-8px_rgba(99,102,241,0.35)] hover:-translate-y-1"
                >
                    {/* Crisp Top Gradient Accent Line */}
                    <div className={`h-1 w-full bg-gradient-to-r ${project.accentBar}`} />

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between gap-6 relative z-10">
                        <div className="space-y-5">
                            {/* Header: Icon + Category + Title + Index */}
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3.5">
                                    <div className={`flex items-center justify-center w-11 h-11 rounded-xl border ${project.badgeStyle} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-1`}>
                                        {project.icon}
                                    </div>
                                    <div>
                                        <span className="block text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-0.5">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>
                                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 select-none">
                                    {project.id}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
                                {project.description}
                            </p>

                            {/* Recessed Spec / Highlights Panel */}
                            <div className="bg-zinc-50/80 dark:bg-black/60 border border-zinc-200/80 dark:border-zinc-800/90 rounded-xl p-4 transition-colors group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
                                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-semibold mb-2.5 flex items-center justify-between">
                                    <span>Key Highlights</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                                </div>
                                <ul className="space-y-2 text-zinc-700 dark:text-zinc-200 text-sm">
                                    {project.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-xs mt-1 flex-shrink-0">▸</span>
                                            <span className="leading-relaxed">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Footer: Tech Stack + Action Links */}
                        <div className="space-y-4 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-xs font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 rounded-md hover:border-indigo-500/40 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-500 transition-all duration-200 hover:shadow-md"
                                    >
                                        <GitHubIcon />
                                        <span>View on GitHub</span>
                                    </a>
                                )}
                                {project.visitUrl && (
                                    <a
                                        href={project.visitUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 rounded-lg shadow-sm hover:shadow-[0_0_22px_-3px_rgba(99,102,241,0.65)] transition-all duration-200"
                                    >
                                        <span>Visit Site</span>
                                        <ExternalLinkIcon />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="scroll-mt-24 bg-transparent py-14 px-4" id="projects">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-3">
                        Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto mb-4"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                        A showcase of my development work and technical projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
