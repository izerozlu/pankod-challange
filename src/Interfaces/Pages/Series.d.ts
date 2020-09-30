// #region Global Imports
import { WithTranslation } from "next-i18next";
import { Feed } from "@Interfaces/Models/Feed";
import { SortType } from "../../Types/SortType";
// #endregion Global Imports

export declare module ISeries {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {}

    export interface IStateProps {
        feedList: Feed[];
        filteredFeedList: Feed[];
        sortType: SortType;
        feedNeedsProcessing: boolean;
        feedFetched: boolean;
        hasError: boolean;
    }

    module Actions {
        export interface IMapPayload {}
        export interface IMapResponse {}
    }
}
