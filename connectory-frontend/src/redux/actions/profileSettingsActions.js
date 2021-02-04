// export const EDIT_PROFILE_DATA_NAME = "EDIT_PROFILE_DATA_NAME";
export const EDIT_PROFESSION = "EDIT_PROFESSION";
export const EDIT_LOCATION = "EDIT_LOCATION";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";

// export const editProfileData = (value) => ({
//   type: EDIT_PROFILE_DATA_NAME,
//   payload: value,
// });

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
