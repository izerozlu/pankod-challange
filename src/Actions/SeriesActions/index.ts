// #region Local Imports
import { ActionConsts } from "@Definitions";
import { Feed } from "@Interfaces";
// #endregion Local Imports

export const SeriesActions = {
    AssignFeedList: (feedList: Feed[]) => ({
        type: ActionConsts.Series.AssignFeedList,
        payload: { feedList },
    }),
    AssignFilteredFeedList: (feedList: Feed[]) => ({
        type: ActionConsts.Series.AssignFilteredFeedList,
        payload: { feedList },
    }),
    SetError: () => ({
        type: ActionConsts.Series.SetError,
    }),
};
