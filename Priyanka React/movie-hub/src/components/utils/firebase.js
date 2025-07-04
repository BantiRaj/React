// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kL3XF81CKCWzhc6x5-P61O4KJGGZdZk",
  authDomain: "movie-hub-781e2.firebaseapp.com",
  projectId: "movie-hub-781e2",
  storageBucket: "movie-hub-781e2.firebasestorage.app",
  messagingSenderId: "1084651633474",
  appId: "1:1084651633474:web:ffc2f48e3cb5d8403266db",
  measurementId: "G-FDJ2KG8BNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();