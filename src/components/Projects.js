import { useMediaQuery } from 'react-responsive'


function Projects () {
    const isMobile = useMediaQuery({ maxWidth: 600})
    if (isMobile) {
        return (
        <section id = "projects">
            <h1 className="mb-4 mt-6 text-4xl text-center font-extrabold leading-none tracking-tight text-yellow-300 md:text-5xl lg:text-6xl">Projects</h1>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">FHIR Supplement Tracker</h2>
                    <img className="w-full mt-5 border-2 rounded-xl dark:block" src="supplementtracker.png" alt="dashboard image"/>
                    <ul className="max-w-md mt-5 space-y-1 text-white list-disc list-inside ">
                        <li>
                            Still in early development.
                        </li>
                        <li>
                            Next.JS + Tailwind FE with HAPI-FHIR + PSQL BE.
                        </li>
                        <li>
                            Track your supplement stack and history.
                        </li>
                        <li>
                            Supports FHIR compliant EHR integration.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="https://github.com/t0mtait/hapi-fhir-frontend" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 m-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View FE on GitHub
                        </a>
                        <a href="https://github.com/t0mtait/hapi-fhir-server" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View BE on GitHub
                        </a>
                        
                    </div>

                </div>

            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">CryptoPort</h2>
                    <img className="w-full mt-5 border-2 rounded-xl dark:block" src="cryptoport.png" alt="dashboard image"/>
                    <ul className="max-w-md mt-5 space-y-1 text-white list-disc list-inside ">
                        <li>
                            WebApp created using EJS.
                        </li>
                        <li>
                            Monitor the market and your investments in real time.
                        </li>
                        <li>
                            Created to gain more experience with Dynamo and EC2.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="https://github.com/t0mtait/cryptoport" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View on GitHub
                        </a>
                    </div>

                </div>

            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">My Portfolio</h2>
                    <img className="w-full mt-5 border-2 rounded-xl dark:block" src="portfolio.png" alt="dashboard image"/>
                    <ul className="max-w-md mt-5 space-y-1 text-white list-disc list-inside ">
                        <li>
                            Built with React & Tailwind.
                        </li>
                        <li>
                            Showcases my experience and projects.
                        </li>
                        <li>
                            Deployed with Vercel.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="https://github.com/t0mtait/ReactPortfolio" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View on GitHub
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
    }
    else {
        return (
        <section id = "projects">
            <h1 className="mb-4 mt-6 text-4xl text-center font-extrabold leading-none tracking-tight text-yellow-300 md:text-5xl lg:text-6xl">Projects</h1>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full  border-2 rounded-xl dark:block" src="supplementtracker.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">FHIR Supplement Tracker</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Still in early development.
                        </li>
                        <li>
                            Next.JS + Tailwind FE with HAPI-FHIR + PSQL BE.
                        </li>
                        <li>
                            Track your supplement stack and history.
                        </li>
                        <li>
                            Supports FHIR compliant EHR integration.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="https://github.com/t0mtait/hapi-fhir-frontend" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 mr-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View Frontend on GitHub
                        </a>
                        <a href="https://github.com/t0mtait/hapi-fhir-server" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View Backend on GitHub
                        </a>
                    </div>

                </div>

            </div>
            
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full  border-2 rounded-xl dark:block" src="cryptoport.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">CryptoPort</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Created using EJS.
                        </li>
                        <li>
                            Monitor the crypto market and your investments in real time.
                        </li>
                        <li>
                            First webapp I built E2E With AWS DynamoDB and EC2.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="https://github.com/t0mtait/cryptoport" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View on GitHub
                        </a>
                    </div>

                </div>

            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full  border-2 rounded-xl dark:block" src="portfolio.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">My Portfolio</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Built with React & Tailwind.
                        </li>
                        <li>
                            Showcases my experience and projects.
                        </li>
                        <li>
                            Deployed with Vercel.
                        </li>
                    </ul>
                    <div className="mt-4">
                        <a href="https://github.com/t0mtait/ReactPortfolio" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                            </svg>
                            View on GitHub
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
    }
    
}

export default Projects