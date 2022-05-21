import React from 'react';
import {ActionCreatorWithoutPayload} from "@reduxjs/toolkit";
import styled from "styled-components";
import {useTypedSelector} from "../../redux/reduxTypedHooks";

type TProps = {
    action : ActionCreatorWithoutPayload
}
type ToggleSwitch = {
    logoSrc: string
}
const StyledToggleSwitch = styled.label<ToggleSwitch>`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #202632;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: url(${({logoSrc}) => logoSrc}) center/40px;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #FFFF;
  }

  input:focus + span{
    box-shadow: 0 0 1px #FFFF;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

const ToggleSwitch = (props : TProps) => {
const logoSrc = useTypedSelector(state => state.chosenCar.car.logo.small)
    return (
           <StyledToggleSwitch logoSrc={logoSrc}>
                <input onChange={() => props.action()} type="checkbox"></input>
                    <span className={`cl.slider cl.round`}></span>
           </StyledToggleSwitch>
    );
};

export default ToggleSwitch;