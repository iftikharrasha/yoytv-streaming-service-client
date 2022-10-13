import { ChannelBox, ChannelLogo } from "planby";
import { notyf } from "../../Utilities/Hooks/useNotification";

export const ChannelItem = ({ channel, nowPlaying }) => {
  const { position, logo } = channel;

  const handleChannel = (id) => {
    if(channel.uuid === nowPlaying.channelUuid){
      notyf.open({
        type: 'success',
        message: "Channel is already broadcasting"
      });
    }else{
      notyf.open({
        type: 'error',
        message: "Choose from the list of live programs to see the content"
      });
    }
  };

  return (
    <ChannelBox {...position} className={channel.uuid === nowPlaying.channelUuid ? "isChannelLive" : "isChanneNotlLive"} onClick={() => handleChannel(channel.uuid)}>
      <ChannelLogo src={logo} alt="Logo"/>
    </ChannelBox>
  );
};
