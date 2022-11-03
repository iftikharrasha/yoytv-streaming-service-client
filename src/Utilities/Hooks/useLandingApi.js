import { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import store from "Utilities/Store/store";

const useLandingApi = () => {
  const [newRelease, setNewRelease] = useState([]);
  const [shows, setShows] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tv, setTv] = useState([]);

  const state = store.getState();

  const tokenData = {
    id: state.auth.userId,
    token: state.auth.token,
    sub_profile_id: state.auth.subProfileId,
  };
    
  const fetchChannels = async () =>  {
      try {
          const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/tv_guide`, tokenData);
          console.log(response)

          if(response.data.status === 200) {
              new Promise((res) => setTimeout(() => res(response.data.channels), 400));
          }else{
          }

          return response.data
      } catch (error) {
          console.log(error);
      }
  }

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

  const getTvSlider = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/tv_guide_channels`,
        tokenData
      );

      if (response.data) {
        setTv(response.data.channels);
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
    getTvSlider();
  }, [state.auth.subProfileId]);

  // homesettings api
  const fetcher = async (url) =>
    await axios.get(url).then((res) => res.data.data);

  const { data: landingData } = useSWR(
    `${process.env.REACT_APP_API_LINK}/userApi/get_settings_json`,
    fetcher
  );

  const { data: faq } = useSWR(
    `${process.env.REACT_APP_API_LINK}/userApi/faqs/list`,
    fetcher
  );

  const { data: pages } = useSWR(
    `${process.env.REACT_APP_API_LINK}/userApi/pages/list`,
    fetcher
  );

  return {
    newRelease,
    landingData,
    shows,
    faq,
    pages,
    tv,
    categories,
    fetchChannels,
  };
};

export default useLandingApi;
