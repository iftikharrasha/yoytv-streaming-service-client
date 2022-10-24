import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { radioData } from '../../Data/radioData';
import {getRadioStation} from 'Utilities/Actions/Radio'
import { connect } from 'react-redux';
const EstacionesCards = ({radio,getRadioStation}) => {
    
    useEffect(()=>{
        getRadioStation()
    },[radio?.data])

    return (
    <>
        <section className="relativeTop radioTop podcastTop">
            {/* Only for landing parallex! */}
        </section>

        <section className="shows radio podcast podcastCard">
            <div className="radio__wrapper">
                <div className="radio__wrapper__card">
                {
                    radio?.data.slice(0,10).map((item, index) => (
                    <div className="radio__wrapper__card__single" key={index}>
                        <Link className="radio__wrapper__card__single__hyper" to={`/estaciones/player/`+item.id}>
                            <img src={radioData.data.find(
                        (i) =>
                          i.title.toLowerCase() === item?.name?.toLowerCase()
                      )?.default_image} alt="default_image"/>
                            <h6>{item.title}</h6>
                        </Link>
                    </div>
                    ))
                }
                </div>
            </div>
        </section>
    </>
    );
};

const mapStateToProps = (state) => ({
    radio: state.radio,
  });

export default connect(mapStateToProps, { getRadioStation })(EstacionesCards)
  
  
