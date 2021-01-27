import { combineReducers } from "redux";

import searchReducer from "./searchReducer";
import modalReducer from "./modalReducer";
import projectReducer from "./projectReducer";
import signupReducer from "./signupReducer";
import profileSettingsReducer from "./profileSettingsReducer";
import accountSettingsReducer from "./accountSettingsReducers";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  modal: modalReducer,
  addProject: projectReducer,
  signup: signupReducer,
  profileSettings: profileSettingsReducer,
  accountSettings: accountSettingsReducer,
  filter: filterReducer,
});

export default rootReducer;
