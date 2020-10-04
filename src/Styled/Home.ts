// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const NavigationListContainer = styled.div`
    max-width: 1312px;
    width: 100%;
    display: flex;
    padding: 32px 16px;
`;

export const NavigationList = styled.ul`
    display: flex;
    width: 100%;
    padding: 0;

    @media screen and (max-width: 600px) {
        justify-content: space-between;
    }

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const NavigationEntry = styled.li`
    list-style: none;
    margin-right: 16px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
        flex-basis: 45%;
        margin: 0;
    }
`;

export const NavigationEntryHeader = styled.h2`
    // noinspection CssUnknownTarget
    background-image: url("static/images/placeholder.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 240px;
    background-color: rgba(0, 0, 0, 0.84);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    text-transform: uppercase;

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 320px;
    }
`;

export const NavigationEntryContent = styled.p`
    text-transform: capitalize;

    @media screen and (max-width: 600px) {
        font-size: 24px;
    }
`;
