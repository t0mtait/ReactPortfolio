import { useMediaQuery } from 'react-responsive'

function Experience() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

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
            {!isMobile && (
                <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400 border-4 border-gray-200 dark:border-gray-800 shadow-lg z-10"></div>
                    {index < experiences.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gradient-to-b from-indigo-400 dark:from-indigo-400/50 to-transparent mt-2"></div>
                    )}
                </div>
            )}

            {/* Card content */}
            <div className={`${!isMobile ? 'ml-12' : ''} bg-white dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-indigo-400 dark:hover:border-indigo-400/30 transition-all duration-300 shadow-lg hover:shadow-xl ${!isMobile ? 'hover:translate-x-2' : ''}`}>
                <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 items-start`}>
                    {/* Logo */}
                    <div className={`flex-shrink-0 ${isMobile ? 'w-full flex justify-center mb-2' : ''}`}>
                        <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-transparent">
                            <img 
                                src={experience.logo} 
                                alt={`${experience.company} logo`}
                                className={experience.logoClasses}
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <div className={isMobile ? 'text-center' : ''}>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {experience.company}
                            </h3>
                            <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                                {experience.role}
                            </h4>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                                {experience.period}
                            </p>
                        </div>

                        <ul className={`space-y-2 text-gray-700 dark:text-gray-300 ${isMobile ? 'text-sm' : 'text-base'}`}>
                            {experience.responsibilities.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-indigo-600 dark:text-indigo-400 mt-1.5 flex-shrink-0">•</span>
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
        <section className="bg-transparent py-12 px-4" id="experience">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-3">
                        Experience
                    </h1>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-600 dark:via-indigo-400 to-transparent mx-auto"></div>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
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