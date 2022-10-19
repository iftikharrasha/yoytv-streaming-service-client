import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactJWPlayer from "react-jw-player";
import { connect, useDispatch } from "react-redux";
import { getSingleVideo } from "Utilities/Actions/Ondemand";
import { SELECT_VIDEO } from "Utilities/Actions/types";

const TvModal = ({
  video,
  getSingleVideo,
  onDemand: { isPlayerShow, selectedVideId, singleVideo },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedVideId !== null) {
      getSingleVideo(selectedVideId);
    }
  }, [selectedVideId]);

  const hideModal = () => {
    dispatch({
      type: SELECT_VIDEO,
      payload: {
        show: false,
        videoId: null,
      },
    });
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
                file={singleVideo.video.video}
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
