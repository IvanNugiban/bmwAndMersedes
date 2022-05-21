import React from "react";
import {css} from "styled-components";

export interface ITextProps {
    fontSize?: string;
    fontWeight?: "400" | "500" | "600" | "700" | "800" | "900";
    fontFamily?: string;
    color?: string;
    children: React.ReactNode;
    margin?: string;
    textTransform?: "uppercase" | "lowercase";
    padding?: string;
    mediaPhone?: string;
    mediaTablet?: string;
}

export const TextComponent =  css<ITextProps>`
     font-size : ${({fontSize}) => fontSize || "3vw" };
  font-weight: ${({fontWeight}) => fontWeight || "400"};
  font-family: ${({fontFamily}) => fontFamily || "serif"};
  color: ${({color}) => color || "white"};
  margin: ${({margin}) => margin || "0"};
  text-transform: ${({textTransform}) => textTransform || "none"};
  padding: ${({padding}) => padding || "0"};
  @media ${props => props.theme.media.tablet} {
    ${(props) => props.mediaTablet ? props.mediaTablet : ""}  
  }
  @media ${props => props.theme.media.phone} {
    ${(props) => props.mediaPhone ? props.mediaPhone : ""}
  }
`