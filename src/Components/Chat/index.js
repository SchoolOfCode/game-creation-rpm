import React, { useState } from "react";
import css from "./Chat.modules.css";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [chat, setChat] = useState("");

  function handleChange(e) {
    setChat(e.target.value);
  }

  // function sendMessage(e) {}
  // e.preventDefault();
  // socket.emit("chat message", chat);
  // setChat("");

  // socket.on("chat message", msg => {
  //   console.log(msg);
  //   <li>{msg}</li>;
  // });

  return (
    <form className={css.form}>
      <input
        type="text"
        onChange={handleChange}
        value={chat}
        placeholder="chat here"
      ></input>
      <button>Send</button>
    </form>
  );
}

export default Chat;
