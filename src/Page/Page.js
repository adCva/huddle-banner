import React, { useState, useEffect } from 'react';
import Nav from '../Components/Nav/Nav';
import Hero from '../Components/Hero/Hero';
import Media from '../Components/Media/Media';
import { PageContainer } from "./PageStyle";

const Page = () => {

    const [screenBg, setScreenBg] = useState("mobile");

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth > 768 ? setScreenBg("desktop") : setScreenBg("mobile");
        })
    })

    return (
        <PageContainer screenBg={screenBg}>
            <Nav logo={"./images/logo.svg"}/>
            <Hero heroImage="./images/illustration-mockups.svg" heroH1="Build The Community Your Fans Will Love" heroP="Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion." heroBtn="Register" />
            <Media />
        </PageContainer>
    )
}

export default Page;