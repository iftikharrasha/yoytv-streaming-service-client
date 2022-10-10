import axios from "axios";
import store from "Utilities/Store/store";
import { GET_SUB_PROFILES_SUCCESS } from "./types";

// @desc                User loading.
// @params formData     data of user.
// @access              public
export const getSubProfiles = () => async (dispatch) => {
  try {
    const state = store.getState();

    let bodyFormData = new FormData();
    bodyFormData.append("id", state.auth.userId);
    bodyFormData.append("token", state.auth.token);

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/sub_profiles`,
      bodyFormData
    );

    if (res.data && res.data.success) {
      dispatch({
        type: GET_SUB_PROFILES_SUCCESS,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
