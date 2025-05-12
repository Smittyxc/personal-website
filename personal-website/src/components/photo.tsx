import { useState } from "react"

const PhotoBoard = () => {
    const pics = ["coffee.jpeg", "run.jpeg", "v60.png", "hike.jpeg"]
    const [isBig, setIsBig] = useState(Array(pics.length).fill(false))

    function handleClick(index: number) {
        const tempIsBig = [...isBig]
        tempIsBig[index] = !tempIsBig[index]
        setIsBig(tempIsBig)
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow gap-4">
            {pics.map((photo, index) => (
            <img src={photo} key={index} onClick={() => handleClick(index)} className={`rounded-2xl col-span-1 object-cover md:h-64 lg:h-84 2xl:h-96 hover:scale-106 duration-300 ${isBig[index] ? "scale-200" : ""}`} />
            ))}
        </div>

    )
}

export default PhotoBoard