import { EDIT_SHARE } from "../actions/accountSettingsActions";

const accountSettingsReducer = (state = { share: true }, action) => {
  switch (action.type) {
    case EDIT_SHARE:
      return {
        ...state,
        share: action.payload,
      };
    default:
      return { ...state };
  }
};

export default accountSettingsReducer;
