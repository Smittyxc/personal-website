import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-neutral-800 text-lg md:text-xl lg:text-2xl w-full fixed top-0 z-20">
            <div className="h-2 bg-gradient-to-r from-green-950 via-lime-600 to-lime-950"></div>
            <div className="flex justify-between items-center">
                <NavLink to="/" className="flex items-center space-x-3 ml-6 mt-2 bg-neutral-200 rounded-4xl shadow-lg shadow-black/60">
                    <img src="/mono.svg" className="h-16  duration-300 hover:scale-110"/>
                </NavLink>
                <div className="space-x-4 flex mr-2 font-semibold text-lg">
                    <NavLink to="/about" className="h-fit py-1 px-1 text-white rounded-sm hover:bg-neutral-700 duration-300 hover:scale-110">About</NavLink>
                    <NavLink to="/resume" className="h-fit py-1 px-1  text-white rounded-sm hover:bg-neutral-700 duration-300 hover:scale-110">Resume</NavLink>
                    <NavLink to="/Media" className="h-fit py-1 px-1  text-white rounded-sm hover:bg-neutral-700  duration-300 hover:scale-110">Media</NavLink>
                    <NavLink to="/Projects" className="h-fit py-1 px-1  text-white rounded-sm hover:bg-neutral-700 duration-300 hover:scale-110">Projects</NavLink>
                    <NavLink to="/feedback" className="h-fit py-1 px-1  text-white rounded-sm hover:bg-neutral-700 duration-300 hover:scale-110">Feedback</NavLink>

                    <div className="flex h-auto w-px bg-neutral-400"></div>
                    <NavLink to="https://github.com/Smittyxc" className="flex py-2 px-3 items-center text-white rounded-sm bg-gradient-to-r from-lime-700 to-lime-800 lime-800 shadow-lg shadow-black/55 duration-300 hover:scale-110">
                        <img src="/github.svg" className="h-6 mr-3"></img>
                        <span>GitHub</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
