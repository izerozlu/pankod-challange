// #region Local Imports
import { ActionConsts } from "@Definitions";
import { Feed } from "@Interfaces";
// #endregion Local Imports

export const SeriesActions = {
    AssignFeed: (feedList: Feed[]) => ({
        type: ActionConsts.Series.AssignFeed,
        payload: { feedList },
    }),
    SetError: () => ({
        type: ActionConsts.Series.SetError,
    }),
};
