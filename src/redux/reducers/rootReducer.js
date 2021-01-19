import { combineReducers } from "redux";

import counterReducer from "./counterReducers";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  search: searchReducer,
});

export default rootReducer;
