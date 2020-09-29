import * as React from "react";
import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import {
    Container,
    NavigationEntry,
    NavigationEntryContent,
    NavigationEntryHeader,
    NavigationList,
    NavigationListContainer,
} from "@Styled/Home";
import { Footer, NavBar } from "@Components";
import { IHomePage } from "@Interfaces";
import Link from "next/link";
import { Content, Header, InnerContainer, Subheader } from "@Styled/Shared";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const renderNavigationEntries = (): JSX.Element[] => {
        return ["series", "movies"].map((title: string) => (
            <Link href={`/${title}`} key={title}>
                <NavigationEntry>
                    <NavigationEntryHeader>{title}</NavigationEntryHeader>
                    <NavigationEntryContent>
                        Popular {title}
                    </NavigationEntryContent>
                </NavigationEntry>
            </Link>
        ));
    };

    return (
        <Container>
            <NavBar />
            <Content>
                <Header>
                    <InnerContainer>
                        <Subheader>Popular Titles</Subheader>
                    </InnerContainer>
                </Header>
                <NavigationListContainer>
                    <NavigationList>{renderNavigationEntries()}</NavigationList>
                </NavigationListContainer>
            </Content>
            <Footer />
        </Container>
    );
};

const Extended = withTranslation("common")(Home);

export default Extended;
