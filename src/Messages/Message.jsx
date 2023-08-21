import React from "react";


const Message = ({ author, content }) => (
    <div className="message">
        <div className="message-author"> {author} </div>
        <div className="message-body"> {content} </div>
    </div>
);

export default Message;