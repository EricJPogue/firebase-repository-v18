// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-storage.js";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx3sqANCOuA_VjxIhmpb-BxHePhbX00JE",
  authDomain: "fir-project-v18.firebaseapp.com",
  projectId: "fir-project-v18",
  storageBucket: "fir-project-v18.firebasestorage.app",
  messagingSenderId: "282207069404",
  appId: "1:282207069404:web:2069ee94303f2d3d40c019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
export { db, doc, setDoc, collection, getDocs };
export { storage, ref, uploadBytes, getDownloadURL, listAll } 

