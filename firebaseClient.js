import firebase from "firebase";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDmGrCHU6U5C8aCFC6dgjmLRpUNOpl7fq0",
  authDomain: "lms-project-x691.firebaseapp.com",
  projectId: "lms-project-x691",
  storageBucket: "lms-project-x691.appspot.com",
  messagingSenderId: "413125008552",
  appId: "1:413125008552:web:2580f20aa7821bf207b69d",
};

export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}
