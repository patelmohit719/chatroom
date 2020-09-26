import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCiBDO8zg8reTz291hCRL-ODX6eKKLHSDc",
  authDomain: "dev404-firebase-chat-app.firebaseapp.com",
  databaseURL: "https://dev404-firebase-chat-app.firebaseio.com",
  projectId: "dev404-firebase-chat-app",
  storageBucket: "dev404-firebase-chat-app.appspot.com",
  messagingSenderId: "1078962884562",
  appId: "1:1078962884562:web:c9c039e01637ee7fd0020b",
  measurementId: "G-FP7WSRNPMQ",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const SignOut = () => {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
};

export default SignOut;
