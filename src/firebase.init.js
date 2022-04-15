// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASdSAmAhoyeoVYqDmXivrA_aDiHDuf_go",
  authDomain: "red-onion-3cbfb.firebaseapp.com",
  projectId: "red-onion-3cbfb",
  storageBucket: "red-onion-3cbfb.appspot.com",
  messagingSenderId: "992373431165",
  appId: "1:992373431165:web:01731e12bc0fad60850a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;