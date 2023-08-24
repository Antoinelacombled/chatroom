import React from "react";

// import Field from "../Field";
import Field from '../Field/Field.jsx'
import './login.scss'

const Login = ({ email, password }) => {
    const handleChange = (identifier, newValue) => {

        if (identifier === 'email') {
            console.log(`Nouvelle valeur pour l'email : ${newValue}`);
        } else if (identifier === 'password') {
            console.log(`Nouvelle valeur pour le mdp : ${newValue}`)
        }
    };
    return (
        <form className="login">

            <Field
                identifier='email'
                placeholder='timcook@hotmail.com'
                label='Email'
                value={email}
                type='email'
                changeField={handleChange}
            />
            <Field
                identifier="password"
                placeholder="Password"
                label="Password"
                type='password'
                value={password}
                changeField={handleChange}
            />
        </form>
    );
};

export default Login;