import {
  GET_SUB_PROFILES_SUCCESS,
  CHANGE_LOADING_STATUS,
  SET_CURRENT_SUB_PROFILE,
} from "Utilities/Actions/types";

const initialState = {
  loading: true,
  currentSubProfile: null,
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
    case SET_CURRENT_SUB_PROFILE:
      return {
        ...state,
        currentSubProfile: payload,
      };

    default:
      return state;
  }
}
