import { useCollectionData } from "react-firebase-hooks/firestore";
import React, { Fragment, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const auth = firebase.auth();
const firestore = firebase.firestore();

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fragment>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          required
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message"
        />

        <button type="submit" disabled={!formValue}>
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
        </button>
      </form>
    </Fragment>
  );
};

export default ChatRoom;
