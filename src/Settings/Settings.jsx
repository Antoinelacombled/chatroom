import React from "react";
import './settings.scss';

const Settings = ({ value, setValue }) => (
    <form className="settings">
        <input
            placeholder="Pseudo"
            className="settings-pseudo"
            type="text"
            value={value}
            onChange={() => {
                setValue(event.target.value);
                }}   
                />
    </form>
);

export default Settings;