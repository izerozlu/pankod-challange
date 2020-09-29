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
`;

export const NavigationEntry = styled.li`
    list-style: none;
    margin-right: 16px;
    cursor: pointer;
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
