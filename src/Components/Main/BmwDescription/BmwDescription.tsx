import React from 'react';
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import ReadMoreBtn from "../../../UI/ReadMoreBtn/ReadMoreBtn";

const BmwDescription = () => {
    return (
        <div>
            <div>
                <Title mediaTablet="font-size: 8vw" mediaPhone="font-size: 15vw" fontSize="6vw" fontFamily="Bebas Neue, cursive">REALIZE THE<br/>
                    POWER WITHIN.
                </Title>
                <Paragraph  mediaTablet="font-size: 4vw" mediaPhone="font-size: 6vw"  textTransform="uppercase" fontFamily="Roboto, sans-serif" margin="0 0 20px 0" fontSize="2.2vw">The all-new bmw 5 series</Paragraph>
                <ReadMoreBtn href="https://www.bmw.com/en/index.html"/>
            </div>
        </div>
    );
};

export default BmwDescription;