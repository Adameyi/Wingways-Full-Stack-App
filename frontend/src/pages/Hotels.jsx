import React from 'react'
import HotelHero from '../components/HotelHero'
import HotelDestinations from '../components/HotelDestinations'
import HotelFlights from '../components/HotelFlights'
import Footer from '../components/Footer'

function Hotels() {
    return (
        <>
            <HotelHero />
            <HotelDestinations />
            <HotelFlights />
            <Footer />
        </>
    )
}

export default Hotels