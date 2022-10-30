import axios from "axios";
import {
  GET_ON_DEMAND_DATA,
  GET_HOME_FIRST_SECTION,
  GET_VIDEO_VIEW,
  GET_VIDEO_VIEW_SECOND,
  GET_CATEGORY_VIDEOS,
  GET_MY_WISH_LIST,
  GET_CATEGORIES,
  GET_SINGLE_VIDEO,
  CHANGE_IS_LOADING,
  GET_SINGLE_CATEGORY_VIDEOS,
  UPDATE_WISHLIST,
} from "./types";
import store from "Utilities/Store/store";
import { notyf } from "Utilities/Hooks/useNotification";

const BASE_URL = process.env.REACT_APP_API_LINK;

// @desc        Get onDemand page data.
// @api
// @access      public
export const getOnDemandData = () => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;
    const res = await axios.post(
      `${BASE_URL}/userApi/home_category_section?id=${id}&token=${token}&language=en&sub_profile_id=${subProfileId}&page_type=2&login_by=manual&device_type=web&device_token=123456`
    );

    if (res.data.success) {
      dispatch({
        type: GET_ON_DEMAND_DATA,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get HomeFirstSection data.
// @api
// @access      public
export const getHomeFirstSection = () => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    bodyFormData.append("page_type", "HOME");
    // bodyFormData.append("category_id");
    // bodyFormData.append("sub_category_id");
    // bodyFormData.append("genre_id");
    bodyFormData.append("country_code", "IN");
    const res = await axios.post(
      `${BASE_URL}/userApi/home_first_section`,
      bodyFormData
    );

    // const res = home_first_section;

    if (res.data.success) {
      dispatch({
        type: GET_HOME_FIRST_SECTION,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get addToWishList.
// @api
// @access      public
export const addToWishList = (videoId) => async (dispatch) => {
  // const { notyf } = useNotification();
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    bodyFormData.append("page_type", "HOME");
    bodyFormData.append("admin_video_id", videoId);
    const res = await axios.post(
      `${BASE_URL}/userApi/wishlists/operations`,
      bodyFormData
    );

    if (res.data.success) {
      dispatch({
        type: UPDATE_WISHLIST,
        payload: null,
      });
      notyf.open({
        type: "success",
        message: res.data.message,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get getVideoView.
// @api
// @access      public
export const getVideoView = (videoId) => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    bodyFormData.append("admin_video_id", videoId);
    const res = await axios.post(
      `${BASE_URL}/userApi/videos/view`,
      bodyFormData
    );

    if (res.data.success) {
      dispatch({
        type: GET_VIDEO_VIEW,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get getVideoViewSecond.
// @api
// @access      public
export const getVideoViewSecond = (videoId) => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    bodyFormData.append("admin_video_id", videoId);
    const res = await axios.post(
      `${BASE_URL}/userApi/videos/view/second`,
      bodyFormData
    );

    if (res.data.success) {
      dispatch({
        type: GET_VIDEO_VIEW_SECOND,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get getMyWishList.
// @api
// @access      public
export const getMyWishList = () => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    bodyFormData.append("skip", 0);
    const res = await axios.post(
      `${BASE_URL}/userApi/wishlists/list`,
      bodyFormData
    );

    if (res.data && res.data.success) {
      dispatch({
        type: GET_MY_WISH_LIST,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get getCategory Videos.
// @api
// @access      public
export const getCategoryVideos = (categoryId) => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    // bodyFormData.append("admin_video_id", videoId);
    const res = await axios.post(`${BASE_URL}/userApi/see_all`, bodyFormData);

    if (res.data.success) {
      dispatch({
        type: GET_CATEGORY_VIDEOS,
        payload: res.data.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", subProfileId);
    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/v4/categories/list`,
      bodyFormData
    );

    if (res.data.success) {
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// @desc        Get Single Video data.
// @api
// @access      public
export const getSingleVideo = (adminVideoId) => async (dispatch) => {
  try {
    const state = store.getState();
    const id = state.auth.userId;
    const subProfileId = state.auth.subProfileId;
    const token = state.auth.token;

    dispatch({ type: CHANGE_IS_LOADING, payload: true });

    const res = await axios.post(
      `${BASE_URL}/userApi/singleVideo?id=${id}&token=${token}&language=en&sub_profile_id=${subProfileId}&admin_video_id=${adminVideoId}&login_by=manual&device_type=web&device_token=123456`
    );

    if (res.data.success) {
      dispatch({
        type: GET_SINGLE_VIDEO,
        payload: res.data,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// @desc        Get Single Video data.
// @api
// @access      public
export const getSingleCategoryVideos = (categoryId) => async (dispatch) => {
  try {
    const state = store.getState();

    dispatch({ type: CHANGE_IS_LOADING, payload: true });

    let bodyFormData = new FormData();
    bodyFormData.append("id", state.auth.userId);
    bodyFormData.append("token", state.auth.token);
    bodyFormData.append("sub_profile_id", state.auth.subProfileId);
    bodyFormData.append("category_id", categoryId);
    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/categoryVideos`,
      bodyFormData
    );

    if (res.data.success) {
      dispatch({
        type: GET_SINGLE_CATEGORY_VIDEOS,
        payload: res.data.data,
      });
    } else {
      dispatch({
        type: GET_SINGLE_CATEGORY_VIDEOS,
        payload: [],
      });
    }
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_SINGLE_CATEGORY_VIDEOS,
      payload: [],
    });
  }
};
