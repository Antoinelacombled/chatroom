import React from "react";
import './settings.scss';



const Settings = ({ value, setValue, saveValue }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        saveValue();
    }

    return (
        <form
            className="settings"
            onSubmit={handleSubmit}
        >
            <input
                placeholder="Pseudo"
                className="settings-pseudo"
                type="text"
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
            />
        </form>
    );
};

export default Settings;