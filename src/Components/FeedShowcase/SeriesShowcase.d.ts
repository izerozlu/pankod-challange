import { Feed } from "@Interfaces";

export declare module IFeedShowcase {
    export interface IProps {
        feedList: Feed[];
    }

    export interface IState {}

    export interface IStateProps {
        sortType: "years_asc" | "years_desc" | "title_asc" | "title_desc";
        feedList: Feed[];
    }

    module Actions {
        export interface IMapPayload {}
        export interface IMapResponse {}
    }
}
