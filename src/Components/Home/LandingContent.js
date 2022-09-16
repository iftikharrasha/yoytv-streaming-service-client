import React, { useState } from "react";
import tv from "../../Image/tv.png";
import ReleaseSlider from "../Custom/Sliders/ReleaseSlider";
import { faq } from "../../Data/faqs";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const LandingContent = ({ landingData, newRelease, history }) => {
  const {
    home_section_1_video,
    home_section_1_title,
    home_section_1_description,
    home_section_2_title,
    home_section_2_description,
    home_section_3_title,
    home_section_3_description,
    home_section_3_cover_image,
    home_section_3_video,
  } = landingData;
  let indexPlus;

  const [active, setActive] = useState(0);

  const eventHandler = (e, index) => {
    e.preventDefault();
    setActive(index);
  };

  const indexCount = index => {
    indexPlus = index + 1;
    return indexPlus;
  };

  // Redirect if user authenticated.
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={`/tv-en-vivo`} />;
  }

  return (
    <>
      <section className="relativeTop">
        {/* only for landing parallex! */}
      </section>
      <section className="video">
        <div className="wrapper">
          <div className="video__content">
            <div className="video__content__left">
              <img
                src={tv}
                alt="tv"
                width="614"
                height="388"
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="200"
                data-aos-duration="1000"
              />
              <div className="video__content__left__player">
                <video
                  autoPlay
                  loop
                  width="614"
                  height="388"
                  data-aos="fade"
                  data-aos-offset="0"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  muted
                >
                  <source src={home_section_1_video} />
                </video>
              </div>
            </div>
            <div className="video__content__right">
              <h6
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                {home_section_1_title}
              </h6>
              <p
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing. elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
              <button
                className="main-btn"
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="600"
                data-aos-duration="1000"
              >
                Ver librería
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured__content">
          <div className="featured__content__top">
            <h6
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              {home_section_2_title}
            </h6>
            <p
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              {home_section_2_description}
            </p>
          </div>
          <div
            className="featured__content__bottom"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <ReleaseSlider shows={newRelease} delay={4500} />
          </div>
        </div>
      </section>

      <section className="featured devices">
        <div className="wrapper">
          <div className="featured__content">
            <div className="featured__content__top">
              <h6
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                {home_section_3_title}
              </h6>
              <p
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {home_section_3_description}
              </p>
            </div>
            <div className="featured__content__below">
              <div>
                <div className="video__content__left__player">
                  <video
                    autoPlay
                    loop
                    width="614"
                    height="388"
                    data-aos="fade-up"
                    data-aos-offset="0"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    muted
                  >
                    <source src={home_section_3_video} />
                  </video>
                </div>
                <img
                  src={home_section_3_cover_image}
                  alt="tv"
                  width="640"
                  height="480"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="wrapper">
          <div className="faq__content">
            <div className="faq__content__form">
              <h2>Preguntas frecuentes</h2>
              <form
                data-aos="fade"
                data-aos-offset="0"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                {faq.map((tab, index) => (
                  <div key={index}>
                    <div>
                      <button
                        onClick={e => eventHandler(e, index)}
                        className={active === index ? "active" : "inactive"}
                        aria-expanded={active === index ? "true" : "false"}
                        aria-controls={"sect-" + indexCount(index)}
                        aria-disabled={active === index ? "true" : "false"}
                        tabIndex={indexCount(index)}
                      >
                        <span className="title">
                          {tab.title}
                          <span
                            className={active === index ? "minus" : "plus"}
                          ></span>
                        </span>
                      </button>
                    </div>
                    <div
                      id={"sect-" + indexCount(index)}
                      className={
                        active === index ? "panel-open" : "panel-close"
                      }
                    >
                      {tab.description}
                    </div>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="plans">
        <div className="wrapper">
          <div className="plans__content">
            <h3
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Obtén acceso ilimitado con tu membresía
              <span> Coppel Digital</span>
            </h3>
            <button
              className="main-btn"
              data-aos="fade"
              data-aos-offset="0"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              Planes
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingContent;
