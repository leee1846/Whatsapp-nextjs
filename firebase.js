import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrOe2NZaCvpS7f7v4ZKtB4aC_5vQLztnw",
  authDomain: "whatsapp-4a0bc.firebaseapp.com",
  projectId: "whatsapp-4a0bc",
  storageBucket: "whatsapp-4a0bc.appspot.com",
  messagingSenderId: "591354959166",
  appId: "1:591354959166:web:566c7ef0af70f68856886f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
