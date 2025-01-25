


function Projects () {
    return (

        <section id = "projects">
            <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects</h1>
            <div
                className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full hidden  rounded-xl dark:block" src="cryptoport.png" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-white ">CryptoPort</h2>
                    <h2 className="mb-1 text-2xl tracking-tight font-extrabold text-white ">WebApp</h2>
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
        </section>
    )
}

export default Projects