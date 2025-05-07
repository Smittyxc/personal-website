 import { useState } from "react"
 import db from "../firebase.tsx"
 import { collection, addDoc} from "firebase/firestore";
 import Rating from "../components/rating-bar.tsx";
 import Thank from "../components/thanks.tsx";


 export default function Todo() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [isOpen, setIsOpen] = useState(false)
 
    const handleRatingChange = (userRating) => {
        setRating(userRating)
    };
    
    const addTodo = async (e) => {
        e.preventDefault();  

        try {
            const docRef = await addDoc(collection(db, "formData"), {
              name: name,
              comment: comment,
              rating: rating
            });
            console.log("Document written with ID: ", docRef.id);
            console.log(name, rating, comment)
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        setIsOpen(true)
    }

    const setVisible = () => {
        setIsOpen(true)
    }


    
    return (
        <>
        {isOpen && <Thank />}

        <div className="rounded-2xl p-8 pb-2 border border-white">
            <h1 className="text-white text-3xl">Share your thoughts!</h1>
            <form onSubmit={addTodo} className="flex flex-col justify-center align align-middle rounded-2xl p-8 border-white">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" placeholder="..." required 
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Feedback</label>
                    <input type="text" id="name" className="border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400" placeholder="..." required 
                    onChange={(e)=>setComment(e.target.value)}/>
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <Rating rating={rating} onRatingChange={handleRatingChange} />
                    <button type="submit" className=" bg-gray-400 w-fit py-3 px-4 mt-4 rounded-2xl focus:bg-gray-600">Submit</button>
                </div>
            </form>
        </div>
        </>
 
 
     )
}

