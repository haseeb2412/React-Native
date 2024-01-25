import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig={
    apiKey: "AIzaSyBzmVdxHY4qp05TrPGXTVEAyN71CaWgHrQ",
  authDomain: "mytime-6dea5.firebaseapp.com",
  projectId: "mytime-6dea5",
  storageBucket: "mytime-6dea5.appspot.com",
  messagingSenderId: "960312883115",
  appId: "1:960312883115:web:42a945c1777a34ebd444ee",
  measurementId: "G-4SK6GVSTG8"
  }

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export {firebase};