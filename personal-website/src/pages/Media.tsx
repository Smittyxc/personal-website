export default function Media() {
    return (
        <>
            <h1 className="mt-16 text-5xl text-center text-white mb-16">Featured Media</h1>
            <div className="flex flex-row justify-between items-center shadow-2xl shadow-black/50 mb-10 overflow-hidden rounded-2xl">
                <div>
                    <a href="https://www.gvsu.edu/careers/module-spotlight-view.htm?entryId=DD1C1E37-E12F-F7E4-AA1B3B48AA338371&siteModuleId=2C5D039C-CC9F-844D-585C9F0D2D785523">
                        <img src="/me.jpg" className='h-auto w-100' />
                    </a>

                </div>
                <div className="justify-items-center flex-grow">
                    <a href="https://www.gvsu.edu/careers/module-spotlight-view.htm?entryId=DD1C1E37-E12F-F7E4-AA1B3B48AA338371&siteModuleId=2C5D039C-CC9F-844D-585C9F0D2D785523">
                        <h2 className="text-white m-2 font-semibold text-2xl ">GVSU Adult Learner Profile</h2>
                    </a>
                    <p className="leading-relaxed text-lg text-white m-6 max-w-120">Read about my decision to return to school following my nursing career.</p>
                    <a href="https://www.gvsu.edu/careers/module-spotlight-view.htm?entryId=DD1C1E37-E12F-F7E4-AA1B3B48AA338371&siteModuleId=2C5D039C-CC9F-844D-585C9F0D2D785523" className="bg-white py-3 px-4 rounded-xl hover:bg-neutral-200 duration-300 transform hover:scale-110 shadow-black/70 shadow-lg">
                        <span className="text-lime-900 font-bold">Read More</span>
                    </a>
                </div>
            </div>

            <div className="flex justify-between items-center mb-6 shadow-2xl shadow-black/70 rounded-2xl overflow-hidden">
                <div className="flex-1">
                    <iframe width="600" height="360"  src="https://www.youtube.com/embed/zpAMpxGJCoc?si=_yDhIk3lRtmorh4H" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className="justify-items-center flex-grow flex-1">
                    <h1 className="text-white m-2 font-semibold text-2xl text-center mb-3">TEDxGVSU</h1>
                    <p className="leading-relaxed text-lg text-white ml-4 mr-6 max-w-150">Younger me talks about a national systemic food waste problem through the lens of dumpster diving!</p>
                </div>
                
            </div>


        </>
    )
}
