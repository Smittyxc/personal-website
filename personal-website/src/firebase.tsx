import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe6v9CoYLsyt5iP8sOv6qs__67jPjPb7Q",
  authDomain: "personal-site-27893.firebaseapp.com",
  projectId: "personal-site-27893",
  storageBucket: "personal-site-27893.firebasestorage.app",
  messagingSenderId: "360997635300",
  appId: "1:360997635300:web:973d9a201525b348aed8f1",
  measurementId: "G-H8WNDFXN4B"
};

// Initialize Firebase

const fireApp = initializeApp(firebaseConfig);
export const db = getFirestore(fireApp);


export default db;