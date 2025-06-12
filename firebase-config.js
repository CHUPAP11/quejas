// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBasQIYzm76zhMtNZTWY3e8S7T6oC77nm8",
  authDomain: "newproyect-b7fb0.firebaseapp.com",
  projectId: "newproyect-b7fb0",
  storageBucket: "newproyect-b7fb0.firebasestorage.app",
  messagingSenderId: "425761627260",
  appId: "1:425761627260:web:3400c45fbe637da1097df9",
  measurementId: "G-1XEGZWC0YM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
