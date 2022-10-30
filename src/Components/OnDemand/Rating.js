import axios from "axios";
import React, { useEffect, useState } from "react";
import store from "Utilities/Store/store";

function Rating({ admin_video_id }) {
  const [video, setVideo] = useState([]);
  const getSingleVideo = async () => {
    try {
      const state = store.getState();
      const id = state.auth.userId;
      const subProfileId = state.auth.subProfileId;
      const token = state.auth.token;

      const res = await axios.post(
        `${process.env.REACT_APP_API_LINK}/userApi/singleVideo?id=${id}&token=${token}&language=en&sub_profile_id=${subProfileId}&admin_video_id=${admin_video_id}&login_by=manual&device_type=web&device_token=123456`
      );
      setVideo(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleVideo();
  }, []);

  return <span>{video?.video?.ratings}</span>;
}

export default Rating;
