import React from 'react';
import { Link } from 'react-router-dom';
import useLandingApi from '../../Utilities/Hooks/useLandingApi';
import TvSlider from '../Custom/Sliders/TvSlider';
import ShowSlider from '../Custom/Sliders/ShowSlider';
import { tvData } from '../../Data/tv_en_vivo';

const Categories = () => {
    const { categories } = useLandingApi();
    return (
        <>
        <section className="relativeTop">
            {/* only for landing parallex! */}
        </section>

        {/* TODO: TV EN VIVO SLIDER - CURRENTLY HARDCODED NEED API*/}
        <section className="shows">
            <div className="shows__title">
                <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">TV en vivo</h2>
                <Link to="/shows">{`Ver más>`}</Link>
            </div>
            <TvSlider shows={tvData} delay={2500}/>
        </section>

        {/* SLIDER FOR ALL THE OTHER CATEGORIES*/}
        {
            categories.map((category, index) => (
                <section className="shows" key={index}>
                    <div className="shows__title">
                        <h2 data-aos="fade" data-aos-offset="0" data-aos-delay="200" data-aos-duration="1000">{category.title}</h2>
                        <Link to="/shows">{`Ver más>`}</Link>
                    </div>
                    <ShowSlider shows={category} delay={4500}/>
                </section>
            ))
        }
            
        </>
    );
};

export default Categories;