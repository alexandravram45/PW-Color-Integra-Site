import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqTT-L5JWjxm5fAfpPpNyxbI0vWslIEEM",
  authDomain: "pw-site-c4e02.firebaseapp.com",
  projectId: "pw-site-c4e02",
  storageBucket: "pw-site-c4e02.appspot.com",
  messagingSenderId: "331298993971",
  appId: "1:331298993971:web:1438a5c5d2e869831d3046",
  measurementId: "G-L3YF4R455F"
};


const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export const auth = getAuth(app);

export default app