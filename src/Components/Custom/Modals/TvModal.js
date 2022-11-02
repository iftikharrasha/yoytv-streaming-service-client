import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactJWPlayer from "react-jw-player";
import { connect, useDispatch } from "react-redux";
import { getSingleVideo } from "Utilities/Actions/Ondemand";
import { SELECT_VIDEO } from "Utilities/Actions/types";

const TvModal = ({
  getSingleVideo,
  onDemand: { isPlayerShow, selectedVideId, singleVideo, isTrailer },
}) => {
  const dispatch = useDispatch();
  const [isIosDevice, setIsIosDevice] = useState(false);

  useEffect(() => {
    if (selectedVideId !== null) {
      getSingleVideo(selectedVideId);
    }
  }, [selectedVideId]);

  useEffect(() => {
    checkIsIosDevice();
  }, []);

  const checkIsIosDevice = () => {
    console.log("device ", navigator.platform);
    const iOS_1to12 = /iPad|iPhone|iPod/.test(navigator.platform);
    const iOS13_iPad =
      navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
    const isIOS =
      !window.MSStream && (iOS_1to12 || iOS13_iPad || iOS1to12quirk());
    setIsIosDevice(isIOS);
  };

  const iOS1to12quirk = () => {
    let audio = new Audio(); // temporary Audio object
    audio.volume = 0.5; // has no effect on iOS <= 12
    return audio.volume === 1;
  };

  const hideModal = () => {
    dispatch({
      type: SELECT_VIDEO,
      payload: {
        show: false,
        videoId: null,
      },
    });
  };

  const renderVideoUrl = () => {
    if (isIosDevice) {
      return isTrailer ? singleVideo.ios_trailer_video : singleVideo.ios_video;
    } else {
      return isTrailer
        ? singleVideo.video.trailer_video
        : singleVideo.video.video;
    }
  };

  return (
    <>
      <Modal
        show={isPlayerShow}
        onHide={hideModal}
        className="videoModal"
        aria-labelledby="contained-modal-title-vcenter-1"
        centered
      >
        <Modal.Body>
          <div className="video__player">
            {singleVideo && (
              <ReactJWPlayer
                playerId="my-unique-id"
                playerScript="https://cdn.jwplayer.com/libraries/CYz0ApGQ.js"
                file={renderVideoUrl()}
                isAutoPlay={true}
              />
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  onDemand: state.onDemand,
});

export default connect(mapStateToProps, { getSingleVideo })(TvModal);
