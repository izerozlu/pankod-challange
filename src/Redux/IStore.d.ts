// #region Interface Imports
import { IHomePage, IFeedDisplay } from "@Interfaces";

// #endregion Interface Imports

export interface IStore {
    feedDisplay: IFeedDisplay.IStateProps;
    home: IHomePage.IStateProps;
}
