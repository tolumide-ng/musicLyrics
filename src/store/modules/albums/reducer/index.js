import actionTypes from '../actionType';

const { ALBUMS_FAILURE, ALBUMS_PENDING, ALBUMS_SUCCESS } = actionTypes;

const initialState = {
  albumStatus: 'rest',
  albumError: null,
  album: []
};

const albumTypes = [ALBUMS_FAILURE, ALBUMS_PENDING, ALBUMS_SUCCESS];

const albums = (state = initialState, { type, payload }) => {
  return albumTypes.includes(type) ? { ...state, ...payload } : state;
};

export default albums;
