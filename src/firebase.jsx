import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const FB_apiKey= import.meta.env.VITE_API_KEY
const FB_authDomain = import.meta.env.VITE_AUTH_DOMAIN
const FB_projectId = import.meta.env.VITE_PROJECT_ID
const FB_storageBucket = import.meta.env.VITE_STORAGE_BUCKET
const FB_messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID
const FB_appId = import.meta.env.VITE_APP_ID
const FB_measurementId = import.meta.env.VITE_MEASUREMENT_ID

const firebaseConfig = {
  apiKey: FB_apiKey,
  authDomain: FB_authDomain,
  projectId: FB_projectId,
  storageBucket: FB_storageBucket,
  messagingSenderId: FB_messagingSenderId,
  appId: FB_appId,
  measurementId: FB_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
