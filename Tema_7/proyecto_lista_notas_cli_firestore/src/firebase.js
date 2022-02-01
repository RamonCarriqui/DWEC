// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" // Para realizar conexión a Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxI71P2SaOkEMmL0mQoCIEpJmaINYooao",
  authDomain: "notasvueclifirestore.firebaseapp.com",
  projectId: "notasvueclifirestore",
  storageBucket: "notasvueclifirestore.appspot.com",
  messagingSenderId: "595849162411",
  appId: "1:595849162411:web:58c9ee8cde291fec3b51ee"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore(); // Establecer conexión con Firestore
export {db};