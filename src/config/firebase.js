import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFI1WX9wdGi8Q0XW4-VCdPvFoKIWs3bkg",
    authDomain: "drive-clone-b43ca.firebaseapp.com",
    projectId: "drive-clone-b43ca",
    storageBucket: "drive-clone-b43ca.appspot.com",
    messagingSenderId: "923673545939",
    appId: "1:923673545939:web:2b8c0fbc787137a8639826"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
