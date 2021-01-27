import { TOGGLE_FILTER_OPTION } from "../actions/filterActions";

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_OPTION:
      return {
        ...state,
        [action.payload.id]: action.payload.checked,
      };
    default:
      return { ...state };
  }
};

export default filterReducer;
