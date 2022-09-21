import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { radioData } from '../../../Data/radioData';
import { podcastEpisodes } from '../../../Data/podcastEpisodes.js';
import RadioSlider from '../Sliders/RadioSlider';
import arrow_left from '../../../Image/arrow_left.svg';
import play_fill from '../../../Image/play_fill.svg';
import play_button from '../../../Image/play_button.svg';
import share_icon from '../../../Image/share_icon.svg';
import plus_icon from '../../../Image/plus_icon.svg';
import love_icon from '../../../Image/love_icon.svg';
import arrow from '../../../Image/arrow_left_green.svg';
import radioThumb from '../../../Image/RadioMockImages/radioThumb.png';

const PodcastModal = (props) => {
    const { lgShow, setLgShow, details } = props;
    const handleClose = () => setLgShow(false);

    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={handleClose}
                aria-labelledby="radio-modal-sizes-title-lg"
                className="show__modal podcast__modal"
            >
                <div className="modal__bg">
                    <Modal.Header style={{backgroundImage: `url(${radioThumb})`}}>
                        <img src={arrow_left} alt="close" className="close" onClick={handleClose}/>
                        <div className="modal__contents">
                            <div className="modal__contents__right">
                                <h4>Acerca de Leyendas Legendarias</h4> 
                                <p>Un podcast de comedia donde cada semana exploraremos historias de asesinos en serie, fantasmas y eventos históricos peculiares, notorios o fantásticos.</p>
                                <div className="modal__buttons podcast__buttons">
                                    <ul>
                                        <li>
                                            <button>
                                                <img src={play_fill} alt="play_fill" />
                                                <span>Reproducir</span> 
                                            </button>
                                        </li>
                                        <li><img src={love_icon} alt="love" className="love"/></li>
                                        <li><img src={share_icon} alt="play" className="play"/></li>
                                        <li><img src={plus_icon} alt="add" className="plus"/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal__buttons">
                            <Modal.Title id="radio-modal-sizes-title-lg">
                                Leyendas Legendarias
                            </Modal.Title>
                            <h2><span>Categorias:</span> Cuentos, Crímenes reales, Comedia</h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="body__contents">
                            <div className="body__contents__title">
                                <h2>Episodios</h2>
                                <div className="input-group">
                                    <select className="custom-select" id="selectEpisode" defaultValue={1}>
                                        <option value="1">De más reciente a más antiguo</option>
                                        <option value="2">De más reciente a más antiguo 2</option>
                                        <option value="3">De más reciente a más antiguo 3</option>
                                        <option value="3">De más reciente a más antiguo 4</option>
                                    </select>
                                </div>
                            </div>
                            <ul className="body__contents__episodes">
                                {
                                    podcastEpisodes.map((item) => (
                                    <div className="body__contents__episodes__single" key={item.id}>
                                        <div className="body__contents__episodes__single__left">
                                            <div className="body__contents__episodes__single__left__thumb">
                                                <img src={item.thumbnail} alt="intro" className="thumb"/>
                                            </div>
                                        </div>
                                        <div className="body__contents__episodes__single__right">
                                            <div className="body__contents__episodes__single__right__info">
                                                <h4>{item.name}</h4>
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="body__contents__episodes__single__right__time">
                                                <span>{item.time}</span>
                                                <img src={play_button} alt="play_button" className="thumb"/>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                                <div className="body__contents__episodes__single lastChild"></div>
                                <Link to={`/podcast/details/`+details.admin_video_id}><img src={arrow} alt="details" className='arrow' onClick={handleClose}/></Link>
                            </ul>
                            <div className="body__contents__similar">
                                <h2>Podcast recomendados</h2>
                                {/* TODO: RELATED PODCASTS FILTERING FUNCTIONALITY NEEDED*/}
                                <RadioSlider shows={radioData} delay={2500} clicks={true}/>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default PodcastModal;