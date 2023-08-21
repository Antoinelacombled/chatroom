import React from "react";
import './messages.scss';
import Message from "./Message";


const Messages = ({ messages }) => {

    console.log(messages);

    return (
        <div className="messages">
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}
        </div>)
};

export default Messages;