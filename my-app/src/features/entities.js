import {combineReducers} from 'redux'
import slice from './middleware/button'

export default combineReducers({
    button: slice
});