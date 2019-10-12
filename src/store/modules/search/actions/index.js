import axios from 'axios';
import actionTypes from '../actionType';

const { SEARCH_FAILURE, SEARCH_PENDING, SEARCH_SUCCESS } = actionTypes;

export const searchPending = () => ({
  type: SEARCH_PENDING,
  payload: {
    searchStatus: 'pending',
    searchError: null,
    searchResult: []
  }
});

export const searchFailure = searchError => ({
  type: SEARCH_FAILURE,
  payload: {
    searchStatus: 'error',
    searchError,
    searchResult: []
  }
});

export const searchSuccess = searchResult => ({
  type: SEARCH_SUCCESS,
  payload: {
    searchStatus: 'success',
    searchError: null,
    searchResult
  }
});

export const searchAction = ({ searchQuery }) => async dispatch => {
  dispatch(searchPending());
  try {
    const response = await axios({
      url: `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q=${searchQuery}&page_size=30&page=1&s_track_rating=desc&apikey=6fe54f635e9936e32d712c4d3053efb5`,
      method: 'get'
    });

    const data = response.data.message.body.track_list;

    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};
