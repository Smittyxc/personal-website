import { useState } from "react"

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)

    function showMore() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="pt-16 flex flex-col justify-center mb-16">
                <div className="bg-gradient-to-r from-lime-900 to-lime-700   w-full flex flex-col items-center rounded-2xl p-8">
                    <p className="text-white text-3xl text-shadow-lg font-extrabold mb-3">Lown Index Health Equity Analysis</p>
                    <div className="flex flex-wrap mb-3 w-fit rounded p-0.5">
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Python</p>
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Pandas</p>
                        <p className="bg-white  shadow-black-30 font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">SQL</p>

                    </div>
                    <iframe className={`rounded-xl w-full ${isOpen ? "h-300" : "h-75"} mb-4 shadow-lg shadow-black/40`} src="lown_index.html"></iframe>
                    <button className="text-lime-800 bg-white border-1  py-1 px-2 rounded-xl hover:bg-neutral-200 hover:border-neutral-800 focus:outline-2  focus:outline-lime-700 shadow-black/20 shadow" onClick={showMore}>{isOpen ? "See less" : "See more"}</button>
                </div>
            </div>
            
            <div className="pt-16 flex flex-col justify-center">
                <div className="bg-gradient-to-r from-lime-900 to-lime-700  w-full flex flex-col items-center rounded-2xl p-8">
                    <p className="text-white text-3xl text-shadow-lg font-extrabold mb-3">CMS Quality Indicator Database</p>
                    <div className="flex flex-wrap mb-3 w-fit rounded p-0.5">
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Python</p>
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Pandas</p>
                        <p className="bg-white  shadow-black-30 font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">SQL</p>
                    </div>
                    <div className="flex w-full">
                        <img src="/cms.png" className="h-75 rounded-lg shadow-xl shadow-black/20"></img>
                        <p className="m-4 p-4 text-white text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum aspernatur beatae molestiae doloribus suscipit adipisci facere exercitationem, rerum fugiat eum odio eius, a perspiciatis amet laudantium, nisi tempora consectetur excepturi!</p>
                    </div>
            </div>
            </div>
        </>
    

    )
}