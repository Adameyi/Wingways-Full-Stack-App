import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/index.css'

import miniSlide_Barcelona from '../assets/images/miniSlide_Barcelona.png'
import miniSlide_California from '../assets/images/miniSlide_California.png'
import miniSlide_Florence from '../assets/images/miniSlide_Florence.png'
import miniSlide_Nicosia from '../assets/images/miniSlide_Nicosia.png'
import miniSlide_Oslo from '../assets/images/miniSlide_Oslo.png'
import miniSlide_Selfoss from '../assets/images/miniSlide_Selfoss.png'
import miniSlide_Reykajavik from '../assets/images/miniSlide_Reykajavik.png'
import miniSlide_Yuanli from '../assets/images/miniSlide_Yuanli.png'
import miniSlide_Osaka from '../assets/images/miniSlide_Osaka.png'
import mobileViewport from './MobileViewport'

const destinations = [
    {
        id: 1,
        name: 'Spain',
        city: 'Barcelona',
        image: miniSlide_Barcelona,
    },
    {
        id: 2,
        name: 'USA',
        city: 'California',
        image: miniSlide_California,
    },
    {
        id: 3,
        name: 'Italy',
        city: 'Florence',
        image: miniSlide_Florence,
    },
    {
        id: 4,
        name: 'Cyprus',
        city: 'Nicosia',
        image: miniSlide_Nicosia,
    },
    {
        id: 5,
        name: 'Norway',
        city: 'Oslo',
        image: miniSlide_Oslo,
    },
    {
        id: 6,
        name: 'Iceland',
        city: 'Selfoss',
        image: miniSlide_Selfoss,
    },
    {
        id: 7,
        name: 'Iceland',
        city: 'Reykjavik',
        image: miniSlide_Reykajavik,
    },
    {
        id: 8,
        name: 'Taiwan',
        city: 'Yuanli',
        image: miniSlide_Yuanli,
    },
    {
        id: 9,
        name: 'Japan',
        city: 'Osaka',
        image: miniSlide_Osaka,
    },
]


function ShortSlideshow() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const isMobile = mobileViewport();

    const [currentSlide, setCurrentSlide] = useState(0)
    const destinationsPerSlide = isMobile ? 4 : 3

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            (prev + 1) % Math.ceil(destinations.length / destinationsPerSlide)
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            (prev - 1 + Math.ceil(destinations.length / destinationsPerSlide)) %
            Math.ceil(destinations.length / destinationsPerSlide)
        )
    }

    const visibleDestinations = destinations.slice(
        currentSlide * destinationsPerSlide,
        (currentSlide + 1) * destinationsPerSlide
    )

    return (
        <>
            <section className='relative grid grid-cols-2 mt-4 sm:mt-0 sm:grid-cols-3 gap-3 px-16'>

                {/* Container for both buttons */}
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center pointer-events-none">
                    {/* Left Button */}
                    <div onClick={prevSlide} className='bg-gray-200 ml-4 shadow-xl h-12 w-12 rounded-full flex justify-center items-center z-10 cursor-pointer pointer-events-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                    </div>

                    {/* Right Button */}
                    <div onClick={nextSlide} className='bg-gray-200 mr-4 shadow-xl h-12 w-12 rounded-full flex justify-center items-center z-10 cursor-pointer pointer-events-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                    </div>
                </div>

                {visibleDestinations.map((dest, index) => (

                    <div
                        key={dest.id}
                        style={{ backgroundImage: `url(${dest.image})` }}
                        className='bg-cover w-auto h-60 rounded-3xl shadow-lg text-white flex flex-col justify-end p-4'>
                        <a className='flex flex-row justify-end gap-2'>
                            {dest.name}, {dest.city}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M360-200v-80h264L160-744l56-56 464 464v-264h80v400H360Z" /></svg>
                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}

export default ShortSlideshow