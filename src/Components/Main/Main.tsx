import React from 'react';
import styled from "styled-components";
import Title from "../Title/Title";
import ReadMoreBtn from "../../UI/ReadMoreBtn/ReadMoreBtn";
import Paragraph from "../Paragraph/Paragraph";

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  padding-left: 35px;
  justify-content: center;
  flex-direction: column;
`

const Main = () => {
    return (
        <StyledMain>
            <Title  fontSize="6vw" fontFamily="Bebas Neue, cursive">REALIZE THE<br/>
                POWER WITHIN.
            </Title>
            <Paragraph textTransform="uppercase" fontFamily="Roboto, sans-serif" margin="0 0 20px 0" fontSize="2.2vw">The all-new bmw 5 series</Paragraph>
            <ReadMoreBtn/>
        </StyledMain>
    );
};

export default Main;