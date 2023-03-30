import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWj8ThVQrKS8Yrb5Lpr5pEPEwrICIt2UY",
  authDomain: "blog-b2727.firebaseapp.com",
  projectId: "blog-b2727",
  storageBucket: "blog-b2727.appspot.com",
  messagingSenderId: "90939720976",
  appId: "1:90939720976:web:0ea4e7e97831e8824b5195"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
