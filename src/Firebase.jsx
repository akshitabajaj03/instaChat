import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHLehVbG35rcK6_VyTbsq01ldReuNl5mw",
  authDomain: "instantchat-ac7e6.firebaseapp.com",
  projectId: "instantchat-ac7e6",
  storageBucket: "instantchat-ac7e6.appspot.com",
  messagingSenderId: "64285868723",
  appId: "1:64285868723:web:e184c815b95339a59be6c6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

