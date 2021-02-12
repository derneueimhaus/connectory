export const LOAD_SHALLOW_PROFILES_IN_PROGRESS =
  "LOAD_SHALLOW_PROFILES_IN_PROGRESS";
export const LOAD_SHALLOW_PROFILES_SUCCESS = "LOAD_SHALLOW_ROFILES_SUCCESS";
export const LOAD_SHALLOW_PROFILES_FAILURE = "LOAD_SHALLOW_PROFILES_FAILURE";

export const loadShallowProfilesInProgress = () => ({
  type: LOAD_SHALLOW_PROFILES_IN_PROGRESS,
});
export const loadShallowProfilesSuccess = (profiles) => ({
  type: LOAD_SHALLOW_PROFILES_SUCCESS,
  payload: profiles,
});
export const loadShallowProfilesFailure = () => ({
  type: LOAD_SHALLOW_PROFILES_FAILURE,
});
