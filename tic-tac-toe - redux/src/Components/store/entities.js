import { combineReducers } from "redux";
import gameReducer from './feature/Game'

export default combineReducers({
    gameFeatures: gameReducer
})