// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports
// #region Interface Imports
import { IAction } from "@Interfaces";
import { IFeedShowcase } from "@Components/FeedShowcase/SeriesShowcase";
// #endregion Interface Imports

const INITIAL_STATE: IFeedShowcase.IStateProps = {
    feedList: [],
    sortType: "title_asc",
};

type IMapPayload = IFeedShowcase.Actions.IMapPayload;

export const FeedShowcaseReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.FeedShowcase.AssignFeed:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
