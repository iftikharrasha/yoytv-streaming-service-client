import React from 'react';
import audio from '../../Image/audio.svg';
import heroBack from '../../Image/hero-back.png';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const Hero = () => {
    const { windowWidth } = useWindowSize();
    return (
            <>
                <section className="hero">
                    <div className="heroBg" style={{backgroundImage: `url(${heroBack})`}}>
                        <div className="wrapper heroBg__contents">
                            <h1>TV en vivo, películas, series y más…</h1>
                            <h2>Navega con la experiencia YOY sin costo</h2>
                            {
                                windowWidth > 575.98 ? 
                                <ul>
                                    <li>
                                        <button>
                                            <span>Suscribirme</span> 
                                        </button>
                                    </li>
                                    <li>
                                        <button>
                                            <span>Navegar sin costo</span> 
                                        </button>
                                    </li>
                                        <li>
                                            <button>
                                                <span>Mas información</span> 
                                            </button>
                                        </li> 
                                </ul>: null
                            }
                        </div>
                        <div className="heroBg__audio">
                            <div className="heroBg__audio__controls">
                                <img src={audio} alt="audioIcon" />
                                <span>
                                    <p>Todo</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {
                        windowWidth < 576 ? 
                        <ul className="wrapper heroSm">
                            <li>
                                <button>
                                    <span>Suscribirme</span> 
                                </button>
                            </li>
                            <li>
                                <button>
                                    <span>Navegar sin costo</span> 
                                </button>
                            </li>
                        </ul> : null
                    }
                </section>
            </>
        );
};

export default Hero;