import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
  apiKey: "AIzaSyAI9XT01joN_PvEZ_3aoBhJQUuA77f1uDc",
  authDomain: "horror-db-app-22ab4.firebaseapp.com",
  projectId: "horror-db-app-22ab4",
  storageBucket: "horror-db-app-22ab4.appspot.com",
  messagingSenderId: "55227896538",
  appId: "1:55227896538:web:ad048cf4e7818c9fafcbe3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase