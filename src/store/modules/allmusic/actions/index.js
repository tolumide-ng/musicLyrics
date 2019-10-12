import axios from 'axios';
import actionTypes from '../actionType';

const { FETCH_PENDING, FETCH_FAILURE, FETCH_SUCCESS } = actionTypes;

export const fetchAllMusicPending = () => ({
  type: FETCH_PENDING,
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
      url: `${process.env.THE_URL}chart.tracks.get?chart_name=top&page=1&page_size=14&country=it&f_has_lyrics=1&apikey=${process.env.API_KEY}`,
      method: 'get'
    });

    const data = await response.data.message.body.track_list;

    dispatch(fetchAllMusicSuccess(data));
  } catch (error) {
    dispatch(fetchAllMusicFailure(error));
  }
};
