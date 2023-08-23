import React from "react";
import './form.scss';
import { Send } from 'react-feather';

const Form = ({ message, setMessage, submitMessage }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        submitMessage();
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                placeholder="Entrez un message"
                className="input-message"
                type="text"
                value={message}
                onChange={(event) => { setMessage(event.target.value); }}
            />
            <button
                type="submit"
                className="button-submit">
                <Send size="80%" />
            </button>
        </form>
    );
};

export default Form;