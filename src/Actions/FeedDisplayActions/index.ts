// #region Local Imports
import { ActionConsts } from "@Definitions";
import { Feed } from "@Interfaces";
import { SortType } from "../../Types/SortType";
// #endregion Local Imports

export const FeedDisplayActions = {
    AssignFeedList: (feedList: Feed[]) => ({
        type: ActionConsts.FeedDisplay.AssignFeedList,
        payload: { feedList },
    }),
    AssignFilteredFeedList: (filteredFeedList: Feed[]) => ({
        type: ActionConsts.FeedDisplay.AssignFilteredFeedList,
        payload: { filteredFeedList },
    }),
    AssignSortType: (sortType: SortType) => ({
        type: ActionConsts.FeedDisplay.AssignSortType,
        payload: { sortType },
    }),
    AssignQuery: (query: string) => ({
        type: ActionConsts.FeedDisplay.AssignQuery,
        payload: { query },
    }),
    AssignFeedType: (feedType: "series" | "movies") => ({
        type: ActionConsts.FeedDisplay.AssignFeedType,
        payload: { feedType },
    }),
    SetError: () => ({
        type: ActionConsts.FeedDisplay.SetError,
    }),
};
