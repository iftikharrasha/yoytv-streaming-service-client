import { useState, useEffect, useMemo, useCallback } from "react";
import { fetchChannels, fetchEpg, fetchNowPlaying } from "../Helpers";
import { useEpg } from "planby";
import moment from "moment";

// Import theme
import { theme } from "../Helpers/theme";

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
    // endDate: `${today}T24:00:00`,
    theme
  });

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
