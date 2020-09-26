import React from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const auth = firebase.auth();
const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div>
      <div className={`message ${messageClass}`}>
        <img
          alt=""
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
