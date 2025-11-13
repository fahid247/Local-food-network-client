// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKA1SCABIaJ1XOIWelXua34P36b_8lowA",
  authDomain: "local-foods-network.firebaseapp.com",
  projectId: "local-foods-network",
  storageBucket: "local-foods-network.firebasestorage.app",
  messagingSenderId: "334150845021",
  appId: "1:334150845021:web:eefc1d5b02d369324c03b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);