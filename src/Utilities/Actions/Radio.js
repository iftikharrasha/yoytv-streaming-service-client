import axios from "axios";
import {
  GET_RADIO_DATA_FAIL,
  GET_RADIO_DATA_PENDING,
  GET_RADIO_DATA_SUCCESS,
} from "./types";

export const getRadioStation = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_RADIO_DATA_PENDING,
    });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_LINK_RADIO}/stations`
    );
    if (data) {
      dispatch({
        type: GET_RADIO_DATA_SUCCESS,
        payload: data,
      });
      return;
    }
    dispatch({
      type: GET_RADIO_DATA_FAIL,
      type: data,
    });
  } catch (error) {
    dispatch({
      type: GET_RADIO_DATA_FAIL,
      payload: error.message,
    });
  }
};
