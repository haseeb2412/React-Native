import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig={
  apiKey: "AIzaSyD6tvMLBqZ3oLMIQAAyNsHiATIu6Inhn0Q",
  authDomain: "mytime-2a277.firebaseapp.com",
  projectId: "mytime-2a277",
  storageBucket: "mytime-2a277.appspot.com",
  messagingSenderId: "467936141849",
  appId: "1:467936141849:web:2ff3b4cbfefbefa1a38088",
  measurementId: "G-JSBENMGK2D"
  }

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export {firebase};