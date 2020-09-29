// #region Local Imports
import { Feed } from "@Interfaces";
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

export const FeedShowcaseActions = {
    AssignFeedList: (feedList: Feed[]) => ({
        type: ActionConsts.FeedShowcase.AssignFeed,
        payload: feedList,
    }),
};
