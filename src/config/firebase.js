import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB3Kv7uanoQNSRl0rrIRFZp9EpmnZVTcbg",
    authDomain: "drive-project-4d8eb.firebaseapp.com",
    projectId: "drive-project-4d8eb",
    storageBucket: "drive-project-4d8eb.appspot.com",
    messagingSenderId: "490436577257",
    appId: "1:490436577257:web:1b2eb7e3bd28047553ed78",
    measurementId: "G-DNGWLWPC45"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
