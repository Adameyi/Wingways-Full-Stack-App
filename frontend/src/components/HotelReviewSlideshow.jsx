import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/index.css'
import mobileViewport from './MobileViewport'

// Images
import hotel_review1 from '../assets/images/hotel_review1.png'
import hotel_review2 from '../assets/images/hotel_review2.png'
import hotel_review3 from '../assets/images/hotel_review3.png'
import hotel_review4 from '../assets/images/hotel_review4.png'
import hotel_review5 from '../assets/images/hotel_review5.png'
import hotel_review6 from '../assets/images/hotel_review6.png'

//Social Media Icons
import facebookLogo from '../assets/images/facebook.png';
import youtubeLogo from '../assets/images/youtube.png';
import twitterLogo from '../assets/images/twitter.png';
import instagramLogo from '../assets/images/instagram.png';

const reviews = [
    {
        id: 1,
        firstName: 'Anna',
        lastName: 'Nguyen',
        title: 'A True Escape in Nature',
        rating: 5,
        hotel: 'The Haven Resort',
        location: 'Lake Tahoe',
        city: 'Nevada',
        country: 'USA',
        description: 'Our stay at The Haven Resort was everything we hoped for and more. The breathtaking views of Lake Tahoe from our room made each morning magical. The staff went above and beyond to ensure our comfort, and the cozy cabin-style décor added the perfect touch of rustic charm.',
        image: hotel_review1,
    },
    {
        id: 2,
        firstName: 'Samantha',
        lastName: 'Tori',
        title: 'Oasis in the City That Never Sleeps',
        rating: 5,
        hotel: 'Urban Oasis',
        location: 'Manhattan',
        city: 'New York City',
        country: 'USA',
        description: 'Urban Oasis exceeded our expectations in every way. Located in the heart of Manhattan, it provided the perfect balance between luxury and comfort. Our suite was spacious, with stunning views of the city skyline.',
        image: hotel_review2,
    },
    {
        id: 3,
        firstName: 'Elena',
        lastName: 'Rossi',
        title: 'Florence’s Renaissance Retreat',
        rating: 5,
        hotel: 'Palazzo Firenze',
        location: 'Historic Center',
        city: 'Florence',
        country: 'Italy',
        description: 'Palazzo Firenze was a dream come true. Nestled in the heart of Florence, the hotel offers an authentic experience with modern luxury. The rooftop terrace provided breathtaking views of the Duomo.',
        image: hotel_review3,
    },
    {
        id: 4,
        firstName: 'Luca',
        lastName: 'Gallagher',
        title: 'Nicosia’s Hidden Gem',
        rating: 5,
        hotel: 'Cyprus Cove',
        location: 'Old Town',
        city: 'Nicosia',
        country: 'Cyprus',
        description: 'Cyprus Cove is a true hidden gem in Nicosia. The blend of traditional architecture with modern amenities made our stay unforgettable. The central location allowed us to explore the rich history and vibrant culture of the city with ease.',
        image: hotel_review4,
    },
    {
        id: 5,
        firstName: 'Erik',
        lastName: 'Johansen',
        title: 'Winter Cool Nordic Haven',
        rating: 5,
        hotel: 'Oslo Serenity',
        location: 'Fjordside',
        city: 'Oslo',
        country: 'Norway',
        description: 'Oslo Serenity offered the perfect Nordic escape. The minimalist design of the hotel complemented the natural beauty of Oslo. Our room had panoramic views of the fjords, making it a serene retreat after a day of exploring the city.',
        image: hotel_review5,
    },
    {
        id: 6,
        firstName: 'Floki',
        lastName: 'Bjorns',
        title: 'Icelandic Tranquility',
        rating: 5,
        hotel: 'Selfoss Seclusion',
        location: 'Golden Circle',
        city: 'Selfoss',
        country: 'Iceland',
        description: 'Selfoss Seclusion provided a tranquil escape in the heart of Iceland’s stunning landscapes. The hotel’s modern design blended seamlessly with the natural surroundings. We enjoyed the geothermal spa and the unforgettable Northern Lights.',
        image: hotel_review6,
    }
];


