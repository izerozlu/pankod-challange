// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports
// #region Interface Imports
import { IAction, ISeries } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: ISeries.IStateProps = {
    feedList: [],
    hasError: false,
    feedFetched: false,
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
            };
        case ActionConsts.Series.AssignFilteredFeedList:
            return {
                ...state,
                filteredFeedList: action.payload,
            };

        case ActionConsts.Series.SetError:
            return {
                ...state,
                feedList: [],
                hasError: true,
            };

        default:
            return state;
    }
};
