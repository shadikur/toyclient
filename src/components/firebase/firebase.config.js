// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.local.VITE_APIKEY,
    authDomain: process.env.local.VITE_AUTHDOMAIN,
    projectId: process.env.local.VITE_PROJECTID,
    storageBucket: process.env.local.VITE_STORAGEBUCKET,
    messagingSenderId: process.env.local.VITE_MESSAGINGSENDERID,
    appId: process.env.local.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);