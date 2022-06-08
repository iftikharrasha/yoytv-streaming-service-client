import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AdvisingWindow = () => {
    return (
            <>
                <section className="hero">
                </section>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </>
        );
};

export default AdvisingWindow;