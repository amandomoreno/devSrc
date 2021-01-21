import React, { useState } from "react";
import useChat from "../../useChat";
import "./Chat.css";

const Chat = (props) => {
  const { room } = "chat";
  const { messages, sendMessage } = useChat(room);
  const [newMessage, setNewMessage] = useState("");
  const { chatters, setChatters } = useChat(room);
  // const [updatedChatters] = useState([])

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  // function updateChatters(chatters){
  //   chatters.forEach((chatter, idx) => {
  //     if (idx % 2 === 1){
  //       updatedChatters.push(chatter)
  //       console.log('this is', updatedChatters)
  //     }
  //     })
  // }

  // updateChatters()

  return (
    <div>
      <h2>Chat</h2>
      <div className="current-chatters">
        <div id="ChatUsers">
          <h3>Currently in room:</h3>
          <ul>
            {chatters.map((chatter, idx) =>
              idx % 2 === 0 ? <li></li> : <li id="chatter">{chatter}</li>
            )}
          </ul>
        </div>
        <hr></hr>
      </div>
      <div className="chat-section">
        <div id="chatter-box">
          <div className="col">
            <div className="row">
              <ul>
                {messages.map((message, i) => (
                  <li
                    key={i}
                    className={`message-item ${
                      message.sentByCurrentUser
                        ? "my-message"
                        : "received-message"
                    }`}
                  >
                    {message.name}:{message.body}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="chatting" className="row">
          <div className="col">
            <div className="row">
              <div>
                <textarea
                  className="input-field"
                  value={newMessage}
                  onChange={handleNewMessageChange}
                  placeholder="Send a message..."
                />
                <button className="btn" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
