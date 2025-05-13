import PhotoBoard from "../components/photo"
import { useState } from "react"

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <section className="relative flex-col justify-start pt-16 mb-36 ">
            <h1 className="text-white text-4xl font-bold animate-slide-in m-8 mb-10">Welcome! My Name is</h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-white text-8xl font-bold animate-slide-in m-8 mb-10">Matt Smith</h1>
            <h1 className="text-white text-4xl font-bold animate-slide-in m-8 mb-10 leading-relaxed">I am a former nurse and current computer science student with a passion for improving health equity and health care systems.</h1> 
            <h1 className="text-white text-4xl font-bold animate-slide-in m-8 leading-relaxed">When I'm not studying or coding you can find me brewing coffee or rock climbing!</h1> 
        </section>
        <div className="justify-center flex mb-8 bg bg-neutral-800">
            <button onClick={handleClick} className="bg-neutral-200 font-bold text-lime-800 shadow-xl shadow-black/20 w-fit py-2 px-4 mt-4  rounded-2xl hover:bg-neutral-300">{isOpen ? "Close" : "Photo Gallery"}</button>
        </div>
        <PhotoBoard isOpen={isOpen} />
        </>
    )
}