import React from 'react';

const Loader = () => {
    return (
        <>
        <div className="loader__wrap">
            {   
                Array(30).fill().map((arr, index) => {
                    return <div className="loader" key={index}>
                                <div className="pulse"></div>
                            </div>
            })}
        </div>
            
        </>
    );
};

export default Loader;