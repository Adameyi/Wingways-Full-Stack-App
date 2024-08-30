import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

//Images
import globalMap from '../assets/images/globalMap.png'
import HotelReviewSlideshow from './HotelReviewSlideshow'

function HotelFlights() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    return (
        <div className='h-screen-min bg-gray-300 grid grid-cols-5 p-12'>
            <div className='col-span-5 sm:col-span-3 text-center'>
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    className='text-base roboto-medium tracking-[1rem] text-center'>LOW PRICE DESTINATIONS</motion.h2>
                <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                    className='text-4xl roboto-bold mb-4'>Journey Around the World</motion.h1>
                <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                >Explore breathtaking destinations with our curated travel packages. <br></br>Discover a world of adventure waiting for you.</motion.p>
                <div className='mt-6 flex flex-row items-center justify-center gap-4'>
                    <p>Select Your Destination:</p>
                    <button className='bg-white roboto-light shadow-xl px-4 py-2 rounded-lg'>Australia (Sydney)</button>
                </div>
            </div>
            <div className='col-span-5 grid grid-cols-2 sm:col-span-2 gap-4 bg-gray-100 p-4 rounded-lg'>
                {/* Flight from Section */}
                <div className='col-span-1 bg-white rounded-lg p-4 flex flex-col justify-between h-40'>
                    <p className='roboto-light text-xl flex flex-row gap-1'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-120v-80h720v80H120Zm70-200L40-570l96-26 112 94 140-37-207-276 116-31 299 251 170-46q32-9 60.5 7.5T864-585q9 32-7.5 60.5T808-487L190-320Z" /></svg>Departure</p>
                    <div className='text-center roboto-regular'>
                        <h1 className='text-4xl'>SYD</h1>
                        <p className='text-xl'>Australia</p>
                    </div>
                    <p className='text-center text-xl roboto-light'>Sydney Airport</p>
                </div>
                {/* Flights to Section */}
                <div className='col-span-1 bg-white rounded-lg p-4 flex flex-col justify-between h-40'>
                    <p className='roboto-light text-xl'>Arrival</p>
                    <div className='text-center roboto-regular'>
                        <h1 className='text-4xl'>CGK</h1>
                        <p className='text-xl'>Jakarta</p>
                    </div>
                    <p className='text-center text-xl roboto-light'>Jakarta Airport</p>
                </div>
                {/* Flight Seats Section */}
                <div className='col-span-1 bg-white rounded-lg p-4 flex flex-col justify-between h-40'>
                    <p className='roboto-light text-xl'>Seats</p>
                    <div className='text-center roboto-regular'>
                        <h1 className='text-4xl'>3</h1>
                        <p className='text-lg'>Passengers</p>
                    </div>
                    <p className='text-center text-xl roboto-light'>Economy Class</p>
                </div>
                {/* Flight Date Section */}
                <div className='col-span-1 bg-white rounded-lg p-4 flex flex-col justify-between h-40'>
                    <p className='roboto-light text-xl'>Date</p>
                    <div className='text-center roboto-regular'>
                        <h1 className='text-2xl'>AUG</h1>
                        <p className='text-4xl'>20</p>
                    </div>
                    <p className='text-center text-xl roboto-light'>2024</p>
                </div>
                <button className='text-white roboto-regular col-span-2 px-2 py-3 rounded-full shadow-lg bg-blue-800'>
                    Search Flights →
                </button>
            </div>

            {/* Global Map */}
            <div
                style={{
                    backgroundImage: `url(${globalMap})`,
                }}
                className='mt-4 col-span-5 h-[80vh] bg-center bg-cover bg-no-repeat'>
                <div className='bg-blue-900'>

                </div>
            </div>
            {/* Reviews Section */}
            <HotelReviewSlideshow />
        </div>
    )
}

export default HotelFlights