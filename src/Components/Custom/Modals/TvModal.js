import React from 'react';
import { Modal } from 'react-bootstrap';
import ReactJWPlayer from 'react-jw-player';

const TvModal = ({ show, setShow, video }) => {

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)} className="videoModal" aria-labelledby="contained-modal-title-vcenter-1" centered>
                <Modal.Body>
                    <div className='video__player'>
                        <ReactJWPlayer
                            playerId="my-unique-id"
                            playerScript="https://cdn.jwplayer.com/libraries/CYz0ApGQ.js"
                            file={video}
                        /> 
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TvModal;