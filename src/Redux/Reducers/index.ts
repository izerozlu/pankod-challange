import { combineReducers } from "redux";
import { SeriesReducer } from "./series";

export default combineReducers({
    series: SeriesReducer,
});
