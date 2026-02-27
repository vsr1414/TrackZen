// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd21GuxfHH6LEGUX2Svo_ufAnhiw_37_M",
  authDomain: "trackzen-86dc9.firebaseapp.com",
  projectId: "trackzen-86dc9",
  storageBucket: "trackzen-86dc9.firebasestorage.app",
  messagingSenderId: "83842984924",
  appId: "1:83842984924:web:6567167b47cbb3e8b53d19",
  measurementId: "G-4612EXV5B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);