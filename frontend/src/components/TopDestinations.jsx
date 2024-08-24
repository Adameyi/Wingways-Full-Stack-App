import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import '../styles/index.css'

// Import images
import NorwayImage from '../assets/images/window_norway.png'
import TokyoImage from '../assets/images/window_tokyo.png'
import GreeceImage from '../assets/images/window_greece.png'
import ItalyImage from '../assets/images/window_italy.png'
import FranceImage from '../assets/images/window_paris.png'
import AustraliaImage from '../assets/images/window_sydney.png'
import USAImage from '../assets/images/window_newyork.png'
import SpainImage from '../assets/images/window_barcelona.png'
import ThailandImage from '../assets/images/window_bangkok.png'
import BrazilImage from '../assets/images/window_rio.png'
import EgyptImage from '../assets/images/window_cairo.png'
import IndiaImage from '../assets/images/window_agra.png'
import ChinaImage from '../assets/images/window_beijing.png'
import PeruImage from '../assets/images/window_machupicchu.png'
import SouthAfricaImage from '../assets/images/window_capetown.png'
import IcelandImage from '../assets/images/window_reykjavik.png'
import MoroccoImage from '../assets/images/window_marrakech.png'
import NewZealandImage from '../assets/images/window_queenstown.png'
import CanadaImage from '../assets/images/window_vancouver.png'
import PortugalImage from '../assets/images/window_porto.png'

const destinations = [
    { id: 1, name: 'Norway', city: 'Oslo', image: NorwayImage },
    { id: 2, name: 'Japan', city: 'Tokyo', image: TokyoImage },
    { id: 3, name: 'Greece', city: 'Athens', image: GreeceImage },
    { id: 4, name: 'Italy', city: 'Positano', image: ItalyImage },
    { id: 5, name: 'France', city: 'Paris', image: FranceImage },
    { id: 6, name: 'Australia', city: 'Sydney', image: AustraliaImage },
    { id: 7, name: 'USA', city: 'New York', image: USAImage },
    { id: 8, name: 'Spain', city: 'Barcelona', image: SpainImage },
    { id: 9, name: 'Thailand', city: 'Bangkok', image: ThailandImage },
    { id: 10, name: 'Brazil', city: 'Rio de Janeiro', image: BrazilImage },
    { id: 11, name: 'Egypt', city: 'Cairo', image: EgyptImage },
    { id: 12, name: 'India', city: 'Agra', image: IndiaImage },
    { id: 13, name: 'China', city: 'Beijing', image: ChinaImage },
    { id: 14, name: 'Peru', city: 'Machu Picchu', image: PeruImage },
    { id: 15, name: 'South Africa', city: 'Cape Town', image: SouthAfricaImage },
    { id: 16, name: 'Iceland', city: 'Reykjavik', image: IcelandImage },
    { id: 17, name: 'Morocco', city: 'Marrakech', image: MoroccoImage },
    { id: 18, name: 'New Zealand', city: 'Queenstown', image: NewZealandImage },
    { id: 19, name: 'Canada', city: 'Vancouver', image: CanadaImage },
    { id: 20, name: 'Portugal', city: 'Porto', image: PortugalImage },
]

function TopDestination() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const [currentSlide, setCurrentSlide] = useState(0)
    const destinationsPerSlide = 4

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
        <section className='h-screen-min text-center mt-24 '>
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ease: "easeIn", duration: 1 }}
                className='text-[1.5rem] roboto-medium tracking-[1rem]'>POPULAR DESTINATIONS</motion.h2>
            <motion.h1
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ease: "easeIn", duration: 1 }}
                className='text-[5rem] roboto-bold'>Travel Around the World</motion.h1>
            <motion.p
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ ease: "easeIn", duration: 1 }}
            >Explore breathtaking destinations with our curated travel packages. Discover a world of adventure waiting for you.</motion.p>
            {/* Airplane Window Section */}
            <div className='relative container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-10 px-20'>

                {/* Left Button */}
                <div onClick={prevSlide} className='absolute top-48 shadow-xl h-12 w-12 rounded-full flex justify-center items-center z-10 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
                </div>

                {/* Right Button */}
                <div onClick={nextSlide} className='absolute top-48 right-0 shadow-xl h-12 w-12 rounded-full flex justify-center items-center z-10 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                </div>

                {visibleDestinations.map((dest, index) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.75,
                            delay: index * 0.2
                        }}
                        key={dest.id}
                        className='flex flex-col justify-end bg-cover w-[20rem] h-[30rem] rounded-full shadow-lg'
                        style={{ backgroundImage: `url(${dest.image})` }}>
                        <div className='pt-5 w-full h-1/3 bg-white rounded-b-full'>
                            <div className='flex justify-center items-center ml-[40%] mt-[-3.25rem] bg-white rounded-full h-16 w-16'>
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path d="M122.883,61.441c0,16.966-6.877,32.326-17.996,43.445c-11.119,11.118-26.479,17.995-43.446,17.995 c-16.966,0-32.326-6.877-43.445-17.995C6.877,93.768,0,78.407,0,61.441c0-16.967,6.877-32.327,17.996-43.445 C29.115,6.877,44.475,0,61.441,0c16.967,0,32.327,6.877,43.446,17.996C116.006,29.115,122.883,44.475,122.883,61.441 L122.883,61.441z M80.717,71.377c1.783,1.735,4.637,1.695,6.373-0.088c1.734-1.784,1.695-4.637-0.09-6.372L64.48,43.078 l-3.142,3.23l3.146-3.244c-1.791-1.737-4.653-1.693-6.39,0.098c-0.05,0.052-0.099,0.104-0.146,0.158L35.866,64.917 c-1.784,1.735-1.823,4.588-0.088,6.372c1.735,1.783,4.588,1.823,6.372,0.088l19.202-18.779L80.717,71.377L80.717,71.377z M98.496,98.496c9.484-9.482,15.35-22.584,15.35-37.055c0-14.472-5.865-27.573-15.35-37.056 C89.014,14.903,75.912,9.038,61.441,9.038c-14.471,0-27.572,5.865-37.055,15.348C14.903,33.869,9.038,46.97,9.038,61.441 c0,14.471,5.865,27.572,15.349,37.055c9.482,9.483,22.584,15.349,37.055,15.349C75.912,113.845,89.014,107.979,98.496,98.496 L98.496,98.496z" /></g></svg>
                            </div>
                            <h1 className='text-[2rem] roboto-bold'>{dest.name}</h1>
                            <h2 className='text-[1.5rem] roboto-light'>{dest.city}</h2>
                            <p>
                                4.1 <span className='text-yellow-500'>★</span>
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>
            <div className='flex justify-center mt-6'>
                <button className='flex bg-[#86bfdb] px-6 py-2 text-[1.5rem] text-white rounded-full hover:bg-blue-500'>
                    View Destinations
                </button>
            </div>
        </section>
    )
}

export default TopDestination