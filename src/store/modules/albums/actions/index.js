import axios from 'axios';
import actionTypes from '../actionType';

const { ALBUMS_PENDING, ALBUMS_FAILURE, ALBUMS_SUCCESS } = actionTypes;

export const fetchAlbumPending = () => ({
  type: ALBUMS_PENDING,
  payload: {
    albumStatus: 'pending',
    albumError: null,
    album: []
  }
});

export const fetchAlbumSuccess = album => ({
  type: ALBUMS_SUCCESS,
  payload: {
    albumStatus: 'success',
    albumErrors: null,
    album
  }
});

export const fetchAlbumFailure = albumErrors => ({
  type: ALBUMS_FAILURE,
  payload: {
    albumStatus: 'error',
    albumErrors,
    album: []
  }
});

export const albumAction = ({ history = {} }) => async dispatch => {
  dispatch(fetchAlbumPending());
  try {
    const response = await axios({
      url: `${process.env.BASE_URL}album.tracks.get?album_id=13750844&page=1&page_size=20&apikey=${process.env.API_KEY}`,
      method: 'get'
    });

    console.log('this is the server response', response);

    const data = response.data.message.body.track_list;

    dispatch(fetchAlbumSuccess(data));
  } catch (error) {
    dispatch(fetchAlbumFailure(error));
  }
};
