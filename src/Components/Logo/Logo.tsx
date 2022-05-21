import React from 'react';
import styled from "styled-components";
import {useTypedSelector} from "../../redux/reduxTypedHooks";

interface typedProps {
    width?: string;
    height?: string;
}


const StyledLogo = styled.img<typedProps>`
  width: ${(props) => props.width || "5vw"};
  height: ${(props) => props.height || "5vw"};
  @media ${(props) => props.theme.media.tablet} {
    width: 8vw;
    height: 8vw
  }
  @media ${props => props.theme.media.phone} {
    width:  10vw;
    height: 10vw
  }
`

const Logo = (props: typedProps) => {
    const logoSrc = useTypedSelector(state => state.chosenCar.car.logo.big);
    return (
        <div>
          <StyledLogo src={logoSrc} {...props}/>
        </div>
    );
};

export default Logo;