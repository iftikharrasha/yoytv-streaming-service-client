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
  GET_VIDEO_GENRE,
  LIKE_OR_DISLIKE_VIDEO,
  ADD_OR_REMOVE_WISHLIST_VIDEO,
} from "./types";
import store from "Utilities/Store/store";
import { notyf } from "Utilities/Hooks/useNotification";
import {
  AUTH_DEVICE_TOKEN,
  AUTH_DEVICE_TYPE,
  AUTH_LOGIN_BY,
} from "Utilities/Constants";

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
    bodyFormData.append("login_by", AUTH_LOGIN_BY);
    bodyFormData.append("device_type", AUTH_DEVICE_TYPE);
    bodyFormData.append("device_token", AUTH_DEVICE_TOKEN);
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

export const getVideoGenre =
  ({ categoryId, sub_category_id, genre_id }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_VIDEO_GENRE,
        payload: {
          isLoading: true,
          data: [],
          error: "",
        },
      });
      const state = store.getState();
      let bodyFormData = new FormData();
      bodyFormData.append("page_type", "HOME");
      bodyFormData.append("sub_category_id", sub_category_id);
      bodyFormData.append("genre_id", genre_id);
      bodyFormData.append("skip", "0");
      bodyFormData.append("id", state.auth.userId);
      bodyFormData.append("token", state.auth.token);
      bodyFormData.append("sub_profile_id", state.auth.subProfileId);
      bodyFormData.append("category_id", categoryId);

      const res = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/genre_videos`,
        bodyFormData
      );

      if (res.data.success) {
        dispatch({
          type: GET_VIDEO_GENRE,
          payload: {
            isLoading: false,
            data: res.data?.data,
            error: "",
          },
        });
      } else {
        dispatch({
          type: GET_VIDEO_GENRE,
          payload: {
            isLoading: false,
            data: [],
            error: "",
          },
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: GET_VIDEO_GENRE,
        payload: {
          isLoading: false,
          data: [],
          error: "",
        },
      });
    }
  };

export const likeOrDislikeVideoOrSeries =
  (admin_video_id, like_status = 0) =>
  async (dispatch) => {
    try {
      var formdata = new FormData();
      const state = store.getState();
      formdata.append("id", state.auth.userId);
      formdata.append("token", state.auth.token);
      formdata.append("language", "en");
      formdata.append("sub_profile_id", state.auth.subProfileId);
      formdata.append("admin_video_id", admin_video_id);
      formdata.append("login_by", AUTH_LOGIN_BY);
      formdata.append("device_type", AUTH_DEVICE_TYPE);
      formdata.append("device_token", AUTH_DEVICE_TOKEN);
      if (like_status === 0) {
        await axios.post(
          `${process.env.REACT_APP_API_LINK}/userApi/videos/like`,
          formdata
        );
      } else {
        await axios.post(
          `${process.env.REACT_APP_API_LINK}/userApi/videos/dis_like`,
          formdata
        );
      }
      dispatch({
        type: LIKE_OR_DISLIKE_VIDEO,
        payload: admin_video_id,
      });
    } catch (error) {
      dispatch({
        type: LIKE_OR_DISLIKE_VIDEO,
        payload: admin_video_id,
      });
    }
  };
export const addOrRemoveWishtlist =
  (admin_video_id, payload) => async (dispatch) => {
    try {
      var formdata = new FormData();
      const state = store.getState();
      formdata.append("admin_video_id", admin_video_id);
      formdata.append("clear_all_status", "0");
      formdata.append("id", state.auth.userId);
      formdata.append("token", state.auth.token);
      formdata.append("sub_profile_id", state.auth.subProfileId);
      const response = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/wishlists/operations`,
        formdata
      );
      console.log("wishlist video", { response, admin_video_id });
      dispatch({
        type: ADD_OR_REMOVE_WISHLIST_VIDEO,
        payload: payload,
      });
    } catch (error) {
      console.log("wishlist video", { admin_video_id, error });
    }
  };
