// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-a36e1.firebaseapp.com",
  projectId: "blog-app-a36e1",
  storageBucket: "blog-app-a36e1.appspot.com",
  messagingSenderId: "692066342512",
  appId: "1:692066342512:web:48b393295386ee983986b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);