import { combineReducers } from "redux";
import entitiesReducer from "./entities.js";

export default combineReducers({
    entities: entitiesReducer
});