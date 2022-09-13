import React from 'react';
import { Link } from 'react-router-dom';
import useLandingApi from '../../../Utilities/Hooks/useLandingApi';
import TvSlider from '../../Custom/Sliders/TvSlider';
import ShowSlider from '../../Custom/Sliders/ShowSlider';
import RadioSlider from '../../Custom/Sliders/RadioSlider';
import arrow from '../../../Image/arrow-left-white.svg';
import { tvData } from '../../../Data/tvData';
import { radioData } from '../../../Data/radioData';

const SearchResult = () => {
    const { categories } = useLandingApi();

    return (
    <>
        <section className="list">
            <Link to="/" className="title"><img src={arrow} alt={arrow} /> Resultados - Rock: 45 títulos</Link>
        </section>
        {/* TODO: TV EN VIVO SLIDER - CURRENTLY HARDCODED NEED API*/}
        <section className="shows">
            <div className="shows__title">
                <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">TV en vivo</h2>
            </div>
            <TvSlider shows={tvData} delay={1000}/>
        </section>

        {/* SLIDER FOR ALL THE OTHER CATEGORIES*/}
        {
            categories.map((category, index) => (
                <section className="shows" key={index}>
                    <div className="shows__title">
                        <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">{category.title}</h2>
                    </div>
                    <ShowSlider shows={category} delay={2500}/>
                </section>
            ))
        }

        {/* TODO: RADIO SLIDER - CURRENTLY HARDCODED NEED API*/}
        <section className="shows">
            <div className="shows__title">
                <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">Radio</h2>
            </div>
            <RadioSlider shows={radioData} delay={2500} clicks={true}/>
        </section>
    </>
    );
};

export default SearchResult;