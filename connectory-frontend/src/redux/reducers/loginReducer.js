import { EDIT_LOGGED_IN_STATUS } from "../actions/loginActions";

const searchReducer = (state = { email: "", userId: 1 }, action) => {
  switch (action.type) {
    case EDIT_LOGGED_IN_STATUS:
      return {
        ...state,
        email: action.payload.email,
        userId: action.payload.userId,
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
