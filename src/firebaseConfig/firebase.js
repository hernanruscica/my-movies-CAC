// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVjvMHuDn9KK0w9-ojs9nWOnh1ksrpxM4",
  authDomain: "my-movies-cac.firebaseapp.com",
  projectId: "my-movies-cac",
  storageBucket: "my-movies-cac.appspot.com",
  messagingSenderId: "156932959017",
  appId: "1:156932959017:web:7e7e110bc7616ad579e538",
  measurementId: "G-6P5E64DHHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = () => getFirestore(app);