export const EDIT_PROFESSION = "EDIT_PROFESSION";
export const EDIT_LOCATION = "EDIT_LOCATION";
export const EDIT_DESCRIPTION = "EDIT_DESCRIPTION";

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
