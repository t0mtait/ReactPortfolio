

function About() {
    return (
        <section className="bg-transparent">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">About
                        me</h1>
                    <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Hi!
                        I am a fourth year Computer Science major at the University of New Brunswick. I have a passion
                        for learning the latest development technologies, and enjoy solving LeetCode problems in my
                        free time.
                        <br/><br/>On this page, you can find information about my past work experience, my side
                        projects, and ways in which you can contact me.</p>
                    <a href="https://github.com/t0mtait"
                       className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-center border border-white rounded-lg hover:border-yellow-300 focus:ring-4 focus:ring-gray-100">
                        <box-icon name='github' type='logo' color='#ffffff'></box-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/tom-tait/"
                       className="inline-flex items-center justify-center px-8 py-3 mx-3 text-base font-medium text-center border border-gray-300 rounded-lg hover:border-yellow-300 focus:ring-4 focus:ring-gray-100">
                        <box-icon name='linkedin-square' type='logo' color='#ffffff'></box-icon>
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="tomtait.png" alt="mockup"/>
                </div>
            </div>
        </section>
    );
}

export default About;