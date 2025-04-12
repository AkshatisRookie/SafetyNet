// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxoIz7YBqcXL6T_vK7f58B8zOlzkoOeHI",
  authDomain: "safetynet-b2fe9.firebaseapp.com",
  projectId: "safetynet-b2fe9",
  storageBucket: "safetynet-b2fe9.firebasestorage.app",
  messagingSenderId: "795111257423",
  appId: "1:795111257423:web:3e3f26c99a9e7d8fcdc13a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;