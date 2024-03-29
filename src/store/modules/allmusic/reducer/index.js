import actionTypes from '../actionType';

const { FETCH_PENDING, FETCH_FAILURE, FETCH_SUCCESS } = actionTypes;

const initialState = {
  allMusicStatus: 'rest',
  allMusicError: null,
  allMusic: []
};

const fetchTypes = [FETCH_PENDING, FETCH_FAILURE, FETCH_SUCCESS];

const allMusic = (state = initialState, { type, payload }) => {
  return fetchTypes.includes(type) ? { ...state, ...payload } : state;
};

export default allMusic;
