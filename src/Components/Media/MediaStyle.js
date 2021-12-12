import styled from "styled-components";

export const MediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    width: 100%;

    @media screen and (min-width: 768px) {
        margin-top: 5rem;
    }

    @media screen and (min-width: 1200px) {
        justify-content: flex-end;
        margin-top: 0;
    }
`

export const MediaIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 50%;
    outline: none;
    padding: 0.6rem;
    transition: var(--transition);
    cursor: pointer;
    color: #ffffff;

    :hover {
        border: 1px solid var(--soft-magenta);
        color: var(--soft-magenta);
    }

    :nth-child(even) {
        margin: 0 1rem;
    }

    @media screen and (min-width: 768px) {
        padding: 1rem;
    }

    @media screen and (min-width: 1200px) {
        padding: 0.75rem;
    }
`
