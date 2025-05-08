import { useState } from "react"

export default function Projects() {
    const [isOpen, setIsOpen] = useState(false)

    function showMore() {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className="pt-16 flex flex-col justify-center mb-16">
                <div className="bg-neutral-800 shadow-2xl shadow-black/100   w-full flex flex-col items-center rounded-2xl p-8">
                    <p className="text-white text-3xl font-bold text-shadow-lg mb-5">Lown Index Health Equity Analysis</p>
                    <div className="flex flex-wrap mb-3 w-fit rounded p-0.5">
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Python</p>
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Pandas</p>
                        <p className="bg-white  shadow-black-30 font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">SQL</p>

                    </div>
                    <iframe className={`rounded-xl w-full transition-height duration-300 hover:scale-102 ease-in-out ${isOpen ? "h-300" : "h-75"} mb-4 shadow-lg shadow-black/40`} src="lown_index.html"></iframe>
                    <button className="text-lime-950 bg-white border-1 py-1 px-2 rounded-xl shadow-lg shadow-black/60 hover:bg-neutral-200 hover:border-neutral-800 focus:outline-2  focus:outline-lime-700" onClick={showMore}>{isOpen ? "See less" : "See more"}</button>
                </div>
            </div>
            
            <div className="pt-16 flex flex-col justify-center">
                <div className="bg-neutral-800 shadow-2xl shadow-black/100 w-full flex flex-col items-center rounded-2xl p-8">
                    <p className="text-white text-3xl text-shadow-lg font-bold mb-3">CMS Quality Indicator Database</p>
                    <div className="flex flex-wrap mb-4 w-fit rounded p-0.5">
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Python</p>
                        <p className="bg-white shadow font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">Pandas</p>
                        <p className="bg-white  shadow-black-30 font-bold text-lime-800 text-lg rounded p-0.5 mr-2 ml-2 bounce-once">SQL</p>
                    </div>
                    <div className="flex w-full flex-wrap justify-center align-middle">
                        <img src="/cms.png" className="max-h-100 rounded-lg shadow-xl shadow-black/70"></img>
                        <p className="m-4 p-4 text-white leading-relaxed text-lg max-w-md flex-1">Using MySQL, an analysis of the Centers for Medicare and Medicaid Value-Based Programs was performed. Although there are many VBPs, the Efficiency and Cost Reduction, Hospital Readmission Reduction, and Disproportionate Share Hospital Programs were selected for this analysis, as insights generate from them could show potential relationships between financial and readmission statistics.</p>
                    </div>
                </div>
            </div>
        </>
    

    )
}