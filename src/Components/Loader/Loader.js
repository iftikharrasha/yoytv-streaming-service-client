import React from 'react';

const Loader = () => {
    return (
        <>
            {
                Array(16).fill().map((index) => {
                    return <div className="loader" key={index}>
                        <div className="pulse"></div>
                    </div>
            })}
        </>
    );
};

export default Loader;