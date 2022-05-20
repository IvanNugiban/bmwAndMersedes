import React from 'react';
import Header from "./Components/Header/Header";
import styled from "styled-components";
import Main from "./Components/Main/Main";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

enum photosSrc {
    bmwLogo = "https://www.bmw.in/etc.clientlibs/ds2-webcomponents/clientlibs/clientlib/resources/img/BMW_White_Logo.svg",
    bmwBackground = "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/5-series/2020/highlight1.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1641295515778.jpg"
}

function App() {
    return (
        <Wrapper>
            <Container>
                <Header padding="4px 100px 4px 10px" src={photosSrc.bmwLogo}/>
                <Main/>
            </Container>
        </Wrapper>
    );
}

export default App;
