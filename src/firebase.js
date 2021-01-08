import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKi1Rjq5AW3ywrY7O8seUXGd2kclf6Y50",
    authDomain: "ecommerce-7e34f.firebaseapp.com",
    projectId: "ecommerce-7e34f",
    storageBucket: "ecommerce-7e34f.appspot.com",
    messagingSenderId: "9496377823",
    appId: "1:9496377823:web:2c45624e54e948d44aec6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();