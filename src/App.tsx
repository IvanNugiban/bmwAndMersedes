import React from 'react';
import Header from "./Components/Header/Header";
import styled, {ThemeProvider} from "styled-components";
import Main from "./Components/Main/Main";
import store from "./redux/store";
import {useTypedSelector} from "./redux/reduxTypedHooks";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({theme}) =>  theme.background.bg};
`

function App() {
    const theme = useTypedSelector(state => state.chosenCar.car)
    return (
        <ThemeProvider theme={theme}>
        <Wrapper>
            <Container>
                <Header padding="4px 10px 4px 10px" />
                <Main/>
            </Container>
        </Wrapper>
        </ThemeProvider>
    );
}

export default App;
