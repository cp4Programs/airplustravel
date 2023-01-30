// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// const firebaseConfig = {
//     apiKey: "AIzaSyAzCpByCBqCOQ9pW_ST-dHMGXpMMiXt9-Y",
//     authDomain: "airplus-travel.firebaseapp.com",
//     projectId: "airplus-travel",
//     storageBucket: "airplus-travel.appspot.com",
//     messagingSenderId: "142254604224",
//     appId: "1:142254604224:web:56efdb05cd8b0dcb6c9225",
//     measurementId: "G-L80YZHDDDL"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);