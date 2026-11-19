function About() {
    return (
        <section id="about" className="scroll-mt-24 bg-transparent py-14 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left space-y-6">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 radar-dot" />
                            <span>Available for new opportunities</span>
                        </div>

                        <div>
                            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white mb-3 lg:mb-4 leading-tight">
                                Hi, I'm Tom!
                            </h1>
                            <h2 className="text-xl sm:text-2xl xl:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                                IT Professional
                            </h2>
                        </div>

                        <p className="text-zinc-600 dark:text-zinc-300 text-base lg:text-lg leading-relaxed max-w-2xl lg:max-w-xl mx-auto lg:mx-0">
                            UNB Computer Science graduate with 24 months of professional experience.
                            I enjoy building full-stack applications, automating infrastructure, and applying machine learning to solve real problems.
                        </p>

                        {/* Interactive Highlights / Metric Chips */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                            <div className="px-3.5 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200">
                                <span className="block text-lg font-extrabold text-indigo-600 dark:text-indigo-400">24+</span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Months Experience</span>
                            </div>
                            <div className="px-3.5 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200">
                                <span className="block text-lg font-extrabold text-indigo-600 dark:text-indigo-400">4</span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Production Projects</span>
                            </div>
                            <div className="px-3.5 py-2 rounded-xl bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm shadow-sm hover:border-indigo-500 dark:hover:border-indigo-400 hover:-translate-y-0.5 transition-all duration-200">
                                <span className="block text-lg font-extrabold text-indigo-600 dark:text-indigo-400">100%</span>
                                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Automated Tests</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center lg:justify-start gap-4 flex-wrap pt-2 lg:pt-4">
                            <a
                                href="https://github.com/t0mtait"
                                className="group inline-flex items-center gap-2.5 px-6 lg:px-7 py-3 lg:py-3.5 text-sm lg:text-base font-semibold text-zinc-900 dark:text-white bg-white dark:bg-[#09090b] border border-zinc-300 dark:border-zinc-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.35)] transition-all duration-200 hover:-translate-y-0.5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tom-tait/"
                                className="group inline-flex items-center gap-2.5 px-6 lg:px-7 py-3 lg:py-3.5 text-sm lg:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-500 rounded-xl shadow-sm hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)] transition-all duration-200 hover:-translate-y-0.5"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image with Glowing Aura Ring */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <div className="relative group">
                            {/* Ambient glowing backlight ring */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full lg:rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
                            <div className="relative">
                                <img
                                    src="tomtait.png"
                                    alt="Tom Tait"
                                    className="w-48 h-48 lg:w-full lg:h-auto lg:max-w-md object-cover rounded-full lg:rounded-2xl border-2 border-indigo-500/50 dark:border-zinc-800 shadow-2xl group-hover:scale-[1.02] group-hover:border-indigo-400 transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
