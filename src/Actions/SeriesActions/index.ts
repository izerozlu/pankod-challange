// #region Local Imports
import { ActionConsts } from "@Definitions";
import { Feed } from "@Interfaces";
import { SortType } from "../../Types/SortType";
// #endregion Local Imports

export const SeriesActions = {
    AssignFeedList: (feedList: Feed[]) => ({
        type: ActionConsts.Series.AssignFeedList,
        payload: { feedList },
    }),
    AssignFilteredFeedList: (feedList: Feed[]) => ({
        type: ActionConsts.Series.AssignFilteredFeedList,
        payload: { filteredFeedList },
    }),
    AssignSortType: (sortType: SortType) => ({
        type: ActionConsts.Series.AssignSortType,
        payload: { sortType },
    }),
    SetError: () => ({
        type: ActionConsts.Series.SetError,
    }),
};
