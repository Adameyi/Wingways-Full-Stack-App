import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/index.css'

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
import destination_seoul from '../assets/images/destination_seoul.png';
import destination_sydney from '../assets/images/destination_sydney.png';
import destination_venice from '../assets/images/destination_venice.png';
import destination_welshire from '../assets/images/destination_welshire.png';
import destination_westport from '../assets/images/destination_westport.png';
import destination_wisconsin from '../assets/images/destination_wisconsin.png';

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
    {
        id: 21,
        name: 'South Korea',
        city: 'Seoul',
        hotel: 'The Shilla Seoul',
        image: destination_seoul,
        price: '$3,200',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 22,
        name: 'Australia',
        city: 'Sydney',
        hotel: 'Park Hyatt Sydney',
        image: destination_sydney,
        price: '$3,500',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 23,
        name: 'Italy',
        city: 'Venice',
        hotel: 'Hotel Danieli',
        image: destination_venice,
        price: '$4,100',
        accommodation: { guests: 4, bedrooms: 3, bathrooms: 2 }
    },
    {
        id: 24,
        name: 'United Kingdom',
        city: 'Welshire',
        hotel: 'Lucknam Park Hotel & Spa',
        image: destination_welshire,
        price: '$2,300',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 1 }
    },
    {
        id: 25,
        name: 'Ireland',
        city: 'Westport',
        hotel: 'Knockranny House Hotel',
        image: destination_westport,
        price: '$2,100',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
    {
        id: 26,
        name: 'USA',
        city: 'Wisconsin',
        hotel: 'The American Club',
        image: destination_wisconsin,
        price: '$2,000',
        accommodation: { guests: 3, bedrooms: 2, bathrooms: 2 }
    },
];
function TopDestination() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const [currentSlide, setCurrentSlide] = useState(0)
    const destinationsPerSlide = 5

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
            <section className='relative grid sm:grid-cols-5 gap-4 mt-4 mb-4 p-4'>

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
                        style={{ backgroundImage: `url(${dest.image})` }}
                        className='bg-cover col-span-1 h-[60vh] flex flex-col justify-end rounded-2xl'>
                        <div className='bg-gray-300 h-36 rounded-2xl p-3 flex justify-between'>
                            <div className='flex flex-col justify-between roboto-light'>
                                <div>
                                    <h1 className='roboto-medium'>{dest.city}, {dest.name}</h1>
                                    <p>{dest.hotel}</p>
                                    <p className='roboto-bold'>{dest.price}<span>AUD</span></p>
                                </div>
                                <button className='p-2 w-24 rounded-full bg-[#C3B3B3] text-white text-center'>
                                    Book Trip
                                </button>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div className='bg-[#C3B3B3] h-10 w-12 rounded-full flex justify-center items-center text-white'>
                                    <p>2</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#FFFFFF"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
                                </div>
                                <div className='bg-[#C3B3B3] h-10 w-12 rounded-full flex justify-center items-center text-white'>
                                    <p>2</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M80-200v-240q0-27 11-49t29-39v-112q0-50 35-85t85-35h160q23 0 43 8.5t37 23.5q17-15 37-23.5t43-8.5h160q50 0 85 35t35 85v112q18 17 29 39t11 49v240h-80v-80H160v80H80Zm440-360h240v-80q0-17-11.5-28.5T720-680H560q-17 0-28.5 11.5T520-640v80Zm-320 0h240v-80q0-17-11.5-28.5T400-680H240q-17 0-28.5 11.5T200-640v80Z" /></svg>
                                </div>
                                <div className='bg-[#C3B3B3] h-10 w-12 rounded-full flex justify-center items-center text-white'>
                                    <p>2</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M280-600q-33 0-56.5-23.5T200-680q0-33 23.5-56.5T280-760q33 0 56.5 23.5T360-680q0 33-23.5 56.5T280-600ZM200-80q-17 0-28.5-11.5T160-120q-33 0-56.5-23.5T80-200v-240h120v-30q0-38 26-64t64-26q20 0 37 8t31 22l56 62q8 8 15.5 15t16.5 13h274v-326q0-14-10-24t-24-10q-6 0-11.5 2.5T664-790l-50 50q5 17 2 33.5T604-676L494-788q14-9 30-11.5t32 3.5l50-50q16-16 36.5-25t43.5-9q48 0 81 33t33 81v326h80v240q0 33-23.5 56.5T800-120q0 17-11.5 28.5T760-80H200Z" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default TopDestination