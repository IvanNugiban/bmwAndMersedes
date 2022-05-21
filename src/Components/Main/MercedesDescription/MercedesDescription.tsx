import React from 'react';
import Title from "../../Title/Title";
import Paragraph from "../../Paragraph/Paragraph";
import LinkWithHover from "../../../UI/LinkWithHover/LinkWithHover";

const MercedesDescription = () => {
    return (
            <div>
                <Title  color="#0092CD" mediaTablet="font-size: 10vw"  textTransform="uppercase" mediaPhone="font-size: 20vw" fontSize="6vw" fontFamily="Bebas Neue, cursive">Unstoppable<br/>
                    Just like you.
                </Title>
                <Paragraph fontWeight="600"   mediaTablet="font-size: 4vw" mediaPhone="font-size: 6vw"  textTransform="uppercase" fontFamily="Roboto, sans-serif" margin="0 0 20px 0"  fontSize="1.3vw">Presenting the all-new Mercedes AMG A 35 4MATIC </Paragraph>
               <LinkWithHover href="https://www.mercedes-benz.com/en/">Learn more</LinkWithHover>
            </div>
    );
};

export default MercedesDescription;