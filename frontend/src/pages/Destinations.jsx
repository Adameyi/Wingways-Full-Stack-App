import React from 'react'
import MainSlideshow from '../components/MainSlideshow'

//Static Images
import slideshow_norway from '../assets/images/slideshow_norway.png'
import slideshow_greece from '../assets/images/slideshow_greece.png'
import slideshow_japan from '../assets/images/slideshow_japan.png'
import slideshow_peru from '../assets/images/slideshow_peru.png'
import TravelSection from '../components/TravelSection'

const slides = [
    {
        imageUrl: slideshow_norway,
        caption: 'Where Sky Meets Earth',
        location: 'Norway, Olso - Northern Lights',
    },
    {
        imageUrl: slideshow_japan,
        caption: 'Timeless Tranditions in the Land of Rising Sun',
        location: 'Japan, Kyoto - Northern Lights',
    },
    {
        imageUrl: slideshow_greece,
        caption: 'Twilight Tranquility in Santorini',
        location: 'Greece, South Aegean - Northern Lights',
    },
    {
        imageUrl: slideshow_peru,
        caption: 'Explore the Lost City',
        location: 'Peru, Machu Picchu - Northern Lights',
    },
];


function Destinations() {
    return (
        <>
            <MainSlideshow slides={slides} />
            <TravelSection />
        </>
    )
}

export default Destinations