<<<<<<< HEAD
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
=======
import Navbar from '../components/Navbar';
import '../styles/index.css'; // If you have specific styles for the Home component
import BookingBanner from "../components/BookingBanner"
import BookingSelection from "../components/BookingSelection"

function Home() {
    return (
        <div>
            <Navbar />
            <BookingBanner />
>>>>>>> 74f34eb6a2ab4f954923805979c178f70d37fc18
            <BookingSelection />
        </div>
    );
}

<<<<<<< HEAD
export default FlightsBooking;
=======
export default Home;
>>>>>>> 74f34eb6a2ab4f954923805979c178f70d37fc18
