import { TOGGLE_ADD_MODE } from "../actions/projectActions";

const projectReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case TOGGLE_ADD_MODE:
      return {
        ...state,
        show: action.payload,
      };
    default:
      return { ...state };
  }
};

export default projectReducer;
