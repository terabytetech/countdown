// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRILB09QprMzGHDS1VbPFW545pjxYShPA",
  authDomain: "testingapp-7068e.firebaseapp.com",
  projectId: "testingapp-7068e",
  storageBucket: "testingapp-7068e.appspot.com",
  messagingSenderId: "277665273750",
  appId: "1:277665273750:web:1948896c3b634df7f5efb7",
  measurementId: "G-PCK4VKYZ2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
