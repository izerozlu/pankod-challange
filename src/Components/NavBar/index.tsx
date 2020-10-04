import React from "react";
import { theme } from "@Definitions/Styled";
import { TextButton } from "@Components/TextButton";
import Link from "next/link";
import { INavBar } from "./NavBar";
import { Container, NavBarInnerContainer, Title, Utilities } from "./styled";

export const NavBar: React.FunctionComponent<INavBar.IProps> = () => {
    return (
        <Container>
            <NavBarInnerContainer>
                <Link href="/">
                    <Title>DEMO Streaming</Title>
                </Link>
                <Utilities className="utilities">
                    <TextButton
                        className="utilities__log-in-button"
                        text="Log in"
                    />
                    <TextButton
                        text="Start your free trial"
                        backgroundColor={theme.colors.accent}
                    />
                </Utilities>
            </NavBarInnerContainer>
        </Container>
    );
};
