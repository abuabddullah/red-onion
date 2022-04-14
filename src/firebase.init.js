// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN6XLVZktWdV_w3ZGQfGlS1t2RxpcR0lo",
  authDomain: "red-onion-clone.firebaseapp.com",
  projectId: "red-onion-clone",
  storageBucket: "red-onion-clone.appspot.com",
  messagingSenderId: "118805762832",
  appId: "1:118805762832:web:39e10da40ce4b507f4cb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;