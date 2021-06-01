import firebase from "firebase";
import configs from "../configs/firebase";

let firebaseConnection: typeof firebase.app;
if (!firebase.apps.length) {
  console.log("Initialized a new firebase connection.");
  firebaseConnection = firebase.initializeApp(configs);
} else {
  console.log("else exists, use old app");
  firebaseConnection = firebase.app();
}

const Auth = firebase.auth();
const Firestore = firebase.firestore();
const Functions = firebase.functions();

export { Auth, Firestore, Functions, firebaseConnection, firebase };
