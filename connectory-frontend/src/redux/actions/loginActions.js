export const EDIT_LOGGED_IN_STATUS = "EDIT_LOGGED_IN_STATUS";

export const editLoggedInStatus = (value) => ({
  type: EDIT_LOGGED_IN_STATUS,
  payload: value,
});
