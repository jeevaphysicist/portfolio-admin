// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVvvvj_0YUjhzEqBUdKk_E7VNqyPbDlo0",
  authDomain: "jeevanthamportfolio.firebaseapp.com",
  projectId: "jeevanthamportfolio",
  storageBucket: "jeevanthamportfolio.appspot.com",
  messagingSenderId: "423175169521",
  appId: "1:423175169521:web:b6f119f410d8bd5e0d1050"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();

// Export the initialized Firebase app and analytics
export { app, db };
