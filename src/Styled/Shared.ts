import styled from "styled-components";

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 100%;
    width: 100%;
    margin: 0 auto;
`;

export const InnerContainer = styled.div`
    max-width: 1280px;
    width: 100%;
`;

export const Header = styled.header`
    display: flex;
    justify-content: center;
    padding: 8px 16px;
    background-color: #424242;
    width: 100%;
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`;

export const Subheader = styled.h2`
    color: white;
    text-transform: capitalize;
`;
