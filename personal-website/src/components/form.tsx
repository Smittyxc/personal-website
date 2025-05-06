import { useState } from "react"
import db from "../firebase.tsx"

export default function Form() {
    return (
        <div className=" rounded-2xl p-4 border mb-20 border-white">
            <h1 className="text-white text-3xl">Feedback</h1>
            <div  rounded-2xl p-4 mb-20 border-white>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <span>Your Name</span>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </label>
                </div>
            </div>
        </div>


    )
}