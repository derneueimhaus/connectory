import {
  ADD_SIGNUP_EMAIL,
  ADD_SIGNUP_FIRST_NAME,
  ADD_SIGNUP_LAST_NAME,
  ADD_SIGNUP_PASSWORD,
  ADD_SIGNUP_CONFIRM,
} from "../actions/signupActions";

const searchReducer = (
  state = { email: "", firstName: "", lastName: "", pw: "", confirm: "" },
  action
) => {
  switch (action.type) {
    case ADD_SIGNUP_EMAIL:
      return { ...state, email: action.payload };
    case ADD_SIGNUP_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ADD_SIGNUP_LAST_NAME:
      return { ...state, lastName: action.payload };
    case ADD_SIGNUP_PASSWORD:
      return { ...state, pw: action.payload };
    case ADD_SIGNUP_CONFIRM:
      return { ...state, confirm: action.payload };
    default:
      return { ...state };
  }
};

export default searchReducer;
