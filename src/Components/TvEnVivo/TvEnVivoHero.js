import React, { useState } from "react";
import share from "../../Image/share_icon.svg";
import play from "../../Image/play_blue.svg";
import moment from "moment";
import TvModal from "../Custom/Modals/TvModal";

const TvEnVivoHero = ({ nowPlaying }) => {
  const { title, description, image, since, till, video, Rated } = nowPlaying;
  const [show, setShow] = useState(false);

  let start = moment(since);
  let end = moment(till);

  const duration = moment.duration(end.diff(start));
  let days = duration.days();
  duration.subtract(days, "days");

  let hours = duration.hours();
  duration.subtract(hours, "hours");

  let minutes = duration.minutes();
  duration.subtract(minutes, "minutes");

  let seconds = duration.seconds();
  duration.subtract(seconds, "seconds");

  let milliseconds = duration.milliseconds();
  duration.subtract(milliseconds, "miliseconds");

  return (
    <>
      <section className="hero onDemandHero tvEnVivo__player">
        <div className="heroFixed">
          <div className="hero__slider">
            <div
              className="heroBg hero__slider__single"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="heroBg__contents">
                <div className="heroBg__contents__text">
                  <h1>{title}</h1>
                  <h2>{description}</h2>
                  <h4>
                    {hours}h {minutes}m<span>{Rated}</span>
                  </h4>
                  <ul>
                    <li>
                      <button onClick={(e) => setShow(true)}>
                        <span>
                          <img src={play} alt="play" /> Reproducir
                        </span>
                      </button>
                    </li>
                    {/* <li>
                      <img src={share} alt="share" />
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relativeTop tvTop">{/* Only for parallex */}</section>

      <TvModal show={true} setShow={setShow} video={video} />
    </>
  );
};

export default TvEnVivoHero;
