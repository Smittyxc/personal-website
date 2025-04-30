import { Link

 } from "react-router-dom";
export default function Resume() {
    function handleClick() {
        window.print();

    }
    return (
        <>
            <div className="flex justify-between items-center border-b-1 border-b-gray-400 mt-16">
                <div>
                    <h1 className="text-4xl font-bold">Matt Smith</h1>
                    <p className="text-lg text-gray-700">mattsmith1652@gmail.com</p>
                    <p className="text-lg text-gray-700">616-334-3404</p>
                </div>
                <div>
                    <p className="text-lg text-gray-700">Grand Rapids, MI</p>
                </div>
            </div>

            {/* Education */}
            <section className="mt-3 mb-3">
                <h2 className="text-2xl font-semibold mb-3 border-b-1 border-b-gray-400">Education</h2>
                <div className="mt-2 mb-6">
                     <div className="justify-between flex">
                        <div className="mb-4">
                            <p className="text-lg font-bold">Grand Valley State University, College of Computing</p>
                            <p className="text-md text-gray-700 pl-2">B.S. in Computer Science (in progress)</p>
                            <p className="text-md text-gray-700 pl-2">M.S. in Data Science (in progress)</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Grand Rapids, MI</p>
                            <p className="text-md text-gray-700">Sept. 2024 - April 2028</p>
                        </div>
                    </div> 
                    <div className="justify-between flex">
                        <div>
                            <p className="text-lg font-bold">Grand Valley State University, Kirkhof College of Nursing</p>
                            <p className="text-md text-gray-700 pl-2">B.S. in Science of Nursing</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Grand Rapids, MI</p>
                            <p className="text-md text-gray-700">Sept. 2016 - April 2020</p>
                        </div>
                    </div> 
                </div>
            </section>

            {/* Work Experience */}
            <section className="mb-3">
                <h2 className="text-2xl font-semibold mb-3 border-b-1 border-b-gray-400">Work Experience</h2>
                <div className="mt-2 mb-6">
                     <div className="justify-between flex">
                        <div className="mb-2">
                            <p className="text-lg font-bold">Multicare Good Samaritan Hospital</p>
                            <p className="text-md text-gray-700 pl-2">Registered Nurse</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Puyallup, WA</p>
                            <p className="text-md text-gray-700">March 2023 - Jan. 2024</p>
                        </div>
                    </div> 

                    <ul className="list-disc pl-8 space-y-1 text-md text-gray-700 mb-3">
                        <li>Contributed to multiple quality improvement initiatives utilizing Kaizen, improving key reportable CMS metrics</li>
                        <li>Analyzed and identified trends in patient biometrics using EHR software, making data-driven decisions to support optimal patient outcomes</li>
                        <li>Demonstrated strong team-oriented work habits in the 7th busiest emergency unit in the US</li>
                    </ul>
                    <div className="justify-between flex">
                        <div className="mb-2">
                            <p className="text-lg font-bold">Corewell Health</p>
                            <p className="text-md text-gray-700 pl-2">Registered Nurse</p>
                        </div>
                        <div>
                            <p className="text-lg font-bold">Grand Rapids, MI</p>
                            <p className="text-md text-gray-700">June 2020 - Febuary 2023</p>
                        </div>
                    </div>
                    <ul className="list-disc pl-8 space-y-1 text-md text-gray-700">
                        <li>Utilized incident reporting systems to track and analyze adverse events</li>
                        <li>Implemented multiple novel COVID-19 quality improvement measures and documented outcomes using EPIC software for use in clinical trials</li>
                        <li>Coordinated responsibilities seamlessly with a multitude of professions in a fast-paced and high-stress environment</li>
                    </ul>
                </div>
            </section>
            
            {/*Awards*/}
            <section className="mt-3 mb-3">
                <h2 className="text-2xl font-semibold mb-3 border-b-1 border-b-gray-400">Awards</h2>
                <div className="mt-2 mb-6">
                     <div className="justify-between flex">
                        <div className="mb-4">
                            <p className="pl-2">Glenn A. Niemeyer Award</p>
                            <p className="pl-2">Mary Horan Nursing Scholar Award</p>
                            <p className="pl-2">MNRS Competitive Research Presenter</p>
                            <p className="pl-2">GVSU Sustainability Champion Award</p>
                            <p className="pl-2">TEDxGVSU Presenter</p>

                        </div>
                        <div>
                        <p className="text-md text-gray-700">April 2020</p>
                        <p className="text-md text-gray-700">April 2020</p>
                        <p className="text-md text-gray-700">May 2020</p>
                        <p className="text-md text-gray-700">April 2017</p>
                        <p className="text-md text-gray-700">Feb. 2017</p>


                        </div>
                    </div> 
                    
                </div>
            </section>
            <div className="flex justify-center">
                <Link to="/resume.pdf" target="_blank"  className="bg-lime-700 shadow-neutral-400 shadow hover:bg-lime-800 print:hidden text-white font-bold py-2 px-4 rounded" download>Download</Link>
            </div>
        </>
    )
}
