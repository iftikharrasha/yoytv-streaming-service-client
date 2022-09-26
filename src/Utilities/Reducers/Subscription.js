import {
  GET_SUBSCRIPTION_PLANS,
  SET_SUBSCRIPTION_PLAN,
  SUBSCRIPTION_FAIL,
  PAYMENT_ADD_CARD,
} from "Utilities/Actions/types";

const initialState = {
  sub_loading: true,
  data: null,
  plan_id: null,
  payment: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SUBSCRIPTION_PLANS:
      return {
        ...state,
        sub_loading: false,
        data: payload,
      };
    case SET_SUBSCRIPTION_PLAN:
      return {
        ...state,
        sub_loading: false,
        plan_id: payload,
      };
    case PAYMENT_ADD_CARD:
      return {
        ...state,
        payment: payload,
      };

    case SUBSCRIPTION_FAIL:
      return {
        ...state,
        sub_loading: false,
      };

    default:
      return state;
  }
}
