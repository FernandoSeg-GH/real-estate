import React, { useState, useEffect } from "react";

const Partners = () => {
    const [imgWidth, setImgWidth] = useState(10);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 576) {
                setImgWidth(50);
            } else {
                setImgWidth(10);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id='cont' className='section-padding p-5 d-flex flex-column flex-sm-row justify-content-center align-items-center' style={{ gap: '1rem', backgroundColor: '#9c9c9c', color: 'white' }}>
            <p className='part'>Formamos parte de</p>
            <img
                src="/images/atr.webp"
                alt="p1"
                style={{ width: `${imgWidth}%`, height: "auto" }} />
            <img
                src="/images/rai.webp"
                alt="p2"
                style={{ width: `${imgWidth * 2}%`, height: "auto" }} />
        </div>
    );
};

export default Partners;
