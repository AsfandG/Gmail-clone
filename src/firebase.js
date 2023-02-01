// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvadEMdJt-eczEdgOJw2HDyap81xNZOvQ",
  authDomain: "clone-d40ca.firebaseapp.com",
  projectId: "clone-d40ca",
  storageBucket: "clone-d40ca.appspot.com",
  messagingSenderId: "374616711721",
  appId: "1:374616711721:web:b2afd3918048e779197238",
  measurementId: "G-612ZSW2XJ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { db, auth, provider };
