// #region Global Imports
import styled from "styled-components";
import { ITextButton } from "@Components/TextButton/TextButton";
// #endregion Global Imports

export const Container = styled.button<
    Pick<ITextButton.IProps, "color" | "backgroundColor">
>`
    color: ${({ color }) => color || "white"};
    background: ${({ backgroundColor }) => backgroundColor || "none"};
    outline: none;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 8px;
    transition: box-shadow 0.12s ease-out;

    &:focus {
        outline: none;
    }
    &:active {
        box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
            0 3px 14px 2px rgba(0, 0, 0, 0.12),
            0 5px 5px -3px rgba(0, 0, 0, 0.2);
    }
`;
