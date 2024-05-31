import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPBUK0kq3ycS0NJ-JV-UPf-9-jeqo0W_Q",
  authDomain: "slack-clone-152da.firebaseapp.com",
  databaseURL: "https://slack-clone-152da.firebaseio.com",
  projectId: "slackclone-f1c60",
  storageBucket: "slack-clone-152da.appspot.com",
  messagingSenderId: "845997270840",
  appId: "1:861627207916:web:f9019b893de6d5f3cc55c9",
  measurementId: "G-4CEER9YVN9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
