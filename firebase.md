# Mis apuntes de Firebase de Codo a Codo
## Instructions
<p>
On the terminal, enter: 'npm install firebase'.</p>

### Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

### TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
<p>
const firebaseConfig = {
  apiKey: "AIzaSyCVjvMHuDn9KK0w9-ojs9nWOnh1ksrpxM4",
  authDomain: "my-movies-cac.firebaseapp.com",
  projectId: "my-movies-cac",
  storageBucket: "my-movies-cac.appspot.com",
  messagingSenderId: "156932959017",
  appId: "1:156932959017:web:7e7e110bc7616ad579e538",
  measurementId: "G-6P5E64DHHB"
};
</p>

### Initialize Firebase
<p>
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
</p>


