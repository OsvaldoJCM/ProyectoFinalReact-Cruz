import { initializeApp } from "firebase/app"; // Inicia conexion con firebase
import { getFirestore } from "firebase/firestore"; //instancia del firestore 


//Info de la cuenta 
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_REY_FIREBASE_CONFIG,
    authDomain: "cycwin-9ce59.firebaseapp.com",
    projectId: "cycwin-9ce59",
    storageBucket: "cycwin-9ce59.appspot.com",
    messagingSenderId: "259640505538",
    appId: "1:259640505538:web:8f3ba6997204d407d5f75b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);