import axios from 'axios';
import actionTypes from '../actionType';

const { LYRICS_FAILURE, LYRICS_PENDING, LYRICS_SUCCESS } = actionTypes;

export const fetchLyricsPending = () => ({
  type: LYRICS_PENDING,
  payload: {
    lyricsStatus: 'pending',
    lyricsError: null,
    lyrics: []
  }
});

export const fetchLyricsSuccess = lyrics => ({
  type: LYRICS_SUCCESS,
  payload: {
    lyricsStatus: 'success',
    lyricsError: null,
    lyrics
  }
});

export const fetchLyricsFailure = lyricsError => ({
  type: LYRICS_FAILURE,
  payload: {
    lyricsStatus: 'error',
    lyricsError,
    lyrics: []
  }
});

export const lyricsAction = ({
  history = {},
  id = 15953433
}) => async dispatch => {
  dispatch(fetchLyricsPending());
  try {
    const response = await axios({
      url: `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=6fe54f635e9936e32d712c4d3053efb5`,
      method: 'get'
    });

    const data = await response.data.message.body.lyrics.lyrics_body;

    dispatch(fetchLyricsSuccess(data));
  } catch (error) {
    dispatch(fetchLyricsFailure(error));
  }
};
