import { useMediaQuery } from 'react-responsive'

function Skills() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const skillCategories = [
        {
            name: "Languages",
            skills: ["TypeScript", "Python", "Go", "Java", "C#", "SQL", "Bash"]
        },
        {
            name: "Frontend",
            skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "React Native"]
        },
        {
            name: "Backend",
            skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"]
        },
        {
            name: "DevOps & Cloud",
            skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
        },
        {
            name: "Tools & Practices",
            skills: ["Git", "Agile", "Test-Driven Development", "Security Best Practices", "Semantic Versioning"]
        }
    ];

    const SkillBadge = ({ skill }) => (
        <span className="px-4 py-2 text-sm font-medium bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 text-gray-700 dark:text-gray-300 rounded-lg hover:border-indigo-400 dark:hover:border-indigo-400/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-105">
            {skill}
        </span>
    );

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

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <div 
                            key={index}
                            className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-white/70 dark:hover:bg-white/10 hover:border-indigo-400/30 dark:hover:border-indigo-400/30 transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"></span>
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <SkillBadge key={idx} skill={skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
