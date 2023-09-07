import React, { useEffect, useRef } from "react";
import './messages.scss';
import Message from "../../src/containers/Messages/Message"


const Messages = ({ messages }) => {
    const refContainer = useRef(null);

    useEffect(() => {

        refContainer.current.scrollTo({
            top: refContainer.current.scrollHeight,
            left: 0,
            behavior: 'smooth',
        });
    }, [messages]);


    return (
        <div ref={refContainer} className="messages">
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}
        </div>)
};

export default Messages;