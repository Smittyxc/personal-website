import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-white border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse"></NavLink>
                    <img src="./assets/leaf.png" className="h-8"/>
            </div>
            <div className="hidden w-full md:block md:w-auto">
                <NavLink to="/about" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
                <NavLink to="/resume" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resume</NavLink>
            </div>
        </nav>
    )
}