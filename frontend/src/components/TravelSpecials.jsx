import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Import images
import destination_bahrain from '../assets/images/destination_bahrain.png';
import destination_bandung from '../assets/images/destination_bandung.png';
import destination_capetown from '../assets/images/destination_capetown.png';
import destination_cork from '../assets/images/destination_cork.png';
import destination_dublin from '../assets/images/destination_dublin.png';
import destination_florence from '../assets/images/destination_florence.png';
import destination_garni from '../assets/images/destination_garni.png';
import destination_hamburg from '../assets/images/destination_hamburg.png';
import destination_hongkong from '../assets/images/destination_hongkong.png';
import destination_istanbul from '../assets/images/destination_istanbul.png';
import destination_izmir from '../assets/images/destination_izmir.png';
import destination_jakarta from '../assets/images/destination_jakarta.png';
import destination_london from '../assets/images/destination_london.png';
import destination_mumbai from '../assets/images/destination_mumbai.png';
import destination_newyork from '../assets/images/destination_newyork.png';
import destination_paris from '../assets/images/destination_paris.png';
import destination_phuket from '../assets/images/destination_phuket.png';
import destination_queenstown from '../assets/images/destination_queenstown.png';
import destination_reykjavik from '../assets/images/destination_test.png';
import destination_rio from '../assets/images/destination_rio.png';

const destinations = [
    {
        id: 1,
        name: 'Bahrain',
        city: 'Manama',
        hotel: 'Hôtel Plaza Athénée',
        image: destination_bahrain,
        price: '$2,600',
        accommodation: { guests: 3, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 2,
        name: 'Indonesia',
        city: 'Bandung',
        hotel: 'Intercontinental Bandung',
        image: destination_bandung,
        price: '$1,800',
        accommodation: { guests: 2, bedrooms: 2, bathrooms: 1 }
    },
    {
        id: 3,
        name: 'South Africa',
        city: 'Cape Town',
        hotel: 'Belmond Mount Nelson Hotel',
        image: destination_capetown,
        price: '$3,200',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 4,
        name: 'Ireland',
        city: 'Cork',
        hotel: 'Hayfield Manor',
        image: destination_cork,
        price: '$1,500',
        accommodation: { guests: 2, bedrooms: 1, bathrooms: 1 }
    },
    {
        id: 5,
        name: 'Ireland',
        city: 'Dublin',
        hotel: 'The Shelbourne',
        image: destination_dublin,
        price: '$1,700',
        accommodation: { guests: 2, bedrooms: 1, bathrooms: 1 }
    },
    {
        id: 6,
        name: 'Italy',
        city: 'Florence',
        hotel: 'Hotel Savoy',
        image: destination_florence,
        price: '$2,400',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
    {
        id: 7,
        name: 'Armenia',
        city: 'Garni',
        hotel: 'Hotel Vivaldi',
        image: destination_garni,
        price: '$2,100',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 8,
        name: 'Germany',
        city: 'Hamburg',
        hotel: 'Fairmont Hotel Vier',
        image: destination_hamburg,
        price: '$2,900',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 1 }
    },
    {
        id: 9,
        name: 'Hong Kong',
        city: 'Hong Kong',
        hotel: 'The Peninsula Hong Kong',
        image: destination_hongkong,
        price: '$2,300',
        accommodation: { guests: 2, bedrooms: 1, bathrooms: 1 }
    },
    {
        id: 10,
        name: 'Turkey',
        city: 'Istanbul',
        hotel: 'Ciragan Palace Kempinski',
        image: destination_istanbul,
        price: '$3,500',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 11,
        name: 'Turkey',
        city: 'Izmir',
        hotel: 'Swissôtel Grand Efes',
        image: destination_izmir,
        price: '$2,000',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
    {
        id: 12,
        name: 'Indonesia',
        city: 'Jakarta',
        hotel: 'Raffles Jakarta',
        image: destination_jakarta,
        price: '$1,900',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 1 }
    },
    {
        id: 13,
        name: 'United Kingdom',
        city: 'London',
        hotel: 'The Ritz London',
        image: destination_london,
        price: '$3,000',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 14,
        name: 'India',
        city: 'Mumbai',
        hotel: 'The Taj Mahal Palace',
        image: destination_mumbai,
        price: '$1,800',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
    {
        id: 15,
        name: 'USA',
        city: 'New York',
        hotel: 'The Plaza',
        image: destination_newyork,
        price: '$3,600',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 16,
        name: 'France',
        city: 'Paris',
        hotel: 'Le Meurice',
        image: destination_paris,
        price: '$4,000',
        accommodation: { guests: 2, bedrooms: 1, bathrooms: 1 }
    },
    {
        id: 17,
        name: 'Thailand',
        city: 'Phuket',
        hotel: 'Sri Panwa',
        image: destination_phuket,
        price: '$2,200',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
    {
        id: 18,
        name: 'New Zealand',
        city: 'Queenstown',
        hotel: 'Eichardt’s Private Hotel',
        image: destination_queenstown,
        price: '$3,000',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
    {
        id: 19,
        name: 'Iceland',
        city: 'Reykjavik',
        hotel: 'Hotel Borg',
        image: destination_reykjavik,
        price: '$2,700',
        accommodation: { guests: 2, bedrooms: 1, bathrooms: 1 }
    },
    {
        id: 20,
        name: 'Brazil',
        city: 'Rio de Janeiro',
        hotel: 'Copacabana Palace',
        image: destination_rio,
        price: '$2,500',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
];

function TravelSpecials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const secondOrFourthCol = (index) => index % 4 === 1 || index % 4 === 3

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }



    return (
        <div className={`p-12 ${isExpanded ? 'h-[390vh]' : 'h-screen-min'} bg-gray-100 flex flex-col items-center relative `}>

            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ease: "easeIn", duration: 1 }}
                className='text-[1.5rem] roboto-medium tracking-[1rem]'>LOW PRICE DESTINATIONS</motion.h2>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ease: "easeIn", duration: 1 }}
                className='text-[5rem] roboto-bold'>Special Offers</motion.h1>

            {/* Thumbnails */}
            <div className={`grid grid-cols-4 w-full h-screen ${isExpanded ? '' : 'overflow-hidden'} mt-4`}>
                {destinations.map((dest, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${dest.image})` }}
                        className={`col-span-1 bg-cover bg-gray-300 h-[60vh] m-2 flex flex-row justify-end rounded-2xl shadow-lg ${secondOrFourthCol(index) ? 'mt-12' : ''}`}
                    >
                        <div className='py-2 px-4 m-4 h-10 shadow-lg bg-white rounded-full flex flex-end gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
                            {dest.city}
                            <div className='bg-white h-12 w-20'>

                            </div>
                        </div>

                    </div>
                ))}
                {/* View More - Expand Button */}
                <div className={`${isExpanded ? 'bottom-10' : 'top-[115vh]'} absolute left-[45vw] flex justify-center`}>
                    <button
                        onClick={toggleExpand}
                        className='flex bg-[#86bfdb] shadow-lg px-6 py-2 text-[1.5rem] text-white rounded-full hover:bg-blue-500 flex flex-row gap-2'>

                        {isExpanded ? 'View Less' : 'View More'}
                        <svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#FFFFFF"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    </button>
                </div>
                {/* Expand Button End */}
            </div>

            {/* Thumbnails End */}
        </div>

    )
}

export default TravelSpecials