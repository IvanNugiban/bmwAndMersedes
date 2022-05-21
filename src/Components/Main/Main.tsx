import React from 'react';
import styled from "styled-components";
import Title from "../Title/Title";
import ReadMoreBtn from "../../UI/ReadMoreBtn/ReadMoreBtn";
import Paragraph from "../Paragraph/Paragraph";
import {typeOfCar} from "../../styles/styleInterfaces/ITheme";
import {useTypedSelector} from "../../redux/reduxTypedHooks";

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  padding-left: 35px;
  justify-content: center;
  flex-direction: column;
  @media ${props => props.theme.media.phone} {
    padding-left: 0;
    align-items: center;
  }
`

const Main = () => {
    const chosenCar = useTypedSelector(state => state.chosenCar.car)
    return (
        <StyledMain>
            { chosenCar.type == typeOfCar.bmw ?
                <div>
            <Title mediaTablet="font-size: 8vw" mediaPhone="font-size: 15vw" fontSize="6vw" fontFamily="Bebas Neue, cursive">REALIZE THE<br/>
                POWER WITHIN.
            </Title>
            <Paragraph mediaTablet="font-size: 4vw" mediaPhone="font-size: 6vw"  textTransform="uppercase" fontFamily="Roboto, sans-serif" margin="0 0 20px 0" fontSize="2.2vw">The all-new bmw 5 series</Paragraph>
            <ReadMoreBtn/>
                </div> :
                <div>
                    <Title mediaTablet="font-size: 8vw"  textTransform="uppercase" mediaPhone="font-size: 15vw" fontSize="6vw" fontFamily="Bebas Neue, cursive">Unstoppable<br/>
                        Just like you.
                    </Title>
                    <Paragraph mediaTablet="font-size: 4vw" mediaPhone="font-size: 6vw"  textTransform="uppercase" fontFamily="Roboto, sans-serif" margin="0 0 20px 0" fontSize="2.2vw">Presenting the all-new Mercedes AMG A 35 4MATIC </Paragraph>
                    <ReadMoreBtn/>
                </div>

            }

        </StyledMain>
    );
};

export default Main;