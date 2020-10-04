// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadows.medium};
    border-radius: 4px;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        flex-basis: 100%;
        margin-bottom: 12px;
    }
`;

export const SearchInput = styled.input`
    border: none;
    background: none;
    padding: 8px 0 8px 16px;

    :focus {
        outline: none;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const SearchButton = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    height: 40px;
    width: 64px;

    :focus {
        outline: none;
    }
`;
