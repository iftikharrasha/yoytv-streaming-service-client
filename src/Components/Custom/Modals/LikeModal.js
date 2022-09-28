import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';
import close from '../../../Image/close.svg';
import bbLike from '../../../Image/BBMockImages/bbLike.png';
import LoginModal from './LoginModal';

const LikeModal = (props) => {
  const { likeShow, setLikeShow } = props;
  const [show, setShow] = useState(false);

    return (
        <>
            {/* This modal with Iniciar Sesión button comes when user not logged in */}
            <Modal show={likeShow} onHide={() => setLikeShow(false)} className="authModal" aria-labelledby="contained-modal-title-vcenter-1" centered>
                <Modal.Header>
                    <img src={close} alt="close" width="32" height="32" onClick={() => setLikeShow(false)}/>
                </Modal.Header>
                <Modal.Body>
                    <h2>Me gusta Braking Bad</h2>
                    <p>Para dar me gusta es necesario <br /> tener una mebresía.</p>
                    <div className="like__content">
                        <img src={bbLike} alt="like" width="278" height="256"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit" className="main-btn" onClick={(e) => setShow(true)}>Iniciar Sesión</button>
                </Modal.Footer>
            </Modal>

            <LoginModal show={show} setShow={setShow}/>
        </>
    );
};

export default LikeModal;