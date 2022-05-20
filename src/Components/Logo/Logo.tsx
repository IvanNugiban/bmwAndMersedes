import React from 'react';
import styled from "styled-components";

interface typedProps {
    width?: string;
    height?: string;
    src: string
}


const StyledLogo = styled.img<typedProps>`
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.height || "50px"};
`

const Logo = (props: typedProps) => {
    return (
        <div>
          <StyledLogo {...props}/>
        </div>
    );
};

export default Logo;