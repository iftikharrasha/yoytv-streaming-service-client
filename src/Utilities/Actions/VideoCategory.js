import axios from "axios";
import { GET_VIDEO_CATEGORIES, GET_VIDEO_SUGGUESTIONS } from "./types";
import store from "Utilities/Store/store";
import {
  AUTH_DEVICE_TOKEN,
  AUTH_DEVICE_TYPE,
  AUTH_LOGIN_BY,
} from "Utilities/Constants";

export const getVideoCategoryList = () => async (dispatch) => {
  try {
    const { auth } = store.getState();
    var formdata = new FormData();
    formdata.append("id", auth?.userId);
    formdata.append("token", auth?.token);
    formdata.append("sub_profile_id", auth?.subProfileId);
    formdata.append("skip", "0");
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/v4/categories/list`,
      formdata
    );
    dispatch({
      type: GET_VIDEO_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_VIDEO_CATEGORIES,
      payload: [],
    });
  }
};

export const VideoSuggestions = (video_admin_id) => async (dispatch) => {
  try {
    const { auth } = store.getState();
    var formdata = new FormData();
    formdata.append("id", auth?.userId);
    formdata.append("token", auth?.token);
    formdata.append("language", "en");
    formdata.append("sub_profile_id", auth?.subProfileId);
    formdata.append("admin_video_id", video_admin_id);
    formdata.append("skip", "0");
    formdata.append("login_by", AUTH_LOGIN_BY);
    formdata.append("device_type", AUTH_DEVICE_TYPE);
    formdata.append("device_token", AUTH_DEVICE_TOKEN);
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/suggestions`,
      formdata
    );
    dispatch({
      type: GET_VIDEO_SUGGUESTIONS,
      payload: data?.data,
    });
  } catch (error) {
    dispatch({
      type: GET_VIDEO_SUGGUESTIONS,
      payload: [],
    });
  }
};
