import axios from "axios";
import store from "Utilities/Store/store";
import { GET_SUBSCRIPTION_PLANS, SUBSCRIPTION_FAIL } from "./types";

// @desc                User loading.
// @params formData     data of user.
// @access              public
export const getSubscriptionPlans = () => async dispatch => {
  try {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    let bodyFormData = new FormData();
    bodyFormData.append("id", id);
    bodyFormData.append("token", token);

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
