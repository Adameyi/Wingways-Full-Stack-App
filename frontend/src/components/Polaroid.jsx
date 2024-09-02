import '../styles/index.css';
import React from 'react';

function Polaroid({ rotate, description, img, z }) {
    return (
        <div
            className={`bg-gray-100 h-80 w-80 shadow-lg px-5 z-${z}`}
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <div className='h-8 w-8 bg-[url("../assets/images/polaroidPin.png")] bg-cover mx-auto' />
            <div className={`h-52`} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }} />
            <p className='seaweed-script-regular text-[2rem]'>{description}
            </p>
        </div>
    );
}

export default Polaroid;
