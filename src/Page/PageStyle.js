import styled from "styled-components";

export const PageContainer = styled.section`
    background-image: url(${({screenBg}) => (screenBg === "desktop" ? "./images/bg-desktop.svg" : "./images/bg-mobile.svg")});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    width: 100vw;
    padding: 1.5rem;


    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }

    @media screen and (min-width: 1025px) {
        height: 100vh;
        padding: 6rem;
    }

    @media screen and (min-width: 1366px) {
        padding: 20rem;
    }
`