 import { useState } from "react"
 import db from "../firebase.tsx"
 import { collection, addDoc} from "firebase/firestore";


 export default function Todo() {
    const [todo, setTodo] = useState("");

    const addTodo = async (e) => {
        e.preventDefault();  

        try {
            const docRef = await addDoc(collection(db, "todos"), {
              name: todo,    
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    
    return (
        <div className="rounded-2xl p-4 border mb-25 border-white">
            <h1 className="text-white text-3xl">Feedback</h1>
            <div  rounded-2xl p-4 mb-20 border-white>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">Your Name</label>
                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" placeholder="..." required 
                    onChange={(e)=>setTodo(e.target.value)}/>
                </div>
                <button onClick={addTodo} className="bg-gray-400 py-3 px-4 rounded-2xl focus:bg-amber-900">Submit</button>
             </div>
        </div>
 
 
     )
}

