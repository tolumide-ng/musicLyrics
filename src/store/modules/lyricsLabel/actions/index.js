import axios from 'axios';
import actionTypes from '../actionType';

const { LABEL_FAILURE, LABEL_PENDING, LABEL_SUCCESS } = actionTypes;

export const fetchLabelPending = () => ({
  type: LABEL_PENDING,
  payload: {
    labelStatus: 'pending',
    labelError: null,
    label: []
  }
});

export const fetchLabelSuccess = label => ({
  type: LABEL_SUCCESS,
  payload: {
    labelStatus: 'success',
    labelError: null,
    label
  }
});

export const fetchLabelFailure = labelError => ({
  type: LABEL_FAILURE,
  payload: {
    labelStatus: 'error',
    labelError,
    label: []
  }
});

export const labelAction = ({ history = {}, id }) => async dispatch => {
  dispatch(fetchLabelPending());
  try {
    const response = await axios({
      url: `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${id}&apikey=6fe54f635e9936e32d712c4d3053efb5`,
      method: 'get'
    });

    const data = response.data.message.body.track;

    dispatch(fetchLabelSuccess(data));
  } catch (error) {
    dispatch(fetchLabelFailure(error));
  }
};
