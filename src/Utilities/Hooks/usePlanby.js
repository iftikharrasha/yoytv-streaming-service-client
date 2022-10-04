import { useState, useEffect, useMemo, useCallback } from "react";
import { useEpg } from "planby";
import moment from "moment";
import axios from "axios";
import { theme } from "../Helpers/theme";

//THIS IS MOCK DATA WAY
import { fetchChannels, fetchEpg, fetchNowPlaying } from "../Helpers";

export function usePlanby() {
  const [epg, setEpg] = useState([]);
  const [channels, setChannels] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const channelsData = useMemo(() => channels, [channels]);
  const epgData = useMemo(() => epg, [epg]);

  const date = new Date();
  var today = moment(date).format('YYYY-MM-DD');

  const { getEpgProps, getLayoutProps } = useEpg({
    epg: epgData,
    channels: channelsData,
    dayWidth: 7200,
    sidebarWidth: 100,
    itemHeight: 80,
    isSidebar: true,
    isTimeline: true,
    isLine: true,
    isBaseTimeFormat: true,
    startDate: `${today}T00:00:00`,
    endDate: `${today}T24:00:00`,
    theme
  });

  //TODO: FETCH THIS WITH REDUX SYSTEM
  // const fetchChannelsAndEpg = async () =>  {
  //   const data = {
  //       id: 14,
  //       sub_profile_id: 14,
  //       token: "2y10QSc0ldaANgbMPIkdxhX0eKCM0AYi3sklm1kdzMflqhTPIz0elEem"
  //   }
  //   try {
  //       const response = await axios.post(`${process.env.REACT_APP_API_LINK}/userApi/tv_guide`, data);

  //       if(response.status === 200) {
  //         return response.data
  //       }else{
  //         console.log('Server error: ' + response.status);
  //       }

  //       return response.data
  //   } catch (error) {
  //       console.log(error);
  //   }
  // }

  // const handleFetchResources = useCallback(async () => {
  //   setIsLoading(true);
  //   const data = await fetchChannelsAndEpg();
  //   setEpg(data.epg);
  //   setChannels(data.channels);
  //   setNowPlaying(data.nowPlaying[0]);
  //   setIsLoading(false);
  // }, []);

  //THIS IS MOCK DATA WAY
  const handleFetchResources = useCallback(async () => {
    setIsLoading(true);
    const epg = await fetchEpg();
    const channels = await fetchChannels();
    const nowPlaying = await fetchNowPlaying();
    setEpg(epg);
    setChannels(channels);
    setNowPlaying(nowPlaying);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading, nowPlaying, setNowPlaying };
}
