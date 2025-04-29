import { careerChange, curPlans } from "../components/content"
export default function About() {
    return (
        <section className="relative flex-col justify-start pt-16">
            <h1 className="text-transparent bg-clip-text text-7xl font-bold text-center mb-8 pb-6 border-b-1 border-b-white bg-gradient-to-r from-lime-800 to-lime-400">About me</h1>
            <h1 className="text-white text-3xl font-bold leading-relaxed">What caused you to shift careers?</h1>
                <ul className="list-disc space-y-1 text-md text-white-700 mb-3 pl-8">
                    <li className="text-white text-2xl font-semibold leading-relaxed">{careerChange}</li>
                </ul>
            
            <h1 className="text-white text-3xl font-bold leading-relaxed">What am I studying?</h1>
                <ul className="list-disc space-y-1 text-md text-white-700 mb-3 pl-8">
                    <li className="text-white text-2xl font-semibold leading-relaxed">{curPlans}</li>
                </ul>
            <h1 className="text-white text-4xl font-bold animate-slide-in m-8 leading-relaxed"></h1> 
         
        </section>
    )
}