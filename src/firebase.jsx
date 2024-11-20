import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCwQgRukUZsYDQJI7P1-RD6klJiTNbP-M",
  authDomain: "personal-site-9aef7.firebaseapp.com",
  projectId: "personal-site-9aef7",
  storageBucket: "personal-site-9aef7.firebasestorage.app",
  messagingSenderId: "669901971976",
  appId: "1:669901971976:web:ae1938c840393bf93a67bd",
  measurementId: "G-JHYKPY7WGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
