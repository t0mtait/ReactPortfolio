import { useMediaQuery } from 'react-responsive'

function Skills() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const SkillBadge = ({ skill, colorClasses }) => (
        <span className={`px-4 py-2 text-sm font-medium text-white dark:text-gray-900 rounded-lg hover:scale-105 transition-all duration-200 ${colorClasses}`}>
            {skill}
        </span>
    );

    const skills = {
        languages: { label: "Languages", color: "bg-indigo-500 dark:bg-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-300", dot: "bg-indigo-500 dark:bg-indigo-400", items: ["TypeScript", "Python", "Go", "Java", "C#", "SQL", "Bash"] },
        frontend: { label: "Frontend", color: "bg-emerald-500 dark:bg-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-300", dot: "bg-emerald-500 dark:bg-emerald-400", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
        backend: { label: "Backend", color: "bg-amber-500 dark:bg-amber-400 hover:bg-amber-600 dark:hover:bg-amber-300", dot: "bg-amber-500 dark:bg-amber-400", items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"] },
        devops: { label: "DevOps & Cloud", color: "bg-rose-500 dark:bg-rose-400 hover:bg-rose-600 dark:hover:bg-rose-300", dot: "bg-rose-500 dark:bg-rose-400", items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"] },
        tools: { label: "Tools & Practices", color: "bg-cyan-500 dark:bg-cyan-400 hover:bg-cyan-600 dark:hover:bg-cyan-300", dot: "bg-cyan-500 dark:bg-cyan-400", items: ["Git", "Agile", "Test-Driven Development"] }
    };

    return (
        <section id="skills" className="scroll-mt-24 bg-transparent py-16 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3">
                        Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </div>

                {/* Legend */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {Object.values(skills).map((cat) => (
                        <div key={cat.label} className="flex items-center gap-2">
                            <span className={`w-3 h-3 rounded-full ${cat.dot}`}></span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{cat.label}</span>
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
