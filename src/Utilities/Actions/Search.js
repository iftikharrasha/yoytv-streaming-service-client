import axios from "axios";
import store from "Utilities/Store/store";
import { GET_SEARCH_RES } from "./types";

export const getSearchResults =
  (query = "") =>
  async dispatch => {
    try {
      const state = store.getState();
      const id = state.auth.userId;
      const subProfileId = state.auth.subProfileId;
      const token = state.auth.token;

      let bodyFormData = new FormData();
      bodyFormData.append("id", id);
      bodyFormData.append("token", token);
      bodyFormData.append("sub_profile_id", subProfileId);
      bodyFormData.append("key", query);

      const res = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/searchVideo`,
        bodyFormData
      );

      if (res.data.success) {
        dispatch({
          type: GET_SEARCH_RES,
          payload: res.data.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
