import { GET_SEARCH_RES } from "Utilities/Actions/types";

const initialState = {
  loading: true,
  searchResult: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH_RES:
      return {
        ...state,
        loading: false,
        searchResult: payload,
      };

    default:
      return state;
  }
}
