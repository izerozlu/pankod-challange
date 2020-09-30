// #region Global Imports
import React, { useEffect } from "react";
import { NextPage, NextPageContext } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@Styled/Series";
import { Feed, FeedResponse, ISeries } from "@Interfaces";
import { IStore } from "@Redux/IStore";
import { SeriesActions } from "@Actions";
import { Dispatch } from "redux";
import { FeedShowcase, Footer, NavBar, SortTypeSelector } from "@Components";
import { Content, Header, InnerContainer, Subheader } from "@Styled/Shared";
import { COULD_NOT_RETRIEVE_FEED } from "../../src/Constants/Errors";
import { SERIES } from "../../src/Constants/ProgramTypes";
import { SortType } from "../../src/Types/SortType";

const Series: NextPage<ISeries.IProps, ISeries.InitialProps> = () => {
    const series = useSelector((state: IStore) => state.series);
    const dispatch = useDispatch();

    const filterFeed = (feedList: Feed[]): Feed[] => {
        const filteredFeedList = feedList.filter((feed: Feed) => {
            return feed.releaseYear > 2010 && feed.programType === SERIES;
        });

        return filteredFeedList.slice(0, 21);
    };

    const sortFeed = (
        feedList: Feed[],
        sortType: SortType = "title_asc"
    ): Feed[] => {
        const higherSortComparison = (feedA: Feed, feedB: Feed): boolean => {
            switch (sortType) {
                case "title_asc": {
                    return feedA.title > feedB.title;
                }
                case "title_desc": {
                    return feedA.title < feedB.title;
                }
                case "years_asc": {
                    return feedA.releaseYear > feedB.releaseYear;
                }
                case "years_desc": {
                    return feedA.releaseYear < feedB.releaseYear;
                }
                default: {
                    return true;
                }
            }
        };
        const lowerSortComparison = (feedA: Feed, feedB: Feed): boolean => {
            switch (sortType) {
                case "title_asc": {
                    return feedA.title < feedB.title;
                }
                case "title_desc": {
                    return feedA.title > feedB.title;
                }
                case "years_asc": {
                    return feedA.releaseYear < feedB.releaseYear;
                }
                case "years_desc": {
                    return feedA.releaseYear > feedB.releaseYear;
                }
                default: {
                    return true;
                }
            }
        };

        return feedList.sort((feedA: Feed, feedB: Feed) => {
            if (higherSortComparison(feedA, feedB)) {
                return 1;
            }
            if (lowerSortComparison(feedA, feedB)) {
                return -1;
            }
            return 0;
        });
    };

    const processFeed = async () => {
        const { feedList } = series;
        const filteredList = filterFeed(feedList);
        const sortedList = sortFeed(filteredList, series.sortType);
        dispatch(SeriesActions.AssignFilteredFeedList(sortedList));
    };

    useEffect(() => {
        if (!series.feedFetched) {
            fetchFeed(dispatch);
        } else if (series.feedNeedsProcessing) {
            processFeed();
        }
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
