import React from "react";
import classNames from "classnames";


const Message = ({ author, content, isMine }) => {
    const classCss = classNames('message', { 'message--own': isMine });

    return (
        <div className={classCss}>
            <div className="message-author"> {author} </div>
            <div className="message-body"> {content} </div>
        </div>
    );
};

export default Message;