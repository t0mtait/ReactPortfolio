function Skills() {

    const SkillBadge = ({ skill, colorClasses }) => (
        <span className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 hover:-translate-y-0.5 ${colorClasses}`}>
            {skill}
        </span>
    );

    const skills = {
        languages: {
            label: "Languages",
            color: "bg-indigo-600 text-white border-indigo-500 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/40 dark:hover:bg-indigo-500/25 dark:hover:border-indigo-400",
            dot: "bg-indigo-500 dark:bg-indigo-400",
            items: ["JavaScript", "Python", "Java", "C#", "SQL", "Bash"]
        },
        frontend: {
            label: "Frontend",
            color: "bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/40 dark:hover:bg-emerald-500/25 dark:hover:border-emerald-400",
            dot: "bg-emerald-500 dark:bg-emerald-400",
            items: ["React", "Next.js", "Tailwind CSS"]
        },
        backend: {
            label: "Backend",
            color: "bg-amber-500 text-white border-amber-400 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/40 dark:hover:bg-amber-500/25 dark:hover:border-amber-400",
            dot: "bg-amber-500 dark:bg-amber-400",
            items: ["Node.js", "AI Agent Frameworks", "REST APIs", "PostgreSQL", "MongoDB"]
        },
        devops: {
            label: "DevOps & Cloud",
            color: "bg-rose-600 text-white border-rose-500 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/40 dark:hover:bg-rose-500/25 dark:hover:border-rose-400",
            dot: "bg-rose-500 dark:bg-rose-400",
            items: ["AWS", "GCP", "Azure", "Azure DevOps", "Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions", "PromQL"]
        },
        tools: {
            label: "Tools & Practices",
            color: "bg-cyan-600 text-white border-cyan-500 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/40 dark:hover:bg-cyan-500/25 dark:hover:border-cyan-400",
            dot: "bg-cyan-500 dark:bg-cyan-400",
            items: ["Git", "Agile", "Test Automation"]
        }
    };

    return (
        <section id="skills" className="scroll-mt-24 bg-transparent py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-3">
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto mb-4"></div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-5 mb-8">
                    {Object.values(skills).map((cat) => (
                        <div key={cat.label} className="flex items-center gap-2">
                            <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`}></span>
                            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-300">{cat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.languages.items.map((skill, idx) => (
                        <SkillBadge key={`lang-${idx}`} skill={skill} colorClasses={skills.languages.color} />
                    ))}
                    {skills.frontend.items.map((skill, idx) => (
                        <SkillBadge key={`front-${idx}`} skill={skill} colorClasses={skills.frontend.color} />
                    ))}
                    {skills.backend.items.map((skill, idx) => (
                        <SkillBadge key={`back-${idx}`} skill={skill} colorClasses={skills.backend.color} />
                    ))}
                    {skills.devops.items.map((skill, idx) => (
                        <SkillBadge key={`devops-${idx}`} skill={skill} colorClasses={skills.devops.color} />
                    ))}
                    {skills.tools.items.map((skill, idx) => (
                        <SkillBadge key={`tools-${idx}`} skill={skill} colorClasses={skills.tools.color} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
