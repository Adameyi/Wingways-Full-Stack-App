import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/index.css'

// Static Images
import option_mountain from '../assets/images/option_mountain.png'
import option_city from '../assets/images/option_city.png'
import option_coastal from '../assets/images/option_coastal.png'
import option_countryside from '../assets/images/option_countryside.png'
import option_cruise from '../assets/images/option_cruise.png'
import option_desert from '../assets/images/option_desert.png'
import option_historical from '../assets/images/option_historical.png'
import option_safari from '../assets/images/option_safari.png'
import option_tropical from '../assets/images/option_tropical.png'
import option_wildlife from '../assets/images/option_wildlife.png'

const destinations = [
    {
        id: 1,
        name: 'Urban Cities',
        image: option_city,
        locations_count: '200',
    },
    {
        id: 2,
        name: 'Mountain Retreats',
        image: option_mountain,
        locations_count: '150',
    },
    {
        id: 3,
        name: 'Coastal Getaways',
        image: option_coastal,
        locations_count: '180',
    },
    {
        id: 4,
        name: 'Countryside Escapes',
        image: option_countryside,
        locations_count: '120',
    },
    {
        id: 5,
        name: 'Cruise Adventures',
        image: option_cruise,
        locations_count: '50',
    },
    {
        id: 6,
        name: 'Desert Explorations',
        image: option_desert,
        locations_count: '80',
    },
    {
        id: 7,
        name: 'Historical Sites',
        image: option_historical,
        locations_count: '250',
    },
    {
        id: 8,
        name: 'Safari Experiences',
        image: option_safari,
        locations_count: '40',
    },
    {
        id: 9,
        name: 'Tropical Paradises',
        image: option_tropical,
        locations_count: '100',
    },
    {
        id: 10,
        name: 'Wildlife Encounters',
        image: option_wildlife,
        locations_count: '60',
    },
]
function OptionThumbnails() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const [currentSlide, setCurrentSlide] = useState(0)
    const destinationsPerSlide = 6

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

        <div className='grid grid-cols-6 p-4 text-center roboto-light'>
            {visibleDestinations.map((dest, index) => (
                <div className='flex flex-col justify-center items-center gap-1'>
                    <div
                        style={{ backgroundImage: `url(${dest.image})` }}
                        className='h-40 w-40 rounded-2xl' />
                    <h1 className='roboto-medium text mt-1'>{dest.name}</h1>
                    <p>{dest.locations_count}+ Locations</p>
                </div>
            ))}
        </div>
    )
}

export default OptionThumbnails