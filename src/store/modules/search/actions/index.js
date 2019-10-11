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
      url: `${process.env.BASE_URL}track.search?q=${searchQuery}&page_size=30&page=1&s_track_rating=desc&apikey=${process.env.API_KEY}`,
      method: 'get'
    });

    const data = response.data.message.body.track_list;

    dispatch(searchSuccess(data));
  } catch (error) {
    dispatch(searchFailure(error));
  }
};
