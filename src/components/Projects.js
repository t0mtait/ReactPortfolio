import { useMediaQuery } from 'react-responsive'

function Projects() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    const projects = [
        {
            title: "Stack Tracker",
            description: "A comprehensive health tracking application that enables users to monitor their supplement regimen and maintain detailed health history.",
            image: "stacktracker.png",
            technologies: ["React", "HAPI-FHIR", "PostgreSQL"],
            highlights: [
                "Full-stack application with React frontend and PostgreSQL database",
                "Users can track supplement regimen and history over time",
                "Supports FHIR-compliant Electronic Health Record integration"
            ],
            githubUrl: "https://github.com/t0mtait/stack-tracker"
        },
        {
            title: "Celtic-AI",
            description: "Machine learning project that leverages team statistics to predict Boston Celtics game outcomes with data-driven insights.",
            image: "celticai.png",
            technologies: ["Python", "Machine Learning", "Data Analysis"],
            highlights: [
                "Predictive model using statistical analysis and machine learning",
                "Analyzes game statistics to forecast match outcomes",
                "Ranks team statistics by their impact on game results"
            ],
            githubUrl: "https://github.com/t0mtait/celtic-ai"
        },
        {
            title: "CryptoPort",
            description: "Real-time cryptocurrency portfolio tracking application built with EJS and AWS cloud infrastructure.",
            image: "cryptoport.png",
            technologies: ["EJS", "AWS DynamoDB", "AWS EC2"],
            highlights: [
                "Monitor cryptocurrency markets in real-time",
                "Track investment portfolios with live price updates",
                "First end-to-end web application built with AWS services"
            ],
            githubUrl: "https://github.com/t0mtait/cryptoport"
        }
    ];

    const GitHubIcon = () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
        </svg>
    );

    const ProjectCard = ({ project, index }) => (
        <div className="group">
            <div className="bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-white/10 hover:border-indigo-400 dark:hover:border-indigo-400/30 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02]">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gray-900">
                    <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className={`w-full transition-transform duration-500 group-hover:scale-110 ${
                            project.title === "Celtic-AI"
                                ? "h-64 object-contain" 
                                : project.title === "CryptoPort"
                                ? "h-64 object-cover object-center"
                                : "h-64 object-contain"
                        }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span 
                                key={idx}
                                className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm lg:text-base">
                        {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1.5 flex-shrink-0">•</span>
                                <span className="leading-relaxed">{highlight}</span>
                            </li>
                        ))}
                    </ul>

                    {/* GitHub Link */}
                    <div className="pt-2">
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-lg hover:bg-indigo-600 hover:text-white hover:border-indigo-600 dark:hover:bg-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <GitHubIcon />
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-transparent py-12 px-4" id="projects">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3">
                        Projects
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        A showcase of my development work and technical projects
                    </p>
                </div>

                {/* Projects Grid */}
                <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={index} 
                            project={project} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;