import { ChannelBox, ChannelLogo } from "planby";

export const ChannelItem = ({ channel, nowPlaying }) => {
  const { position, logo } = channel;

  return (
    <ChannelBox {...position} className={channel.uuid === nowPlaying.channelUuid ? "isChannelLive" : "isChanneNotlLive"}>
      <ChannelLogo src={logo} alt="Logo"/>
    </ChannelBox>
  );
};
