import { useMediaQuery } from 'react-responsive'

function Experience() {
    const isMobile = useMediaQuery({ maxWidth: 600})

    if (isMobile)
    {
        return (
                <section class="bg-transparent" id = "experience">
            <h1 className="mt-2 mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-yellow-300 md:text-5xl lg:text-6xl">Experience</h1>
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                <div className="mt-4 md:mt-0">
                    
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">VeroSource</h2>
                    <h2 className="mb-1 text-m tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-4 text-sm tracking-tight font-extrabold text-white ">January 2025 - Present</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Implemented vulnerability scanning and semantic release across the organization's projects.
                        </li>
                        <li>
                            Provisioned and managed TLS certificates for client and organization domains.
                        </li>
                        <li>
                             Performed infrastructure upgrades to ensure security and performance.
                        </li>
                    </ul>

                </div>
                <img className="w-1/2 block" src="verosource.png"/>
            </div>
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Sonrai Security</h2>
                    <h2 className="mb-1 text-m tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-4 text-sm tracking-tight font-extrabold text-white ">January 2024 - August 2024</h2>
                    <ul className="max-w-md space-y-1 text-white text-xs list-disc list-inside ">
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
                <img className="mt-5 w-1/2 block" src="sonrai.png"/>
            </div>

            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Irving Oil</h2>
                    <h2 className="mb-1 text-m tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-4 text-sm tracking-tight font-extrabold text-white ">May 2023 - August 2023</h2>
                    <ul className="max-w-md space-y-1 text-white text-xs list-disc list-inside ">
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
                <img className="mt-4 w-2/5 block" src="irving.png"/>
            </div>

            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Irving Oil</h2>
                    <h2 className="mb-1 text-m tracking-tight font-extrabold text-white ">IT Planning & Stewardship</h2>
                    <h2 className="mb-4 text-sm tracking-tight font-extrabold text-white ">May 2022 - August 2022</h2>
                    <ul className="max-w-md space-y-1 text-white text-xs list-disc list-inside ">
                        <li>
                            Designed and built our internal SharePoint site.
                        </li>
                        <li>
                            Created  and worked with Power BI reports.
                        </li>
                        
                    </ul>

                </div>
                <img className="mt-4 w-2/5 block" src="irving.png"/>
            </div>
        </section>
    )
    }
    else
    {
        return (
                <section class="bg-transparent" id = "experience">
            <h1 className="mt-2 mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-yellow-300 md:text-5xl lg:text-6xl">Experience</h1>
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">

                <div className="mt-4 md:mt-0">
                    
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">VeroSource</h2>
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-4 text-m tracking-tight font-extrabold text-white ">January 2025 - August 2025</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Implemented vulnerability scanning and semantic release.
                        </li>
                        <li>
                            Created and automated the renewal of TLS certificates.
                        </li>
                        <li>
                            Performed infrastructure upgrades to ensure security and performance.
                        </li>
                    </ul>

                </div>
                <img className="w-3/4 block" src="verosource.png"/>
            </div>
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">Sonrai Security</h2>
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-4 text-m tracking-tight font-extrabold text-white ">January 2024 - August 2024</h2>
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
                <img className="mt-5 w-3/5 block" src="sonrai.png"/>
            </div>

            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">Irving Oil</h2>
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Software Developer</h2>
                    <h2 className="mb-4 text-m tracking-tight font-extrabold text-white ">May 2023 - August 2023</h2>
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
                <img className="mt-4 w-3/5 block" src="irving.png"/>
            </div>

            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-xl tracking-tight font-extrabold text-white ">Irving Oil</h2>
                    <h2 className="mb-1 text-m tracking-tight font-extrabold text-white ">IT Planning & Stewardship</h2>
                    <h2 className="mb-4 text-sm tracking-tight font-extrabold text-white ">May 2022 - August 2022</h2>
                    <ul className="max-w-md space-y-1 text-white list-disc list-inside ">
                        <li>
                            Designed and built our internal SharePoint site.
                        </li>
                        <li>
                            Created  and worked with Power BI reports.
                        </li>
                    </ul>

                </div>
                <img className="mt-4 w-3/5 block" src="irving.png"/>
            </div>
        </section>
    )
    }
    
}

export default Experience;