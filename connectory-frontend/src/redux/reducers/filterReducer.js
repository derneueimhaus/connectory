import { TOGGLE_FILTER_OPTION, CLEAR_FILTERS } from "../actions/filterActions";

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_FILTER_OPTION:
      return {
        ...state,
        [action.payload.id]: action.payload.checked,
      };
    case CLEAR_FILTERS:
      return {};
    default:
      return { ...state };
  }
};

export default filterReducer;
