import axios from "axios";
import store from "Utilities/Store/store";
import { GET_SUB_PROFILES_SUCCESS } from "./types";
import { notyf } from "Utilities/Hooks/useNotification";

// @desc                get sub profiles
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

// @desc                add sub profiles.
// @params formData     data of sub profile.
// @access              public
export const addSubProfile = (name, age, picture) => async (dispatch) => {
  try {
    const state = store.getState();

    let bodyFormData = new FormData();
    bodyFormData.append("id", state.auth.userId);
    bodyFormData.append("token", state.auth.token);
    bodyFormData.append("name", name);
    bodyFormData.append("age", age);
    if (picture !== null) {
      bodyFormData.append("picture", picture);
    }

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/add-profile`,
      bodyFormData
    );

    if (res.data && res.data.success) {
      notyf.open({
        type: "success",
        message: res.data.message,
      });
      return res.data.data.user_id;
    } else {
      notyf.open({
        type: "error",
        message: "No se pudo agregar !",
      });
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};
