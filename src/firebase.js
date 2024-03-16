import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCjq65Y89H7akZd-r9ylHi4oLBH7Q41H70",
    authDomain: "test-bcd5d.firebaseapp.com",
    projectId: "test-bcd5d",
    storageBucket: "test-bcd5d.appspot.com",
    messagingSenderId: "1062088255443",
    appId: "1:1062088255443:web:0dafe47148eccd368fb126",
    measurementId: "G-HPR57CWJ8T"
  };
//Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
//Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, provider, storage, db };
