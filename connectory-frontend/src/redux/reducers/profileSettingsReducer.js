import {
  EDIT_PROFESSION,
  EDIT_LOCATION,
  EDIT_DESCRIPTION,
  LOAD_PROFILE_DATA,
  EDIT_PROFILE_DATA,
} from "../actions/profileSettingsActions";

const profileSettingsReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PROFILE_DATA:
      return { ...state, profileData: action.payload };
    case EDIT_PROFILE_DATA:
      return { ...state, profileData: action.payload };
    default:
      return { ...state };
  }
};

export default profileSettingsReducer;
