export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const UPDATE_MODAL_DATA = "UPDATE_MODAL_DATA";

export const toggleModal = (value) => ({
  type: TOGGLE_MODAL,
  payload: value,
});

export const updateModalData = (value) => ({
  type: UPDATE_MODAL_DATA,
  payload: value,
});
