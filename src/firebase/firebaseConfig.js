// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnnoI3kc2e22A0ohXRvGLe1pTLOwuJr7c",
  authDomain: "amaz-dash.firebaseapp.com",
  projectId: "amaz-dash",
  storageBucket: "amaz-dash.appspot.com",
  messagingSenderId: "860938179192",
  appId: "1:860938179192:web:f26090dd5ca3cc97ff938d",
  measurementId: "G-F8SB4XPWD8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const google = new GoogleAuthProvider();

const facebook = new FacebookAuthProvider();

const db = getFirestore()
export{
  app,
  db,
  google,
  facebook,
}