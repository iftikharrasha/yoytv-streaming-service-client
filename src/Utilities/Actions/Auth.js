import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOAD_USER,
} from "./types";

// @desc                Login user.
// @params formData     data of user.
// @access              public
export const loadUser = () => async (dispatch) => {
  try {
    const id = localStorage.getItem("id");
    const subProfileId = localStorage.getItem("subProfileId");
    const token = localStorage.getItem("token");

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/profile`,
      bodyFormData
    );

    if (res.data && !res.data.success) {
      dispatch({
        type: AUTH_ERROR,
      });
    } else {
      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// @desc                Login user.
// @params formData     data of user.
// @access              public
export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/v4/login`,
      formData
    );

    if (res.data && !res.data.success) {
      dispatch({
        type: LOGIN_FAIL,
      });
    } else {
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("id", res.data.data.id);
      localStorage.setItem("subProfileId", res.data.data.subProfileId);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    }
    return res.data.success;
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });

    return false;
  }
};

// @desc                Register user.
// @params formData     data of user.
// @access              public
export const registerUser = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    let data = new FormData();
    data.append("name", formData.name);
    data.append("password", formData.password);
    data.append("email", formData.email);
    data.append("login_by", formData.login_by);
    data.append("device_type", formData.device_type);
    data.append("device_token", formData.device_token);

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/v4/register`,
      data
    );

    console.log("res: ", res);

    if (res.data && !res.data.success) {
      dispatch({
        type: REGISTER_FAIL,
      });
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    }

    return res.data.success;
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });

    return false;
  }
};
