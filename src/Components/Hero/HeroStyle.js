import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1025px) {
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        grid-gap: 4rem;
        align-items: flex-start;
    }
`

export const HeroImage = styled.img`
    width: 300px;

    @media screen and (min-width: 500px) {
        width: 450px;
    }

    @media screen and (min-width: 768px) {
        width: 600px;
    }

    @media screen and (min-width: 1025px) {
        width: 650px;
    }
`

export const HeroWrapper = styled.div`
    margin-top: 4.1rem;
    text-align: center;

    @media screen and (min-width: 1025px) {
        text-align: left;
    }
`

export const HeroH1 = styled.h1`
    color: #ffffff;
    font-family: var(--headings);
    font-weight: var(--heading-weight-semiBold);
    font-size: 1.7rem;
    letter-spacing: 1.1;
    line-height: 1.7;

    @media screen and (min-width: 768px) {
        font-size: 2.5rem;
    }

    @media screen and (min-width: 1025px) {
        line-height: 1.4;
        font-size: 2rem;
    }
`

export const HeroP = styled.p`
    color: #d8d8d8;
    font-family: var(--body);
    font-weight: var(--body-weight-regular);
    font-size: 0.98rem;
    letter-spacing: 1.2;
    line-height: 1.5;
    margin: 1rem 0 2rem 0;

    @media screen and (min-width: 768px) {
        width: 90%;
        margin: 1.5rem auto 4rem auto;
        font-size: 1.5rem;
    }

    @media screen and (min-width: 1025px) {
        width: 100%;
        margin: 0.9rem 0 1.7rem 0;
        font-size: 1rem;
    }
`

export const HeroBtn = styled.button`
    background-color: #ffffff;
    color: var(--violet);
    border: none;
    border-radius: 50px;
    outline: none;
    padding: 0.8rem 4.3rem;
    font-family: var(--headings);
    font-weight: var(--heading-weight-regular);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: var(--transition);
    cursor: pointer;

    :hover {
        background-color: var(--soft-magenta);
        color: #ffffff;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
        padding: 1rem 6rem;
    }

    @media screen and (min-width: 1025px) {
        padding: 0.65rem 4.2rem;
    }
`
