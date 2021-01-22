import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  modal: modalReducer,
  addProject: projectReducer,
});

export default rootReducer;
