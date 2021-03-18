import {combineReducers} from 'redux'
import bugsReducer from './bugs'
import projectsReducer from './projects'
import persons from "./persons";

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    persons: persons,
});