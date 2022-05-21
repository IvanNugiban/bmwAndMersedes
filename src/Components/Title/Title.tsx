import React from 'react';
import styled from "styled-components";
import {ITextProps, TextComponent} from "../../styles/styleInterfaces/IText"

const StyledTitle  = styled.h1<ITextProps>`
 ${TextComponent}
`

const Title  = ({children, ...props} : ITextProps) => {
    return <StyledTitle {...props}>{children}</StyledTitle>;

};

export default Title;