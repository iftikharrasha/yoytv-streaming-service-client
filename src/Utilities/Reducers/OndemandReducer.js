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
  SELECT_VIDEO,
  GET_SINGLE_CATEGORY_VIDEOS,
  UPDATE_WISHLIST,
  LIKE_SHOW,
  GET_VIDEO_SUGGUESTIONS,
  GET_VIDEO_GENRE,
  LIKE_OR_DISLIKE_VIDEO,
  ADD_OR_REMOVE_WISHLIST_VIDEO,
} from "../Actions/types";

const initialState = {
  onDemand: [],
  homeFirstSectionData: [],
  bannerData: [],
  videoViewState: null,
  videoViewSecondState: null,
  categoryVideos: [],
  wishList: [],
  wishListUpdatedStatus: false,
  categories: [],
  singleVideo: null,
  isTrailer: false,
  selectedVideId: null,
  isPlayerShow: false,
  singleCategoryVideos: [],
  isLikeShow: false,
  likeObject: null,
  likeArray: [],
  isLoading: false,
  videoSuggestions: [],
  genreVideos: { isLoading: false, data: [], error: "" },
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ON_DEMAND_DATA:
      return { ...state, onDemand: payload };
    case GET_HOME_FIRST_SECTION:
      let tempData = { ...state, homeFirstSectionData: payload.data };
      return { ...tempData, bannerData: payload.banner.data };
    case GET_VIDEO_VIEW:
      return { ...state, videoViewState: payload };
    case GET_VIDEO_VIEW_SECOND:
      return { ...state, videoViewSecondState: payload };
    case GET_CATEGORY_VIDEOS:
      return { ...state, categoryVideos: payload };
    case GET_MY_WISH_LIST:
      return { ...state, wishList: payload };
    case UPDATE_WISHLIST:
      return { ...state, wishListUpdatedStatus: !state.wishListUpdatedStatus };
    case GET_CATEGORIES:
      return { ...state, categories: payload };
    case GET_SINGLE_VIDEO:
      return { ...state, singleVideo: payload, isLoading: false };
    case CHANGE_IS_LOADING:
      return { ...state, isLoading: payload };
    case SELECT_VIDEO:
      return {
        ...state,
        isPlayerShow: payload.show,
        selectedVideId: payload.videoId,
        isTrailer: payload.isTrailer,
      };
    case GET_SINGLE_CATEGORY_VIDEOS:
      return {
        ...state,
        isLoading: false,
        singleCategoryVideos: payload,
      };
    case LIKE_SHOW:
      return {
        ...state,
        isLikeShow: payload.isLikeShow,
        likeObject: payload.likeObject,
      };
    case LIKE_OR_DISLIKE_VIDEO:
      const ifExists = state.likeArray.find((item) => item === payload);
      let temp = [];
      if (ifExists) {
        temp = state.likeArray.filter((item) => item !== payload);
      } else {
        temp = [...state.likeArray, payload];
      }
      return {
        ...state,
        likeArray: temp,
      };
    case ADD_OR_REMOVE_WISHLIST_VIDEO:
      return {
        ...state,
        homeFirstSectionData: payload,
      };
    case GET_VIDEO_SUGGUESTIONS:
      return {
        ...state,
        videoSuggestions: payload,
      };
    case GET_VIDEO_GENRE:
      return {
        ...state,
        genreVideos: payload,
      };
    default:
      return state;
  }
}
