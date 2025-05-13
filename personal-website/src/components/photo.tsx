import { useState } from "react"

interface photoProps {
    isOpen: boolean;
  }

const PhotoBoard = ({ isOpen }: photoProps) => {
    const pics = ["coffee.jpeg", "run.jpeg", "v60.png", "hike.jpeg", "bike1.jpg", "mtn1.jpg", "bike2.JPG", "coffee2.jpg", "mtn2.jpg", "rock1.jpg"]
    const [isBig, setIsBig] = useState(Array(pics.length).fill(false))

    function handleClick(index: number) {
        if(isBig[index] === true) {
            setIsBig(Array(pics.length).fill(false))
        }
        else {
            const tempIsBig = Array(pics.length).fill(false)
            tempIsBig[index] = !tempIsBig[index]
            setIsBig(tempIsBig)
        }
    }

    return (
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-flow gap-4 ${isOpen ? "max-h-[3000px]" : "hidden"}`}>
            {pics.map((photo, index) => (
                <img src={photo} key={index} onClick={() => handleClick(index)} className={`rounded-2xl col-span-1 object-cover md:h-64 lg:h-84 2xl:h-96 duration-300 ${isBig[index] ? "scale-150 border-2 border-white z-10" : "hover:scale-106"}`} />
            ))}
        </div>

    )
}

export default PhotoBoard