// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: ${({ theme }) => theme.boxShadows.medium};
    position: relative;
    min-width: 240px;
`;

export const Selector = styled.select`
    border: none;
    appearance: none;
    background: none;
    width: 100%;

    :focus {
        outline: none;
    }
`;
