// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
// #endregion Global Imports
// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { Container } from "@Styled/Home";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Footer, NavBar } from "@Components";
// #endregion Local Imports
// #region Interface Imports
import { IHomePage, ReduxNextPageContext } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    const home = useSelector((state: IStore) => state.home);
    const dispatch = useDispatch();

    return (
        <Container>
            <NavBar />
            <Footer />
        </Container>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
