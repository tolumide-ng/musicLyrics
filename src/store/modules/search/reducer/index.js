import actionTypes from '../actionType';

const { SEARCH_PENDING, SEARCH_FAILURE, SEARCH_SUCCESS } = actionTypes;

const initialState = {
  searchStatus: 'rest',
  searchError: null,
  searchResult: []
};

const searchTypes = [SEARCH_PENDING, SEARCH_FAILURE, SEARCH_SUCCESS];

const search = (state = initialState, { type, payload }) => {
  return searchTypes.includes(type) ? { ...state, ...payload } : state;
};

export default search;
