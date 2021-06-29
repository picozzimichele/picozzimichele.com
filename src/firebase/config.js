import * as firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore"

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKsCOPIhQPFQvpy1CAMTh7O9X5jMJUKLs",
    authDomain: "blog-3b3a9.firebaseapp.com",
    databaseURL: "https://blog-3b3a9.firebaseio.com",
    projectId: "blog-3b3a9",
    storageBucket: "blog-3b3a9.appspot.com",
    messagingSenderId: "50923260183",
    appId: "1:50923260183:web:123f453ba62788bbae0f52",
    measurementId: "G-MEMSXSJY7Q"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
