//import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/storage"; // If using Firebase storage
import "firebase/auth"; // If using Firebase auth

const firebaseConfig = {
  apiKey: "AIzaSyBD8tE7flgHy3lhzmMWKzd_rntEA73JHK8",
  authDomain: "timeclock-otterspace.firebaseapp.com",
  databaseURL: "https://timeclock-otterspace.firebaseio.com",
  projectId: "timeclock-otterspace",
  storageBucket: "timeclock-otterspace.appspot.com",
  messagingSenderId: "144185997105",
  appId: "1:144185997105:web:64132fafed25b9e2f0a210",
  measurementId: "G-PM08PKEYM2"
};

firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
