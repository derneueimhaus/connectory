import {
  loadShallowProfilesInProgress,
  loadShallowProfilesSuccess,
  loadShallowProfilesFailure,
} from "./actions/loadActions";

export const loadShallowProfiles = () => async (dispatch, getState) => {
  try {
    dispatch(loadShallowProfilesInProgress());
    const profilesList = await fetch(
      "http://localhost:8080/shallowprofile"
    ).then((res) => res.json());
    dispatch(loadShallowProfilesSuccess(profilesList));
  } catch (err) {
    dispatch(loadShallowProfilesFailure());
    dispatch(displayAlert(err));
  }
};

export const displayAlert = (text) => (dispatch, getState) => {
  alert(text);
};
