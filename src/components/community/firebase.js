// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzPGmdaxloY0I_oCb1PVAwXInz1AolU6k",
  authDomain: "kodegomp2-173c7.firebaseapp.com",
  projectId: "kodegomp2-173c7",
  storageBucket: "kodegomp2-173c7.appspot.com",
  messagingSenderId: "815202780563",
  appId: "1:815202780563:web:3e59f6d4389550a5e69466",
  measurementId: "G-0L0JVB4SJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
