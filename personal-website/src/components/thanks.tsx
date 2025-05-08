import { NavLink } from "react-router-dom";

const Thank = () => {
    return (
    <div className="fixed top-0 z-5 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center shadow-xl shadow-black/50 bg-neutral-800 opacity-100 border-2 border-white rounded-2xl w-120 h-70">
            <p className="text-white text-xl mb-4">Submission received!</p>
            <p className="text-white text-xl mb-6">Thanks for your feedback</p>
            <NavLink to="/" className="py-2 px-3 items-center text-white rounded-sm bg-gradient-to-r from-lime-700 to-lime-800 lime-800 hover:bg-lime-900 transition focus:scale-110">Home</NavLink>
        </div>
    </div>
    )
}
export default Thank;