import React from 'react';

const Loader = () => {
    return (
        <>
            {
                Array(16).fill().map((key) => {
                    return <div className="loader" key={key}>
                        <div className="pulse"></div>
                    </div>
            })}
        </>
    );
};

export default Loader;