import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJBZOlNYGZoLgZMfoqnauCVuy6vhvEex4",
  authDomain: "clone-waiyego.firebaseapp.com",
  projectId: "clone-waiyego",
  storageBucket: "clone-waiyego.appspot.com",
  messagingSenderId: "238869231494",
  appId: "1:238869231494:web:acd64c5b37326cb6d69e07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
