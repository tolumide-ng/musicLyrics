import axios from 'axios';
import { FETCH_FAILURE, FETCH_PENDING, FETCH_SUCCESS } from '../actionType';

export const fetchAllMusicPending = () => ({
  type: FETCH_FAILURE,
  payload: {
    allMusicStatus: 'pending',
    allMusicError: null,
    allMusic: []
  }
});

export const fetchAllMusicSuccess = allMusic => ({
  type: FETCH_SUCCESS,
  payload: {
    allMusicStatus: 'success',
    allMusicError: null,
    allMusic
  }
});

export const fetchAllMusicFailure = allMusicError => ({
  type: FETCH_FAILURE,
  payload: {
    allMusicStatus: 'error',
    allMusicError,
    allMusic: []
  }
});

export const allMusicAction = ({ history = {} }) => async dispatch => {
  dispatch(fetchAllMusicPending());
  try {
    const response = await axios({
      method: 'GET'
      //   headers: {}
    });

    const { data } = await response.data;
    dispatch(fetchAllMusicSuccess(data));
  } catch ({ response }) {
    const errorMessage = response.data.error || error;
    dispatch(fetchAllMusicFailure());
  }
};
