// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQ0hVbgu1pHW9v8kODcSjQ9vO-za27hRY",
  authDomain: "ema-jhon-simple-8320c.firebaseapp.com",
  projectId: "ema-jhon-simple-8320c",
  storageBucket: "ema-jhon-simple-8320c.appspot.com",
  messagingSenderId: "625908406299",
  appId: "1:625908406299:web:af8d9dfcd85f2f081e40be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;