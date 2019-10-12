import actionTypes from '../actionType';

const { LABEL_FAILURE, LABEL_PENDING, LABEL_SUCCESS } = actionTypes;

const initialState = {
  labelStatus: 'rest',
  labelError: null,
  label: []
};

const labelTypes = [LABEL_FAILURE, LABEL_PENDING, LABEL_SUCCESS];

const labels = (state = initialState, { type, payload }) => {
  return labelTypes.includes(type) ? { ...state, ...payload } : state;
};

export default labels;
