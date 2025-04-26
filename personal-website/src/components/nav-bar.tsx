import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-gray-700 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse"></NavLink>
                    <img src="./assets/leaf.png" className="h-8"/>
            </div>
            <div className="hidden w-full md:block md:w-auto">
                <NavLink to="/about" className="block py-2 px-3 text-white rounded-sm hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-100 md:p-0">About</NavLink>

                <NavLink to="/resume" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-100 md:p-0">Resume</NavLink>
            </div>
        </nav>
    )
}