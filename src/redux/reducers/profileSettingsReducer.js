import {
  EDIT_PROFESSION,
  EDIT_LOCATION,
  EDIT_DESCRIPTION,
} from "../actions/profileSettingsActions";

const profileSettingsReducer = (
  state = { location: "", profession: "", description: "" },
  action
) => {
  switch (action.type) {
    case EDIT_LOCATION:
      return { ...state, location: action.payload };
    case EDIT_PROFESSION:
      return { ...state, profession: action.payload };
    case EDIT_DESCRIPTION:
      return { ...state, description: action.payload };
    default:
      return { ...state };
  }
};

export default profileSettingsReducer;
