import { useMediaQuery } from 'react-responsive'


function About() {
    const isMobile = useMediaQuery({ maxWidth: 600})

    if (isMobile) {
        return (
        <section className="bg-transparent">
            <div className="grid w-full px-4 py-8">
               
                <div className="flex mr-auto place-self-center col-span-2">
                    <div> 
                        <h1 className="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight ading-none md:text-5xl xl:text-6xl text-white mt-10">Hi, I'm Tom!</h1>
                        <a href="https://github.com/t0mtait"
                       className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-white rounded-lg hover:border-yellow-300 focus:ring-4 focus:ring-gray-100">
                        <box-icon name='github' type='logo' color='#ffffff'></box-icon>
                        </a>
                        <a href="https://www.linkedin.com/in/tom-tait/"
                        className="inline-flex items-center justify-center px-5 py-3 mx-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:border-yellow-300 focus:ring-4 focus:ring-gray-100">
                            <box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon>
                        </a>
                    </div>
                    <div className="mt-0 col-span-1 flex w-1/2 shadow-lg border border-yellow-300">
                        <img src="tomtait.jpg" alt="mockup"/>
                    </div>
                </div>
                
            </div>
        </section>
    );
    }
    else {
        return (
        <section className="bg-transparent">
            <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-4">
                <div className="mr-auto place-self-center lg:col-span-5 sm:col-span-1 ml-5">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight ading-none md:text-5xl xl:text-6xl text-white">Hi, I'm Tom!</h1>

                    <a href="https://github.com/t0mtait"
                       className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center border border-white rounded-lg hover:border-yellow-300 focus:ring-4 focus:ring-gray-100">
                        <box-icon name='github' type='logo' color='#ffffff'></box-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/tom-tait/"
                       className="inline-flex items-center justify-center px-8 py-3 mx-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:border-yellow-300 focus:ring-4 focus:ring-gray-100">
                        <box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon>
                    </a>
                </div>
                <div className="lg:mt-0 w-1/2 col-span-2 lg:flex">
                    <img className="rounded-lg shadow-lg w-3/5 border border-yellow-300" src="tomtait.jpg" alt="mockup"/>
                </div>
            </div>
        </section>
    );
    }
    
}

export default About;