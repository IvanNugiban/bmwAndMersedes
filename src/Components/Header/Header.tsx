import React from 'react';
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";

interface TypeProps {
    background?: string;
    padding?: string;
    src: string;
}


const StyledHeader  = styled.header<{ background?: string, padding?: string }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({padding}) => padding || "0"};
  }
`


const Header = (props: TypeProps) => {
    return (
        <StyledHeader background={props.background} padding={props.padding}>
            <div>
                <Logo src={props.src}/>
                <Title padding="0 20px 0 0" fontFamily='Smooch, cursive'  >Driving pleasure</Title>
                <ToggleSwitch/>
            </div>
        </StyledHeader>
    );
}

export default Header;