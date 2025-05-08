import { careerChange, curPlans } from "../components/content"
export default function About() {
    return (
        <section className="relative flex-col justify-start pt-16">
            <h1 className="text-transparent bg-clip-text text-7xl font-bold text-center mb-8 pb-6 bg-gradient-to-r from-lime-900 to-lime-300 animate-slide-in">About me</h1>
            <div className=" rounded-2xl p-4 border mb-20 border-white">
                <p className="text-white text-3xl font-bold inline-block p-2 mb-4">What caused you to shift careers?</p>
                    <ul className="list-disc space-y-1 text-md text-white-700 pl-8">
                        <li className="text-white text-xl font-space leading-relaxed mb-2">{careerChange}</li>
                    </ul>
            </div>
            <div className="m-6"></div>
            <div className=" rounded-2xl p-4 border border-white">
                <p className="text-white text-3xl font-bold inline-block p-2 mb-4">What am I studying?</p>
                    <ul className="list-disc space-y-1 text-md text-white-700 mb-3 pl-8">
                        <li className="text-white text-xl leading-relaxed">{curPlans}</li>
                    </ul>
        </div>
        </section>
    )
}