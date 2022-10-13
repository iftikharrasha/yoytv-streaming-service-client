import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import store from "Utilities/Store/store";

const useLandingApi = () => {
  const [newRelease, setNewRelease] = useState([]);
  const [shows, setShows] = useState([]);
  const [categories, setCategories] = useState([]);

  const state = store.getState();

  const tokenData = {
    id: state.auth.userId,
    token: state.auth.token,
    sub_profile_id: state.auth.subProfileId,
  };

  const getHomeFirstShows = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/home_first_section`,
        tokenData
      );

      if (response.data.success) {
        setNewRelease(response.data.data[0].data);
      } else {
        console.log("Api Error!");
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getHomeFirstShowsAfterLog = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/home_second_section`,
        tokenData
      );

      if (response.data.success) {
        setShows(response.data.data);
      } else {
        console.log("Api Error!");
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/v4/categories/list`,
        tokenData
      );

      if (response.data.success) {
        setCategories(response.data.data);
      } else {
        console.log("Api Error!");
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // homefirstsectionfeatured api
  useEffect(() => {
    getHomeFirstShows();
    getHomeFirstShowsAfterLog();
    getCategories();
  }, [state.auth.subProfileId]);

  // homesettings api
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);

  const { data: landingData } = useSWR(
    `${process.env.REACT_APP_API_LINK}/userApi/get_settings_json`,
    fetcher
  );

  return {
    newRelease,
    landingData,
    shows,
    categories,
  };
};

export default useLandingApi;
