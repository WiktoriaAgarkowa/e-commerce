import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import SignInAndSignOut from '../pages/sign-in-sign-up/sign-in-sign-up.component';

const config = {
    apiKey: "AIzaSyCMBlCpazT9Nb_w-6Jqc_b2h9a3K5gi2NA",
    authDomain: "ecommerce-db-59012.firebaseapp.com",
    projectId: "ecommerce-db-59012",
    storageBucket: "ecommerce-db-59012.appspot.com",
    messagingSenderId: "941369729185",
    appId: "1:941369729185:web:7a85f881d9ffeca301d0e0",
    measurementId: "G-VX5S3W6SL6"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
