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

    /**
     * Filters out the given <code>feedList</code> with filtering parameters <code>releaseYear</code>,
     * <code>programType</code> and -if current- <code>query</code>.
     * @param feedList List of <code>Feed</code> to be filtered out.
     * @returns Filtered list.
     */
    const filterFeed = (feedList: Feed[]): Feed[] => {
        const { query } = feedDisplay;
        const queryTestRegExp = new RegExp(query, "i");
        const filteredFeedList = feedList.filter((feed: Feed) => {
            return (
                feed.releaseYear >= 2010 &&
                feedDisplay.feedType.includes(feed.programType) &&
                (query ? queryTestRegExp.test(feed.title) : true)
            );
        });

        return filteredFeedList.slice(0, 21);
    };

    /**
     * Sorts the given <code>feedList</code> with instruction from the given <code>sortType</code.
     *
     * <code>sortType</code> variations:
     * <ul>
     *  <li>"title_asc": Ascending order for the <code>title</code> property.</li>
     *  <li>"title_desc": Descending order for the <code>title</code> property.</li>
     *  <li>"years_asc": Ascending order for the <code>releaseYear</code> property.</li>
     *  <li>"years_desc": Descending order for the <code>releaseYear</code> property.</li>
     * </ul>
     *
     * @param feedList List of <code>Feed</code> to sort.
     * @param sortType Type of sorting will be applied.
     * @returns Sorted out <code>Feed</code> list.
     */
    const sortFeed = (
        feedList: Feed[],
        sortType: SortType = "title_asc"
    ): Feed[] => {
        /**
         * Used to decide which feed will be prioritized to insert.
         * @param feedA First <code>Feed</code> to compare.
         * @param feedB Second <code>Feed</code> to compare.
         * @returns Decision of  whether the first <code>Feed</code> has to be inserted before.
         */
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
        /**
         * Used to decide which feed will be prioritized to insert.
         * @param feedA First <code>Feed</code> to compare.
         * @param feedB Second <code>Feed</code> to compare.
         * @returns Decision of whether the first <code>Feed</code> has to be inserted after.
         */
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

    /**
     * Sorts and filters the <code>feedList</code> from the component's store.
     */
    const processFeed = async (): Promise<void> => {
        const { feedList } = feedDisplay;
        const sortedList = sortFeed(feedList, feedDisplay.sortType);
        const filteredList = filterFeed(sortedList);
        dispatch(FeedDisplayActions.AssignFilteredFeedList(filteredList));
    };

    /**
     * Decides which content will be rendered for the component.
     * If the component is in a <i>loading</i> or <i>error</i> state, displays
     * a simple message.
     *
     * If not returns the feed elements.
     * @returns Content to be displayed.
     */
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

    // This useEffect hook is used for initial setup of the component.
    useEffect(() => {
        fetchFeed(dispatch);
    }, []);

    // This useEffect hook is used for state update digestions.
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

/**
 * Fetches a list of feed from the server. If this retrieval is successful,
 * saves the to the store which's <code>dispatch</code> method has been given as a parameter.
 * @param dispatch Method to notify a store about the feed list retriaval.
 */
const fetchFeed = async (dispatch: Dispatch): Promise<void> => {
    try {
        const result = await Http.Request<FeedResponse>("GET", ENDPOINTS.feed);
        dispatch(FeedDisplayActions.AssignFeedList(result.entries));
    } catch (e) {
        dispatch(FeedDisplayActions.SetError());
    }
};

export default FeedDisplay;
