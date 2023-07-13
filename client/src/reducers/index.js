import { combineReducers } from "redux";

import authReducer from './auth'
import currentUserReducer from './currentUser'
import instructorReducer from "./instructor";
import courseReducer from "./course";

export default combineReducers({
    authReducer,currentUserReducer, instructorReducer, courseReducer
})