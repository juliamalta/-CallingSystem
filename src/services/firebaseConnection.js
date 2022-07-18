import firebase  from "firebase";
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyDoCk2m7ursji7gmYaKQvNKrxq9B5BDCSU",
    authDomain: "sistema-de-chamado-1450f.firebaseapp.com",
    projectId: "sistema-de-chamado-1450f",
    storageBucket: "sistema-de-chamado-1450f.appspot.com",
    messagingSenderId: "494123214216",
    appId: "1:494123214216:web:86623f23772b31ba4a463d",
    measurementId: "G-LV2R2ZG6GC"
  };

  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
  