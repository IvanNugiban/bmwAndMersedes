import React from 'react';
import styled, {css} from "styled-components";
import {typeOfCar} from "../../styles/styleInterfaces/ITheme";
import {useTypedSelector} from "../../redux/reduxTypedHooks";
import BmwDescription from "./BmwDescription/BmwDescription";
import MercedesDescription from "./MercedesDescription/MercedesDescription";

const StyledMain = styled.main`
  height: 100vh;
  display: flex;
  padding-left: 10px;
  justify-content: center;
  flex-direction: column;

  ${props => props.theme.type === typeOfCar.mercedes && css`
    align-items: flex-end;
    justify-content: flex-start;
    padding: 80px 0px 0 0;
    @media ${props => props.theme.media.tablet} {
      justify-content: center;
      text-align: center;
      padding: 0;
    }
    @media ${props => props.theme.media.phone} {
      justify-content: center;
      text-align: center;
      padding: 0;
    }
  `} @media ${props => props.theme.media.phone} {
    padding-left: 0;
    align-items: center;
  }
`

const Main = () => {
    const chosenCarType = useTypedSelector(state => state.chosenCar.car.type)
    return (
        <StyledMain>
            {chosenCarType == typeOfCar.bmw ? <BmwDescription/> : <MercedesDescription/>}

        </StyledMain>
    );
};

export default Main;