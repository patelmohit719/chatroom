import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./Signout";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";

const App = () => {
  const auth = firebase.auth();

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h3>ChatRoom</h3>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
};

export default App;
