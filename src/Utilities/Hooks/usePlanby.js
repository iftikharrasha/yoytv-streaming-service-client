import { useState, useEffect, useMemo, useCallback } from "react";
import { fetchChannels, fetchEpg } from "../Helpers";
import { useEpg } from "planby";
import moment from "moment";

// Import theme
import { theme } from "../Helpers/theme";

export function usePlanby() {
  const [channels, setChannels] = useState([]);
  const [epg, setEpg] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const channelsData = useMemo(() => channels, [channels]);
  const epgData = useMemo(() => epg, [epg]);

  const date = new Date();
  var today = moment(date).format('YYYY-MM-DD');

  const { getEpgProps, getLayoutProps } = useEpg({
    channels: channelsData,
    epg: epgData,
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
    setEpg(epg);
    setChannels(channels);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    handleFetchResources();
  }, [handleFetchResources]);

  return { getEpgProps, getLayoutProps, isLoading };
}
