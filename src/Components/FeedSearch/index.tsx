import { SeriesActions } from "@Actions";
import React, { FormEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IFeedSearch } from "./FeedSearch";
import { Container, SearchButton, SearchInput } from "./styled";

export const FeedSearch: React.FunctionComponent<IFeedSearch.IProps> = () => {
    const dispatch = useDispatch();

    const handleInput = (event: FormEvent<HTMLInputElement>) => {
        // @ts-ignore
        const { value } = event.target;
        dispatch(SeriesActions.AssignQuery(value.length >= 3 ? value : ""));
    };

    return (
        <Container>
            <SearchInput placeholder="Search" onInput={handleInput} />
            <SearchButton className="feed-search__button">
                <AiOutlineSearch className="feed-search__button-icon" />
            </SearchButton>
        </Container>
    );
};
