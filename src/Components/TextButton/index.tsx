// #region Global Imports
import React from "react";
// #endregion Global Imports
// #region Local Imports
import { Container } from "./styled";
// #endregion Local Imports
// #region Interface Imports
import { ITextButton } from "./TextButton";
// #endregion Interface Imports

export const TextButton: React.FunctionComponent<ITextButton.IProps> = ({
    text,
    backgroundColor,
    color,
}: ITextButton.IProps) => {
    return (
        <Container backgroundColor={backgroundColor} color={color}>
            {text}
        </Container>
    );
};
