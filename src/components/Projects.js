import { useMediaQuery } from 'react-responsive'


function Projects () {
    const isMobile = useMediaQuery({ maxWidth: 600})
    if (isMobile) {
        return (
        <section id = "projects">
            <h1 className="mb-4 mt-6 text-4xl text-center font-extrabold leading-none tracking-tight text-yellow-300 md:text-5xl lg:text-6xl">Projects</h1>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-white ">CryptoPort</h2>
                    <img className="w-full hidden mt-5 border-2 rounded-xl dark:block" src="cryptoport.png" alt="dashboard image"/>
                    <ul className="max-w-md mt-5 space-y-1 text-white list-disc list-inside ">
                        <li>
                            WebApp created using EJS.
                        </li>
                        <li>
                            Monitor your crypto investments in real time.
                        </li>
                        <li>
                            AWS DynamoDB and EC2.
                        </li>
                    </ul>

                </div>

            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-white ">My Portfolio</h2>
                    <img className="w-full hidden mt-5 border-2 rounded-xl dark:block" src="portfolio.png" alt="dashboard image"/>
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
                <img className="w-full hidden  border-2 rounded-xl dark:block" src="cryptoport.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white ">CryptoPort</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Created using EJS.
                        </li>
                        <li>
                            Monitor your crypto investments in real time.
                        </li>
                        <li>
                            First webapp I built E2E With AWS DynamoDB and EC2.
                        </li>
                    </ul>

                </div>

            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full hidden  border-2 rounded-xl dark:block" src="portfolio.png" alt="dashboard image"/>
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

                </div>

            </div>
        </section>
    )
    }
    
}

export default Projects