import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA90JKdIJW3s9qUAm01HoMyLCE9zs0YjvI",
  authDomain: "project-therma.firebaseapp.com",
  databaseURL: "https://project-therma-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-therma",
  storageBucket: "project-therma.firebasestorage.app",
  messagingSenderId: "611206806712",
  appId: "1:611206806712:web:ffc3bf2d08a9202404484d",
  measurementId: "G-TKXDB55L3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
