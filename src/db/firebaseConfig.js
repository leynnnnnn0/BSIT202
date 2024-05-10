// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJtd3jZuxDBMWqjVG-dLHzgZ5lWQCtydY",
  authDomain: "bsit202-f8a5d.firebaseapp.com",
  databaseURL: "https://bsit202-f8a5d-default-rtdb.firebaseio.com",
  projectId: "bsit202-f8a5d",
  storageBucket: "bsit202-f8a5d.appspot.com",
  messagingSenderId: "242055639378",
  appId: "1:242055639378:web:d3b5c4edf2e475c4524a8b",
  measurementId: "G-FY9DZFDKLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;