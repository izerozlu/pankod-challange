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
    AssignFilteredFeedList: (filteredFeedList: Feed[]) => ({
        type: ActionConsts.Series.AssignFilteredFeedList,
        payload: { filteredFeedList },
    }),
    AssignSortType: (sortType: SortType) => ({
        type: ActionConsts.Series.AssignSortType,
        payload: { sortType },
    }),
    AssignQuery: (query: string) => ({
        type: ActionConsts.Series.AssignQuery,
        payload: { query },
    }),
    SetError: () => ({
        type: ActionConsts.Series.SetError,
    }),
};
