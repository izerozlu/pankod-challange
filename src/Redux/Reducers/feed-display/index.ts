// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports
// #region Interface Imports
import { IAction, IFeedDisplay } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IFeedDisplay.IStateProps = {
    feedList: [],
    filteredFeedList: [],
    hasError: false,
    feedNeedsProcessing: false,
    sortType: "title_asc",
    query: "",
    feedType: "series",
    loading: true,
};

type IMapPayload = IFeedDisplay.Actions.IMapPayload;

export const FeedDisplayReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.FeedDisplay.AssignFeedList:
            return {
                ...state,
                ...action.payload,
                feedNeedsProcessing: true,
                loading: false,
            };
        case ActionConsts.FeedDisplay.AssignFilteredFeedList:
            return {
                ...state,
                ...action.payload,
                feedNeedsProcessing: false,
            };
        case ActionConsts.FeedDisplay.SetError:
            return {
                ...state,
                feedList: [],
                hasError: true,
            };
        case ActionConsts.FeedDisplay.AssignSortType:
            return {
                ...state,
                ...action.payload,
                feedNeedsProcessing: true,
            };
        case ActionConsts.FeedDisplay.AssignQuery:
            return {
                ...state,
                ...action.payload,
                feedNeedsProcessing: true,
            };
        case ActionConsts.FeedDisplay.AssignFeedType:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
