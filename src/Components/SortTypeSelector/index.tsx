import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";
import { FeedDisplayActions } from "@Actions";
import { AiFillCaretDown } from "react-icons/ai";
import Select, { ValueType } from "react-select";
import { ISortTypeSelector } from "./SortTypeSelector";
import { Container } from "./styled";
import { SortSelectOption } from "../../Types/SortSelectOption";

export const SortTypeSelector: React.FunctionComponent<ISortTypeSelector.IProps> = () => {
    const feedDisplay = useSelector((state: IStore) => state.feedDisplay);
    const dispatch = useDispatch();

    const defaultOption: SortSelectOption = {
        label: "Title | Ascending",
        value: feedDisplay.sortType,
    };

    const selectOptions: SortSelectOption[] = [
        {
            label: "Title | Ascending",
            value: "title_asc",
        },
        {
            label: "Title | Descending",
            value: "title_desc",
        },
        {
            label: "Years | Ascending",
            value: "years_asc",
        },
        {
            label: "Years | Descending",
            value: "years_desc",
        },
    ];

    const handleChange = (changeEvent?: ValueType<SortSelectOption>) => {
        if (changeEvent) {
            // @ts-ignore
            dispatch(FeedDisplayActions.AssignSortType(changeEvent.value));
        }
    };

    return (
        <Container className="sort-type-selector">
            <Select
                className="sort-type-selector__select"
                options={selectOptions}
                onChange={handleChange}
                defaultValue={defaultOption}
            />
            <AiFillCaretDown className="sort-type-selector__suffix-icon" />
        </Container>
    );
};
