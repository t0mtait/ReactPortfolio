function Contact() {
    return (
        <section id="contact" className="bg-transparent py-12">
            <div className="max-w-screen-md mx-auto px-4 text-center">
                <h1 className="mb-4 text-4xl font-extrabold text-yellow-300">Contact</h1>
                <p className="mb-6 text-white">I'm open to opportunities and questions — feel free to reach out!</p>

                <div className="mb-6 flex justify-center space-x-4">
                    <a
                        href="mailto:mail@tomjt.com"
                        className="inline-block px-4 py-2 rounded border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors duration-150"
                    >
                        Email
                    </a>

                    <a
                        href="https://linkedin.com/in/tom-tait"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block px-4 py-2 rounded border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black transition-colors duration-150"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;
