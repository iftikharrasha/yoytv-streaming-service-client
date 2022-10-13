import React from 'react';
import { Modal } from 'react-bootstrap';
import close from '../../../Image/close-green.svg';

const GameModal = ({ gameShow, setGameShow, nowPlaying }) => {

    return (
        <>
            <Modal show={gameShow} onHide={() => setGameShow(false)} className="gameModal" aria-labelledby="contained-modal" >
                <Modal.Body>
                    <div className='game__player'>
                        <iframe src={`https://juegos.streamapp.mx/catalogo/${nowPlaying.id}`}
                            title={`${nowPlaying.title}`}
                            allowFullScreen="0"
                            marginHeight="0"
                            marginWidth="0"
                            width="100%"
                            height="100%">
                        </iframe>
                    </div>
                </Modal.Body>
                <Modal.Header>
                    <img src={close} alt="close" width="32" height="32" onClick={() => setGameShow(false)}/>
                </Modal.Header>
            </Modal>
        </>
    );
};

export default GameModal;