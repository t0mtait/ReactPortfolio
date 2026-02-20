import { useMediaQuery } from 'react-responsive'


function About() {
    const isMobile = useMediaQuery({ maxWidth: 768 })

    if (isMobile) {
        return (
            <section className="bg-transparent py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <img 
                                src="tomtait.png" 
                                alt="Tom Tait" 
                                className="rounded-full w-40 h-40 object-cover border-4 border-indigo-200 dark:border-indigo-500/30 shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
                            Hi, I'm Tom!
                        </h1>
                        <h2 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                            Software Developer & Problem Solver
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
                            Passionate about building solutions to complex problems. 
                            Let's connect and build something amazing together.
                        </p>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a 
                                href="https://github.com/t0mtait"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-lg hover:bg-gray-50 dark:hover:bg-white/20 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <box-icon name='github' type='logo' color='currentColor' size='20px'></box-icon>
                                <span>GitHub</span>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/tom-tait/"
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-lg hover:bg-gray-50 dark:hover:bg-white/20 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <box-icon name='linkedin-square' type='logo' color='currentColor' size='20px'></box-icon>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    else {
        return (
            <section className="bg-transparent py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
                                    Hi, I'm Tom!
                                </h1>
                                <h2 className="text-2xl xl:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                                    Software Developer & Problem Solver
                                </h2>
                            </div>
                            
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
                                Passionate about building elegant solutions to complex problems. 
                                I specialize in creating responsive web applications with modern technologies 
                                and best practices. Let's connect and build something amazing together.
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4 pt-4">
                                <a 
                                    href="https://github.com/t0mtait"
                                    className="inline-flex items-center gap-3 px-8 py-3.5 text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-lg hover:bg-gray-50 dark:hover:bg-white/20 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <box-icon name='github' type='logo' color='currentColor' size='24px'></box-icon>
                                    <span>GitHub</span>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/tom-tait/"
                                    className="inline-flex items-center gap-3 px-8 py-3.5 text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-white/10 border border-gray-300 dark:border-white/30 rounded-lg hover:bg-gray-50 dark:hover:bg-white/20 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <box-icon name='linkedin-square' type='logo' color='currentColor' size='24px'></box-icon>
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <img 
                                    src="tomtait.png" 
                                    alt="Tom Tait" 
                                    className="rounded-2xl w-full max-w-md shadow-2xl border border-gray-300 dark:border-white/10 hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;