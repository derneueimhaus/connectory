export const ADD_SIGNUP_EMAIL = "ADD_SIGNUP_EMAIL";
export const ADD_SIGNUP_FIRST_NAME = "ADD_SIGNUP_FIRST_NAME";
export const ADD_SIGNUP_LAST_NAME = "ADD_SIGNUP_LAST_NAME";
export const ADD_SIGNUP_PASSWORD = "ADD_SIGNUP_PASSWORD";
export const ADD_SIGNUP_CONFIRM = "ADD_SIGNUP_CONFIRM";

export const addSignupEmail = (value) => ({
  type: ADD_SIGNUP_EMAIL,
  payload: value,
});

export const addSignupFirstName = (value) => ({
  type: ADD_SIGNUP_FIRST_NAME,
  payload: value,
});

export const addSignupLastName = (value) => ({
  type: ADD_SIGNUP_LAST_NAME,
  payload: value,
});

export const addSignupPassword = (value) => ({
  type: ADD_SIGNUP_PASSWORD,
  payload: value,
});

export const addSignupConfirm = (value) => ({
  type: ADD_SIGNUP_CONFIRM,
  payload: value,
});
