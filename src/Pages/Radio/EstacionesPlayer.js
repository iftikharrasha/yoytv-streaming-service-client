import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { radioData } from "../../Data/radioData";
import Sound from "../../Image/Soundbutton.svg";
import Love from "../../Image/Lovebutton.svg";
import Share from "../../Image/Sharebutton.svg";
import pause from "../../Image/Pausebutton.svg";
import play from "../../Image/play_button.svg";
import seasonsPlayerThumb from "../../Image/RadioMockImages/seasonsPlayerThumb.png";
import badBunny from "../../Image/RadioMockImages/badBunny.png";
import rauw from "../../Image/RadioMockImages/rauw.png";
import shakira from "../../Image/RadioMockImages/shakira.png";
import RadioSlider from "../../Components/Custom/Sliders/RadioSlider.js";
import adbanner3 from "../../Image/adbanner3.png";
import adbanner4 from "../../Image/adbanner4.png";
import arrow from "../../Image/arrow-left-white.svg";
import axios from "axios";
import { getRadioStation } from "Utilities/Actions/Radio";
import { connect } from "react-redux";
import useAudio from "Utilities/Hooks/useAudio";

const EstacionesPlayer = ({ radio, getRadioStation }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [station, setStation] = useState({});
  const [remainSecond, setRemainSecond] = useState(0);
  const { loading, error, handleVolume, playRadio, pauseRadio } = useAudio();
  const [nowPlaying, setNowPlyaing] = useState({});

  const getStation = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_LINK}/station/${id}`
    );
    setStation(data);
  };

  const getNowPlaying = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_LINK}/nowplaying/${id}`
    );
    setRemainSecond(data?.now_playing?.remaining);
    getRemainTime();
    setNowPlyaing(data);
  };

  const getRemainTime = useCallback(() => {
    setInterval(() => {
      setRemainSecond((prev) => prev - 1);
    }, 4000);
  }, [remainSecond]);

  useEffect(() => {
    if (id) {
      getStation();
      getNowPlaying();
    }
  }, [id]);

  useEffect(() => {
    if (radio?.data?.length - 1) getRadioStation();
  }, [radio?.data]);

  useEffect(() => {
    if (station.listen_url) {
      playRadio(station.listen_url);
    }
    return () => {
      pauseRadio();
    };
  }, [station]);

  //   rerender data
  useEffect(() => {
    if (remainSecond < 1) {
      getNowPlaying();
    }
  }, [remainSecond]);

  const artImage = nowPlaying?.now_playing?.song?.art
    ? nowPlaying?.now_playing?.song?.art
    : radioData.data?.find(
        (item) => item.title?.toLowerCase() === station.name?.toLowerCase()
      )?.default_image;

  return (
    <>
      <section className="hero detailsHero playerHero">
        <div className="heroBg">
          <div className="list">
            <Link to="/" className="title" onClick={() => navigate(-1)}>
              <img src={arrow} alt={arrow} />
              Estaciones
            </Link>
          </div>
          <div className="detailsHero__wrapper">
            <div className="detailsHero__wrapper__contents">
              <div className="detailsHero__wrapper__contents__left">
                <img src={artImage} alt="radio" />
                <h1>{station.name}</h1>
              </div>
              <div className="detailsHero__wrapper__contents__right">
                <h6>Canciones anteriores</h6>
                <ul className="episodes">
                  {nowPlaying?.song_history
                    ?.map((item, index) => (
                      <li className="episodes__single" key={index}>
                        <div className="episodes__single__left">
                          <div className="episodes__single__left__thumb">
                            <img
                              src={item?.song?.art}
                              alt="badBunny"
                              className="thumb"
                            />
                          </div>
                        </div>
                        <div className="episodes__single__right">
                          <div className="episodes__single__right__info">
                            <h4>{item?.song?.title}</h4>
                            <p>{item?.song?.artist}</p>
                          </div>
                        </div>
                      </li>
                    ))
                    ?.slice(0, 3)}
                </ul>
              </div>
            </div>
            <div className="detailsHero__wrapper__settings">
              <div className="left">
                <img src={pause} alt="pause" />
                <p>
                  {loading && "Loading...!"}
                  {error && JSON.stringify(error)}
                  <span>{nowPlaying?.now_playing?.song?.album}:</span>{" "}
                  {nowPlaying?.now_playing?.song?.title} -{" "}
                  {nowPlaying?.now_playing?.song?.artist}
                </p>
              </div>
              <div className="right">
                <img
                  src={Sound}
                  alt="Sound"
                  className="sound"
                  onClick={handleVolume}
                />
                <img src={Love} alt="Love" />
                <img src={Share} alt="Share" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="allEpisodes podcastDetails playerDetails">
        <div className="allEpisodes__body">
          <div className="allEpisodes__body__contents">
            <div className="playerDetails__cards">
              <div className="playerDetails__cards__slider">
                <div className="allEpisodes__body__contents__similar">
                  <div className="playerDetails__cards__slider__title">
                    <h2>Estaciones recomendadas</h2>
                    <Link to="/estaciones">{`Ver más>`}</Link>
                  </div>
                  <RadioSlider
                    shows={radioData}
                    data={radio?.data}
                    delay={2500}
                  />
                </div>
                <div className="adbanner">
                  <img src={adbanner4} alt="adbanner4" />
                </div>
              </div>
            </div>

            <div className="playerDetails__cards">
              <div className="playerDetails__cards__slider">
                <div className="allEpisodes__body__contents__similar">
                  <div className="playerDetails__cards__slider__title">
                    <h2>Podcast recomendados</h2>
                    <Link to="/podcast">{`Ver más>`}</Link>
                  </div>
                  <RadioSlider
                    shows={radioData}
                    delay={2500}
                    clicks={true}
                    podcast={true}
                  />
                </div>
                <div className="adbanner">
                  <img src={adbanner3} alt="adbanner3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  radio: state.radio,
});
export default React.memo(
  connect(mapStateToProps, { getRadioStation })(EstacionesPlayer)
);
