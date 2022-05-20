import React from 'react';
import cl from "./ToggleSwitch.module.css"

const ToggleSwitch = () => {

    return (
            <label className={cl.switch}>
                <input type="checkbox"></input>
                    <span className={`${cl.slider} ${cl.round}`}></span>
            </label>
    );
};

export default ToggleSwitch;