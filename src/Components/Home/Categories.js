import React from 'react';
import { Link } from 'react-router-dom';
import categories from "../../Data/categories";
import ShowSlider from '../Custom/Sliders/ShowSlider';

const Categories = () => {
    return (
        <>
        {
            categories.map((category, index) => (
                <section className="shows relativeTop" key={index}>
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