// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2-rS_2BPpTUyjcTjuigTen9eMzebdJo4",
  authDomain: "netflixgpt-e507e.firebaseapp.com",
  projectId: "netflixgpt-e507e",
  storageBucket: "netflixgpt-e507e.appspot.com",
  messagingSenderId: "46102594131",
  appId: "1:46102594131:web:9d47c1c92ac43c03cefca6",
  measurementId: "G-ZK2GVN5F1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();