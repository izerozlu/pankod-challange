// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
// #endregion Global Imports
// #region Local Imports
import { withTranslation } from "@Server/i18n";
import {
    Container,
    Content,
    Header,
    HeaderInnerContainer,
    NavigationEntry,
    NavigationEntryContent,
    NavigationEntryHeader,
    NavigationList,
    NavigationListContainer,
    Subheader,
} from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Footer, NavBar } from "@Components";
// #endregion Local Imports
// #region Interface Imports
import { IHomePage } from "@Interfaces";
import Link from "next/link";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    const dispatchNavigationClick = (title: string): void => {
        dispatch(HomeActions.Navigate(title));
    };

    const renderNavigationEntries = (): JSX.Element[] => {
        return ["series", "movies"].map((title: string) => (
            <Link href={`/${title}`} key={title}>
                <NavigationEntry onClick={() => dispatchNavigationClick(title)}>
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
                    <HeaderInnerContainer>
                        <Subheader>Popular Titles</Subheader>
                    </HeaderInnerContainer>
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
