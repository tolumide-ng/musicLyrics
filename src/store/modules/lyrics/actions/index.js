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
    lyricsStatus: 'rest',
    lyricsError: null,
    lyrics
  }
});

export const fetchLyricsFailure = lyricsError => ({
  type: LYRICS_FAILURE,
  payload: {
    lyricsStatus: 'rest',
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
      url: `${process.env.THE_URL}track.lyrics.get?track_id=${id}&apikey=${process.env.API_KEY}`,
      method: 'get'
    });

    const data = await response.data.message.body.lyrics;

    dispatch(fetchLyricsSuccess(data));
  } catch (error) {
    dispatch(fetchLyricsFailure(error));
  }
};
