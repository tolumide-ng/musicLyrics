import { FETCH_PENDING, FETCH_FAILURE, FETCH_SUCCESS } from '../actionType';
import initialState from './index.js';

const fetchTypes = [FETCH_PENDING, FETCH_FAILURE, FETCH_SUCCESS];

const allMusic = (state = initialState, { type, payload }) => {
  return fetchTypes.includes(type) ? { ...state, payload } : state;
};

export default allMusic;
