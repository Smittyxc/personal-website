import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./nav-bar.tsx"

export default function Layout() {
    const loc = useLocation()
    const isResume = loc.pathname === "/resume"

    return (
        <div>
            <NavBar />
            <div className="grid place-items-center min-h-screen bg-neutral-800">
                <div className={`w-full max-w-5xl p-6 ${isResume ? "bg-white shadow-xl/70" : "bg-neutral-800"}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}