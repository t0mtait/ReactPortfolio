function Navbar() {
    return (
        <nav className="bg-transparent border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white"
                         className="bi bi-code-slash px-1 pt-1" viewBox="0 0 16 16">
                        <path
                            d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
                    </svg>
                    <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">tomtait.dev</span>
                </a>
                <button data-collapse-toggle="navbar-solid-bg" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-transparent border-gray-700">
                        <li>
                            <a href="#"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent"
                               aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent">Experience</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent">Projects</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 px-3 md:p-0 text-white rounded hover:text-yellow-300 bg-transparent">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;