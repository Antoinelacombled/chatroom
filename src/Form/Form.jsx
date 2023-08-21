import React from "react";
import './form.scss';
import { Send } from 'react-feather';

const Form = () => (
    <form className="form">
        <input placeholder="Entrez un message" className="input-message" type="text" />
        <button type="submit" className="button-submit">
        <Send size="80%" />
        </button>
    </form>
);

export default Form;