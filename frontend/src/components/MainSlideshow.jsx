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
            }, 10000); // 10 Seconds per transition.
        }

        return () => clearInterval(autoPlayInterval);
    }, [isAutoPlaying, currentSlide, slides.length]);


    const handleDotClick = (index) => {
        setIsAutoPlaying(false);
        setCurrentSlide(index);
    };

    if (!slides || slides.length === 0) {
        return null; // Return null if slides prop is empty/missing.
    }

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 overflow-hidden">
                <Navbar />
                {/* Slides Carousel */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`pointer-events-none select-none absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={typeof slide.imageUrl === 'string' ? slide.imageUrl : require(`${slide.imageUrl}`)}
                            alt={slide.caption}
                            className="h-full w-full bg-cover"
                        />
                        <div className="absolute left-5 bottom-12 bg-black bg-opacity-20">
                            <h2 className="text-white text-4xl roboto-bold">{slide.caption}</h2>
                            <p className='text-white roboto-light flex flex-row mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                                {slide.location}
                            </p>
                        </div>
                    </div>

                ))}
            </div>

            {/* Social Media Side Selection*/}
            <div className='hidden sm:block'>
                <div className='absolute right-10 flex items-center h-[55vh]'>
                    <div className='rounded-full h-40 w-14 bg-white bg-opacity-20 flex flex-col justify-center items-center gap-2'>
                        <div className='bg-white h-10 w-10 rounded-full bg-opacity-20 flex justify-center items-center'>
                            <div className='bg-cover bg-[url("../assets/images/facebookWhite.png")]  h-6 w-6' />
                        </div>
                        <div className='bg-white h-10 w-10 rounded-full bg-opacity-20 flex justify-center items-center'>
                            <div className='bg-cover bg-[url("../assets/images/instagramWhite.png")]  h-6 w-6' />
                        </div>
                        <div className='bg-white h-10 w-10 rounded-full bg-opacity-20 flex justify-center items-center'>
                            <div className='bg-cover bg-[url("../assets/images/twitterWhite.png")]  h-5 w-6' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Box Captions */}
            {slides.map((slide, index) => (
                <div className='hidden sm:block'>
                    <div key={index} className={`flex flex-col justify-center items-center absolute right-10 bottom-16 rounded-2xl h-60 w-96 bg-white bg-opacity-40 ${currentSlide === index ? 'block' : 'hidden'}`}>
                        <div className='text-center rounded-2xl p-6 bg-white h-40 flex flex-col gap-2'>
                            <h1 className='roboto-medium text-[1.25rem]'>{slide.caption}</h1>
                            <p className='roboto-light text-gray-500'>{slide.description}</p>
                        </div>
                        <div className='roboto-regular text-[0.8rem] w-4/5 h-12 bg-gray-800 rounded-full m-4 p-2 text-white text-center flex justify-center items-center'>
                            Book Flights to {slide.location}
                        </div>
                    </div>
                </div>
            ))}

            {/*Slide Navigation Buttons */}
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