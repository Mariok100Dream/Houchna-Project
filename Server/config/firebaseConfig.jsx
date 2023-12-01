// server/config/firebaseConfig.jsx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW08I2PMtlNzYQgKR5vH_zC72av8rLr2o",
  authDomain: "houchna-1000.firebaseapp.com",
  projectId: "houchna-1000",
  storageBucket: "houchna-1000.appspot.com",
  messagingSenderId: "956667603554",
  appId: "1:956667603554:web:36ec93db43721ab67cbf3b",
  measurementId: "G-CXFYRJT078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);