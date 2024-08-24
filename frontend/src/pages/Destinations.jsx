import React from 'react'
import MainSlideshow from '../components/MainSlideshow'

//Static Images
import slideshow_norway from '../assets/images/slideshow_norway.png'
import slideshow_greece from '../assets/images/slideshow_greece.png'
import slideshow_japan from '../assets/images/slideshow_japan.png'
import slideshow_peru from '../assets/images/slideshow_peru.png'
import TravelSection from '../components/TravelSection'
import TravelSpecials from '../components/TravelSpecials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const slides = [
    {
        imageUrl: slideshow_norway,
        caption: 'Where Sky Meets Earth',
        description: 'Embark on an unforgettable travel across the winter landscapes and vivid glow of aurora lights',
        location: 'Norway, Oslo - Northern Lights',
    },
    {
        imageUrl: slideshow_japan,
        caption: 'Timeless Traditions in the Land of Rising Sun',
        description: 'Experience ancient culture and modern marvels in the heart of Japan',
        location: 'Japan, Kyoto',
    },
    {
        imageUrl: slideshow_greece,
        caption: 'Twilight Tranquility in Santorini',
        description: 'Discover whitewashed buildings and azure waters in this Greek paradise',
        location: 'Greece, Santorini',
    },
    {
        imageUrl: slideshow_peru,
        caption: 'Explore the Lost City',
        description: 'Journey through time in the mystical ruins of an ancient Incan citadel',
        location: 'Peru, Machu Picchu',
    },
];


function Destinations() {
    return (
        <>
            <MainSlideshow slides={slides} />
            <TravelSection />
            <Newsletter />
            <TravelSpecials />
            <Footer />
        </>
    )
}

export default Destinations