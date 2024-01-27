import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/database';


const firebaseConfig={
  

  }

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }


  const auth = firebase.auth();
const firestore = firebase.firestore();
const database = firebase.database(); 
export { firebase, auth, firestore, database };