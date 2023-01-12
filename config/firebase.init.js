// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoVWvnfICCRfV-MhgBfDZsMDG1wMDj8vM",
    authDomain: "result-generating-platform.firebaseapp.com",
    projectId: "result-generating-platform",
    storageBucket: "result-generating-platform.appspot.com",
    messagingSenderId: "57101889240",
    appId: "1:57101889240:web:76475860b3c43d8157b1ad",
    measurementId: "G-YFB6ZM9PH5",
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);