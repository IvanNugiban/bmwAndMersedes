import React from 'react';
import cl from "./ToggleSwitch.module.css"
import {ActionCreatorWithoutPayload} from "@reduxjs/toolkit";

type TProps = {
    action : ActionCreatorWithoutPayload
}

const ToggleSwitch = (props : TProps) => {

    return (
            <label   className={cl.switch}>
                <input onChange={() => props.action()} type="checkbox"></input>
                    <span className={`${cl.slider} ${cl.round}`}></span>
            </label>
    );
};

export default ToggleSwitch;