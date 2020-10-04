import { combineReducers } from "redux";
import { FeedDisplayReducer } from "./feed-display";

export default combineReducers({
    feedDisplay: FeedDisplayReducer,
});
