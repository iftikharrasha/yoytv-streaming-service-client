import React, { useEffect } from "react";
import { connect } from "react-redux";
import ReactJWPlayer from "react-jw-player";
import { useParams } from "react-router-dom";
import { getSingleVideo } from "Utilities/Actions/Ondemand";
import Loader from "../../Components/Custom/Loaders/Loader";

const Player = ({
  onDemand: { singleVideo, isLoading },
  auth: { isAuthenticated },
  getSingleVideo,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (isAuthenticated) {
      getSingleVideo(id);
    }
  }, [isAuthenticated]);

  return (
    <>
      {isLoading || singleVideo == null ? (
        <Loader />
      ) : (
        <div>
          <ReactJWPlayer
            playerId="my-unique-id"
            playerScript="https://cdn.jwplayer.com/libraries/CYz0ApGQ.js"
            file={singleVideo.video.video}
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  onDemand: state.onDemand,
});

export default connect(mapStateToProps, { getSingleVideo })(Player);
