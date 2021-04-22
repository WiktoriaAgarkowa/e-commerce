import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDG2T9Kl0FF2nRKEx2f10Fnzx5GnBlnsDI",
    authDomain: "clothes-store-db-1a12f.firebaseapp.com",
    projectId: "clothes-store-db-1a12f",
    storageBucket: "clothes-store-db-1a12f.appspot.com",
    messagingSenderId: "53627670372",
    appId: "1:53627670372:web:aec74d9c8ec124f7bcf471",
    measurementId: "G-RBXF93RWQV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
