import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAB3-3M6PrSIsdxaVpHVxDYAep04wVDbnc",
    authDomain: "guava-challenge.firebaseapp.com",
    projectId: "guava-challenge",
    storageBucket: "guava-challenge.appspot.com",
    messagingSenderId: "472793447840",
    appId: "1:472793447840:web:8005da5ecccad0d918f8c5",
    measurementId: "G-8E8MLN6DS9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };