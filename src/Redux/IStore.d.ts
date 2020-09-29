// #region Interface Imports
import { IHomePage, ISeries } from "@Interfaces";
import { IFeedShowcase } from "@Components/FeedShowcase/SeriesShowcase";

// #endregion Interface Imports

export interface IStore {
    FeedShowcase: IFeedShowcase.IStateProps;
    series: ISeries.IStateProps;
    home: IHomePage.IStateProps;
}
