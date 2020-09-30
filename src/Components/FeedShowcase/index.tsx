import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";
import { IFeedShowcase } from "@Components/FeedShowcase/FeedShowcase";
import { Feed } from "@Interfaces";
import { InnerContainer } from "@Styled/Shared";
import {
    Container,
    PosterImage,
    Showcase,
    ShowcaseList,
    ShowcaseTitle,
} from "./styled";

export const FeedShowcase: React.FunctionComponent<IFeedShowcase.IProps> = () => {
    const series = useSelector((state: IStore) => state.series);
    const dispatch = useDispatch();

    const renderShowcases = (): JSX.Element[] => {
        return series.filteredFeedList?.map((feed: Feed) => {
            return (
                <Showcase key={feed.title}>
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
