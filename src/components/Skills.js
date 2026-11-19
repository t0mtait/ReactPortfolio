import { useState } from 'react';

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const skills = {
        languages: {
            id: "languages",
            label: "Languages",
            color: "bg-indigo-600 text-white border-indigo-500 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/40 dark:hover:bg-indigo-500/25 dark:hover:border-indigo-400 hover:shadow-[0_0_15px_-2px_rgba(99,102,241,0.5)]",
            dot: "bg-indigo-500 dark:bg-indigo-400",
            items: ["JavaScript", "TypeScript", "Python", "Go", "Java", "C#", "SQL", "Bash"]
        },
        frontend: {
            id: "frontend",
            label: "Frontend",
            color: "bg-emerald-600 text-white border-emerald-500 dark:bg-emerald-500/15 dark:text-emerald-300 dark:border-emerald-500/40 dark:hover:bg-emerald-500/25 dark:hover:border-emerald-400 hover:shadow-[0_0_15px_-2px_rgba(16,185,129,0.5)]",
            dot: "bg-emerald-500 dark:bg-emerald-400",
            items: ["React", "Next.js", "Tailwind CSS"]
        },
        backend: {
            id: "backend",
            label: "Backend",
            color: "bg-amber-500 text-white border-amber-400 dark:bg-amber-500/15 dark:text-amber-300 dark:border-amber-500/40 dark:hover:bg-amber-500/25 dark:hover:border-amber-400 hover:shadow-[0_0_15px_-2px_rgba(245,158,11,0.5)]",
            dot: "bg-amber-500 dark:bg-amber-400",
            items: ["Node.js", "AI Agent Frameworks", "REST APIs", "PostgreSQL", "MongoDB"]
        },
        devops: {
            id: "devops",
            label: "DevOps & Cloud",
            color: "bg-rose-600 text-white border-rose-500 dark:bg-rose-500/15 dark:text-rose-300 dark:border-rose-500/40 dark:hover:bg-rose-500/25 dark:hover:border-rose-400 hover:shadow-[0_0_15px_-2px_rgba(244,63,94,0.5)]",
            dot: "bg-rose-500 dark:bg-rose-400",
            items: ["AWS", "GCP", "Azure", "Azure DevOps", "Docker", "Kubernetes", "GitLab CI/CD", "GitHub Actions", "PromQL"]
        },
        tools: {
            id: "tools",
            label: "Tools & Practices",
            color: "bg-cyan-600 text-white border-cyan-500 dark:bg-cyan-500/15 dark:text-cyan-300 dark:border-cyan-500/40 dark:hover:bg-cyan-500/25 dark:hover:border-cyan-400 hover:shadow-[0_0_15px_-2px_rgba(6,182,212,0.5)]",
            dot: "bg-cyan-500 dark:bg-cyan-400",
            items: ["Git", "Agile", "Test Automation"]
        }
    };

    const SkillBadge = ({ skill, colorClasses, categoryId }) => {
        const isDimmed = selectedCategory !== null && selectedCategory !== categoryId;
        const isHighlighted = selectedCategory === categoryId;

        return (
            <span
                className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-200 cursor-default select-none ${
                    isDimmed ? 'opacity-25 scale-95 blur-[0.5px]' : 'opacity-100'
                } ${isHighlighted ? 'scale-105 ring-2 ring-white/20' : ''} hover:-translate-y-1 hover:scale-105 ${colorClasses}`}
            >
                {skill}
            </span>
        );
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

                {/* Interactive Category Filter / Legend */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-8">
                    {Object.values(skills).map((cat) => {
                        const isActive = selectedCategory === cat.id;
                        return (
                            <button
                                key={cat.label}
                                type="button"
                                onClick={() => setSelectedCategory(isActive ? null : cat.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-200 ${
                                    isActive
                                        ? 'bg-zinc-200 dark:bg-zinc-800 border-indigo-500 scale-105 shadow-sm'
                                        : 'bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                                }`}
                                title={`Click to filter ${cat.label}`}
                            >
                                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot} transition-transform ${isActive ? 'scale-125' : ''}`}></span>
                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{cat.label}</span>
                            </button>
                        );
                    })}
                    {selectedCategory && (
                        <button
                            type="button"
                            onClick={() => setSelectedCategory(null)}
                            className="text-xs font-semibold px-2.5 py-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                        >
                            Reset filter ✕
                        </button>
                    )}
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap justify-center gap-3">
                    {skills.languages.items.map((skill, idx) => (
                        <SkillBadge key={`lang-${idx}`} skill={skill} colorClasses={skills.languages.color} categoryId={skills.languages.id} />
                    ))}
                    {skills.frontend.items.map((skill, idx) => (
                        <SkillBadge key={`front-${idx}`} skill={skill} colorClasses={skills.frontend.color} categoryId={skills.frontend.id} />
                    ))}
                    {skills.backend.items.map((skill, idx) => (
                        <SkillBadge key={`back-${idx}`} skill={skill} colorClasses={skills.backend.color} categoryId={skills.backend.id} />
                    ))}
                    {skills.devops.items.map((skill, idx) => (
                        <SkillBadge key={`devops-${idx}`} skill={skill} colorClasses={skills.devops.color} categoryId={skills.devops.id} />
                    ))}
                    {skills.tools.items.map((skill, idx) => (
                        <SkillBadge key={`tools-${idx}`} skill={skill} colorClasses={skills.tools.color} categoryId={skills.tools.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
