import {
  GET_SUB_PROFILES_SUCCESS,
  CHANGE_LOADING_STATUS,
} from "Utilities/Actions/types";

const initialState = {
  loading: true,
  subProfileList: [],
  isNewSubProfileAllowed: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SUB_PROFILES_SUCCESS:
      return {
        ...state,
        loading: false,
        subProfileList: payload.sub_profiles,
        isNewSubProfileAllowed: payload.is_new_sub_profile_allowed,
      };

    default:
      return state;
  }
}
