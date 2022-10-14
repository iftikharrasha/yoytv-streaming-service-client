import {
  GET_RADIO_DATA_FAIL,
  GET_RADIO_DATA_PENDING,
  GET_RADIO_DATA_SUCCESS,
} from "Utilities/Actions/types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_RADIO_DATA_PENDING:
      return { ...state, loading: true };
    case GET_RADIO_DATA_SUCCESS:
      return { ...state, loading: false, data: payload };
    case GET_RADIO_DATA_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
