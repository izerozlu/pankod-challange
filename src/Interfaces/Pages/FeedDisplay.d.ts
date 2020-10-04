import { Feed } from "@Interfaces/Models/Feed";
import { SortType } from "../../Types/SortType";

export declare module IFeedDisplay {
    export interface IProps {}

    export interface InitialProps {}

    export interface IStateProps {
        feedList: Feed[];
        filteredFeedList: Feed[];
        sortType: SortType;
        feedNeedsProcessing: boolean;
        hasError: boolean;
        query: string;
        feedType: "series" | "movies";
        loading: boolean;
    }

    module Actions {
        export interface IMapPayload {}
        export interface IMapResponse {}
    }
}
