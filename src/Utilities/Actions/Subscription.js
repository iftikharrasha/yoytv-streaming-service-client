import axios from "axios";
import {
  GET_SUBSCRIPTION_PLANS,
  PAYMENT_ADD_CARD,
  SUBSCRIPTION_FAIL,
} from "./types";
import {
  SUBSCRIPTION_PAYMENT_ID,
  SUBSCRIPTION_PAYMENT_MODE,
  SUBSCRIPTION_PAYMENT_USER_TOKEN,
  SUBSCRIPTION_PAYMENT_USER_ID,
} from "Utilities/Constants";

// @desc                Add subscprition .
// @params formData     data of user.
// @access              public
export const getSubscriptionPlans = () => async dispatch => {
  try {
    let bodyFormData = new FormData();
    bodyFormData.append("id", SUBSCRIPTION_PAYMENT_USER_ID);
    bodyFormData.append("token", SUBSCRIPTION_PAYMENT_USER_TOKEN);

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/subscription_plans`,
      bodyFormData
    );

    if (res.data && res.data.success) {
      dispatch({
        type: GET_SUBSCRIPTION_PLANS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: SUBSCRIPTION_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: SUBSCRIPTION_FAIL,
    });
  }
};

// @desc                Add card.
// @params formData     data of card details and user.
// @access              private
export const addPaymentCard = () => async dispatch => {
  try {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);
    bodyFormData.append("sub_profile_id", token);
    bodyFormData.append("subscription_id", token);
    bodyFormData.append("payment_mode", token);
    bodyFormData.append("payment_id", SUBSCRIPTION_PAYMENT_ID);
    bodyFormData.append("payment_mode", SUBSCRIPTION_PAYMENT_MODE);

    const res = await axios.post(
      `${process.env.REACT_APP_API_LINK}/userApi/v4/subscriptions_payment`,
      bodyFormData
    );

    if (res.data && res.data.success) {
      dispatch({
        type: PAYMENT_ADD_CARD,
        payload: res.data,
      });
    }

    return res.data.success;
  } catch (err) {}
};
