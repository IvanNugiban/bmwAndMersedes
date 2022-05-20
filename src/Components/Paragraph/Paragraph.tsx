import React from 'react';
import styled from "styled-components";

interface ITypedProps {
    fontSize?: string;
    fontWeight?: "400" | "500" | "600" | "700" | "800";
    fontFamily?: string;
    color?: string;
    children: React.ReactNode;
    margin?: string;
    textTransform?: "uppercase" | "lowercase";
}

const StyledParagraph = styled.p<ITypedProps>`
  font-size: ${({fontSize}) => fontSize || "2vw"};
  font-weight: ${({fontWeight}) => fontWeight || "400"};
  font-family: ${({fontFamily}) => fontFamily || "serif"};
  color: ${({color}) => color || "white"};;
  margin: ${({margin}) => margin || "0"};
  text-transform: ${({textTransform}) => textTransform || "none"};
`

const Paragraph = ({children, ...props}: ITypedProps) => {
    return <StyledParagraph {...props} >{children}</StyledParagraph>
};

export default Paragraph;