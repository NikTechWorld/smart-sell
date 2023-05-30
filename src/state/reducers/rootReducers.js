import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import posterReducer from './poster/posterReducer'
export default combineReducers({ userReducer, posterReducer })
