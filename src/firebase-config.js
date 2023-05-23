// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv49C2WjuekeEeqI-z4S5rx8wtJT5EcY8",
  authDomain: "chatting-34334.firebaseapp.com",
  projectId: "chatting-34334",
  storageBucket: "chatting-34334.appspot.com",
  messagingSenderId: "565172518707",
  appId: "1:565172518707:web:2a4d9d774a3c6735304846",
  measurementId: "G-2DVDPN9TKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
