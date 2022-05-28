import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0sQEOscjjK6DYmZTJIUyopbZcOzdlz1o",
  authDomain: "clonefb-d12aa.firebaseapp.com",
  projectId: "clonefb-d12aa",
  storageBucket: "clonefb-d12aa.appspot.com",
  messagingSenderId: "601248072476",
  appId: "1:601248072476:web:9581f30fc56456f90770d9",
  measurementId: "G-6LKNNFF4W8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
