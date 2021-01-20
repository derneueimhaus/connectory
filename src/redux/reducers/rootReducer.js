import { combineReducers } from "redux";

import counterReducer from "./counterReducers";
import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  search: searchReducer,
  modal: modalReducer,
});

export default rootReducer;
