import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC17gppPYHfatisYVQNogwcRT1y1zKdbvc",
  authDomain: "bizbrightone.firebaseapp.com",
  projectId: "bizbrightone",
  storageBucket: "bizbrightone.firebasestorage.app",
  messagingSenderId: "160293277531",
  appId: "1:160293277531:web:2fc8e58c268e394927147e",
  measurementId: "G-QXVV5NX5SQ"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export { auth, provider };