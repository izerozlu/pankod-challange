// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Content = styled.main`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
`;

export const Header = styled.header`
    display: flex;
    background-color: #424242;
    width: 100vw;
    margin-left: calc(-50vw + 640px);
    padding: 8px calc(50vw - 640px);
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
        0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
`;

export const Subheader = styled.h2`
    color: white;
`;

export const NavigationList = styled.ul`
    padding: 32px 0;
    display: flex;
`;

export const NavigationEntry = styled.li`
    list-style: none;
    margin-right: 16px;
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
`;

export const NavigationEntryContent = styled.p`
    text-transform: capitalize;
`;
