import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const MainSlideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        let autoPlayInterval;

        if (isAutoPlaying) {
            autoPlayInterval = setInterval(() => {
                setCurrentSlide((currentSlide + 1) % slides.length);
            }, 10000); // 10 Seconds per transition
        }

        return () => clearInterval(autoPlayInterval);
    }, [isAutoPlaying, currentSlide, slides.length]);


    const handleDotClick = (index) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };

    if (!slides || slides.length === 0) {
        return null; // Return null if slides prop is empty
    }

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 overflow-hidden">
                <Navbar />
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={typeof slide.imageUrl === 'string' ? slide.imageUrl : require(`${slide.imageUrl}`)}
                            alt={slide.caption}
                            className="h-full w-full bg-cover"
                        />
                        <div className="absolute bottom-20 bg-black bg-opacity-20">
                            <h2 className="text-white text-4xl roboto-bold">{slide.caption}</h2>
                            <p className='text-white roboto-light'>{slide.location}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-1/4 h-2 rounded-full transition-colors ${index === currentSlide
                            ? 'bg-white'
                            : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>

        </div>
    );
};

export default MainSlideshow;