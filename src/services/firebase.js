import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-xjS6EqlRE57lHC5PfZ7QTD2Pp-tGjyI",
    authDomain: "employee-manager-6ec3d.firebaseapp.com",
    projectId: "employee-manager-6ec3d",
    storageBucket: "employee-manager-6ec3d.firebasestorage.app",
    messagingSenderId: "167636217203",
    appId: "1:167636217203:web:33dd9a345674b04cd6a906"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
