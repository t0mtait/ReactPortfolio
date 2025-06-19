function Navbar() {
    return (
        <nav className="bg-transparent border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                         className="bi bi-code-slash px-1 pt-1" viewBox="0 0 16 16">
                        <path
                            d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                    </svg>
                    <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">tomjt.com</span>
                </div>
                
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-transparent border-gray-700">
                        <li>
                            <a href="#about"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent"
                               aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#experience"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent">Experience</a>
                        </li>
                        <li>
                            <a href="#projects"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent">Projects</a>
                        </li>
                        <li>
                            <a href="#contact"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;