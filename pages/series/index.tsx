// #region Global Imports
import React, { useEffect } from "react";
import { NextPage, NextPageContext } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@Styled/Series";
import { Feed, FeedResponse, ISeries } from "@Interfaces";
import { IStore } from "@Redux/IStore";
import { SeriesActions } from "@Actions";
import { Dispatch } from "redux";
import { FeedShowcase, Footer, NavBar } from "@Components";
import { Content, Header, InnerContainer, Subheader } from "@Styled/Shared";
import { COULD_NOT_RETRIEVE_FEED } from "../../src/Constants/Errors";
import { SERIES } from "../../src/Constants/ProgramTypes";

const Series: NextPage<ISeries.IProps, ISeries.InitialProps> = () => {
    const series = useSelector((state: IStore) => state.series);
    const dispatch = useDispatch();

    const filterFeed = () => {
        const { feedList } = series;

        const filteredFeedList = feedList.filter((feed: Feed) => {
            return feed.releaseYear > 2010 && feed.programType === SERIES;
        });
        dispatch(
            SeriesActions.AssignFilteredFeedList(filteredFeedList.slice(0, 21))
        );
    };

    useEffect(() => {
        const processFeed = async () => {
            if (!series.feedFetched) {
                await fetchFeed(dispatch);
            }
            filterFeed();
        };

        processFeed();
    });

    return (
        <Container>
            <NavBar />
            <Content>
                <Header>
                    <InnerContainer>
                        <Subheader>Popular Series</Subheader>
                    </InnerContainer>
                </Header>
                <InnerContainer className="sort-type-selector-container">
                    <SortTypeSelector />
                </InnerContainer>
                <FeedShowcase />
            </Content>
            <Footer />
        </Container>
    );
};

Series.getInitialProps = async ({
    // @ts-ignore
    store,
}: NextPageContext): Promise<ISeries.InitialProps> => {
    await fetchFeed(store.dispatch);
    return {};
};

const fetchFeed = async (dispatch: Dispatch) => {
    // TODO: use HTTP service for this.
    try {
        const result: FeedResponse = await fetch("/feed").then(
            (response: Response) => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error(COULD_NOT_RETRIEVE_FEED);
            }
        );
        dispatch(SeriesActions.AssignFeedList(result.entries));
    } catch (e) {
        dispatch(SeriesActions.SetError());
    }
};

export default Series;
