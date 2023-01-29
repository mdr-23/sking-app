import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBmgUMP-o5qG6LWfVPYgEpgrkVJqjxoPg8",
    authDomain: "utn-react-cc249.firebaseapp.com",
    projectId: "utn-react-cc249",
    storageBucket: "utn-react-cc249.appspot.com",
    messagingSenderId: "1089997450914",
    appId: "1:1089997450914:web:2cccf5eadc9cbea75ef1fb"
  };

  firebase.initializeApp(firebaseConfig)

export default firebase