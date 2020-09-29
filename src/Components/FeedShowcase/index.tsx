import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedShowcaseActions } from "@Actions";
import { IStore } from "@Redux/IStore";
import { IFeedShowcase } from "@Components/FeedShowcase/SeriesShowcase";
import { Container } from "./styled";

export const FeedShowcase: React.FunctionComponent<IFeedShowcase.IProps> = ({
    feedList,
}: IFeedShowcase.IProps) => {
    const feedShowcase = useSelector((state: IStore) => state.FeedShowcase);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FeedShowcaseActions.AssignFeedList(feedList));
    });

    return <Container>{feedShowcase.feedList.length}</Container>;
};
