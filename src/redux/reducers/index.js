import { combineReducers } from "redux";
import belowScreenReducer from './belowScreenReducer';
import searchReducer from './searchReducer';

export default combineReducers({ belowScreenReducer, searchReducer });