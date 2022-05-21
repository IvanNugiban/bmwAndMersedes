import React from 'react';
import styled from "styled-components";
import {ITextProps, TextComponent} from "../../styles/styleInterfaces/IText";


const StyledParagraph = styled.p<ITextProps>`
 ${TextComponent}
`

const Paragraph = ({children, ...props}: ITextProps) => {
    return <StyledParagraph {...props} >{children}</StyledParagraph>
};

export default Paragraph;