import React from 'react';
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import useAction from "../../Hooks/useAction";

interface TypeProps {
    background?: string;
    padding?: string;
}


const StyledHeader  = styled.header<{ background?: string, padding?: string }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({padding}) => padding || "0"};
  }
`


const Header = (props: TypeProps) => {
    const {setCar} = useAction();
    return (
        <StyledHeader background={props.background} padding={props.padding}>
            <div>
                <Logo />
                <Title mediaTablet={`font-size: 5vw `} mediaPhone={`font-size: 7vw`} padding="0 10px 0 0" fontFamily='Smooch, cursive'  >Driving pleasure</Title>
                <ToggleSwitch action={setCar}/>
            </div>
        </StyledHeader>
    );
}

export default Header;