// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyASuUGwRkehuRcXyaonuMxfy9osT6u2ttg",
  authDomain: "daragon-news.firebaseapp.com",
  projectId: "daragon-news",
  storageBucket: "daragon-news.appspot.com",
  messagingSenderId: "196033198048",
  appId: "1:196033198048:web:dc703fb50367d8b6cb5d85",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;