function HotelReviewSlideshow() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const isMobile = mobileViewport();

    const StarIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>
    )

    const ReviewStars = ({ review }) => {
        <div className='flex flex-row space-x-1'>
            {Array.from({ length: review }).map((_, index) => (
                <StarIcon key={index} />
            ))}
        </div>
    }

    const [currentSlide, setCurrentSlide] = useState(0)
    const reviewsPerSlide = isMobile ? 1 : 2

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            (prev + 1) % Math.ceil(reviews.length / reviewsPerSlide)
        )
    }

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            (prev - 1 + Math.ceil(reviews.length / reviewsPerSlide)) %
            Math.ceil(reviews.length / reviewsPerSlide)
        )
    }

    const visibleReviews = reviews.slice(
        currentSlide * reviewsPerSlide,
        (currentSlide + 1) * reviewsPerSlide
    )

    return (
        <>
            <div className='col-span-5 grid grid-cols-2 bg-gray-100 p-6 rounded-lg gap-12'>
                <div className='col-span-2 text-center p-4'>
                    <motion.h2
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ ease: "easeIn", duration: 1 }}
                        className='text-base roboto-medium tracking-[1rem] text-center'>LATEST HOTEL EXPERIENCES</motion.h2>
                    <motion.h1
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ ease: "easeIn", duration: 1 }}
                        className='text-5xl roboto-bold mb-4'>Reviews from our Recent Visitors</motion.h1>
                </div>
                {/* Review A */}
                {visibleReviews.map((dest, index) => (
                    <div
                        key={dest.id}
                        className='relative grid grid-cols-4 col-span-1'>
                        {/* Reviewer Profile Image */}
                        <div
                            style={{
                                backgroundImage: `url(${dest.image})`,
                            }}
                            className='bg-cover rounded-[4rem] col-span-2 h-72 p-6 z-10'>

                        </div>
                        <div className='col-span-2 flex flex-col gap-2 p-4'>
                            {/* Title + Star Rating */}
                            <div className='flex flex-row gap-2 items-center justify-center'>
                                <div className='h-16 w-2 bg-gray-900' />
                                <h1 className='roboto-medium text-3xl'>{dest.title}</h1>
                            </div>
                            {/* Star Rating */}
                            <div className='flex flex-row'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" /></svg>

                            </div>
                        </div>
                        {/* Hotel + Location */}
                        <div className='col-span-1 flex flex-col gap-6 p-4'>
                            <h1 className='roboto-medium text-2xl w-16'>{dest.hotel}</h1>
                            <div>
                                <h2 className='roboto-medium text-xl'>{dest.location}</h2>
                                <p className='roboto-regular text-gray-500'>{dest.city}, {dest.country}</p>
                            </div>
                        </div>
                        {/* Username + Description */}
                        <div className='col-span-3 bg-gray-300 rounded-xl ml-[-2rem] mt-[-8rem]'>
                            <div className='flex flex-col justify-center items-center pt-4'>
                                <h2 className='roboto-medium text-xl'>{dest.firstName} {dest.lastName}</h2>
                                <p className='roboto-regular text-gray-500 leading-none'>Top Reviewer</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-[-0.5rem]" height="80x" viewBox="0 -960 960 960" width="80px" fill="#5f6368"><path d="m228-240 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T458-480L320-240h-92Zm360 0 92-160q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 42.5T818-480L680-240h-92Z" /></svg>
                            </div>
                            <div className='px-6 py-3 roboto-light text-lg'>
                                <p>
                                    {dest.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Review A - End */}

                {/* Social Media + Slideshow Arrows */}
                < div className='col-span-2 flex flex-row justify-between' >
                    <div className='flex flex-row gap-3'>
                        <img src={facebookLogo} alt="Facebook Logo" />
                        <img src={instagramLogo} alt="Facebook Logo" />
                        <img src={twitterLogo} alt="Facebook Logo" />
                        <img src={youtubeLogo} alt="Facebook Logo" />
                    </div>
                    <div className='flex flex-row justify-end gap-1'>
                        <svg
                            onClick={prevSlide}
                            xmlns="http://www.w3.org/2000/svg" height="92px" viewBox="0 -960 960 960" width="92px" fill="#5f6368"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                        <svg
                            onClick={nextSlide}
                            xmlns="http://www.w3.org/2000/svg" height="92px" viewBox="0 -960 960 960" width="92px" fill="#2854C5"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HotelReviewSlideshow