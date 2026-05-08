// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDruYCkn6_Ki7NAEItFpVhhpItSVE7M-fw",
  authDomain: "futvote-1991.firebaseapp.com",
  projectId: "futvote-1991",
  storageBucket: "futvote-1991.firebasestorage.app",
  messagingSenderId: "722667231134",
  appId: "1:722667231134:web:af836691055d3606d0288f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore using modular syntax
export const db = getFirestore(app);