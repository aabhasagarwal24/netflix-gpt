// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXlUa1trLFQaHb5ITLmqcHqmpUM2jz21U",
  authDomain: "netflixgpt-48351.firebaseapp.com",
  projectId: "netflixgpt-48351",
  storageBucket: "netflixgpt-48351.appspot.com",
  messagingSenderId: "621787856288",
  appId: "1:621787856288:web:2b3315fbf418e79fd5b8c5",
  measurementId: "G-NK2PYPZCXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();