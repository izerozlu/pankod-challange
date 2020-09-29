import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedShowcaseActions } from "@Actions";
import { IStore } from "@Redux/IStore";
import { IFeedShowcase } from "@Components/FeedShowcase/SeriesShowcase";
import { Feed } from "@Interfaces";
import { InnerContainer } from "@Styled/Shared";
import {
    Container,
    PosterImage,
    Showcase,
    ShowcaseList,
    ShowcaseTitle,
} from "./styled";

export const FeedShowcase: React.FunctionComponent<IFeedShowcase.IProps> = ({
    feedList,
}: IFeedShowcase.IProps) => {
    const feedShowcase = useSelector((state: IStore) => state.FeedShowcase);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FeedShowcaseActions.AssignFeedList(feedList));
    });

    const renderShowcases = (): JSX.Element[] => {
        return feedShowcase.feedList.map((feed: Feed) => {
            return (
                <Showcase>
                    <PosterImage
                        src={feed.images["Poster Art"].url}
                        loading="lazy"
                    />
                    <ShowcaseTitle>{feed.title}</ShowcaseTitle>
                </Showcase>
            );
        });
    };

    return (
        <Container>
            <InnerContainer>
                <ShowcaseList>{renderShowcases()}</ShowcaseList>
            </InnerContainer>
        </Container>
    );
};
