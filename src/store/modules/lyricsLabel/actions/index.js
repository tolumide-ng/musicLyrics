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
      url: `${process.env.BASE_URL}track.get?commontrack_id=${id}&apikey=${process.env.API_KEY}`,
      method: 'get'
    });

    const data = response.data.message.body.track;

    dispatch(fetchLabelSuccess(data));
  } catch (error) {
    dispatch(fetchLabelFailure(error));
  }
};
