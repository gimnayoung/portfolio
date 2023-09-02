// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// import firebase from "firebase/compat/app"; 1

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1W9ITcibV1hbCkVQDPZnJbsliQUIWtIQ",
  authDomain: "portfolio-6e464.firebaseapp.com",
  projectId: "portfolio-6e464",
  storageBucket: "portfolio-6e464.appspot.com",
  messagingSenderId: "46928168001",
  appId: "1:46928168001:web:51dda919492f0a807732c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const firestore=firebase.firestore();1
// export {firestore} ; 1