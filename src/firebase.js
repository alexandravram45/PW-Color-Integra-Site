import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqTT-L5JWjxm5fAfpPpNyxbI0vWslIEEM",
  authDomain: "pw-site-c4e02.firebaseapp.com",
  databaseURL: "https://pw-site-c4e02-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pw-site-c4e02",
  storageBucket: "pw-site-c4e02.appspot.com",
  messagingSenderId: "331298993971",
  appId: "1:331298993971:web:1438a5c5d2e869831d3046",
  measurementId: "G-L3YF4R455F"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore();

export const auth = getAuth(app);

export const storage = getStorage(app);
