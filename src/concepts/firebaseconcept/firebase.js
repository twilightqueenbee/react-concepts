// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCbR4pLOtcyvnohWx8si6KWzLdQNwSJHxQ",
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactfirebase-8f1d2.firebaseapp.com",
  projectId: "reactfirebase-8f1d2",
  storageBucket: "reactfirebase-8f1d2.firebasestorage.app",
  messagingSenderId: "1072463264366",
  appId: "1:1072463264366:web:a1a638536e8b990baac47f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// Firestore will act like a middleware between the user and data.                                 