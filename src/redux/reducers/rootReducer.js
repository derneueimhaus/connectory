import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";
import projectReducer from "./projectReducer";
import signupReducer from "./signupReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  modal: modalReducer,
  addProject: projectReducer,
  signup: signupReducer,
});

export default rootReducer;
