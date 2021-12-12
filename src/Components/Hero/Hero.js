import React from 'react';
import { HeroContainer, HeroImage, HeroWrapper, HeroH1, HeroP, HeroBtn } from "./HeroStyle";

const Hero = (props) => {
    const clickAlert = () => {
        alert("You have clicked on Register Button. This button does nothing.");
    }
    return (
        <HeroContainer>
            <HeroImage src={props.heroImage} alt="Hero SVG"/>
            <HeroWrapper>
                <HeroH1>{props.heroH1}</HeroH1>
                <HeroP>{props.heroP}</HeroP>
                <HeroBtn onClick={clickAlert}>{props.heroBtn}</HeroBtn>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero;
