import { combineReducers } from "redux";
import { FeedShowcaseReducer } from "@Reducers/feedShowcase";
import { SeriesReducer } from "./series";

export default combineReducers({
    FeedShowcase: FeedShowcaseReducer,
    series: SeriesReducer,
});
