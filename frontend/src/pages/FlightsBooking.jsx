import Navbar from '../components/Navbar'
import '../styles/index.css'
import BookingBanner from "../components/BookingBanner"
import BookingSelection from "../components/BookingSelection"
import React from 'react'
import { useLocation } from 'react-router-dom'

function FlightsBooking() {
    const location = useLocation();
    const { from, to, tripType, tripClass, fromIataCode, toIataCode, departureDate, returnDate } = location.state || {};
    return (
        <div>
            <Navbar />
            <BookingBanner 
                            from={from} 
                            to={to} 
                            fromIataCode={fromIataCode}
                            toIataCode={toIataCode}
                            tripType={tripType} 
                            tripClass={tripClass} 
                            departureDate={departureDate} 
                            returnDate={returnDate} 
            />
            <BookingSelection />
        </div>
    );
}

export default FlightsBooking;