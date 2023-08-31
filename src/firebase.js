// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnkE88yLg91GoHP8kEEmsbCHrYxJuqMfY",
  authDomain: "hard-tracker.firebaseapp.com",
  projectId: "hard-tracker",
  storageBucket: "hard-tracker.appspot.com",
  messagingSenderId: "794704995348",
  appId: "1:794704995348:web:79436169a42be8358d7301",
  measurementId: "G-4JM63GQ7Z0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth(app);
