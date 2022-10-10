import axios from "axios";
import store from "Utilities/Store/store";
import { GET_SUB_PROFILES_SUCCESS } from "./types";

// @desc                User loading.
// @params formData     data of user.
// @access              public
export const getSubProfiles = () => async dispatch => {
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

// @desc                Edit profile.
// @params formData     data of user.
// @access              public
export const editSubProfile = formData => async dispatch => {
  try {
    const state = store.getState();

    let bodyFormData = new FormData();
    bodyFormData.append("id", state.auth.userId);
    bodyFormData.append("token", state.auth.token);
    bodyFormData.append("sub_profile_id", formData.subProfileId);
    bodyFormData.append("email", formData.email);
    bodyFormData.append("name", formData.name);
    bodyFormData.append("mobile", formData.mobile);
    bodyFormData.append("age", formData.age);
    bodyFormData.append("device_token", "123456");

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/edit-sub-profile`,
      bodyFormData
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// @desc                Edit profile.
// @params formData     data of user.
// @access              public
export const deleteSubProfile =
  (subProfileId, deleteSubProfileId) => async dispatch => {
    try {
      const state = store.getState();

      let bodyFormData = new FormData();
      bodyFormData.append("id", state.auth.userId);
      bodyFormData.append("token", state.auth.token);
      bodyFormData.append("sub_profile_id", subProfileId);
      bodyFormData.append("delete_sub_profile_id", deleteSubProfileId);

      const res = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/sub_profiles/delete`,
        bodyFormData
      );

      console.log(res.data);

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
