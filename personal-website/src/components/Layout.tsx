import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./nav-bar.tsx"
import Sidebar from "./sidebar.tsx";

export default function Layout() {
    const loc = useLocation()
    const isResume = loc.pathname === "/resume"

    return (
        <div>
            <NavBar />
            <div className="grid grid-cols-10 items-center min-h-screen bg-neutral-800">
                <div className="fixed top-0 bottom-0 m-8 flex flex-col justify-center">
                    <Sidebar />
                </div>
                <div className={`col-start-3 col-end-10  p-6 ${isResume ? "bg-white shadow-xl/70" : "bg-neutral-800"}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}