import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBDVLVK0KVwl03YkYxFXpSYh4MdRTqTvpM",
    authDomain: "asodamvi-383c0.firebaseapp.com",
    databaseURL: "https://asodamvi-383c0-default-rtdb.firebaseio.com",
    projectId: "asodamvi-383c0",
    storageBucket: "asodamvi-383c0.appspot.com",
    messagingSenderId: "318086811336",
    appId: "1:318086811336:web:700eba6fc6e37cc6d7dffd",
    measurementId: "G-GL80ZBL726"
});

export const auth = app.auth();
export const firestore = app.firestore();
export default app;