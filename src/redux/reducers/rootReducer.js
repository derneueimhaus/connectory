import { combineReducers } from "redux";

import counterReducer from "./counterReducers";

const rootReducer = combineReducers({
  count: counterReducer,
});

export default rootReducer;
