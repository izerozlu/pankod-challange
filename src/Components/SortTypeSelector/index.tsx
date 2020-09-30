import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";
import { SeriesActions } from "@Actions";
import { AiFillCaretDown } from "react-icons/ai";
import Select from "react-select";
import { ISortTypeSelector } from "./SortTypeSelector";
import { SortType } from "../../Types/SortType";
import { Container } from "./styled";

export const SortTypeSelector: React.FunctionComponent<ISortTypeSelector.IProps> = () => {
    const series = useSelector((state: IStore) => state.series);
    const dispatch = useDispatch();

    const defaultOption = {
        label: "Title | Ascending",
        value: series.sortType,
    };

    const selectOptions = [
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

    const handleChange = ({ value }: { value: SortType; label: string }) => {
        dispatch(SeriesActions.AssignSortType(value));
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
