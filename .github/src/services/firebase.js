import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAeS2lvtc8cVsjbCKb9LEq3MbiYdO85o6k",
  authDomain: "itsallaboutstorage.firebaseapp.com",
  databaseURL: "https://itsallaboutstorage-default-rtdb.firebaseio.com/"
};

firebase.initializeApp(config);

export const auth = firebase.auth;

export const db = firebase.database();
