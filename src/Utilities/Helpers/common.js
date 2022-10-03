// import { channels } from "./channels";
// import { epg } from "./epg";
import tv from '../../Data/tv.json';

export const fetchChannels = async () =>
  new Promise((res) => setTimeout(() => res(tv.channels), 400));

export const fetchEpg = async () =>
  new Promise((res) => setTimeout(() => res(tv.epg), 500));
