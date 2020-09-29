// #region Local Imports
import { Feed } from "@Interfaces";
// #endregion Local Imports

export const FeedShowcaseActions = {
    AssignFeedList: (feedList: Feed[]) => ({
        feedList,
    }),
};
