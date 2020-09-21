// #region Global Imports
import React from "react";
// #endregion Global Imports
// #region Local Imports
import { Container, InnerContainer, Title, Utilities } from "./styled";
// #endregion Local Imports
// #region Interface Imports
import { INavBar } from "./NavBar";
import { TextButton } from "@Components/TextButton";
import { theme } from "@Definitions/Styled";
// #endregion Interface Imports

export const NavBar: React.FunctionComponent<INavBar.IProps> = () => {
    return (
        <Container>
            <InnerContainer>
                <Title>DEMO Streaming</Title>
                <Utilities>
                    <TextButton text="Log in" />
                    <TextButton
                        text="Start your free trial"
                        backgroundColor={theme.colors.accent}
                    />
                </Utilities>
            </InnerContainer>
        </Container>
    );
};
