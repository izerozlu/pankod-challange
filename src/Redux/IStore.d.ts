// #region Interface Imports
import { IHomePage, ISeries } from "@Interfaces";

// #endregion Interface Imports

export interface IStore {
    series: ISeries.IStateProps;
    home: IHomePage.IStateProps;
}
