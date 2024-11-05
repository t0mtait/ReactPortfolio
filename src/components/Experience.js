function Experience() {
    return (
        <section class="bg-transparent">
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-3/4 hidden dark:block" src="sonrai.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">Sonrai Security</h2>
                    <h2 className="mb-4 text-l tracking-tight font-extrabold text-white ">January 2024 - August
                        2024</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Developed and maintained a cloud security platform.
                        </li>
                        <li>
                            Wrote end to end tests in JavaScript for our webapp.
                        </li>
                        <li>
                            Built a script to destroy resources every night to cut our AWS, Azure, and
                            GCP costs.
                        </li>
                    </ul>

                </div>
            </div>

            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">Irving Oil</h2>
                    <h2 className="mb-4 text-l tracking-tight font-extrabold text-white ">May 2023 - August 2023</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Developed and maintained a C# Rest API.
                        </li>
                        <li>
                            Created and optimized SQL databases.
                        </li>
                        <li>
                            Created a new customer service workflow using AWS.
                        </li>
                    </ul>

                </div>
                <img className="w-3/4 hidden dark:block" src="irving.png" alt="dashboard image"/>
            </div>
        </section>
    )
}

export default Experience;