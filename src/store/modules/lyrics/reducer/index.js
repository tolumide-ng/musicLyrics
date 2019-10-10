import actionTypes from '../actionType';

const { LYRICS_PENDING, LYRICS_FAILURE, LYRICS_SUCCESS } = actionTypes;

const initialState = {
  lyricsStatus: 'rest',
  lyricsError: null,
  lyrics: []
};

const fetchTypes = [LYRICS_PENDING, LYRICS_FAILURE, LYRICS_SUCCESS];

const lyrics = (state = initialState, { type, payload }) => {
  return fetchTypes.includes(type) ? { ...state, ...payload } : state;
};

export default lyrics;
