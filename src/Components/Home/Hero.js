import React from 'react';
import audio from '../../Image/audio.svg';
import useWindowSize from '../../Utilities/Hooks/useWindowSize';

const Hero = () => {
    const { windowWidth } = useWindowSize();
    return (
            <>
                <section className="hero">
                    <div className="wrapper hero__contents">
                        <h1>TV en vivo, películas, series y más…</h1>
                        <h2>Navega con la experiencia YOY sin costo</h2>
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
                            {
                                windowWidth > 575.98 ? 
                                <li>
                                    <button>
                                        <span>Mas información</span> 
                                    </button>
                                </li> : null
                            }
                        </ul>
                    </div>
                    <div className="hero__audio">
                        <div className="hero__audio__controls">
                            <img src={audio} alt="audioIcon" />
                            <span>
                                <p>Todo</p>
                            </span>
                        </div>
                    </div>
                </section>
            </>
        );
};

export default Hero;