import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import arrow from '../../Image/arrow-left-white.svg';
import adBanner from '../../Image/adbanner1.png';
import plusIcon from '../../Image/plus_icon.svg';
import { myList } from '../../Data/myList.js';

const MiLista = () => {
    const navigate = useNavigate();

    return (
    <>
        <section className="list">
            <div className="wrapper">
                <Link to={"/"} onClick={() => navigate(-1)} className="title"><img src={arrow} alt={arrow} width="28" height="28"/> Mi lista</Link>
            </div>

            <div className="shows">
                <div className="shows__slider adcontainer">
                    <div className="swiper-wrapper shows__slider__list">
                        {
                            /* LIST FOR ALL THE SELECTED ITEMS*/
                            myList.data.map((list, index) => (
                                <div className="swiper-slide" key={index}>
                                    <Link to="/tv-en-vivo">
                                        <img src={list.default_image} alt="default_image" />
                                    </Link>
                                </div>
                            ))
                        }
                        <div className="swiper-slide shows__slider__list__add">
                            <Link to="/add">
                                <img src={plusIcon} alt="plusIcon" className="plusIcon" />
                                <p>Agregar nuevos títulos a mi lista</p>
                            </Link>
                        </div>
                    </div>
                    <div className="swiper-slide shows__slider__list__adbanner">
                        <h6>¡Conviértete en <br /> <span>Cliente Digital!</span></h6>
                        <img src={adBanner} alt="adBanner" />
                        <div className="bannerBtn">
                            <Link to="/ad">{`Hazlo aquí>`}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default MiLista;