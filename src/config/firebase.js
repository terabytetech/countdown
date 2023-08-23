// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4BNGfjKTONFahFhahKcER2hKZM_sOpaQ",
  authDomain: "terabyte-africa.firebaseapp.com",
  projectId: "terabyte-africa",
  storageBucket: "terabyte-africa.appspot.com",
  messagingSenderId: "803415817818",
  appId: "1:803415817818:web:ab847b65c82d54fde56263",
  measurementId: "G-S1S9Y5RKK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
