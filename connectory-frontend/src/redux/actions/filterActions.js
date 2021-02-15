export const TOGGLE_FILTER_OPTION = "TOGGLE_FILTER_OPTION";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const toggleFilterOption = (value) => ({
  type: TOGGLE_FILTER_OPTION,
  payload: value,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});
