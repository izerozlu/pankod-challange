import { NextPageContext } from "next";
import { Store } from "redux";

export interface FeedDisplayNextPageContext extends NextPageContext {
    store: Store;
}
