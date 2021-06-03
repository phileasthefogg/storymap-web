import firebase from "firebase";
import configs from "../configs/firebase";

console.log("Initialized a new firebase connection.");
const app = firebase.initializeApp(configs);

if (window.location.hostname === "localhost") {
  console.log("it's local");
  app.firestore().useEmulator("localhost", 8080);
  app.auth().useEmulator("http://localhost:9099");
  app.functions().useEmulator("localhost", 5001);
  app.storage().useEmulator("localhost", 9199);
}

export { app };
