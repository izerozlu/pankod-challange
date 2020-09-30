// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports
// #region Interface Imports
import { IAction, ISeries } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ISeries.IStateProps = {
    feedList: [],
    filteredFeedList: [],
    hasError: false,
    feedFetched: false,
    feedNeedsProcessing: false,
    sortType: "title_asc",
};

type IMapPayload = ISeries.Actions.IMapPayload;

export const SeriesReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.Series.AssignFeedList:
            return {
                ...state,
                ...action.payload,
                feedFetched: true,
                feedNeedsProcessing: true,
            };
        case ActionConsts.Series.AssignFilteredFeedList:
            return {
                ...state,
                ...action.payload,
                feedNeedsProcessing: false,
            };
        case ActionConsts.Series.SetError:
            return {
                ...state,
                feedList: [],
                hasError: true,
            };
        case ActionConsts.Series.AssignSortType:
            return {
                ...state,
                ...action.payload,
                feedNeedsProcessing: true,
            };

        default:
            return state;
    }
};
