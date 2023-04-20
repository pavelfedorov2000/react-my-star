import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCVqPUM8SB87U2kdRvTUaMmfAIkkR-oPk",
  authDomain: "my-star-1d4cb.firebaseapp.com",
  projectId: "my-star-1d4cb",
  storageBucket: "my-star-1d4cb.appspot.com",
  messagingSenderId: "502398381549",
  appId: "1:502398381549:web:0345818ea5a95d5c800be4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);