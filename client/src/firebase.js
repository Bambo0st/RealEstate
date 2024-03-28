// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-d47e3.firebaseapp.com",
  projectId: "realestate-d47e3",
  storageBucket: "realestate-d47e3.appspot.com",
  messagingSenderId: "640319773621",
  appId: "1:640319773621:web:2caa14e4b7213f636417fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);