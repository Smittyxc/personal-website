 import { useState, FormEventHandler, FormEvent } from "react"
 import db from "../firebase.tsx"
 import { collection, addDoc} from "firebase/firestore";
 import Rating from "../components/rating-bar.tsx";
 import Thank from "../components/thanks.tsx";

 export default function Feedback() {
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false)
    const [error, setError] = useState("")
 
    const validate = () => {
        const regex = /^[a-zA-Z0-9\s.,!?'";:@#$%()_+=\-\\\{\}\|]*$/

        if(comment.length > 2000) {
            setError("Comment must be <2000 character")
            return false
        }
        if(!regex.test(comment)) {
            setError("Invalid characters")
            return false
        }
        return true

    }
    const handleRatingChange = (userRating: number) => {
        setRating(userRating)
    };
        
    const addToFirebase: FormEventHandler<HTMLFormElement> = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();  
        if(validate()){
            try {
                const docRef = await addDoc(collection(db, "formData"), {
                email: email,
                comment: comment,
                rating: rating
                });
                console.log("Document written with ID: ", docRef.id);
                setIsOpen(true)

            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    }
    
    return (
        <>
        {isOpen && <Thank />}
        <div className={`rounded-2xl p-8 pb-2 shadow-xl shadow-black/65 border border-neutral-200  ${isOpen ? "opacity-15" : ""}`}>
            <h1 className="text-white text-3xl">Share your thoughts!</h1>
            <form onSubmit={addToFirebase} className="flex flex-col justify-center align align-middle rounded-2xl p-8 border-white">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-white" htmlFor="name">Your Email</label>
                    <input type="email" id="name" className="border text-black text-sm rounded-lg block w-full p-2.5 bg-neutral-100 placeholder-neutral-600" minLength={8} maxLength={60}  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}$" placeholder="..." required 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-6">
                    <div className="flex">
                        <label className="block mb-2 mr-6 text-sm font-medium text-white" htmlFor="name">Feedback</label>
                        <p className="text-red-300 text-sm font-medium">{error}</p>
                    </div>
                    <textarea id="name" className="border text-neutral-900 text-sm rounded-lg  inline w-full p-2.5 bg-neutral-100 placeholder-neutral-600" maxLength={2000} placeholder="..." required
                    onChange={(e)=>setComment(e.target.value)} />
                </div>
                <div className="w-full flex flex-col items-center justify-center">
                    <Rating rating={rating} onRatingChange={handleRatingChange} />
                    <button type="submit" className=" bg-neutral-100 font-bold text-lime-800 shadow-xl shadow-black/20 w-fit py-3 px-4 mt-4 rounded-2xl hover:bg-neutral-300 focus:bg-neutral-400">Submit</button>
                </div>
            </form>
        </div>
        

        </>
 
     )
}
