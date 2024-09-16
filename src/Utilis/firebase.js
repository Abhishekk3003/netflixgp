// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJJGkwXL52EwyunmOKelfJFOrdWEQaVY8",
  authDomain: "netflixfpt-f4181.firebaseapp.com",
  projectId: "netflixfpt-f4181",
  storageBucket: "netflixfpt-f4181.appspot.com",
  messagingSenderId: "362475972418",
  appId: "1:362475972418:web:14a8b945ec75ec6f824adb",
  measurementId: "G-RR37NBS81B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);