import React from 'react';
import { Modal } from 'react-bootstrap';
import arrow_left from '../../../Image/arrow_left.svg';
import play_fill from '../../../Image/play_fill.svg';
import share_icon from '../../../Image/share_icon.svg';
import plus_icon from '../../../Image/plus_icon.svg';
import love_icon from '../../../Image/love_icon.svg';
import { similar } from '../../../Data/similar.js';

const ShowModal = (props) => {
    const { lgShow, setLgShow, details } = props;
    const handleClose = () => setLgShow(false);

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={handleClose}
                aria-labelledby="example-modal-sizes-title-lg"
                className="show__modal"
            >
                <div className="modal__bg">
                    <Modal.Header style={{backgroundImage: `url(${details.modalCover})`}}>
                        <img src={arrow_left} alt="close" className="close" onClick={handleClose}/>
                        <div className="modal__contents">
                            <div className="modal__contents__left">
                                <img src={details.albumCover} alt="close"/>
                            </div>
                            <div className="modal__contents__right">
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    {details.name}
                                </Modal.Title>
                                <h5>{details.type}</h5>
                                <h6>{details.rating}</h6>
                                <h4>{details.subtitle}</h4> 
                                <h2>Categorias:
                                    {
                                        details.categories.map((item) => (
                                            <span key={item.id}>{item.name}. </span>
                                        ))
                                    }
                                </h2>
                                <p>{details.details}</p>
                            </div>
                        </div>
                        <div className="modal__buttons">
                            <ul>
                                <li>
                                    <button>
                                        <img src={play_fill} alt="play_fill" />
                                        <span>Reproducir</span> 
                                    </button>
                                </li>
                                <li><img src={plus_icon} alt="add" className="plus"/></li>
                                <li><img src={love_icon} alt="love" className="love"/></li>
                                <li><img src={share_icon} alt="play" className="play"/></li>
                            </ul>
                            <h2><span>Categorias:</span> Tags</h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="body__contents">
                            <div className="body__contents__title">
                                <h2>Episodios</h2>
                                <div className="input-group">
                                    <select className="custom-select" id="selectEpisode" defaultValue={1}>
                                        <option value="1">Temporada 1</option>
                                        <option value="2">Temporada 2</option>
                                        <option value="3">Temporada 3</option>
                                        <option value="3">Temporada 4</option>
                                    </select>
                                </div>
                            </div>
                            {
                                details.episodes.map((item) => (
                                <div className="body__contents__episodes" key={item.id}>
                                    <div className="body__contents__episodes__left">
                                        <span>{item.no}</span>
                                        <div className="body__contents__episodes__left__thumb">
                                            <img src={item.thumbnail} alt="intro" className="thumb"/>
                                        </div>
                                    </div>
                                    <div className="body__contents__episodes__right">
                                        <div className="body__contents__episodes__right__info">
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                        <span>{item.time} min</span>
                                    </div>
                                </div>
                                ))
                            }
                            <div className="body__contents__similar">
                                <h2>Más títulos similares a este</h2>
                                <div className="body__contents__similar__contents">
                                    {
                                        similar.map((item) => (  
                                            <div className="body__contents__similar__contents__singleItem" key={item.no}>
                                                <div className="body__contents__similar__contents__singleItem__top" style={{backgroundImage: `url(${item.image})`}}>
                                                    <span>Temporada {item.season}</span>
                                                </div>
                                                <div className="body__contents__similar__contents__singleItem__below">
                                                    <h4>{item.name}</h4>
                                                    <h6>Tag {item.tag}</h6>
                                                    <p>{item.details.slice(0,190)}...</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default ShowModal;