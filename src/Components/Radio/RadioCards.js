import React, { useState } from "react";
import { Link } from "react-router-dom";
import { radioData } from "../../Data/radioData";
import adbanner3 from "../../Image/adbanner3.png";
import adbanner4 from "../../Image/adbanner4.png";
import PodcastModal from "../Custom/Modals/PodcastModal";

const RadioCards = ({ data }) => {
  const [lgShow, setLgShow] = useState(false);
  const [details, setDetails] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  const handlePopup = (data) => {
    setDetails(data);
    setIsFetching(false);
    setLgShow(true);
  };

  return (
    <>
      <section className="relativeTop radioTop">
        {/* Only for landing parallex! */}
      </section>

      <section className="shows radio">
        <div className="shows__title">
          <h2
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Estaciones
          </h2>
        </div>

        <div className="radio__wrapper">
          <div className="radio__wrapper__card">
            {data.slice(0, 10).map((item, index) => (
              <div className="radio__wrapper__card__single" key={index}>
                <Link to={`/estaciones/player/` + item.id}>
                  <img
                    src={
                      radioData.data.find(
                        (i) =>
                          i.title.toLowerCase() === item?.name?.toLowerCase()
                      )?.default_image
                    }
                    alt="default_image"
                  />
                  <h6>{item.name}</h6>
                </Link>
              </div>
            ))}
            <div className="adbanner">
              <img src={adbanner3} alt="adbanner3" />
            </div>
          </div>
        </div>
      </section>

      <section className="shows radio podcast">
        <div className="shows__title">
          <h2
            data-aos="fade"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Podcast
          </h2>
        </div>

        <div className="radio__wrapper">
          <div className="radio__wrapper__card">
            {radioData?.data.slice(10, 20).map((item, index) => (
              <div
                className="radio__wrapper__card__single"
                key={index}
                onClick={() => handlePopup(item)}
              >
                <div className="radio__wrapper__card__single__hyper">
                  <img src={item.default_image} alt="default_image" />
                  <h6>{item.title}</h6>
                </div>
              </div>
            ))}
            <div className="adbanner">
              <img src={adbanner4} alt="adbanner4" />
            </div>
          </div>
        </div>
      </section>

      {!isFetching ? (
        <PodcastModal lgShow={lgShow} setLgShow={setLgShow} details={details} />
      ) : null}
    </>
  );
};

export default RadioCards;
