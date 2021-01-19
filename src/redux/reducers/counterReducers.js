import { STORE_COUNT } from "../actions/counterActions";

const counterReducer = (state, action) => {
  switch (action.type) {
    case STORE_COUNT:
      return { ...state, countValue: action.payload };
    default:
      return { ...state };
  }
};

export default counterReducer;
