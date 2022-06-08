import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../Image/loader.json';

const Loader = () => {
    const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	};

    return (
        <>
            <div className="loader">
                <div>
                    <Lottie options={defaultOptions}
                            height={100}
                            width={100}/>
                    <h2 className="text--center">
                        NSU ADVISING
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Loader;