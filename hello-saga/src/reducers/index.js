import { combineReducers } from 'redux'
import UsersReducer from "./users";

export default combineReducers({
    sliceUser: UsersReducer
})