import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import close from "../../../Image/close.svg";
import bbLike from "../../../Image/BBMockImages/bbLike.png";
import LoginModal from "./LoginModal";
import { connect, useDispatch } from "react-redux";
import { LIKE_SHOW } from "Utilities/Actions/types";

const LikeModal = ({ onDemand: { likeObject, isLikeShow } }) => {
  // const { likeShow, setLikeShow } = props;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const setHide = () => {
    dispatch({
      type: LIKE_SHOW,
      payload: {
        isLikeShow: false,
        likeObject: null,
      },
    });
  };

  return (
    <>
      {/* This modal with Iniciar Sesión button comes when user not logged in */}
      <Modal
        show={isLikeShow}
        onHide={() => setHide()}
        className="authModal"
        aria-labelledby="contained-modal-title-vcenter-1"
        centered
      >
        <Modal.Header>
          <img
            src={close}
            alt="close"
            width="32"
            height="32"
            onClick={() => setHide()}
          />
        </Modal.Header>
        <Modal.Body>
          <h2>Me gusta {likeObject !== null ? likeObject.title : ""}</h2>
          <p>
            Para dar me gusta es necesario <br /> tener una mebresía.
          </p>
          <div className="like__content">
            <img
              src={likeObject !== null ? likeObject.default_image : ""}
              alt="like"
              width="278"
              height="256"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            className="main-btn"
            onClick={(e) => setShow(true)}
          >
            Iniciar Sesión
          </button>
        </Modal.Footer>
      </Modal>

      <LoginModal show={show} setShow={setShow} />
    </>
  );
};

const mapStateToProps = (state) => ({
  onDemand: state.onDemand,
});

export default connect(mapStateToProps, null)(LikeModal);
