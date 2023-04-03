// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd71E-itl7dL0RDhrh3DTLlvkUKGRzs_k",
    authDomain: "fir-first-b7926.firebaseapp.com",
    databaseURL: "https://fir-first-b7926-default-rtdb.firebaseio.com",
    projectId: "fir-first-b7926",
    storageBucket: "fir-first-b7926.appspot.com",
    messagingSenderId: "193874268090",
    appId: "1:193874268090:web:34c5478e2fa194fe86d783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)