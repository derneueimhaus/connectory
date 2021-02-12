import {
  LOAD_SHALLOW_PROFILES_FAILURE,
  LOAD_SHALLOW_PROFILES_IN_PROGRESS,
  LOAD_SHALLOW_PROFILES_SUCCESS,
} from "../actions/loadActions";

export const isLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOAD_SHALLOW_PROFILES_SUCCESS:
    case LOAD_SHALLOW_PROFILES_FAILURE:
      return false;
    case LOAD_SHALLOW_PROFILES_IN_PROGRESS:
      return true;
    default:
      return state;
  }
};

export const shallowProfilesReducer = (state = "", action) => {
  switch (action.type) {
    case LOAD_SHALLOW_PROFILES_SUCCESS: {
      return {
        ...state,
        profilesList: action.payload,
      };
    }
    case LOAD_SHALLOW_PROFILES_IN_PROGRESS:
    case LOAD_SHALLOW_PROFILES_FAILURE:
    default:
      return state;
  }
};
