// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a4d35.firebaseapp.com",
  projectId: "mern-estate-a4d35",
  storageBucket: "mern-estate-a4d35.appspot.com",
  messagingSenderId: "304634027618",
  appId: "1:304634027618:web:a778fa5b18ca43a2353b3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
