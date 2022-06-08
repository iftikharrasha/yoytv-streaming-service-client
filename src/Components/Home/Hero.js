import React from 'react';

const Hero = () => {
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
                                <li>
                                    <button>
                                        <span>Mas información</span> 
                                    </button>
                                </li>
                            </ul>
                        </div>
                </section>
            </>
        );
};

export default Hero;