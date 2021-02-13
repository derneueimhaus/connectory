export const LOAD_PROFILE_DATA = "LOAD_PROFILE_DATA";
export const EDIT_PROFILE_DATA = "EDIT_PROFILE_DATA";
export const EDIT_PROFESSION = "EDIT_PROFESSION";
export const EDIT_LOCATION = "EDIT_LOCATION";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";

export const loadProfileData = (obj) => ({
  type: LOAD_PROFILE_DATA,
  payload: obj,
});

export const editProfileData = (value) => ({
  type: EDIT_PROFILE_DATA,
  payload: value,
});

export const editProfession = (value) => ({
  type: EDIT_PROFESSION,
  payload: value,
});

export const editLocation = (value) => ({
  type: EDIT_LOCATION,
  payload: value,
});

export const editDescription = (value) => ({
  type: EDIT_DESCRIPTION,
  payload: value,
});
