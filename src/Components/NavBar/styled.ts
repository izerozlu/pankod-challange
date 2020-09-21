// #region Global Imports
import styled from "styled-components";
import { TextButton } from "@Components";
// #endregion Global Imports

export const Container = styled.nav`
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 16px;
`;

export const InnerContainer = styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h1`
    color: white;
    font-weight: bold;
`;

export const Utilities = styled.div`
    display: flex;
    align-items: center;

    > ${TextButton}:first-child {
        margin-right: 16px;
    }
`;
