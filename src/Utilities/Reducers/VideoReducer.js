import { GET_VIDEO_CATEGORIES } from "Utilities/Actions/types";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_VIDEO_CATEGORIES:
      return { ...state, loading: false, data: payload };
    default:
      return state;
  }
}
