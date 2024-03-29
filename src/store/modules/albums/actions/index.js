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
      url: `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=13750844&page=1&page_size=20&apikey=6fe54f635e9936e32d712c4d3053efb5`,
      method: 'get'
    });

    const data = response.data.message.body.track_list;

    dispatch(fetchAlbumSuccess(data));
  } catch (error) {
    dispatch(fetchAlbumFailure(error));
  }
};
