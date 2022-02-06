// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxxy-Jb_tB_wsBkLScIvegUJj_HIWDpL4",
  authDomain: "auth-crud-c61d1.firebaseapp.com",
  projectId: "auth-crud-c61d1",
  storageBucket: "auth-crud-c61d1.appspot.com",
  messagingSenderId: "1071778989769",
  appId: "1:1071778989769:web:e65d27766cc0d001f5af18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

