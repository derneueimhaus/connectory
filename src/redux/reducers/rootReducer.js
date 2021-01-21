import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  modal: modalReducer,
});

export default rootReducer;
