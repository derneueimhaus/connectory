import { TOGGLE_MODAL, UPDATE_MODAL_DATA } from "../actions/modalActions";

const modalReducer = (state = { show: false, data: "" }, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        show: action.payload,
      };
    case UPDATE_MODAL_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default modalReducer;
