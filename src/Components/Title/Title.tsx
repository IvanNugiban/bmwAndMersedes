import React from 'react';
import styled from "styled-components";

interface ITypedProps {
    fontSize?: string;
    fontWeight?: "400" | "500" | "600" | "700" | "800" | "900";
    fontFamily?: string;
    color?: string;
    children: React.ReactNode;
    margin?: string;
    textTransform?: "uppercase" | "lowercase";
    padding?: string;
}

const StyledTitle  = styled.h1<ITypedProps>`
  font-size : ${({fontSize}) => fontSize || "3vw" };
  font-weight: ${({fontWeight}) => fontWeight || "400"};
  font-family: ${({fontFamily}) => fontFamily || "serif"};
  color: ${({color}) => color || "white"};
  margin: ${({margin}) => margin || "0"};
  text-transform: ${({textTransform}) => textTransform || "none"};
  padding: ${({padding}) => padding || "0"};
`

const Title  = ({children, ...props} :ITypedProps) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;

};

export default Title;