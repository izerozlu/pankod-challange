import React from "react";
import { Container } from "./styled";
import { ITextButton } from "./TextButton";

export const TextButton: React.FunctionComponent<ITextButton.IProps> = ({
    text,
    backgroundColor,
    color,
    className,
}: ITextButton.IProps) => {
    return (
        <Container
            backgroundColor={backgroundColor}
            color={color}
            className={className}
        >
            {text}
        </Container>
    );
};
