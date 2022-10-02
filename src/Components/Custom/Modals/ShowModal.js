import React from "react";
import { Modal } from "react-bootstrap";
import ShowSlider from "../Sliders/ShowSlider";
import { episodes } from "../../../Data/episodes.js";
import arrow_left from "../../../Image/arrow_left.svg";
import banner_image from "../../../Image/stranger_things_cover.png";
import play_fill from "../../../Image/play_fill.svg";
import share_icon from "../../../Image/share_icon.svg";
import plus_icon from "../../../Image/plus_icon.svg";
import love_icon from "../../../Image/love_icon.svg";
import arrow from "../../../Image/arrow_left_green.svg";
import { similar } from "../../../Data/similar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowModal = (props) => {
  const { lgShow, setLgShow, details } = props;
  const handleClose = () => setLgShow(false);
  let navigate = useNavigate();

  const navigateToPlayer = (videoId) => {
    navigate(`/player/${videoId}`);
  };

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
          <Modal.Header style={{ backgroundImage: `url(${banner_image})` }}>
            <img
              src={arrow_left}
              alt="close"
              className="close"
              onClick={handleClose}
            />
            <div className="modal__contents">
              <div className="modal__contents__left">
                <img src={details.default_image} alt="default_image" />
              </div>
              <div className="modal__contents__right">
                <Modal.Title id="example-modal-sizes-title-lg">
                  {details.title}
                </Modal.Title>
                <h5>Series</h5>
                <h6>8.1</h6>
                <h4>4 temporadas - 2016 - EUA</h4>
                <p>{details.description}</p>
              </div>
            </div>
            <div className="modal__buttons">
              <ul>
                <li>
                  <button
                    onClick={() => navigateToPlayer(details.admin_video_id)}
                  >
                    <img src={play_fill} alt="play_fill" />
                    <span>Reproducir</span>
                  </button>
                </li>
                <li>
                  <img src={love_icon} alt="love" className="love" />
                </li>
                <li>
                  <img src={share_icon} alt="play" className="play" />
                </li>
                <li>
                  <img src={plus_icon} alt="add" className="plus" />
                </li>
              </ul>
              <h2>
                <span>Categorias:</span> Terror. Suspenso. Misterio. Fantasía.
              </h2>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="body__contents">
              <div className="body__contents__title">
                <h2>Episodios</h2>
                <div className="input-group">
                  <select
                    className="custom-select"
                    id="selectEpisode"
                    defaultValue={1}
                  >
                    <option value="1">Temporada 1</option>
                    <option value="2">Temporada 2</option>
                    <option value="3">Temporada 3</option>
                    <option value="3">Temporada 4</option>
                  </select>
                </div>
              </div>
              <ul className="body__contents__episodes">
                {episodes.map((item) => (
                  <div
                    className="body__contents__episodes__single"
                    key={item.id}
                  >
                    <div className="body__contents__episodes__single__left">
                      <span>{item.no}</span>
                      <div className="body__contents__episodes__single__left__thumb">
                        <img
                          src={item.thumbnail}
                          alt="intro"
                          className="thumb"
                        />
                      </div>
                    </div>
                    <div className="body__contents__episodes__single__right">
                      <div className="body__contents__episodes__single__right__info">
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                      </div>
                      <span>{item.time} min</span>
                    </div>
                  </div>
                ))}
                <Link
                  to={`/on-demand/series-details/` + details.admin_video_id}
                >
                  <img
                    src={arrow}
                    alt="details"
                    className="arrow"
                    onClick={handleClose}
                  />
                </Link>
              </ul>
              <div className="body__contents__similar">
                <h2>Más títulos similares a este</h2>
                {/* TODO: RELATED SHOWS SLIDER FILTERING FUNCTIONALITY NEEDED*/}
                <ShowSlider shows={similar} delay={2500} clicks={true} />
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
};

export default ShowModal;
