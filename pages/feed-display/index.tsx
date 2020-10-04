// #region Global Imports
import React, { useEffect } from "react";
import { NextPage, NextPageContext } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@Styled/FeedDisplay";
import { Feed, FeedResponse, IFeedDisplay } from "@Interfaces";
import { IStore } from "@Redux/IStore";
import { FeedDisplayActions } from "@Actions";
import { Dispatch } from "redux";
import {
    FeedSearch,
    FeedShowcase,
    Footer,
    NavBar,
    SortTypeSelector,
} from "@Components";
import { Content, Header, InnerContainer, Subheader } from "@Styled/Shared";
import { useRouter } from "next/router";
import { COULD_NOT_RETRIEVE_FEED } from "../../src/Constants/Errors";
import { SortType } from "../../src/Types/SortType";

const FeedDisplay: NextPage<
    IFeedDisplay.IProps,
    IFeedDisplay.InitialProps
> = () => {
    const router = useRouter();
    const feedDisplay = useSelector((state: IStore) => state.feedDisplay);
    const dispatch = useDispatch();

    const filterFeed = (feedList: Feed[]): Feed[] => {
        const { query } = feedDisplay;
        const queryTestRegExp = new RegExp(query, "i");
        const filteredFeedList = feedList.filter((feed: Feed) => {
            return (
                feed.releaseYear > 2010 &&
                feedDisplay.feedType.includes(feed.programType) &&
                (query ? queryTestRegExp.test(feed.title) : true)
            );
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
        const { feedList } = feedDisplay;
        const sortedList = sortFeed(feedList, feedDisplay.sortType);
        const filteredList = filterFeed(sortedList);
        dispatch(FeedDisplayActions.AssignFilteredFeedList(filteredList));
    };

    useEffect(() => {
        const feedType = router.query?.type as "series" | "movies";
        dispatch(FeedDisplayActions.AssignFeedType(feedType || "series"));
        if (!feedDisplay.feedFetched) {
            fetchFeed(dispatch);
        }
    }, [dispatch, fetchFeed]);

    useEffect(() => {
        if (feedDisplay.feedNeedsProcessing) {
            processFeed();
        }
    });

    return (
        <Container>
            <NavBar />
            <Content>
                <Header>
                    <InnerContainer>
                        <Subheader>popular {feedDisplay.feedType}</Subheader>
                    </InnerContainer>
                </Header>
                <InnerContainer className="feed-display-filters">
                    <FeedSearch />
                    <SortTypeSelector />
                </InnerContainer>
                <FeedShowcase />
            </Content>
            <Footer />
        </Container>
    );
};

FeedDisplay.getInitialProps = async ({
    // @ts-ignore
    store,
}: NextPageContext): Promise<IFeedDisplay.InitialProps> => {
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
        dispatch(FeedDisplayActions.AssignFeedList(result.entries));
    } catch (e) {
        dispatch(FeedDisplayActions.SetError());
    }
};

export default FeedDisplay;
