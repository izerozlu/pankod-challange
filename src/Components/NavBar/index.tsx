import React from "react";
import { theme } from "@Definitions/Styled";
import { TextButton } from "@Components/TextButton";
import { INavBar } from "./NavBar";
import { Container, NavBarInnerContainer, Title, Utilities } from "./styled";

export const NavBar: React.FunctionComponent<INavBar.IProps> = () => {
    return (
        <Container>
            <NavBarInnerContainer>
                <Title>DEMO Streaming</Title>
                <Utilities>
                    <TextButton text="Log in" />
                    <TextButton
                        text="Start your free trial"
                        backgroundColor={theme.colors.accent}
                    />
                </Utilities>
            </NavBarInnerContainer>
        </Container>
    );
};
