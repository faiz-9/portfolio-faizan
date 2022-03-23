// import firebase from "firebase";

// var firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyBllycm3rDxol83sXB7LrpJmVdz_NyetkU",
//   authDomain: "portfolio-ae716.firebaseapp.com",
//   projectId: "portfolio-ae716",
//   storageBucket: "portfolio-ae716.appspot.com",
//   messagingSenderId: "854186885606",
//   appId: "1:854186885606:web:e7d6ed86a54ec35f311627",
// });

// var db = firebaseApp.firestore();

// export { db };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBllycm3rDxol83sXB7LrpJmVdz_NyetkU",
  authDomain: "portfolio-ae716.firebaseapp.com",
  projectId: "portfolio-ae716",
  storageBucket: "portfolio-ae716.appspot.com",
  messagingSenderId: "854186885606",
  appId: "1:854186885606:web:e7d6ed86a54ec35f311627",
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);
export { db };
