// #region Global Imports
import React, { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { AlternativeMessage, Container } from "@Styled/FeedDisplay";
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
import { Http } from "@Services";
import { FeedDisplayNextPageContext } from "@Interfaces/Models/FeedDisplayNextPageContext";
import { SortType } from "../../src/Types/SortType";
import { ENDPOINTS } from "../../src/Constants/Endpoints";

const FeedDisplay: NextPage<
    IFeedDisplay.IProps,
    IFeedDisplay.InitialProps
> = () => {
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

    const renderContent = (): JSX.Element => {
        if (feedDisplay.hasError || feedDisplay.loading) {
            return (
                <InnerContainer>
                    <AlternativeMessage>
                        {feedDisplay.hasError
                            ? "Oops, something went wrong.."
                            : "Loading..."}
                    </AlternativeMessage>
                </InnerContainer>
            );
        }
        return (
            <InnerContainer className="feed-display-filters">
                <FeedSearch />
                <SortTypeSelector />
            </InnerContainer>
        );
    };

    useEffect(() => {
        fetchFeed(dispatch);
    }, []);

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
                {renderContent()}
                <FeedShowcase />
            </Content>
            <Footer />
        </Container>
    );
};

FeedDisplay.getInitialProps = async (
    context: FeedDisplayNextPageContext
): Promise<IFeedDisplay.InitialProps> => {
    const { store, query } = context;
    const feedType = query?.type as "series" | "movies";
    store.dispatch(FeedDisplayActions.AssignFeedType(feedType || "series"));
    return {};
};

const fetchFeed = async (dispatch: Dispatch) => {
    try {
        const result = await Http.Request<FeedResponse>("GET", ENDPOINTS.feed);
        dispatch(FeedDisplayActions.AssignFeedList(result.entries));
    } catch (e) {
        dispatch(FeedDisplayActions.SetError());
    }
};

export default FeedDisplay;
